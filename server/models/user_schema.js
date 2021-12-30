const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'username field is required'],
    },
    password: {
      type: String,
      required: [true, 'password field is required'],
    },
  },
  { timestamps: true },
);

module.exports = model('users', userSchema);
