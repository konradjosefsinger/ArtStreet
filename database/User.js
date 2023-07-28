const mongoose = require('./index.js');

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  }
);

// const newUser = new User({
//   email: email,
//   name: name,
//   password: password,
// });

const User = mongoose.model('User', userSchema);

module.exports = User;