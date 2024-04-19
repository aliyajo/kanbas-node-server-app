import mongoose from "mongoose";
import modulesSchema from "./schema.js";
const model = mongoose.model("ModuleModel", modulesSchema);
export default model;
