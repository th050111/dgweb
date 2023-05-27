const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("schedule", {
    title: "메인 홈페이지",
  });
});

router.get("/inform", (req, res) => {
  console.log("inform");
  res.json(getInform());
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

// @details 엑셀 파일의 첫번째 시트를 읽어온다.

const jsonData = xlsx.utils.sheet_to_json(firstSheet, {
  defval: "",
});
const jsonData2 = xlsx.utils.sheet_to_json(secondSheet, {
  defval: "",
});
function getInform() {
  const list2 = {};
  const list4 = {};

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
  });
  return { list2, list4 };
}
module.exports = router;
