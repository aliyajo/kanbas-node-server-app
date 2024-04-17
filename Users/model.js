// This implemented the model for the user collection
import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("UserModel", schema);
export default model;