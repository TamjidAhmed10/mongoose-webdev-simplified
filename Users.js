const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  city: String,
  country: String,
});
const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      validator: (v) => {
        return v % 2 === 0;
      },
      message: (props) => {
        return `${props.value} is not a even Number`;
      },
    },
  },
  email: { type: String, required: true, lowercase: true },
  createdAt: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
  updatedAt: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
  bestFriend: mongoose.SchemaTypes.ObjectId,
  address: addressSchema,
  hobbies: [String],
});

module.exports = mongoose.model("User", userSchema);
