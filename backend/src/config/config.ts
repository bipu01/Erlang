import dotenv from "dotenv"

dotenv.config()

const config = {
    mongoURI: process.env["MONGO_URI"] ??"",
    port:process.env["PORT"],
    database:process.env["DATABASE"]??"",
    localMongoURI:process.env["LOCAL_MONGO_URI"]??""
}

export default config