const router = require("express").Router();
const auth = require("../middleware/auth");
const noteCtrl = require("../controllers/noteCtrl");

router.route("/").get(auth, getNotes).post(auth, createNote);

router
  .route("/:id")
  .get(auth, getNote)
  .put(auth, updateNote)
  .delete(auth, deleteNote);

export default router;
