const where = {
  하미경: "D503",
  김용태: "D409",
  한진규: "D406(AI실)",
  김용상: "D403",
  이정현: "J406",
  김경민: "세미나실",
  노명지: "J401(1-1)",
  김기모: "J201(3-1)",
  김진아: "J202(3-2)",
  배오현: "J302",
  한우진: "J301",
  이상은: "D204",
  송기호: "J105(3-6)",
  김혜선: "D204(생명과학실)",
  이진수: "D205",
  이우진: "J101(3-3)",
  한종오: "J102(3-4)",
  이종문: "J105(3-6)",
  이해창: "D410(사회교과실)",
  권민영: "J307(2-7)",
  은현진: "마리아홀",
  강길재: "마리아홀",
  한희정: "D405(영어교과실)",
  김현주: "J501(음악실)",
  노은비: "J404(1-3)",
  전민지: "J107(3-7)",
  정경락: "J108(3-8)",
  이현목: "J101(3-3)",
  황인해: "J304(2-5)",
  이형식: "J308(2-8)",
  원진성: "J305(2-6)",
};

let teacher = {
  "미감&한국사": "홍현숙",
  "음감&한국사": "",
  일본어A: "김경민",
  언매F1: "전민지",
  일본어B: "김경민",
  일본어D: "김경민",
  언매E: "전민지",
  화작C: "이우진",
  언매A1: "전민지",
  화작D: "이우진",
  언매B: "전민지",
  일본어C: "김경민",
  중국어A: "권민영",
  언매F2: "이우진",
  중국어B: "권민영",
  미적E1: "오세롬",
  미적C: "오세롬",
  언매A2: "이우진",
  미적D: "오세롬",
  미적B: "이현목",
  중국어C: "권민영",
  중국어D: "권민영",
  심국F: "황인해",
  미적E2: "이현목",
  수과탐C: "김진아",
  인공수A: "박동민",
  영독D1: "한종오D1",
  확통B: "김진아",
  미적F: "이종문",
  영독E: "한희정E",
  고수IC: "이종문",
  확통A: "김진아",
  영독D2: "한희정D2",
  수과탐B: "오세롬",
  교육학A: "이정현",
  수과탐F: "김진아",
  데이터B1: "하미경",
  데이터C: "하미경",
  데이터D: "김용상",
  사문탐E: "김기모",
  영독C: "한종오C",
  경수A: "이종문",
  사문탐D: "김기모",
  고수IB: "이종문",
  데이터C: "하미경",
  데이터A: "김용상",
  영독F: "한희정F",
  데이터B2: "김용상",
  고윤E: "이형식",
  지역이해C: "이해창",
  영독A: "한종오A",
  현세변: "원진성",
  영독B1: "한종오B1",
  심리C: "김혜선",
  심리D: "김혜선",
  물IIE: "이윤숙",
  생IC: "이상은",
  물과연A: "이윤숙",
  화ID: "한진규",
  영독B2: "한희정B2",
  운동A1: "은현진",
  운동D1: "은현진",
  운동D2: "강길재",
  화IIF: "정경락",
  운동B1: "은현진",
  화IIE: "정경락",
  지IC: "이진수",
  화과연: "정경락",
  물IID: "이윤숙",
  심영IB: "이정현",
  운동C1: "은현진",
  운동A2: "강길재",
  지IF: "이진수",
  운동B2: "강길재",
  지IIE: "노은비",
  화IIC: "정경락",
  물IA: "노명지",
  생IID: "이상은",
  피지컬B: "김용상",
  운동C2: "강길재",
  지IA: "이진수",
  물과연B: "이윤숙",
};

