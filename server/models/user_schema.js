// const { Schema, model, Mongoose } = require('mongoose');
const mongoose = require("mongoose");
const { Schema } = require ('mongoose');

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
    roles: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Role"
      }
    ]
  },
  { timestamps: true },
);

module.exports = new mongoose.model('users', userSchema);

// module.exports = model('users', userSchema);

// const mongoose = require("mongoose");

// const User = mongoose.model("User", new mongoose.Schema({
//     username: {
//       type: String,
//       required: [true, 'username field is required'],
//     },
//     password: {
//       type: String,
//       required: [true, 'password field is required'],
//     },
//     roles: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Role"
//         }
//     ]
// }));

// module.exports = User;