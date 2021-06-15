const { user } = require("../../models");
const joi = require("joi");
const bcrypt = require("bcrypt");

// Register
exports.register = async (req, res) => {
  try {
    const data = req.body;
    const { email, password } = req.body;

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
        message: `Email: ${email} already registered`,
        dataFindEmail: findEmail,
      });
    }
    // end check "email user" is exist

    // bcrypt password
    const hashStrenght = 10;
    const hashedPassword = await bcrypt.hash(password, hashStrenght);
    // end bcrypt password

    // imput data to database
    const dataUser = await user.create({
      ...data,
      password: hashedPassword,
    });
    //  end imput data to database

    res.send({
      status: "Respon Success",
      message: "Validate input ok",
      data: {
        email: dataUser.email,
        username: dataUser.username,
        password: dataUser.password,
      },
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
