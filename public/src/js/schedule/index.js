const schedule_list = {"1":[
  ["D", "자", "체", "한", "C"],
  ["B", "자", "자", "B", "수"],
  ["B", "A", "D", "B", "D"],
  ["자", "D", "A", "A", "중일"],
  ["A", "수", "자", "수", "?"],
  ["자", "C", "수", "음미", "??"],
  ["체", "중일", "C", "C", "???"],
],"2":[
  ["D", "체", "자", "자", "C"],
  ["B", "자", "체", "B", "수"],
  ["B", "A", "D", "B", "D"],
  ["자", "D", "A", "A", "중일"],
  ["A", "수", "자", "수", "?"],
  ["한", "C", "수", "음미", "??"],
  ["자", "중일", "C", "C", "???"],
],"3":[
  ["D", "음미", "수", "중일", "C"],
  ["B", "중일", "자", "B", "자"],
  ["B", "A", "D", "B", "D"],
  ["수", "D", "A", "A", "수"],
  ["A", "체", "자", "자", "?"],
  ["자", "C", "자", "체", "??"],
  ["한", "수", "C", "C", "???"],
],"4":[
  ["D", "음미", "수", "중일", "C"],
  ["B", "중일", "자", "B", "체"],
  ["B", "A", "D", "B", "D"],
  ["수", "D", "A", "A", "수"],
  ["A", "자", "한", "자", "?"],
  ["체", "C", "자", "자", "??"],
  ["자", "수", "C", "C", "???"],
],"5":[
  ["D", "한", "수", "음미", "C"],
  ["B", "자", "중일", "B", "체"],
  ["B", "A", "D", "B", "D"],
  ["수", "D", "A", "A", "수"],
  ["A", "자", "체", "자", "?"],
  ["자", "C", "자", "자", "??"],
  ["중일", "수", "C", "C", "???"],
],"6":[
  ["D", "자", "체", "음미", "C"],
  ["B", "자", "중일", "B", "수"],
  ["B", "A", "D", "B", "D"],
  ["자", "D", "A", "A", "한"],
  ["A", "수", "자", "수", "?"],
  ["자", "C", "수", "체", "??"],
  ["중일", "자", "C", "C", "???"],
],"7":[
  ["D", "수", "음미", "수", "C"],
  ["B", "체", "수", "B", "한"],
  ["B", "A", "D", "B", "D"],
  ["자", "D", "A", "A", "체"],
  ["A", "자", "자", "자", "?"],
  ["수", "C", "중일", "중일", "??"],
  ["자", "자", "C", "C", "???"],
],"8":[
  ["D", "수", "음미", "수", "C"],
  ["B", "자", "수", "B", "자"],
  ["B", "A", "D", "B", "D"],
  ["자", "D", "A", "A", "체"],
  ["A", "한", "자", "자", "?"],
  ["수", "C", "중일", "중일", "??"],
  ["자", "체", "C", "C", "???"],
]};
let number = localStorage.getItem("number") | "";
(function () {
  initData(() => {
    if (list4[number]) {
      const backUrl = localStorage.getItem("back-url");

      console.log(backUrl);
      draw();
      if (backUrl)
        document.querySelector(
          "#back"
        ).style.backgroundImage = `url(${backUrl})`;
    }
  });
})();

document.querySelector("form").addEventListener("submit", (el) => {
  el.preventDefault();
  number = el.target.number.value;
  if (!isNaN(Number(number)) && number.length == 4)
    number = number[0] + "0" + number[1] + number[2] + number[3];

  if (!list4[number]) {
    const a = Object.keys(student).filter((el) => {
      return student[el] == number;
    });
    if (a[0]) number = a[0];
    else return;
  }
  localStorage.setItem("number", number);
  draw();
});
/***
 * a:단위수
 */
function whatSet(a, set) {
  if (a == 2)
    return list2[number][set]
      ? set
      : list2[number][set + 1]
      ? set + 1
      : set + 2;
  else
    return list4[number][set]
      ? set
      : list4[number][set + 1]
      ? set + 1
      : set + 2;
}

