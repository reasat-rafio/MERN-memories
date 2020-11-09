import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
   "mongodb+srv://raf:1234@testcluster1.s4ly9.mongodb.net/memories?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
   .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
   })
   .then((res) =>
      app.listen(PORT, console.log(`Server running on port ${PORT}`))
   )
   .catch((err) => console.log(err.message));
