const express = require("express");
const path = require("path");
const multer = require("multer");

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 파일이 업로드될 경로 설정
    cb(null, "public/img/");
  },
  filename: (req, file, cb) => {
    // timestamp를 이용해 새로운 파일명 설정
    let newFileName = "a.jpg"; //new Date().valueOf() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const uploadFiles = multer({
  storage: storage,
});

router.post("/back", uploadFiles.single("image"), (req, res) => {
  const { file } = req;
  console.log(file);
  return res.send({
    title: "메인 홈페이지",
  });
});

module.exports = router;
