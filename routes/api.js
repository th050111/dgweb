const express = require("express");
const path = require("path");
const multer = require("multer");
const firebase2 = require("firebase/app");
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBlob,
  getStream,
} = require("firebase/storage");

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

const imgList = {};

firebase2.initializeApp(firebaseConfig);
const storageDb = getStorage();

const router = express.Router();

const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    // 파일이 업로드될 경로 설정
    cb(null, "public/img/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    // timestamp를 이용해 새로운 파일명 설정
    let newFileName = new Date().valueOf() + path.extname(file.originalname);
    cb(null, newFileName);
    req.name = newFileName;
  },
});
const uploadFiles = multer({
  storage: storage,
});

router.post("/back", uploadFiles.single("image"), (req, res) => {
  const { file } = req;
  const code = req.body.code;
  console.log(req.name);
  const storageRef = ref(storageDb, `back/${code}.jpg`);

  uploadBytes(storageRef, file.buffer).then((snapshot) => {
    console.log("complete!!");
  });
  console.log(code);
  return res.redirect("/schedule");
});
router.post("/snack", uploadFiles.single("image"), (req, res) => {
  const { file } = req;
  //   const code = req.body.code;
  const storageRef = ref(storageDb, `snack/snack.jpg`);

  uploadBytes(storageRef, file.buffer).then((snapshot) => {
    console.log("complete!!");
  });

  return res.redirect("/admin");
});

router.get("/backUrl", (req, res) => {
  const code = req.query.code;

  getDownloadURL(ref(storageDb, `back/${code}.jpg`))
    .then((url) => {
      res.json({
        url,
      });
    })
    .catch((error) => {
      res.json({
        url: "",
      });
    });
});

router.getUrl = (name, f) => {
  console.log(name);
  getDownloadURL(ref(storageDb, `${name}.jpg`))
    .then((url) => {
      f(url);
      return url;
    })
    .catch((error) => {
      f(url);
      return false;
    });
};

module.exports = router;
