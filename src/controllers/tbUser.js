const { user, ktp, product } = require("../../models");

// GetUsers
exports.getUsers = async (req, res) => {
  try {
    const findDatas = await user.findAll({
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
// EndGetUsers

// DetailData
exports.detailUser = async (req, res) => {
  try {
    const id = req.params.id;
    const findData = await user.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: {
        id: id,
      },
    });
    if (!findData) {
      return res.send({
        status: "Respon Failed",
        message: `Data with id:${id} not found`,
      });
    }
    res.send({
      status: "Respon success",
      message: "Test data Successfully get",
      viewData: findData,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Respon failed",
      message: "View Test data Failed!",
    });
  }
};
// EndDetailData

// AddData
exports.addUser = async (req, res) => {
  try {
    const { body } = req;

    await user.create(body); //-->this is sintak add data

    const findDatas = await user.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "Respon success",
      message: "Add data Successfully",
      viewDataWillAdd: body,
      viewDatasAfterAdd: findDatas,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Respon failed",
      message: "Add data Failed!",
    });
  }
};
// EndAddData

// UpdateData
exports.updateUser = async (req, res) => {
  try {
    // find data with id
    const id = req.params.id;
    const findData = await user.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: {
        id: id,
      },
    });

    // check data with id
    if (!findData) {
      return res.send({
        status: "Respon failed",
        message: `Data with id:${id} not found!`,
      });
    }

    // this is sintak update data with id
    const { body } = req;
    await user.update(body, {
      where: {
        id: id,
      },
    });

    // find all data after apdate
    const findDatas = await user.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    // view respon success
    res.send({
      status: "Respon success",
      message: "Update data Successfully",
      viewDataWillUpdate: findData,
      viewDatasAfterUpdate: findDatas,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Respon failed",
      message: "Update Test data Failed!",
    });
  }
};
// EndUpdateData

// deleteData
exports.deleteUser = async (req, res) => {
  try {
    // find data with id
    const id = req.params.id;
    const findData = await user.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: {
        id: id,
      },
    });

    // cek data
    if (!findData) {
      return res.send({
        status: "Respon Failed",
        message: `Data with id:${id} not found`,
      });
    }

    // this is sintak delete data with id
    await user.destroy({
      where: {
        id: id,
      },
    });

    // find all data after delete
    const findDatas = await user.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    // respon delete success
    res.send({
      status: "Respon success",
      message: "Delete data Successfully!",
      viewDataWillDelete: findData,
      viewDatasAfterDelete: findDatas,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Respon failed",
      message: "Delete data Failed!",
    });
  }
};
// EndDeleteData

// GetUsersRelationToKTP
exports.getUsersToKTP = async (req, res) => {
  try {
    const findDatas = await user.findAll({
      include: {
        model: ktp,
        as: "ktp",
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

// GetUsersRelationToProduct
exports.getUsersToProduct = async (req, res) => {
  try {
    const findDatas = await user.findAll({
      include: {
        model: product,
        as: "product",
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
