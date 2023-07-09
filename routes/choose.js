const express = require("express");
const router = express.Router();
const db = require("../mybase");

let together = {};
loadTogether();
async function loadTogether() {
  choose = {};
  await db
    .collection("choose2")
    .get()
    .then((snap) => {
      let a = snap.docs.map((doc) => doc.data());
      a = a[0];
      together = a;
    });
}

function updateTogether() {
  db.collection("choose2").doc("together").update(together);
}

router.post("/", async (req, res) => {
  console.log(JSON.parse(req.body.choose));
  const choose = JSON.parse(req.body.choose);

  db.collection("choose")
    .doc(String(choose.number))
    .set({ subj: { ...choose.data }, number: choose.number });

  res.redirect("/choose");
});

router.post("/together", (req, res) => {
  const hi = req.body.together;
  console.log(together[hi]);
  if (together[hi] != undefined) {
    together[hi] = together[hi] + 1;
  } else {
    together[hi] = 0;
  }
  updateTogether();
  res.redirect("/choose");
});

router.get("/", (req, res) => {
  res.render("choose", {
    title: "메인 홈페이지",
  });
});

module.exports = router;
