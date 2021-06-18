const jwt = require("jsonwebtoken");

exports.authMiddle = (req, res, next) => {
  try {
    let header = req.header("Authorization");

    if (!header) {
      return res.send({
        status: "Failed",
        message: "Access Denied",
      });
    }

    let token = header.replace("Bearer ", "");

    const secretKey = "jonheri";

    const verified = jwt.verify(token, secretKey);

    // if (!verified) {
    //   return res.send({
    //     status: "Failed",
    //     message: "Verified Failed",
    //   });
    // }

    req.idUser = verified.id;

    next();

    // res.send({
    //   Token: token,
    //   Header: header,
    //   Verified: verified,
    // });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Respon failed",
      message: "Login Failed!" + error,
    });
  }
};
