import mongoose from "mongoose";

const pollSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },

    options: [
      
         { type: String, required: true },
      
    ],

    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Poll", pollSchema);
