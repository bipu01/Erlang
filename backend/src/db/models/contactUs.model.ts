import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema(
    {
        message: {
            type: String,
            required:true
        }
    },
    { timestamps: true }
);

const ContactUs = mongoose.model("ContactUs", contactUsSchema);

export default ContactUs;
