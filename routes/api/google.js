const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"
router.route("/")
  .get(googleController.findAll)

router.route("/:id")
  .post(googleController.create);


module.exports = router;