import app from "./app";
import env from "./util/validateEnv"
import mongoose from "mongoose"

mongoose.set('strictQuery', true);

const port = env.PORT

mongoose.connect(env.MONGO_URI)
    .then(() => {
        console.log("Mongoose connected")
        app.listen(port, () => {
            console.log("Server running on port: " + port)
        })
    })
    .catch(console.error)

