const express = require("express");
const router = express.Router();
const db = require("../mybase");

router.post("/", async (req, res) => {
  console.log(JSON.parse(req.body.choose));
  const choose = JSON.parse(req.body.choose);

  db.collection("choose")
    .doc(String(choose.number))
    .set({ subj: { ...choose.data }, number: choose.number });

  res.redirect("/choose");
});

router.get("/", (req, res) => {
  res.render("choose", {
    title: "메인 홈페이지",
  });
});

module.exports = router;
