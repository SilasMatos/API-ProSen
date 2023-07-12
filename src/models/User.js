const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  nameUser: String,
  email: String,
  office: String,
  telephone: String,
  password: String,
  authAdmin: {
    type: Boolean,
    default: false,
  },
  record: String,
  graduation: String,
  LevelofEducation: String,
  src: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    key: {
      type: String,
      required: true
    },
    url: {
      type: String,

      default: ""
    }
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
