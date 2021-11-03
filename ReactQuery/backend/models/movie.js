const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    title: { type: String, trim: true, required: true },
    description: { type: String },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model('Movie', schema);
