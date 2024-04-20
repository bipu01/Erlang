import dotenv from "dotenv"

dotenv.config()

const config = {
    mongoURI: process.env["MONGO_URI"] ??"",
    port:process.env["PORT"]?? 3000
}

export default config