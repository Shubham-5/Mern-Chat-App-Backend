const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { tyepe: String },
    isGroupChat: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