function draw() {
  const set4 = document.querySelectorAll(".set4-tr td");
  const set2 = document.querySelectorAll(".set2-tr td");
  const subject2 = document.querySelectorAll(".subject2-tr td");
  const subject4 = document.querySelectorAll(".subject4-tr td");
  const teacher4 = document.querySelectorAll(".teacher4-tr td");
  const teacher2 = document.querySelectorAll(".teacher2-tr td");

  document.querySelector(".name").innerHTML =
    number + " / 이름: " + student[number];

  //4단위
  subject4.forEach((sub, index) => {
    // .log(list4[number]);
    sub.innerHTML = list4[number][whatSet(4, set4[index].innerText)];
  });
  teacher4.forEach((tch, index) => {
    const a = whoTeacher(
      subject4[index].innerText,
      whatSet(4, set4[index].innerText)
    );
    tch.innerHTML = "<span>" + a + "</span>" + "<br/>" + where[a];
  });
  //2단위
  subject2.forEach((sub, index) => {
    if (list2[number][whatSet(2, set2[index].innerText)])
      sub.innerHTML = list2[number][whatSet(2, set2[index].innerText)];
  });
  teacher2.forEach((tch, index) => {
    if (list2[number][whatSet(2, set2[index].innerText)])
      tch.innerHTML =
        "<span>" +
        whoTeacher(
          subject2[index].innerText,
          whatSet(2, set2[index].innerText)
        ) +
        "</span>" +
        "<br/>" +
        where[
          whoTeacher(
            subject2[index].innerText,
            whatSet(2, set2[index].innerText)
          )
        ];
  });

  const scheTr = document.querySelectorAll("#own-schedule tr");
  let now = new Date();
  let day = now.getDay();
  const han =
    //음악이면 1, 미술이면 2
    [
      ["1", "1", "C", "D", "A"],
      ["B", "F", "2", "2", "D"],
      ["F", "B", "D", "B", "2"],
      ["C", "C", "A", "C", "F"],
      ["1", "1", "F", "A", "창"],
      ["E", "A", "2", "E", "창"],
      ["E", "D", "B", "E", "창"],
    ];

  scheTr.forEach((tr, i) => {
    if (i != 0) {
      const td = tr.querySelectorAll("td");
      td.forEach((td, j) => {
        if (j != 0) {
          let a = schedule_list[String(number)[2]][i - 1][j - 1]; //시간표 세트가져오기

          //4단위라면
          if (true || a.length == 1) {
            if (list4[number][whatSet(4, a)]) {
              const subj = list4[number][whatSet(4, a)];
              const div = document.createElement("div");
              div.innerHTML =
                subj + "<br/>" + "(" + whoTeacher(subj, whatSet(4, a)) + "T)";
              div.title = "위치: " + where[whoTeacher(subj, whatSet(4, a))];
              td.innerText = "";
              td.append(div);
              td.classList.add(a);
              // if (day == j) td.classList.add("today");
            } else {
               const subj = a;
              const div = document.createElement("div");
              div.innerHTML =
                subj + "<br/>" + "(" + whoTeacher(subj, whatSet(4, a)) + "T)";
              div.title = "위치: " + where[whoTeacher(subj, whatSet(4, a))];
              td.innerText = "";
              td.append(div);
              td.classList.add(a);
            }
          }
          //2단위라면
          else if (a.length == 2) {
            a = a.replace("*", "");
            let tch, wh, subH;
            if (list2[number][whatSet(2, a)].includes("미감")) {
              console.log(
                han[i - 1][j - 1],
                han[i - 1][j - 1] === 2 ? "미술" : "한국사"
              );
              subH = han[i - 1][j - 1] == 2 ? "미술" : "한국사";
              tch = han[i - 1][j - 1] == 2 ? "홍현숙" : " 한우진";
            } else if (list2[number][whatSet(2, a)].includes("음감")) {
              subH = han[i - 1][j - 1] == 1 ? "음감" : "한국사";
              tch = han[i - 1][j - 1] == 1 ? "김현주" : " 한우진";
            } else {
              subH = list2[number][whatSet(2, a)];
              tch = whoTeacher(subH, whatSet(2, a));
              wh = where[whoTeacher(subH, whatSet(2, a))];
            }
            const div = document.createElement("div");
            div.innerHTML = subH + "<br/>" + "(" + tch + "T)";
            div.title = "위치: " + wh;
            td.innerText = "";
            td.append(div);
            // if (day == j) td.classList.add("today");
            td.classList.add(a + a);
          }
        }
      });
    }
  });
}

function whoTeacher(sub, set) {
  if (teacher[sub]) return teacher[sub];
  if (teacher[sub + set]) return teacher[sub + set];
  console.log(number, "errrrrorrrrr", sub, set);
  return "?";
}

// Object.keys(list4).forEach((key) => {
//   number = key;
//   draw();
// });

const remainTime = document.querySelector("#hi");

let temp; //
let myung;

fetch("https://api.qwer.pw/request/hangang_temp?apikey=guest")
  .then((res) => res.json()) // 응답 데이터를 json화
  .then((myJson) => {
    temp = myJson[1].respond.temp;
  });
fetch("https://api.qwer.pw/request/hangang_temp?apikey=guest")
  .then((res) => res.json()) // 응답 데이터를 json화
  .then((myJson) => {
    console.log(myJson[1].respond.temp);
  });
fetch("https://api.qwer.pw/request/helpful_text?apikey=guest")
  .then((res) => res.json()) // 응답 데이터를 json화
  .then((myJson) => {
    myung = myJson[1].respond;
    document.querySelector(
      "body > div:nth-child(4) > div > div > div.container > div:nth-child(4) > div"
    ).innerHTML = myung;
  });

function diffDay() {
  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const diffMin = Math.floor((diff / (1000 * 60)) % 60);
  const diffSec = Math.floor((diff / 1000) % 60);
  const diffMS = Math.floor((diff / 100) % 60);

  if (number == 30507) {
    remainTime.innerText = `사관까지 ${diffDay}일${diffHour}시간${diffMin}분${diffSec}초`;
  } else {
    remainTime.innerText = `${diffName}까지 ${diffDay}일${diffHour}시간${diffMin}분${diffSec}초 // 오늘의 온도는 ${temp}ºC.....`;
  }
}

diffDay();
setInterval(diffDay, 1000);
