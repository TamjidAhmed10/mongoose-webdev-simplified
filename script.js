const mongoose = require("mongoose");
const User = require("./Users");
mongoose.connect("mongodb://localhost:27017/test");
const run = async () => {
  try {
    const user = await User.create({
      name: "Tamjid Ahmed",
      age: 99,
      address: { city: "Dhaka", country: "BD" },
      hobbies: ["writing", "eating", "kennel"],
      email: "Tamjid@gmail.com",
    });
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};
run();
