const { Schema, model, Mongoose } = require('mongoose');

const Role = Mongoose.model("Role", new mongoose.Schema({ name: String }));

module.exports = Role;