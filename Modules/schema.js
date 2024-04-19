import mongoose from "mongoose";
const modulesSchema = new mongoose.Schema({
    course: String,
    description: String,
    id: String,
    lessons : Array,
    name: String,
}, { collection: "modules" });
export default modulesSchema;