const { Schema } = require("mongoose");

const UserinfoSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true, // no duplicate emails
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    minlength: 8,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = { UserinfoSchema };
