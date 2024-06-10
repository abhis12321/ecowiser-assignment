import mongoose from "mongoose"


if (mongoose.connection.readyState <= 0) {
    mongoose.connect(process.env.MONGO_URI);
}

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter title'],
    },
    tagline: {
        type: String,
        required: [true, "Please enter a tagline"]
    },
    body: {
        type: String,
        required: [true, 'Please enter the body of the Note'],
    },
});


export default mongoose.models.Notes || mongoose.model("Notes" , noteSchema);