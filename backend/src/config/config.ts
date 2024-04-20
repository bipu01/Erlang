import dotenv from "dotenv"

dotenv.config()

const config = {
    mongoURI: process.env["MONGO_URI"] ??"",
    port:process.env["PORT"],
    database:process.env["DATABASE"]??""
}

export default config