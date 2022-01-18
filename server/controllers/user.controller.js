'use strict';

const User = require('../models/user.model');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const login = (req, res) => {

//   const { username, password } = req.body;
//   let result = {};

//   //Find the user object that matches the username
//     User.findOne({ username: req.body.username}, (err, user) => {
//       if(err) { console.log("error:", err) }
  
//       //Compare plaintext password with hashed password in database
//       bcrypt.compare(req.body.password, user.password, (err, match) => {
//         if(err) { console.log("error:", err) }        
        
//         //If passwords match, create a JWT
//         if(match){
//           console.log("User has successfully logged in!");

//           const payload = { user: user.toJSON() };
//           const secret = "temorary secret"; // const secret = process.env.JWT_SECRET;
//           const options = { expiresIn: '2d' };
//           const token = jwt.sign(payload, secret, options);

//           result.token = token;
//           result.result = user;
//         } else {
//           result.error = "Error authenticating user";
//           console.log("Either username or password is incorrect");
//         }
//         // res.json(user);
//         res.send(result);
//       });
//     })
// };

// const validateToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   let result;

//   if(authHeader) {
//     const token = req.headers.authorization.split(' ')[1]; //This is our Bearer <token>
//     const options = { expiresIn: '2d' };

//     try {
//       //Verify token hasn't expired yet
//       result = jwt.verify(token, 'temporary secret', options);

//       //Pass decoded token back to the request object
//       req.decoded = result;
//       next();
//     } catch (err) {
//       throw new Error(err);
//     }
//   } else {
//     result = { error: 'Authentication error. Token required!'};
//     res.send(result);
//   }
// }

// const logout = (req, res) => {
//   console.log("Logging out user");
//   return;
// }

// const registerUser = (req, res) => {
//   User.create(req.body)
//   .then((data) => {
//     console.log('New user created!');
//     res.status(201).json(data);
//   })
//   .catch((err) => {
//     if (err.name === 'ValidationError') {
//       console.error('Error Validating!', err);
//       res.status(422).json(err);
//     } else {
//       console.error(err);
//       res.status(500).json(err);
//     }
//   });
// };

// const readData = (req, res) => {
//   User.find()
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json(err);
//     });
// };

// const getUserInfo = (req, res) => {
//   User.findOne({
//     username: req.params.username
//   })
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json(err);
//     });
// };

// const updateData = (req, res) => {
//   User.findByIdAndUpdate(req.params.id, req.body, {
//     useFindAndModify: false,
//     new: true,
//   })
//     .then((data) => {
//       console.log('User updated!');
//       res.status(201).json(data);
//     })
//     .catch((err) => {
//       if (err.name === 'ValidationError') {
//         console.error('Error Validating!', err);
//         res.status(422).json(err);
//       } else {
//         console.error(err);
//         res.status(500).json(err);
//       }
//     });
// };

// const deleteData = (req, res) => {
//   User.findById(req.params.id)
//     .then((data) => {
//       if (!data) {
//         throw new Error('User not available');
//       }
//       return data.remove();
//     })
//     .then((data) => {
//       console.log('User removed!');
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json(err);
//     });
// };

//Access permissions

const allAccess = (req, res) => {
  User.find()
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);
  });
  // res.status(200).send("Public Content");
};

const userBoard = (req, res) => {
  res.status(200).send("User Content");
};

const adminBoard = (req, res) => {
  res.status(200).send("Admin Content");
}

const moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content");
}

module.exports = {
  // login,
  // logout,
  // validateToken,
  // registerUser,
  // getUserInfo,
  // readData,
  // updateData,
  // deleteData,
  allAccess,
  userBoard,
  adminBoard,
  moderatorBoard,
};
