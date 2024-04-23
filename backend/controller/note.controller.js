import Note from "../models/note.model.js";

// Create and Save a new Note
export const create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }

  // Create a Note
  const note = new Note({
    title: req.body.title || "Untitled Note",
    content: req.body.content,
  });

  // Save Note in the database
  note
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Note.",
      });
    });
};

// Retrieve and return all notes from the database.
export const findAll = (req, res) => {
  Note.find()
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      });
    });
};

// Find a single note with a noteId
export const findOne = (req, res) => {
  Note.findById(req.params.noteId)
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      res.send(note);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving note with id " + req.params.noteId,
      });
    });
};

// Update a note identified by the noteId in the request
export const update = (req, res) => {
  // Validate Request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }

  // Find note and update it with the request body
  Note.findByIdAndUpdate(
    req.params.noteId,
    {
      title: req.body.title || "Untitled Note",
      content: req.body.content,
    },
    { new: true }
  )
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      res.send(note);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        message: "Error updating note with id " + req.params.noteId,
      });
    });
};

// Delete a note with the specified noteId in the request
export const del = (req, res) => {
  Note.findByIdAndDelete(req.params.noteId)
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      res.send({ message: "Note deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        message: "Could not delete note with id " + req.params.noteId,
      });
    });
};

// Find a single note with a title
export const findOneByTitle = (req, res) => {
  // const title = req.query.title; // Extract title from query parameters
  const title = req.params.title;
  // If title is not provided, return a bad request response
  if (!title) {
    return res.status(400).send({
      message: "Title parameter is required for searching notes by title.",
    });
  }

  Note.findOne({ title: { $regex: title, $options: "i" } }) // Case-insensitive regex search for title
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not found with title " + title,
        });
      }
      res.send(note);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving note with title " + title,
      });
    });
};
