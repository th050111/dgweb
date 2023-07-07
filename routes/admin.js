const express = require("express");
const db = require("../mybase");

let choose = {};
const router = express.Router();

db.collection("choose").onSnapshot((snap) => {
  loadChoose();
}),
  (err) => {
    console.log("error");
  };

async function loadChoose() {
  choose = {};
  await db
    .collection("choose")
    .get()
    .then((snap) => {
      const a = snap.docs.map((doc) => doc.data());
      a.forEach((el) => {
        choose[el.number] = { ...el.subj };
      });
    });
}

router.get("/choose/inform", (req, res) => {
  res.json({ choose });
});

router.post("/schedule/inform", async (req, res) => {
  console.log(req.body);
  db.collection("schedule")
    .doc("inform")
    .set({
      ...req.body,
    });
  res.redirect("/admin/schedule");
});

router.post("/schedule/delete/:id", (req, res) => {
  res.json({});
});
router.get("/schedule", (req, res) => {
  res.render("admin/schedule", { title: "admin" });
});

router.get("/choose", (req, res) => {
  res.render("admin/choose", { title: "admin" });
});
router.get("/", (req, res) => {
  res.redirect("admin/schedule");
});

module.exports = router;
