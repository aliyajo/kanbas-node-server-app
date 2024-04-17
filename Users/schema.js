// This is the schema file, structure of the data being stored, for the users collection

import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: String, 
    lastName: String,
    email: String,
    dob: Date,
    role: {
        type: String,
        enum: ['STUDENT', 'FACULTY', 'ADMIN', 'USER'],
        default: 'USER',},
    },
    {collection: 'users'}
);
export default userSchema;