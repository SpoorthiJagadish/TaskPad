import express from "express";
import {
  create,
  del,
  findAll,
  findOne,
  update,
} from "../controller/note.controller.js";

const router = express.Router();

// Create a new Note
router.post("/notes", create);

// Retrieve all Notes
router.get("/notes", findAll);

// Retrieve a single Note with noteId
router.get("/notes/:noteId", findOne);

// Update a Note with noteId
router.put("/notes/:noteId", update);

// Delete a Note with noteId
router.delete("/notes/:noteId", del);

export default router;
