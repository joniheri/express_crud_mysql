const { user, product, transaction } = require("../../models");

// GetProductToUser
exports.getUserTransaction = async (req, res) => {
  try {
    const findDatas = await user.findAll({
      include: {
        model: product,
        as: "products",
        through: {
          model: transaction,
          as: "transaction",
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "Respon success",
      message: "Get data user transaction Successfully",
      viewData: findDatas,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Respon failed",
      message: "Get data user transaction Failed!",
    });
  }
};
// EndGetGetProductToUser
