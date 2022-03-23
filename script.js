const mongoose = require("mongoose");
const User = require("./Users");
mongoose.connect("mongodb://localhost:27017/test", () => {
  console.log("connected");
});
const run = async () => {
  const user = await User.create({ name: "Tamjid", age: 23 });
  console.log(user);
};
run();
