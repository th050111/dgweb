const express = require("express");
const path = require("path");
const multer = require("multer");
const firebase2 = require("firebase/app");
const { getStorage, ref, uploadBytes } = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyBvOOW0Nplg6WWpQgweao50kbhX2XqeQ9Q",
  authDomain: "dgweb-9074c.firebaseapp.com",
  databaseURL:
    "https://dgweb-9074c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dgweb-9074c",
  storageBucket: "dgweb-9074c.appspot.com",
  messagingSenderId: "868328916807",
  appId: "1:868328916807:web:cc0c94b305f0b279f0ae62",
};

firebase2.initializeApp(firebaseConfig);
const storageDb = getStorage();

const router = express.Router();
const storage = multer.memoryStorage({
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
  const storageRef = ref(storageDb, "a");

  uploadBytes(storageRef, file.buffer).then((snapshot) => {
    console.log("complete!!");
  });
  return res.send({
    title: "메인 홈페이지",
  });
});

module.exports = router;