let list2 = {
  30101: {
    이름: "김영민",
    A1: "운동",
    B: "미감&한국사",
    C: "중국어",
    D: "데이터",
  },
  30102: {
    이름: "김영진",
    A1: "운동",
    C: "미감&한국사",
    B: "중국어",
    D: "심리",
  },
  30103: {
    이름: "박정호",
    A1: "운동",
    B: "미감&한국사",
    D: "중국어",
    C: "심리",
  },
  30104: {
    이름: "설정현",
    D: "음감&한국사",
    B: "중국어",
    A: "교육학",
    C1: "운동",
  },
  30105: {
    이름: "손예준",
    D: "음감&한국사",
    A: "일본어",
    C: "심리",
    B1: "운동",
  },
  30106: {
    이름: "안종훈",
    A: "미감&한국사",
    C1: "운동",
    B: "중국어",
    D: "심리",
  },
  30107: {
    이름: "오성진",
    C1: "운동",
    B: "음감&한국사",
    A: "중국어",
    D: "심리",
  },
  30108: {
    이름: "윤상원",
    C1: "운동",
    A: "미감&한국사",
    B: "중국어",
    D: "심리",
  },
  30109: {
    이름: "이민찬",
    A1: "운동",
    B: "미감&한국사",
    C: "일본어",
    D: "심리",
  },
  30110: {
    이름: "이상원",
    B1: "운동",
    C: "미감&한국사",
    D: "일본어",
    A: "교육학",
  },
  30111: {
    이름: "이우진",
    D1: "운동",
    A: "음감&한국사",
    B: "중국어",
    C: "심리",
  },
  30112: {
    이름: "이정우",
    C: "음감&한국사",
    B1: "운동",
    A: "중국어",
    D: "심리",
  },
  30113: {
    이름: "이한별",
    C1: "운동",
    D: "미감&한국사",
    B: "일본어",
    A: "교육학",
  },
  30114: {
    이름: "이형원",
    A1: "운동",
    B: "음감&한국사",
    D: "중국어",
    C: "심리",
  },
  30115: {
    이름: "임범진",
    D: "음감&한국사",
    B1: "운동",
    A: "일본어",
    C: "심리",
  },
  30116: {
    이름: "정윤찬",
    D1: "운동",
    C: "음감&한국사",
    A: "일본어",
    B1: "데이터",
  },
  30117: {
    이름: "최규현",
    C1: "운동",
    D: "미감&한국사",
    B: "일본어",
    A: "교육학",
  },
  30118: {
    이름: "한재윤",
    A1: "운동",
    B: "음감&한국사",
    D: "중국어",
    C: "심리",
  },
  30119: {
    이름: "홍기영",
    C1: "운동",
    A: "음감&한국사",
    B: "중국어",
    D: "심리",
  },
  30201: {
    이름: "강경훈",
    A1: "운동",
    B: "미감&한국사",
    C: "일본어",
    D: "심리",
  },
  30202: {
    이름: "곽준석",
    C: "음감&한국사",
    D: "중국어",
    A: "교육학",
    B1: "운동",
  },
  30203: {
    이름: "김건우",
    C1: "운동",
    D: "미감&한국사",
    B: "중국어",
    A: "교육학",
  },
  30204: {
    이름: "김대영",
    C1: "운동",
    A: "미감&한국사",
    B: "중국어",
    D: "심리",
  },
  30205: {
    이름: "김동훈",
    D1: "운동",
    B: "미감&한국사",
    A: "일본어",
    C: "심리",
  },
  30206: {
    이름: "김웅배",
    A1: "운동",
    B: "미감&한국사",
    C: "일본어",
    D: "심리",
  },
  30207: {
    이름: "김정우",
    A1: "운동",
    B: "음감&한국사",
    D: "중국어",
    C: "심리",
  },
  30208: {
    이름: "박대현",
    A1: "운동",
    B: "미감&한국사",
    D: "중국어",
    C: "심리",
  },
  30209: {
    이름: "박민준",
    A: "음감&한국사",
    D: "중국어",
    C: "심리",
    B1: "운동",
  },
  30210: {
    이름: "박선욱",
    C: "미감&한국사",
    B1: "운동",
    A: "일본어",
    D: "심리",
  },
  30211: {
    이름: "박유신",
    A1: "운동",
    B: "음감&한국사",
    D: "중국어",
    C: "심리",
  },
  30212: {
    이름: "박찬응",
    D1: "운동",
    B: "음감&한국사",
    C: "일본어",
    A: "데이터",
  },
  30213: {
    이름: "배동준",
    D: "음감&한국사",
    A: "일본어",
    B1: "운동",
    C: "심리",
  },
  30214: {
    이름: "염정운",
    D: "음감&한국사",
    A: "일본어",
    C: "심리",
    B1: "운동",
  },
  30215: {
    이름: "우상범",
    D: "미감&한국사",
    B: "중국어",
    C1: "운동",
    A: "교육학",
  },
  30216: {
    이름: "이재혁",
    C: "음감&한국사",
    B1: "운동",
    A: "중국어",
    D: "심리",
  },
  30217: {
    이름: "전성현",
    D1: "운동",
    B: "미감&한국사",
    A: "일본어",
    C: "심리",
  },
  30218: {
    이름: "최현준",
    A: "음감&한국사",
    D: "중국어",
    B1: "운동",
    C: "심리",
  },
  30219: {
    이름: "한동현",
    C: "미감&한국사",
    B1: "운동",
    D: "일본어",
    A: "교육학",
  },
  30220: {
    이름: "홍석준",
    B1: "데이터",
    C1: "운동",
    A: "미감&한국사",
    D: "일본어",
  },
  30301: {
    이름: "김동현",
    D1: "운동",
    A: "음감&한국사",
    B: "중국어",
    C: "데이터",
  },
  30302: {
    이름: "김태훈",
    D: "음감&한국사",
    B1: "운동",
    C: "일본어",
    A: "데이터",
  },
  30303: {
    이름: "박선우",
    C: "미감&한국사",
    B1: "운동",
    D: "일본어",
    A: "데이터",
  },
  30304: {
    이름: "박선웅",
    A1: "운동",
    B: "음감&한국사",
    C: "중국어",
    D: "데이터",
  },
  30305: {
    이름: "박태인",
    A1: "운동",
    B: "음감&한국사",
    D: "중국어",
    C: "심리",
  },
  30306: {
    이름: "백경민",
    A1: "운동",
    B: "음감&한국사",
    C: "중국어",
    D: "데이터",
  },
  30307: {
    이름: "신동훈",
    A: "음감&한국사",
    B: "일본어",
    C1: "운동",
    D: "데이터",
  },
  30308: {
    이름: "유익재",
    D: "음감&한국사",
    B1: "운동",
    C: "일본어",
    A: "데이터",
  },
  30309: {
    이름: "이광효",
    D1: "운동",
    C: "음감&한국사",
    B: "일본어",
    A: "교육학",
  },
  30310: {
    이름: "이동호",
    B1: "운동",
    D: "음감&한국사",
    A: "중국어",
    C: "데이터",
  },
  30311: {
    이름: "이원재",
    A: "미감&한국사",
    C1: "운동",
    B: "중국어",
    D: "심리",
  },
  30312: {
    이름: "이준혁",
    A1: "운동",
    B: "미감&한국사",
    C: "중국어",
    D: "데이터",
  },
  30313: {
    이름: "이찬",
    A1: "운동",
    B: "음감&한국사",
    C: "중국어",
    D: "데이터",
  },
  30314: {
    이름: "전성호",
    D: "음감&한국사",
    B1: "운동",
    A: "일본어",
    C: "심리",
  },
  30315: {
    이름: "전한결",
    B1: "운동",
    D: "음감&한국사",
    C: "일본어",
    A: "데이터",
  },
  30316: {
    이름: "정승연",
    A1: "운동",
    B: "미감&한국사",
    D: "일본어",
    C: "데이터",
  },
  30317: {
    이름: "조현준",
    B1: "데이터",
    D1: "운동",
    C: "음감&한국사",
    A: "일본어",
  },
  30318: {
    이름: "한상연",
    A1: "운동",
    B: "음감&한국사",
    C: "중국어",
    D: "데이터",
  },
  30319: {
    이름: "황동진",
    D1: "운동",
    B: "미감&한국사",
    C: "일본어",
    A: "데이터",
  },
  30401: {
    이름: "강동완",
    B1: "데이터",
    A1: "운동",
    C: "미감&한국사",
    D: "중국어",
  },
  30402: {
    이름: "구민회",
    B1: "데이터",
    C1: "운동",
    A: "미감&한국사",
    D: "일본어",
  },
  30403: {
    이름: "김보석",
    A1: "운동",
    D: "미감&한국사",
    B: "중국어",
    C: "데이터",
  },
  30404: {
    이름: "김서원",
    B2: "운동",
    D: "음감&한국사",
    A: "일본어",
    C: "심리",
  },
  30405: {
    이름: "김서진",
    B2: "운동",
    D: "음감&한국사",
    C: "일본어",
    A: "데이터",
  },
  30406: {
    B1: "데이터",
    이름: "김은호",
    D1: "운동",
    A: "음감&한국사",
    C: "일본어",
  },
  30407: {
    이름: "김지석",
    D1: "운동",
    B: "미감&한국사",
    C: "일본어",
    A: "데이터",
  },
  30408: {
    이름: "김태윤",
    A: "음감&한국사",
    C1: "운동",
    B: "일본어",
    D: "심리",
  },
  30409: {
    이름: "김태현",
    B2: "운동",
    C: "미감&한국사",
    A: "중국어",
    D: "데이터",
  },
  30410: {
    이름: "류견우",
    B1: "데이터",
    D: "미감&한국사",
    A: "일본어",
    C1: "운동",
  },
  30411: {
    이름: "서민우",
    D1: "운동",
    A: "음감&한국사",
    B: "중국어",
    C: "데이터",
  },
  30412: {
    이름: "서지호",
    A: "미감&한국사",
    B1: "데이터",
    C1: "운동",
    D: "일본어",
  },
  30413: {
    이름: "양동혁",
    B2: "운동",
    C: "미감&한국사",
    D: "일본어",
    A: "데이터",
  },
  30414: {
    이름: "윤준영",
    B2: "운동",
    D: "음감&한국사",
    A: "중국어",
    C: "데이터",
  },
  30415: {
    이름: "이선행",
    C1: "운동",
    B1: "데이터",
    A: "미감&한국사",
    D: "일본어",
  },
  30416: {
    이름: "장정호",
    C1: "운동",
    A: "음감&한국사",
    B: "일본어",
    D: "심리",
  },
  30417: {
    이름: "조정원",
    D1: "운동",
    B1: "데이터",
    C: "음감&한국사",
    A: "일본어",
  },
  30418: {
    이름: "태현준",
    C2: "운동",
    A: "미감&한국사",
    B: "일본어",
    D: "심리",
  },
  30419: {
    이름: "현윤수",
    D1: "운동",
    B1: "데이터",
    C: "미감&한국사",
    A: "중국어",
  },
  30501: {
    이름: "강동옥",
    C2: "운동",
    D: "미감&한국사",
    B: "일본어",
    A: "교육학",
  },
  30502: {
    이름: "김대희",
    B: "미감&한국사",
    D1: "운동",
    C: "중국어",
    A: "교육학",
  },
  30503: {
    이름: "김민준",
    D1: "운동",
    C: "음감&한국사",
    B1: "데이터",
    A: "일본어",
  },
  30504: {
    이름: "김민찬",
    A2: "운동",
    B1: "데이터",
    C: "미감&한국사",
    D: "일본어",
  },
  30505: {
    이름: "김신원",
    A2: "운동",
    B: "미감&한국사",
    D: "일본어",
    C: "데이터",
  },
  30506: {
    이름: "박종우",
    B2: "운동",
    C: "음감&한국사",
    D: "중국어",
    A: "교육학",
  },
  30507: {
    이름: "박형기",
    D1: "운동",
    A: "음감&한국사",
    B: "일본어",
    C: "데이터",
  },
  30508: {
    이름: "윤서범",
    B2: "운동",
    C: "미감&한국사",
    A: "중국어",
    D: "데이터",
  },
  30509: {
    이름: "윤지훈",
    B2: "운동",
    C: "음감&한국사",
    D: "중국어",
    A: "교육학",
  },
  30510: {
    이름: "윤호림",
    B1: "데이터",
    D1: "운동",
    C: "음감&한국사",
    A: "일본어",
  },
  30511: {
    이름: "이강선",
    D1: "운동",
    B: "미감&한국사",
    A: "중국어",
    C: "데이터",
  },
  30512: {
    이름: "이동건",
    A2: "운동",
    B: "음감&한국사",
    C: "중국어",
    D: "데이터",
  },
  30513: {
    이름: "이용규",
    A2: "운동",
    B: "음감&한국사",
    C: "중국어",
    D: "데이터",
  },
  30514: {
    이름: "임창대",
    A2: "운동",
    B1: "데이터",
    D: "음감&한국사",
    C: "일본어",
  },
  30515: {
    이름: "장준혁",
    B2: "운동",
    D: "음감&한국사",
    A: "일본어",
    C: "심리",
  },
  30516: {
    이름: "정원영",
    B2: "데이터",
    C2: "운동",
    A: "미감&한국사",
    D: "일본어",
  },
  30517: {
    이름: "조태상",
    D1: "운동",
    A: "음감&한국사",
    B: "중국어",
    C: "데이터",
  },
  30518: {
    이름: "최석헌",
    B2: "데이터",
    D2: "운동",
    C: "미감&한국사",
    A: "중국어",
  },
  30519: {
    이름: "황인승",
    D2: "운동",
    B2: "데이터",
    C: "음감&한국사",
    A: "일본어",
  },
  30601: {
    이름: "강동협",
    D2: "운동",
    C: "음감&한국사",
    B: "일본어",
    A: "교육학",
  },
  30602: {
    이름: "고정명",
    A2: "운동",
    B2: "데이터",
    D: "미감&한국사",
    C: "일본어",
  },
  30603: {
    이름: "김기민",
    C2: "운동",
    A: "미감&한국사",
    B: "일본어",
    D: "심리",
  },
  30604: {
    이름: "김도현",
    B2: "운동",
    D: "미감&한국사",
    C: "일본어",
    A: "데이터",
  },
  30605: {
    이름: "김현우",
    C2: "운동",
    D: "미감&한국사",
    B: "중국어",
    A: "교육학",
  },
  30606: {
    이름: "도경수",
    A2: "운동",
    D: "미감&한국사",
    B: "중국어",
    C: "데이터",
  },
  30607: {
    이름: "류성열",
    C2: "운동",
    A: "미감&한국사",
    B: "중국어",
    D: "심리",
  },
  30608: {
    이름: "박용준",
    D2: "운동",
    B2: "데이터",
    C: "미감&한국사",
    A: "중국어",
  },
  30609: {
    이름: "박준용",
    D2: "운동",
    B: "미감&한국사",
    A: "중국어",
    C: "데이터",
  },
  30610: {
    이름: "서정호",
    B2: "데이터",
    A2: "운동",
    C: "미감&한국사",
    D: "일본어",
  },
  30611: {
    이름: "송지훈",
    D2: "운동",
    C: "미감&한국사",
    B: "중국어",
    A: "교육학",
  },
  30612: {
    이름: "신진",
    B2: "운동",
    C: "미감&한국사",
    D: "일본어",
    A: "데이터",
  },
  30613: {
    이름: "오준석",
    C2: "운동",
    A: "미감&한국사",
    B: "일본어",
    D: "심리",
  },
  30614: {
    이름: "우지성",
    A2: "운동",
    B: "미감&한국사",
    C: "일본어",
    D: "심리",
  },
  30615: {
    이름: "이도근",
    B2: "운동",
    D: "음감&한국사",
    C: "일본어",
    A: "데이터",
  },
  30616: {
    이름: "이성진",
    B2: "데이터",
    C2: "운동",
    A: "미감&한국사",
    D: "일본어",
  },
  30617: {
    이름: "임원호",
    D2: "운동",
    A: "음감&한국사",
    B: "일본어",
    C: "심리",
  },
  30618: {
    이름: "장민석",
    B2: "데이터",
    C2: "운동",
    A: "미감&한국사",
    D: "일본어",
  },
  30619: {
    이름: "정재환",
    D2: "운동",
    C: "음감&한국사",
    B: "일본어",
    A: "교육학",
  },
  30701: {
    이름: "강민준",
    B2: "운동",
    C: "음감&한국사",
    A: "중국어",
    D: "심리",
  },
  30702: {
    이름: "강준영",
    D2: "운동",
    B: "미감&한국사",
    C: "일본어",
    A: "데이터",
  },
  30703: {
    이름: "권민석",
    A2: "운동",
    B: "음감&한국사",
    C: "중국어",
    D: "데이터",
  },
  30704: {
    이름: "김대헌",
    C2: "운동",
    D: "미감&한국사",
    B: "일본어",
    A: "교육학",
  },
  30705: {
    이름: "김용기",
    D2: "운동",
    B2: "데이터",
    C: "음감&한국사",
    A: "일본어",
  },
  30706: {
    이름: "문현빈",
    B2: "운동",
    D: "미감&한국사",
    A: "중국어",
    C: "데이터",
  },
  30707: {
    이름: "박규용",
    D2: "운동",
    A: "음감&한국사",
    B: "일본어",
    C: "심리",
  },
  30708: {
    이름: "박문수",
    D2: "운동",
    B: "미감&한국사",
    A: "중국어",
    C: "데이터",
  },
  30709: {
    이름: "송종휘",
    D2: "운동",
    B: "음감&한국사",
    C: "일본어",
    A: "데이터",
  },
  30710: {
    이름: "신경호",
    C2: "운동",
    D: "미감&한국사",
    B: "일본어",
    A: "데이터",
  },
  30711: {
    이름: "이선용",
    A2: "운동",
    B: "음감&한국사",
    C: "중국어",
    D: "데이터",
  },
  30712: {
    이름: "이준석",
    B2: "운동",
    D: "음감&한국사",
    A: "중국어",
    C: "데이터",
  },
  30713: {
    이름: "이준형",
    B2: "운동",
    A: "음감&한국사",
    D: "중국어",
    C: "심리",
  },
  30714: {
    이름: "이한선",
    D2: "운동",
    C: "음감&한국사",
    B: "일본어",
    A: "교육학",
  },
  30715: {
    이름: "이희호",
    B2: "데이터",
    D2: "운동",
    C: "미감&한국사",
    A: "중국어",
  },
  30716: {
    이름: "장지후",
    B2: "데이터",
    D2: "운동",
    C: "음감&한국사",
    A: "일본어",
  },
  30717: {
    이름: "조승준",
    A2: "운동",
    B: "음감&한국사",
    C: "중국어",
    D: "데이터",
  },
  30718: {
    이름: "최진혁",
    B2: "운동",
    C: "미감&한국사",
    D: "일본어",
    A: "데이터",
  },
  30719: {
    이름: "최현서",
    C2: "운동",
    A: "음감&한국사",
    B: "일본어",
    D: "심리",
  },
  30801: {
    이름: "김선홍",
    B2: "데이터",
    C2: "운동",
    D: "미감&한국사",
    A: "일본어",
  },
  30802: {
    이름: "김준환",
    A2: "운동",
    B: "음감&한국사",
    C: "중국어",
    D: "데이터",
  },
  30803: {
    이름: "김택윤",
    C2: "운동",
    B: "음감&한국사",
    D: "중국어",
    A: "교육학",
  },
  30804: {
    이름: "신문선",
    B2: "데이터",
    C2: "운동",
    A: "미감&한국사",
    D: "일본어",
  },
  30805: {
    이름: "신원호",
    D2: "운동",
    C: "음감&한국사",
    B: "일본어",
    A: "교육학",
  },
  30806: {
    이름: "신형우",
    A2: "운동",
    D: "미감&한국사",
    B: "중국어",
    C: "데이터",
  },
  30807: {
    이름: "유충근",
    D2: "운동",
    A: "음감&한국사",
    B: "일본어",
    C: "심리",
  },
  30808: {
    이름: "유현빈",
    A2: "운동",
    B: "음감&한국사",
    C: "중국어",
    D: "데이터",
  },
  30809: {
    이름: "윤재현",
    A2: "운동",
    B: "미감&한국사",
    C: "일본어",
    D: "심리",
  },
  30810: {
    이름: "이건우",
    A2: "운동",
    B: "음감&한국사",
    C: "중국어",
    D: "데이터",
  },
  30811: {
    이름: "이상현",
    A2: "운동",
    C: "미감&한국사",
    B: "중국어",
    D: "심리",
  },
  30812: {
    이름: "이성철",
    B2: "데이터",
    C2: "운동",
    A: "미감&한국사",
    D: "일본어",
  },
  30813: {
    이름: "이종원",
    B2: "운동",
    D: "음감&한국사",
    C: "중국어",
    A: "교육학",
  },
  30814: {
    이름: "정승민",
    B2: "데이터",
    A2: "운동",
    D: "미감&한국사",
    C: "일본어",
  },
  30815: {
    이름: "조현우",
    C2: "운동",
    D: "미감&한국사",
    B: "중국어",
    A: "교육학",
  },
  30816: {
    이름: "조현준",
    A2: "운동",
    B: "음감&한국사",
    D: "중국어",
    C: "심리",
  },
  30817: {
    이름: "최시형",
    D2: "운동",
    B: "미감&한국사",
    A: "중국어",
    C: "데이터",
  },
  30818: {
    이름: "한결",
    C2: "운동",
    A: "음감&한국사",
    B: "일본어",
    D: "심리",
  },
};
let list4 = {
  30101: {
    이름: "김영민",
    B: "피지컬",
    A: "확통",
    F1: "언매",
    E: "고윤",
    D: "현세변",
    C: "영독",
  },
  30102: {
    이름: "김영진",
    D: "사문탐",
    B: "심영I",
    C: "영독",
    F: "심국",
    A1: "언매",
    E: "고윤",
  },
  30103: {
    이름: "박정호",
    D: "사문탐",
    B1: "영독",
    A: "경수",
    C: "미적",
    F1: "언매",
    E: "고윤",
  },
  30104: {
    이름: "설정현",
    D: "화작",
    B1: "영독",
    A: "경수",
    E: "사문탐",
    F: "미적",
    C: "지I",
  },
  30105: {
    이름: "손예준",
    B: "확통",
    D: "사문탐",
    C: "영독",
    F: "심국",
    A1: "언매",
    E: "고윤",
  },
  30106: {
    이름: "안종훈",
    B: "심영I",
    F1: "언매",
    A: "확통",
    D1: "영독",
    E: "사문탐",
    C: "생I",
  },
  30107: {
    이름: "오성진",
    D: "사문탐",
    B: "심영I",
    A: "영독",
    F: "심국",
    C: "화작",
    E: "고윤",
  },
  30108: {
    이름: "윤상원",
    D: "사문탐",
    B1: "영독",
    A: "확통",
    F: "심국",
    C: "화작",
    E: "고윤",
  },
  30109: {
    이름: "이민찬",
    B: "심영I",
    F: "영독",
    A: "경수",
    D: "화작",
    E: "사문탐",
    C: "지I",
  },
  30110: {
    이름: "이상원",
    B: "심영I",
    D1: "영독",
    A: "확통",
    F1: "언매",
    E: "사문탐",
    C: "지역이해",
  },
  30111: {
    이름: "이우진",
    B: "심영I",
    C: "영독",
    A: "확통",
    F1: "언매",
    E: "사문탐",
    D: "현세변",
  },
  30112: {
    이름: "이정우",
    B1: "영독",
    C: "지역이해",
    A: "경수",
    F: "심국",
    D: "화작",
    E: "고윤",
  },
  30113: {
    이름: "이한별",
    A: "영독",
    C: "지역이해",
    F: "심국",
    D: "화작",
    B: "확통",
    E: "사문탐",
  },
  30114: {
    이름: "이형원",
    D: "사문탐",
    B1: "영독",
    A: "경수",
    F: "심국",
    C: "화작",
    E: "고윤",
  },
  30115: {
    이름: "임범진",
    D: "사문탐",
    B1: "영독",
    A: "확통",
    F: "심국",
    C: "화작",
    E: "고윤",
  },
  30116: {
    이름: "정윤찬",
    D1: "영독",
    A: "경수",
    F1: "언매",
    E: "고윤",
    B: "확통",
    C: "지I",
  },
  30117: {
    이름: "최규현",
    B1: "영독",
    A: "확통",
    F: "심국",
    C: "화작",
    E: "고윤",
    D: "현세변",
  },
  30118: {
    이름: "한재윤",
    B: "심영I",
    C: "영독",
    A: "확통",
    F1: "언매",
    E: "사문탐",
    D: "현세변",
  },
  30119: {
    이름: "홍기영",
    D: "사문탐",
    B1: "영독",
    A: "경수",
    C: "미적",
    F1: "언매",
    E: "고윤",
  },
  30201: {
    이름: "강경훈",
    B: "확통",
    C: "화작",
    A: "경수",
    F: "영독",
    E: "사문탐",
    D: "현세변",
  },
  30202: {
    이름: "곽준석",
    A: "영독",
    F: "심국",
    C: "화작",
    B: "확통",
    E: "사문탐",
    D: "현세변",
  },
  30203: {
    이름: "김건우",
    F: "영독",
    A: "경수",
    B: "확통",
    D: "화작",
    E: "사문탐",
    C: "지I",
  },
  30204: {
    이름: "김대영",
    D: "사문탐",
    B1: "영독",
    A: "확통",
    F: "심국",
    C: "화작",
    E: "고윤",
  },
  30205: {
    이름: "김동훈",
    B: "심영I",
    C: "영독",
    A: "확통",
    F1: "언매",
    E: "고윤",
    D: "현세변",
  },
  30206: {
    이름: "김웅배",
    D: "사문탐",
    B1: "영독",
    A: "확통",
    F: "심국",
    C: "화작",
    E: "고윤",
  },
  30207: {
    이름: "김정우",
    A: "영독",
    F: "심국",
    D: "화작",
    C: "지I",
    E: "화II",
    B: "확통",
  },
  30208: {
    이름: "박대현",
    D: "사문탐",
    C: "영독",
    B: "확통",
    F: "심국",
    A1: "언매",
    E: "고윤",
  },
  30209: {
    이름: "박민준",
    F: "영독",
    B: "확통",
    A: "경수",
    C: "화작",
    E: "사문탐",
    D: "현세변",
  },
  30210: {
    이름: "박선욱",
    B: "심영I",
    C: "화작",
    A: "확통",
    F: "영독",
    E: "고윤",
    D: "현세변",
  },
  30211: {
    이름: "박유신",
    D: "사문탐",
    B1: "영독",
    A: "경수",
    E1: "미적",
    F1: "언매",
    C: "지I",
  },
  30212: {
    이름: "박찬응",
    C: "영독",
    F: "심국",
    A1: "언매",
    E: "사문탐",
    D: "현세변",
    B: "확통",
  },
  30213: {
    이름: "배동준",
    B: "심영I",
    C: "영독",
    A: "확통",
    F1: "언매",
    E: "사문탐",
    D: "화I",
  },
  30214: {
    이름: "염정운",
    D: "사문탐",
    C: "영독",
    F: "심국",
    B: "확통",
    A1: "언매",
    E: "고윤",
  },
  30215: {
    이름: "우상범",
    D: "사문탐",
    B1: "영독",
    A: "경수",
    F: "심국",
    E: "언매",
    C: "지I",
  },
  30216: {
    이름: "이재혁",
    D1: "영독",
    C: "지역이해",
    F: "심국",
    B: "확통",
    A1: "언매",
    E: "사문탐",
  },
  30217: {
    이름: "전성현",
    B: "심영I",
    C: "지역이해",
    E: "영독",
    F: "수과탐",
    A1: "언매",
    D: "현세변",
  },
  30218: {
    이름: "최현준",
    B: "심영I",
    F: "영독",
    A: "확통",
    D: "화작",
    E: "고윤",
    C: "지역이해",
  },
  30219: {
    이름: "한동현",
    E: "영독",
    A: "경수",
    C: "화작",
    B: "확통",
    D: "현세변",
    F: "지I",
  },
  30220: {
    이름: "홍석준",
    D: "사문탐",
    C: "영독",
    F: "심국",
    A1: "언매",
    B: "확통",
    E: "고윤",
  },
  30301: {
    이름: "김동현",
    B1: "영독",
    D: "미적",
    A: "인공수",
    F1: "언매",
    C: "지I",
    E: "물II",
  },
  30302: {
    이름: "김태훈",
    B: "수과탐",
    D1: "영독",
    E1: "미적",
    F1: "언매",
    A: "화과연",
    C: "생I",
  },
  30303: {
    이름: "박선우",
    B1: "영독",
    C: "수과탐",
    D: "미적",
    F1: "언매",
    A: "화과연",
    E: "물II",
  },
  30304: {
    이름: "박선웅",
    B: "심영I",
    C: "고수I",
    E1: "미적",
    F1: "언매",
    A: "화과연",
    D: "물II",
  },
  30305: {
    이름: "박태인",
    D1: "영독",
    C: "고수I",
    B: "미적",
    A1: "언매",
    E: "고윤",
    F: "화II",
  },
  30306: {
    이름: "백경민",
    F: "영독",
    B: "고수I",
    E1: "미적",
    A1: "언매",
    D: "물II",
    C: "화II",
  },
  30307: {
    이름: "신동훈",
    A: "영독",
    F: "지I",
    E1: "미적",
    B: "언매",
    C: "고I",
    D: "생II",
  },
  30308: {
    이름: "유익재",
    D1: "영독",
    B: "고수I",
    E1: "미적",
    F1: "언매",
    A: "화과연",
    C: "지I",
  },
  30309: {
    이름: "이광효",
    B1: "영독",
    F: "수과탐",
    C: "미적",
    D: "화작",
    A: "지I",
    E: "화II",
  },
  30310: {
    이름: "이동호",
    B: "피지컬",
    E1: "미적",
    A: "인공수",
    D: "화작",
    C: "생I",
    F: "지I",
  },
  30311: {
    이름: "이원재",
    B2: "영독",
    C: "고수I",
    D: "미적",
    E: "언매",
    A: "물I",
    F: "지I",
  },
  30312: {
    이름: "이준혁",
    D1: "영독",
    F: "수과탐",
    E1: "미적",
    B: "언매",
    A: "지I",
    C: "화II",
  },
  30313: {
    이름: "이찬",
    A: "영독",
    C: "수과탐",
    F: "미적",
    D: "화작",
    B: "물과연",
    E: "화II",
  },
  30314: {
    이름: "전성호",
    D1: "영독",
    F: "수과탐",
    C: "지역이해",
    B: "미적",
    E: "언매",
    A: "지I",
  },
  30315: {
    이름: "전한결",
    F: "영독",
    C: "고수I",
    D: "미적",
    B: "언매",
    A: "물과연",
    E: "화II",
  },
  30316: {
    이름: "정승연",
    B: "피지컬",
    C: "영독",
    E1: "미적",
    A1: "언매",
    D: "물II",
    F: "화II",
  },
  30317: {
    이름: "조현준",
    B: "피지컬",
    D1: "영독",
    E1: "미적",
    F1: "언매",
    A: "물과연",
    C: "지I",
  },
  30318: {
    이름: "한상연",
    C: "영독",
    B: "수과탐",
    E1: "미적",
    A1: "언매",
    F: "화II",
    D: "생II",
  },
  30319: {
    이름: "황동진",
    D1: "영독",
    C: "수과탐",
    B: "미적",
    A1: "언매",
    F: "지I",
    E: "화II",
  },
  30401: {
    이름: "강동완",
    D1: "영독",
    F: "수과탐",
    B: "미적",
    E: "언매",
    A: "지I",
    C: "화II",
  },
  30402: {
    이름: "구민회",
    B: "피지컬",
    E: "영독",
    F: "미적",
    A1: "언매",
    D: "물II",
    C: "화II",
  },
  30403: {
    이름: "김보석",
    B2: "영독",
    C: "수과탐",
    F: "미적",
    A1: "언매",
    D: "화I",
    E: "지II",
  },
  30404: {
    이름: "김서원",
    A: "영독",
    F: "수과탐",
    B: "미적",
    D: "화작",
    C: "지I",
    E: "물II",
  },
  30405: {
    이름: "김서진",
    B2: "영독",
    C: "미적",
    A: "인공수",
    F2: "언매",
    E: "물II",
    D: "생II",
  },
  30406: {
    이름: "김은호",
    B: "피지컬",
    E: "영독",
    F: "미적",
    D: "화작",
    A: "물과연",
    C: "지I",
  },
  30407: {
    이름: "김지석",
    B2: "영독",
    C: "수과탐",
    E1: "미적",
    F2: "언매",
    A: "물과연",
    D: "화I",
  },
  30408: {
    이름: "김태윤",
    B2: "영독",
    F: "수과탐",
    C: "미적",
    A1: "언매",
    D: "물II",
    E: "지II",
  },
  30409: {
    이름: "김태현",
    F: "영독",
    B: "고수I",
    E1: "미적",
    A1: "언매",
    D: "물II",
    C: "화II",
  },
  30410: {
    이름: "류견우",
    B2: "영독",
    F: "수과탐",
    E1: "미적",
    A1: "언매",
    C: "생I",
    D: "물II",
  },
  30411: {
    이름: "서민우",
    D1: "영독",
    E1: "미적",
    A: "인공수",
    F2: "언매",
    B: "물과연",
    C: "화II",
  },
  30412: {
    이름: "서지호",
    D: "물II",
    B: "수과탐",
    E1: "미적",
    F2: "언매",
    A: "화과연",
    C: "영독",
  },
  30413: {
    이름: "양동혁",
    D1: "영독",
    C: "수과탐",
    E1: "미적",
    F2: "언매",
    B: "물과연",
    A: "지I",
  },
  30414: {
    이름: "윤준영",
    D1: "영독",
    E1: "미적",
    A: "인공수",
    F2: "언매",
    B: "물과연",
    C: "지I",
  },
  30415: {
    이름: "이선행",
    B2: "영독",
    C: "미적",
    A: "인공수",
    F2: "언매",
    D: "물II",
    E: "지II",
  },
  30416: {
    이름: "장정호",
    D1: "영독",
    B: "수과탐",
    E1: "미적",
    A1: "언매",
    C: "지I",
    F: "화II",
  },
  30417: {
    이름: "조정원",
    B: "피지컬",
    E: "영독",
    D: "미적",
    A2: "언매",
    C: "지I",
    F: "화II",
  },
  30418: {
    이름: "태현준",
    E: "영독",
    F: "미적",
    B: "고수I",
    D: "화작",
    C: "생I",
    A: "지I",
  },
  30419: {
    이름: "현윤수",
    B: "피지컬",
    D: "미적",
    A: "인공수",
    F2: "언매",
    E: "물II",
    C: "화II",
  },
  30501: {
    이름: "강동옥",
    A: "영독",
    B: "고수I",
    F: "미적",
    D: "화작",
    E: "고윤",
    C: "생I",
  },
  30502: {
    이름: "김대희",
    B2: "영독",
    C: "고수I",
    D: "미적",
    E: "언매",
    A: "물I",
    F: "지I",
  },
  30503: {
    이름: "김민준",
    E: "영독",
    B: "고수I",
    F: "미적",
    A2: "언매",
    C: "지I",
    D: "물II",
  },
  30504: {
    이름: "김민찬",
    B: "심영I",
    C: "고수I",
    D: "미적",
    F2: "언매",
    A: "물과연",
    E: "화II",
  },
  30505: {
    이름: "김신원",
    B: "피지컬",
    A: "영독",
    F: "미적",
    C: "화작",
    E: "화II",
    D: "생II",
  },
  30506: {
    이름: "박종우",
    E: "영독",
    B: "고수I",
    F: "미적",
    A2: "언매",
    D: "물II",
    C: "화II",
  },
  30507: {
    이름: "박형기",
    D1: "영독",
    C: "고수I",
    B: "미적",
    A2: "언매",
    F: "지I",
    E: "화II",
  },
  30508: {
    이름: "윤서범",
    D1: "영독",
    C: "지역이해",
    F: "수과탐",
    E2: "미적",
    B: "언매",
    A: "지I",
  },
  30509: {
    이름: "윤지훈",
    D1: "영독",
    C: "고수I",
    B: "미적",
    E: "언매",
    A: "지I",
    F: "화II",
  },
  30510: {
    이름: "윤호림",
    F: "영독",
    C: "수과탐",
    D: "미적",
    A2: "언매",
    B: "물과연",
    E: "화II",
  },
  30511: {
    이름: "이강선",
    D1: "영독",
    B: "수과탐",
    C: "미적",
    E: "언매",
    A: "물I",
    F: "화II",
  },
  30512: {
    이름: "이동건",
    D1: "영독",
    C: "고수I",
    B: "미적",
    E: "언매",
    A: "화과연",
    F: "지I",
  },
  30513: {
    이름: "이용규",
    D1: "영독",
    F: "수과탐",
    E2: "미적",
    B: "언매",
    A: "지I",
    C: "화II",
  },
  30514: {
    이름: "임창대",
    B: "피지컬",
    F: "영독",
    D: "미적",
    A: "지I",
    C: "화작",
    E: "물II",
  },
  30515: {
    이름: "장준혁",
    B2: "영독",
    C: "고수I",
    D: "미적",
    A2: "언매",
    F: "지I",
    E: "화II",
  },
  30516: {
    이름: "정원영",
    D2: "영독",
    F: "수과탐",
    B: "미적",
    E: "언매",
    A: "지I",
    C: "화II",
  },
  30517: {
    이름: "조태상",
    E: "영독",
    B: "고수I",
    F: "미적",
    A2: "언매",
    C: "지I",
    D: "물II",
  },
  30518: {
    이름: "최석헌",
    F: "영독",
    C: "수과탐",
    D: "미적",
    A2: "언매",
    B: "물과연",
    E: "화II",
  },
  30519: {
    이름: "황인승",
    D2: "영독",
    B: "수과탐",
    C: "미적",
    E: "언매",
    A: "물I",
    F: "화II",
  },
  30601: {
    이름: "강동협",
    E: "영독",
    C: "고수I",
    B: "미적",
    F2: "언매",
    A: "화과연",
    D: "물II",
  },
  30602: {
    이름: "고정명",
    B2: "영독",
    C: "미적",
    A: "인공수",
    F2: "언매",
    D: "현세변",
    E: "물II",
  },
  30603: {
    이름: "김기민",
    D2: "영독",
    C: "고수I",
    B: "미적",
    E: "언매",
    A: "화과연",
    F: "지I",
  },
  30604: {
    이름: "김도현",
    D2: "영독",
    B: "수과탐",
    C: "미적",
    E: "언매",
    A: "지I",
    F: "화II",
  },
  30605: {
    이름: "김현우",
    A: "영독",
    B: "고수I",
    F: "미적",
    D: "화작",
    E: "물II",
    C: "화II",
  },
  30606: {
    이름: "도경수",
    C: "영독",
    B: "수과탐",
    E2: "미적",
    F2: "언매",
    A: "물I",
    D: "생II",
  },
  30607: {
    이름: "류성열",
    E: "영독",
    B: "수과탐",
    C: "지역이해",
    F: "미적",
    A2: "언매",
    D: "화I",
  },
  30608: {
    이름: "박용준",
    A: "영독",
    B: "고수I",
    F: "미적",
    C: "화작",
    D: "화I",
    E: "지II",
  },
  30609: {
    이름: "박준용",
    E: "영독",
    B: "고수I",
    F: "미적",
    A2: "언매",
    C: "생I",
    D: "물II",
  },
  30610: {
    이름: "서정호",
    F: "영독",
    B: "고수I",
    D: "미적",
    A2: "언매",
    C: "생I",
    E: "지II",
  },
  30611: {
    이름: "송지훈",
    F: "영독",
    C: "수과탐",
    D: "미적",
    B: "언매",
    A: "물I",
    E: "화II",
  },
  30612: {
    이름: "신진",
    F: "영독",
    C: "고수I",
    D: "미적",
    B: "언매",
    A: "지I",
    E: "화II",
  },
  30613: {
    이름: "오준석",
    B2: "영독",
    E2: "미적",
    A: "인공수",
    C: "화작",
    F: "지I",
    D: "생II",
  },
  30614: {
    이름: "우지성",
    F: "영독",
    D: "미적",
    A: "인공수",
    B: "언매",
    E: "물II",
    C: "화II",
  },
  30615: {
    이름: "이도근",
    B: "심영I",
    D2: "영독",
    E2: "미적",
    F2: "언매",
    A: "물I",
    C: "화II",
  },
  30616: {
    이름: "이성진",
    D2: "영독",
    B: "수과탐",
    C: "미적",
    E: "언매",
    A: "지I",
    F: "화II",
  },
  30617: {
    이름: "임원호",
    D2: "영독",
    B: "수과탐",
    E2: "미적",
    C: "화작",
    A: "화과연",
    F: "지I",
  },
  30618: {
    이름: "장민석",
    A: "영독",
    F: "수과탐",
    B: "미적",
    D: "화작",
    C: "생I",
    E: "물II",
  },
  30619: {
    이름: "정재환",
    D2: "영독",
    F: "수과탐",
    E2: "미적",
    C: "화작",
    B: "물과연",
    A: "지I",
  },
  30701: {
    이름: "강민준",
    E: "영독",
    C: "수과탐",
    B: "미적",
    D: "화작",
    A: "물I",
    F: "지I",
  },
  30702: {
    이름: "강준영",
    D2: "영독",
    B: "수과탐",
    E2: "미적",
    F2: "언매",
    A: "화과연",
    C: "생I",
  },
  30703: {
    이름: "권민석",
    A: "영독",
    F: "수과탐",
    B: "미적",
    C: "화작",
    E: "물II",
    D: "생II",
  },
  30704: {
    이름: "김대헌",
    A: "영독",
    B: "고수I",
    E2: "미적",
    C: "화작",
    F: "지I",
    D: "생II",
  },
  30705: {
    이름: "김용기",
    E: "영독",
    C: "수과탐",
    B: "미적",
    D: "화작",
    A: "지I",
    F: "화II",
  },
  30706: {
    이름: "문현빈",
    D2: "영독",
    C: "수과탐",
    B: "미적",
    A2: "언매",
    F: "지I",
    E: "물II",
  },
  30707: {
    이름: "박규용",
    D2: "영독",
    B: "수과탐",
    C: "미적",
    E: "언매",
    A: "물I",
    F: "화II",
  },
  30708: {
    이름: "박문수",
    D2: "영독",
    B: "수과탐",
    C: "미적",
    E: "언매",
    A: "지I",
    F: "화II",
  },
  30709: {
    이름: "송종휘",
    B: "피지컬",
    D2: "영독",
    F2: "언매",
    C: "미적",
    A: "지I",
    E: "물II",
  },
  30710: {
    이름: "신경호",
    D2: "영독",
    E2: "미적",
    A: "인공수",
    F2: "언매",
    B: "물과연",
    C: "화II",
  },
  30711: {
    이름: "이선용",
    E: "영독",
    F: "미적",
    A: "인공수",
    B: "언매",
    D: "물II",
    C: "화II",
  },
  30712: {
    이름: "이준석",
    E: "영독",
    B: "수과탐",
    D: "미적",
    A2: "언매",
    C: "생I",
    F: "화II",
  },
  30713: {
    이름: "이준형",
    A: "영독",
    C: "고수I",
    D: "미적",
    E: "언매",
    B: "물과연",
    F: "지I",
  },
  30714: {
    이름: "이한선",
    B: "심영I",
    D2: "영독",
    E2: "미적",
    F2: "언매",
    A: "물I",
    C: "지I",
  },
  30715: {
    이름: "이희호",
    D2: "영독",
    B: "수과탐",
    C: "미적",
    E: "언매",
    A: "지I",
    F: "화II",
  },
  30716: {
    이름: "장지후",
    B: "피지컬",
    D2: "영독",
    E2: "미적",
    F2: "언매",
    A: "물과연",
    C: "화II",
  },
  30717: {
    이름: "조승준",
    B2: "영독",
    C: "수과탐",
    E2: "미적",
    A2: "언매",
    D: "물II",
    F: "화II",
  },
  30718: {
    이름: "최진혁",
    D2: "영독",
    B: "고수I",
    E2: "미적",
    C: "화작",
    A: "물과연",
    F: "지I",
  },
  30719: {
    이름: "최현서",
    D2: "영독",
    C: "미적",
    F: "심국",
    B: "언매",
    A: "물과연",
    E: "지II",
  },
  30801: {
    이름: "김선홍",
    E: "영독",
    F: "수과탐",
    D: "미적",
    B: "언매",
    C: "생I",
    A: "지I",
  },
  30802: {
    이름: "김준환",
    F: "영독",
    C: "수과탐",
    D: "미적",
    B: "언매",
    A: "물I",
    E: "화II",
  },
  30803: {
    이름: "김택윤",
    E: "영독",
    B: "고수I",
    F: "미적",
    A2: "언매",
    D: "물II",
    C: "화II",
  },
  30804: {
    이름: "신문선",
    E: "영독",
    F: "미적",
    A: "인공수",
    C: "화작",
    B: "물과연",
    D: "화I",
  },
  30805: {
    이름: "신원호",
    B: "피지컬",
    F: "영독",
    C: "미적",
    A2: "언매",
    D: "생II",
    E: "지II",
  },
  30806: {
    이름: "신형우",
    C: "고수I",
    D: "미적",
    A: "인공수",
    B: "언매",
    F: "지I",
    E: "화II",
  },
  30807: {
    이름: "유충근",
    F: "영독",
    C: "고수I",
    D: "미적",
    B: "언매",
    A: "지I",
    E: "화II",
  },
  30808: {
    이름: "유현빈",
    C: "영독",
    F: "수과탐",
    E2: "미적",
    B: "언매",
    A: "지I",
    D: "물II",
  },
  30809: {
    이름: "윤재현",
    A: "영독",
    B: "고수I",
    E2: "미적",
    D: "화작",
    C: "생I",
    F: "지I",
  },
  30810: {
    이름: "이건우",
    D2: "영독",
    B: "수과탐",
    C: "미적",
    E: "언매",
    A: "지I",
    F: "화II",
  },
  30811: {
    이름: "이상현",
    F: "영독",
    B: "고수I",
    C: "미적",
    A2: "언매",
    D: "화I",
    E: "물II",
  },
  30812: {
    이름: "이성철",
    D2: "영독",
    E2: "미적",
    A: "인공수",
    F2: "언매",
    B: "물과연",
    C: "화II",
  },
  30813: {
    이름: "이종원",
    B: "심영I",
    C: "영독",
    E2: "미적",
    F2: "언매",
    A: "화과연",
    D: "생II",
  },
  30814: {
    이름: "정승민",
    E: "영독",
    F: "미적",
    A: "인공수",
    D: "화작",
    B: "물과연",
    C: "지I",
  },
  30815: {
    이름: "조현우",
    B2: "영독",
    C: "미적",
    F: "심국",
    E: "언매",
    A: "화과연",
    D: "생II",
  },
  30816: {
    이름: "조현준",
    B2: "영독",
    C: "수과탐",
    F: "미적",
    D: "화작",
    A: "물I",
    E: "화II",
  },
  30817: {
    이름: "최시형",
    B: "심영I",
    D2: "영독",
    E2: "미적",
    C: "화작",
    A: "물과연",
    F: "지I",
  },
  30818: {
    이름: "한결",
    A: "영독",
    C: "고수I",
    D: "미적",
    E: "언매",
    B: "물과연",
    F: "지I",
  },
};

