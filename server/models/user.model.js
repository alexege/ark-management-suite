const mongoose = require("mongoose");
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'username field is required'],
    },
    email: {
      type: String,
      required: [true, 'email field is required'],
    },
    password: {
      type: String,
      required: [true, 'password field is required'],
    },
    roles: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Role"
      }
    ]
  },
  { timestamps: true },
);

module.exports = new model('users', userSchema);