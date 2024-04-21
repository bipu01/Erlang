import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema(
    {
        message: {
            type: String
        }
    },
    { timestamps: true }
);

const ContactUs = mongoose.model("ContactUs", contactUsSchema);

export default ContactUs;
