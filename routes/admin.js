const express = require("express");

const router = express.Router();

router.post("/schedule/write", async (req, res) => {
  console.log(req.body);
  res.redirect("/admin/schedule");
});
router.post("/schedule/delete/:id", (req, res) => {
  res.json({});
});
router.get("/schedule", (req, res) => {
  res.render("admin/schedule", { title: "admin" });
});

router.get("/", (req, res) => {
  res.redirect("admin/schedule");
});

module.exports = router;
