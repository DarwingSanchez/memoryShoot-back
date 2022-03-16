const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String, required: false },
    permissions: {
      admin: { type: Boolean, required: false },
      client: { type: Boolean, required: true },
      verified: { type: Boolean, required: false },
    },
    created: { type: String, required: true },
    images: {
      type: Array,
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
