require('dotenv').config()
import express, { Express } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";

const app: Express = express()


const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())
app.use(todoRoutes)

const uri: string = `mongodb+srv://undreamtmayhem:${process.env.MONGO_PASSWORD}@publuv.hlhno.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  });