import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
  },
  // createdAt, updatedAt
  { timestamps: true }
);

const Note = mongoose.model("note", noteSchema);

export default Note;
