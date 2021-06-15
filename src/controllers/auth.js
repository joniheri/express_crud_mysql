const { user } = require("../../models");
const joi = require("joi");

// Register
exports.register = async (req, res) => {
  try {
    const data = req.body;
    const { email } = req.body;

    const schema = joi.object({
      username: joi.string().min(6).required(),
      email: joi.string().email().min(8).required(),
      password: joi.string().min(6).required(),
    });

    const { error } = schema.validate(data);

    if (error) {
      return res.send({
        status: "Validate Failed",
        message: error.details[0].message,
      });
    }

    // check "email user" is exist
    const findEmail = await user.findOne({
      where: {
        email: email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (findEmail) {
      return res.send({
        status: "Failed",
        message: `Rgister with email : ${email} already`,
        dataFindEmail: findEmail,
      });
    }
    // end check "email user" is exist

    res.send({
      status: "Respon Success",
      message: "Validate input ok",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Respon failed",
      message: "Register Failed!" + error,
    });
  }
};
// EndRegister
