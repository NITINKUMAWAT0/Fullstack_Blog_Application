import mongoose, { Schema } from "mongoose";

const viewSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "Users" },
    post: { type: Schema.Types.ObjectId, ref: "Posts" },
  },
  { timestamps: true }
);

const Views = mongoose.model("Views", viewSchema);

export default Views;