// This is the mongoose model for the users collection
import mongoose from 'mongoose';
import schema from './schema.js';
const model = mongoose.model('UserModel', schema);
export default model;