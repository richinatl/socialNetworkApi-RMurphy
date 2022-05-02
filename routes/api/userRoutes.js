const router = require("express").Router();

const {
  createUser,
  getAllUsers,
  getUserbyId,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers");

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserbyId).put(updateUser).delete(deleteUser);
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
