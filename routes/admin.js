const express = require("express");
const db = require("../mybase");
const xlsx = require("xlsx");

const workbook = xlsx.readFile("choose.xlsx");
const sheetNames = [...workbook.SheetNames];

const student = {
  10101: "권태홍",
  10102: "김동욱",
  10103: "김민기",
  10104: "김윤환",
  10105: "김준우",
  10106: "김찬솔",
  10107: "문수윤",
  10108: "박성욱",
  10109: "신영섭",
  10110: "신윤섭",
  10111: "심승현",
  10112: "오명보",
  10113: "유선민",
  10114: "이경수",
  10115: "이승환",
  10116: "이정빈",
  10117: "이현승",
  10118: "장서진",
  10119: "전소율",
  10120: "정대한",
  10121: "지희망",
  10122: "현석환",
  10201: "김성수",
  10202: "김용경",
  10203: "김원민",
  10204: "김지훈",
  10205: "노현",
  10206: "박상빈",
  10207: "박정인",
  10208: "백승",
  10209: "성태경",
  10210: "신승우",
  10211: "안호현",
  10212: "양승준",
  10213: "오현석",
  10214: "유영운",
  10215: "이윤호",
  10216: "이주성",
  10217: "이현민",
  10218: "정찬휘",
  10219: "천세민",
  10220: "최영재",
  10221: "한슬",
  10222: "현지호",
  10301: "고민석",
  10302: "김덕영",
  10303: "김두현",
  10304: "김영석",
  10305: "김영욱",
  10306: "김재율",
  10307: "김재준",
  10308: "김태현",
  10309: "김현빈",
  10310: "노규민",
  10311: "명준휘",
  10312: "손정후",
  10313: "송나한",
  10314: "송원석",
  10315: "오택민",
  10316: "이상인",
  10317: "이현민",
  10318: "정민준",
  10319: "정찬규",
  10320: "조성범",
  10321: "조진영",
  10322: "한태양",
  10401: "김재윤",
  10402: "김효준",
  10403: "노승준",
  10404: "문연찬",
  10405: "박상후",
  10406: "박진용",
  10407: "손세찬",
  10408: "송주홍",
  10409: "신이수",
  10410: "신한주",
  10411: "오태환",
  10412: "유인",
  10413: "임채진",
  10414: "전경인",
  10415: "전시민",
  10416: "전이환",
  10417: "정해성",
  10418: "조인호",
  10419: "천정민",
  10420: "홍바울",
  10421: "황태경",
  10501: "곽민성",
  10502: "김건호",
  10503: "김도현",
  10504: "김선민",
  10505: "김승호",
  10506: "김지훈",
  10507: "문지민",
  10508: "박동주",
  10509: "박상민",
  10510: "백창하",
  10511: "송영창",
  10512: "염정빈",
  10513: "윤태현",
  10514: "이김예성",
  10515: "이영웅",
  10516: "이윤성",
  10517: "장예준",
  10518: "전요한",
  10519: "최준혁",
  10520: "한윤우",
  10521: "황석하",
  10601: "강명규",
  10602: "구본성",
  10603: "김도훈",
  10604: "김민호",
  10605: "김준규",
  10606: "김진영",
  10607: "박건우",
  10608: "변영진",
  10609: "오현석",
  10610: "우지헌",
  10611: "위주환",
  10612: "유현우",
  10613: "이용은",
  10615: "이희찬",
  10616: "정상연",
  10617: "최용훈",
  10618: "최윤서",
  10619: "최윤주",
  10620: "최이레",
  10621: "최지호",
  10701: "강수환",
  10702: "권석진",
  10703: "김세연",
  10704: "김영범",
  10705: "민시홍",
  10706: "박재현",
  10707: "박한수",
  10708: "서성협",
  10709: "서현철",
  10710: "이어진",
  10711: "이예찬",
  10712: "이하윤",
  10713: "정은찬",
  10714: "정찬민",
  10715: "정현민",
  10716: "조범서",
  10717: "조영민",
  10718: "차민혁",
  10719: "최영조",
  10720: "최현수",
  10721: "한석호",
  10801: "김민세",
  10802: "김민창",
  10803: "김성준",
  10804: "김주혁",
  10805: "김회창",
  10806: "민상준",
  10807: "박하준",
  10808: "서범수",
  10809: "서지환",
  10810: "서찬",
  10811: "손범수",
  10813: "엄희성",
  10814: "우기범",
  10815: "이진욱",
  10816: "이찬영",
  10817: "이희찬",
  10818: "조민성",
  10819: "천세범",
  10820: "최성주",
  10821: "홍유찬",
  0: "입력해주세요",
};

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

router.get("/choose/download", (req, res) => {
  console.log("down");
  const a = writeChooseToExel();
  console.log("down");
  res.download("choose" + a + ".xlsx", "test.xlsx");
});
router.get("/choose", (req, res) => {
  console.log("hi");
  res.render("admin/choose", { title: "admin" });
});
router.get("/", (req, res) => {
  res.redirect("admin/schedule");
});

function writeChooseToExel() {
  // const order = ["mainS", "scienceS", "languageS", "cultureS", "artS"];
  const a = {
    mainS: "기초(국영수)",
    scienceS: "탐구",
    languageS: "제2외국어",
    cultureS: "교양",
    artS: "예체능",
  };

  Object.keys(choose).forEach((el, i) => {
    const data = choose[el];
    Object.keys(data).forEach((subj) => {
      Object.keys(data[subj]).forEach((year) => {
        Object.keys(data[subj][year]).forEach((term) => {
          const choices = data[subj][year][term];
          let sheet = workbook.Sheets[sheetNames[(year - 2) * 2 + (term - 1)]];
          choices.forEach((choice, index) => {
            let str;
            if (choices.length == 1) {
              str = a[subj];
            } else if (choices.length >= 2) {
              str = a[subj] + "-" + (index + 1);
            }
            if (!str) return;
            const rowName = getRowName(str, sheet);
            sheet["!ref"] = "A1:I" + (2 + i);
            sheet[rowName + (2 + i)] = {
              h: choice,
              w: choice,
              v: choice,
              t: "s",
            };
            sheet["A" + (2 + i)] = {
              h: el,
              w: el,
              v: el,
              t: "s",
            };
            sheet["B" + (2 + i)] = {
              h: student[el],
              w: student[el],
              v: student[el],
              t: "s",
            };
            if (term == "1" && (subj === "artS" || subj === "languageS")) {
              sheet =
                workbook.Sheets[sheetNames[(year - 2) * 2 + Number(term)]];
              sheet["!ref"] = "A1:I" + (2 + i);

              sheet[getRowName(str, sheet) + (2 + i)] = {
                h: choice,
                w: choice,
                v: choice,
                t: "s",
              };
            }
          });
        });
      });
    });
  });
  const timeStamp = +new Date();
  xlsx.writeFile(workbook, "choose" + timeStamp + ".xlsx");
  return timeStamp;
}

function getRowName(str, sheet) {
  let result;

  Object.keys(sheet).forEach((el) => {
    // console.log(sheet[el].v);
    if (sheet[el].v == str) {
      result = el.replace("1", "");
    }
  });
  return result;
}
module.exports = router;
