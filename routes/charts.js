const router = require("express").Router();

router.get("/chart", (req, res, next) => {
  res.render("charts/chart");
});

module.exports = router;
