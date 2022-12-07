const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  titulo: { type: String, required: true, trim: true },
  tarea: { type: String, trim: true },
  fecha: { type: Date, trim: true }
});

const model = mongoose.model("Task", schema);

module.exports = {
  schema,
  model,
};
