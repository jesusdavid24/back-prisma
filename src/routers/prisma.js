const router = require("express").Router();
const {
  hanldlerGetAllUser,
  handleCreateUser,
  handleUpdateUser,
  handleDeleteUser
} = require('../controllers/prisma')

router.get("/", hanldlerGetAllUser);
router.post("/createUser", handleCreateUser);
router.put("/updateUser", handleUpdateUser);
router.delete("/deleteUser", handleDeleteUser);

module.exports = router;