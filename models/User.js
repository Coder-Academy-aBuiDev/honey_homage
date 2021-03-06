const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({

  accessToken: {
    type: String
  },

  username: { 
    type: String,
    trim: true,
    unique: true,
    required: "Username is required"
  },

  email: { 
    type: String,
    unique: true,
    validate: {
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    }
  },

  firstName: { 
    type: String,
    trim: true,
  },

  lastName: { 
    type: String,
    trim: true,
  },

  orders: Array
  
});

const User = mongoose.model("User", UserSchema);

module.exports = User;