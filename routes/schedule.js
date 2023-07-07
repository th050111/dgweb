const express = require("express");
const api = require("./api");
const db = require("../mybase");

let dDay;

db.collection("schedule")
  .doc("inform")
  .get()
  .then((snap) => {
    dDay = { day: snap.data().dDay, name: snap.data().dDayName };
  });

const router = express.Router();

router.get("/", (req, res) => {
  res.render("schedule", {
    title: "메인 홈페이지",
  });
});

router.get("/inform", (req, res) => {
  console.log("inform");
  api.getUrl("snack/snack", (snackUrl) => {
    api.getUrl("notice/notice", (noUrl) => {
      res.json({ ...getInform(), noUrl, snackUrl, dDay });
    });
  });
});

/*



다른파일로 분리가능



*/

// @breif xlsx 모듈추출

const xlsx = require("xlsx");

// @files 엑셀 파일을 가져온다.

const excelFile = xlsx.readFile("test.xlsx");

// @breif 엑셀 파일의 첫번째 시트의 정보를 추출

const sheetName = excelFile.SheetNames[0]; // @details 첫번째 시트 정보 추출
const firstSheet = excelFile.Sheets[sheetName]; // @details 시트의 제목 추출

const sheetName2 = excelFile.SheetNames[1]; // @details 첫번째 시트 정보 추출
const secondSheet = excelFile.Sheets[sheetName2]; // @details 시트의 제목 추출

const sheetName3 = excelFile.SheetNames[2]; // @details 첫번째 시트 정보 추출
const thirdSheet = excelFile.Sheets[sheetName3]; // @details 시트의 제목 추출

// @details 엑셀 파일의 첫번째 시트를 읽어온다.

const jsonData = xlsx.utils.sheet_to_json(firstSheet, {
  defval: "",
});
const jsonData2 = xlsx.utils.sheet_to_json(secondSheet, {
  defval: "",
});
const jsonData3 = xlsx.utils.sheet_to_json(thirdSheet, {
  defval: "",
});
getInform();

function getInform() {
  const list2 = {};
  const list4 = {};
  const student = {};
  const teacher = {};

  Object.values(jsonData3).forEach((el) => {
    Object.keys(el).forEach((key) => {
      if (Number(key) % 2 == 1 && el[key]) {
        teacher[el[key]] = el[`${Number(key) + 1}`];
      }
    });
  });
  Object.values(jsonData2).forEach((el) => {
    const temp = {};

    Object.keys(el).forEach((key) => {
      if (el[key] && key != "학번") {
        temp[el[key].toUpperCase()] = key;
      }
    });

    let number = String(el["학번"]);
    if (number.length == 4)
      number = number[0] + "0" + number[1] + number[2] + number[3];
    list2[number] = temp;
  });

  Object.values(jsonData).forEach((el) => {
    const temp = {};

    Object.keys(el).forEach((key) => {
      if (el[key] && key != "학번") {
        temp[el[key].toUpperCase()] = key;
      }
    });

    let number = String(el["학번"]);
    if (number.length == 4)
      number = number[0] + "0" + number[1] + number[2] + number[3];
    list4[number] = temp;
    student[number] = el["이름"];
  });

  Object.keys(list4).forEach((el) => {
    Object.keys(list4[el]).forEach((h) => {
      if (h == "이름") student[el] = list4[el][h];
    });
  });
  return { list2, list4, student, teacher };
}
module.exports = router;
