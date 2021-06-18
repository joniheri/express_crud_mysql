const { user, product } = require("../../models");

// GetProductToUser
exports.getProductToUser = async (req, res) => {
  try {
    const findDatas = await product.findAll({
      include: {
        model: user,
        as: "user",
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
      message: "Get data Successfully",
      viewData: findDatas,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Respon failed",
      message: "View Test data Failed!",
    });
  }
};
// EndGetGetProductToUser
