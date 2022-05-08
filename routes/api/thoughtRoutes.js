const router = require("express").Router();

const {
  createThought,
  getAllThought,
  getThoughtbyId,
  deleteThought,
  updateThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getAllThought);
router
  .route("/:id")
  .get(getThoughtbyId)
  .put(updateThought)
  .delete(deleteThought);
router.route("/:userId").post(createThought);
router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