let student = {
  30101: "김영민",
  30102: "김영진",
  30103: "박정호",
  30104: "설정현",
  30105: "손예준",
  30106: "안종훈",
  30107: "오성진",
  30108: "윤상원",
  30109: "이민찬",
  30110: "이상원",
  30111: "이우진",
  30112: "이정우",
  30113: "이한별",
  30114: "이형원",
  30115: "임범진",
  30116: "정윤찬",
  30117: "최규현",
  30118: "한재윤",
  30119: "홍기영",
  30201: "강경훈",
  30202: "곽준석",
  30203: "김건우",
  30204: "김대영",
  30205: "김동훈",
  30206: "김웅배",
  30207: "김정우",
  30208: "박대현",
  30209: "박민준",
  30210: "박선욱",
  30211: "박유신",
  30212: "박찬응",
  30213: "배동준",
  30214: "염정운",
  30215: "우상범",
  30216: "이재혁",
  30217: "전성현",
  30218: "최현준",
  30219: "한동현",
  30220: "홍석준",
  30301: "김동현",
  30302: "김태훈",
  30303: "박선우",
  30304: "박선웅",
  30305: "박태인",
  30306: "백경민",
  30307: "신동훈",
  30308: "유익재",
  30309: "이광효",
  30310: "이동호",
  30311: "이원재",
  30312: "이준혁",
  30313: "이찬",
  30314: "전성호",
  30315: "전한결",
  30316: "정승연",
  30317: "조현준",
  30318: "한상연",
  30319: "황동진",
  30401: "강동완",
  30402: "구민회",
  30403: "김보석",
  30404: "김서원",
  30405: "김서진",
  30406: "김은호",
  30407: "김지석",
  30408: "김태윤",
  30409: "김태현",
  30410: "류견우",
  30411: "서민우",
  30412: "서지호",
  30413: "양동혁",
  30414: "윤준영",
  30415: "이선행",
  30416: "장정호",
  30417: "조정원",
  30418: "태현준",
  30419: "현윤수",
  30501: "강동옥",
  30502: "김대희",
  30503: "김민준",
  30504: "김민찬",
  30505: "김신원",
  30506: "박종우",
  30507: "박형기",
  30508: "윤서범",
  30509: "윤지훈",
  30510: "윤호림",
  30511: "이강선",
  30512: "이동건",
  30513: "이용규",
  30514: "임창대",
  30515: "장준혁",
  30516: "정원영",
  30517: "조태상",
  30518: "최석헌",
  30519: "황인승",
  30601: "강동협",
  30602: "고정명",
  30603: "김기민",
  30604: "김도현",
  30605: "김현우",
  30606: "도경수",
  30607: "류성열",
  30608: "박용준",
  30609: "박준용",
  30610: "서정호",
  30611: "송지훈",
  30612: "신진",
  30613: "오준석",
  30614: "우지성",
  30615: "이도근",
  30616: "이성진",
  30617: "임원호",
  30618: "장민석",
  30619: "정재환",
  30701: "강민준",
  30702: "강준영",
  30703: "권민석",
  30704: "김대헌",
  30705: "김용기",
  30706: "문현빈",
  30707: "박규용",
  30708: "박문수",
  30709: "송종휘",
  30710: "신경호",
  30711: "이선용",
  30712: "이준석",
  30713: "이준형",
  30714: "이한선",
  30715: "이희호",
  30716: "장지후",
  30717: "조승준",
  30718: "최진혁",
  30719: "최현서",
  30801: "김선홍",
  30802: "김준환",
  30803: "김택윤",
  30804: "신문선",
  30805: "신원호",
  30806: "신형우",
  30807: "유충근",
  30808: "유현빈",
  30809: "윤재현",
  30810: "이건우",
  30811: "이상현",
  30812: "이성철",
  30813: "이종원",
  30814: "정승민",
  30815: "조현우",
  30816: "조현준",
  30817: "최시형",
  30818: "한결",
};

let diffName;
let diff;

async function initData(f) {
  await axios.get("/schedule/inform").then((res) => {
    // list2 = res.data.list2;
    // list4 = res.data.list4;
    // teacher = res.data.teacher;
    // student = res.data.student;
    // console.log(list2, list4, teacher, student);
    const snackUrl = res.data.snackUrl;
    const notUrl = res.data.noUrl;
    const dDay = res.data.dDay.day;
    let masTime = new Date(dDay);
    const todayTime = new Date();
    diffName = res.data.dDay.name;

    diff = masTime - todayTime;

    document.querySelector("#snackImg").src = snackUrl;
    document.querySelector("#notImg").src = notUrl;
    f();
  });
}
