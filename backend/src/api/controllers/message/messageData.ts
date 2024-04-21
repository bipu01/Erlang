import ContactUs from "../../../db/models/contactUs.model";
import { Response, Request } from "express";

const postContactUsMessage = async (req: Request, res: Response) => {
    const { message } = req.body;

    if (message) { // Check if contactUsMessage is present
        try {
            const newContactUsMessage = new ContactUs({
                message,
            })
            console.log(message)
            await newContactUsMessage.save()
            res.status(200).json(newContactUsMessage)
        } catch (error) {
            // Sending error message
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        // Sending error if message is not present
        res.status(400).json({ error: "Message is required" });
    }
};

export default postContactUsMessage;
