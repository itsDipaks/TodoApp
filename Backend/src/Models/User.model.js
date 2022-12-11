const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String,required: true},
  email: { type: String,required: true},
  password: { type: String,required: true},
});

const UserModel = mongoose.model("userdata", UserSchema);


module.exports = {UserModel};
