const amlakModel = require("./../models/amlak");

exports.Create = async (req, res) => {
  try {
    const { title, type, price } = req.body;

    if (!["sale", "rent", "deposit"].includes(type)) {
      return res.status(400).json({
        message: "Choose type: sale, rent, deposit",
      });
    }

    let data = { title, type };

    if (type === "sale") {
      data.sale_price = price;
    } else if (type === "rent") {
      data.rent_price = price;
    } else if (type === "deposit") {
      data.deposit_price = price;
    }

    const result = await amlakModel.create(data);

    return res.status(201).json({
      message: "Melk created successfully",
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      message: "server error",
      error: err.message,
    });
  }

  //   if (type === "sale") {
  //     await amlakModel.create({
  //       title,
  //       type,
  //       sale_price: price,
  //     });
  //   } else if (type === "rent") {
  //     await amlakModel.create({
  //       title,
  //       type,
  //       rent_price: price,
  //     });
  //   } else if (type === "deposit") {
  //     await amlakModel.create({
  //       title,
  //       type,
  //       deposit_price: price,
  //     });
  //   } else {
  //     return res.status(400).json({
  //       message: "Choose Type => (sale, rent, deposit)",
  //     });
  //   }

  //   return res.status(201).json({
  //     message: "Property created successfully",
  //     data: result,
  //   });
};

exports.getAll = async (req, res) => {
  const result = await amlakModel.find({}).lean();
  res.send(result);
};
