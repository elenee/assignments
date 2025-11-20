const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: { type: String },
    email: { type: String },
    password: { type: String },

    posts: { type: [mongoose.Schema.Types.ObjectId], ref: "post" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
