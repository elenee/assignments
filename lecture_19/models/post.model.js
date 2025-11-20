const { default: mongoose } = require("mongoose");

const posySchema = new mongoose.Schema(
  {
    title: { type: String },
    desc: { type: String },

    user: { type: mongoose.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", posySchema);
