const { user } = require("../../models");
const joi = require("joi");

// Register
exports.register = async (req, res) => {
  try {
    const data = req.body;

    const schema = joi.object({
      username: joi.string().min(6).required(),
      email: joi.string().email().min(8).required(),
      password: joi.string().min(6).required(),
    });

    const { error } = schema.validate(data);

    if (error) {
      res.send({
        status: "Validate Failed",
        message: error.details[0].message,
      });
    }

    res.send({
      status: "Respon Success",
      message: "Validate input ok",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Respon failed",
      message: "View Test data Failed!",
    });
  }
};
// EndRegister
