import mongoose from "mongoose";
import { MONGODB_URI } from "./config";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then((db) => console.log("Db is connected"))
  .catch((err) => console.error(err));
