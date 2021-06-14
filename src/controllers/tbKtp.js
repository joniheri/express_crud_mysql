const { user, ktp } = require("../../models");

// GetUsersRelationToKTP
exports.getKTPToUser = async (req, res) => {
  try {
    const findDatas = await ktp.findAll({
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
      message: "Test data Successfully get",
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
// EndGetUsersRelationToKTP
