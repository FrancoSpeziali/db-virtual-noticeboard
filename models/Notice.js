import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
  text: String, // String datatype
  author: String, // String datatype
  date: Date, // Date datatype
});

// The model is...
// the connection to the collection
// without the model, we can't:
// read the data in the collection
// write data to the collection
const Notice = mongoose.model("Notice", noticeSchema);

export default Notice;
