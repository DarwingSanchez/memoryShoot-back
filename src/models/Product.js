const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    productName: { type: String, required: true },
    numeroFotos: { type: Number, required: true },
    materiales: { type: String, required: true },
    phone: { type: String, required: true },
    permissions: {
      admin: { type: Boolean, required: false },
      client: { type: Boolean, required: true },
      verified: { type: Boolean, required: false },
    },
    created: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
