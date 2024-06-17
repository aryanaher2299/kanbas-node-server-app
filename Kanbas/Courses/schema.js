import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    number: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    imgsrc: { type: String },
    department: { type: String },
    credits: { type: Number },
    description: { type: String },
}, { collection: "courses" });

export default courseSchema;
