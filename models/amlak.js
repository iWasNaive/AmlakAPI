const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["sale", "rent", "deposit"],
      required: true,
    },

    sale_price: {
      type: Number,
      required: () => {
        return this.type === "sale";
      },
    },

    rent_price: {
      type: Number,
      required: () => {
        return this.type === "rent";
      },
    },

    deposit_price: {
      type: Number,
      required: () => {
        return this.type === "deposit";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Melk", schema);
