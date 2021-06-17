// ipmort express
const express = require("express");
const router = express.Router();

// Auth
const { register, login } = require("../controllers/auth");
router.post("/register", register);
router.post("/login", login);
// endAuth

//import testData router/url
const {
  getTestDatas,
  getTestData,
  postTestData,
  patchTestData,
  deleteTestData,
} = require("../controllers/testData");

// make test router
router.get("/testdatas", getTestDatas);
router.get("/testdata/:id", getTestData);
router.post("/testdatas/", postTestData);
router.patch("/testdata/:id", patchTestData);
router.delete("/testdata/:id", deleteTestData);
// end make test router

//import tb_test router/url
const {
  tests,
  detailTest,
  addTest,
  updateTest,
  deleteTest,
} = require("../controllers/tbTest");

// make tb_test router
router.get("/test", tests);
router.get("/detailtest/:id", detailTest);
router.post("/addtest", addTest);
router.patch("/updatetest/:id", updateTest);
router.delete("/deletetest/:id", deleteTest);
// end make tb_test router

//import tbUser router/url
const {
  getUsers,
  detailUser,
  addUser,
  updateUser,
  deleteUser,
  getUsersToKTP,
  getUsersToProduct,
} = require("../controllers/tbUser");

// make tbUser router
router.get("/users", getUsers);
router.get("/detailuser/:id", detailUser);
router.post("/adduser", addUser);
router.patch("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);
router.get("/usertoktp", getUsersToKTP);
router.get("/usertoproduct", getUsersToProduct);
// end make tbUser router

//import tbKTP router/url
const { getKTPToUser } = require("../controllers/tbKtp");

// make tbKTP router
router.get("/ktptouser", getKTPToUser);
// end make tbKTP router

//import tbProduct router/url
const { getProductToUser } = require("../controllers/tbProduct");

// make tbProduct router
router.get("/producttouser", getProductToUser);
// end make tbProduct router

//import tbTransaksi router/url
const {
  getUserTransaction,
  getUserOrder,
} = require("../controllers/tbTransaction");

// make tbTransaksi router
router.get("/usertransaction", getUserTransaction);
router.get("/userorder", getUserOrder);
// end make tbTransaksi router

module.exports = router;
