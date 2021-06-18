// ipmort express
const express = require("express");
const router = express.Router();

// Auth
const { register, login } = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);
// endAuth

//test router
const {
  getTestDatas,
  getTestData,
  postTestData,
  patchTestData,
  deleteTestData,
} = require("../controllers/testData");

router.get("/testdatas", getTestDatas);
router.get("/testdata/:id", getTestData);
router.post("/testdatas/", postTestData);
router.patch("/testdata/:id", patchTestData);
router.delete("/testdata/:id", deleteTestData);
// end test router

//tb_test router
const {
  tests,
  detailTest,
  addTest,
  updateTest,
  deleteTest,
} = require("../controllers/tbTest");

router.get("/test", tests);
router.get("/detailtest/:id", detailTest);
router.post("/addtest", addTest);
router.patch("/updatetest/:id", updateTest);
router.delete("/deletetest/:id", deleteTest);
// end tb_test router

//tbUser router
const {
  getUsers,
  detailUser,
  addUser,
  updateUser,
  deleteUser,
  getUsersToKTP,
  getUsersToProduct,
} = require("../controllers/tbUser");

router.get("/users", getUsers);
router.get("/detailuser/:id", detailUser);
router.post("/adduser", addUser);
router.patch("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);
router.get("/usertoktp", getUsersToKTP);
router.get("/usertoproduct", getUsersToProduct);
// end tbUser router

//tbKTP router
const { getKTPToUser } = require("../controllers/tbKtp");

router.get("/ktptouser", getKTPToUser);
// end tbKTP router

// tbProduct router
const { getProductToUser } = require("../controllers/tbProduct");

router.get("/producttouser", getProductToUser);
// end tbProduct router

//make tbTransaksi router
const {
  getUserTransaction,
  getUserOrder,
} = require("../controllers/tbTransaction");

router.get("/usertransaction", getUserTransaction);
router.get("/userorder", getUserOrder);
// end make tbTransaksi router

// middleware auth
const { authMiddle } = require("../middleware/authMiddle");

router.get("/usertoproductmiddleaut", authMiddle, getUsersToProduct);
// middleware auth

module.exports = router;
