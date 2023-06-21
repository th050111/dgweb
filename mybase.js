var admin = require("firebase-admin");
var firestore = require("firebase-admin/firestore");

var serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dg-website.firebaseio.com",
});

const database = admin.database();

const db = firestore.getFirestore();

module.exports = db;
