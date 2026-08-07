const dateInput = document.querySelector("#date");
// date 날짜 항상 어제 날짜까지만 가능하도록
const today = () => {
  //오늘 날짜
  const date = new Date();
  //어제 날짜
  date.setDate(date.getDate() - 1);
  //ISO 형식의 날짜를 문자열로 받은뒤 "T" 를 기준으로 자르고 0번 인덱스 가져와 수정한 값 리턴
  return date.toISOString().split("T")[0]; //2026-08-06T01:42:57.795Z
};
dateInput.max = today();

async function load(date) {
  // 사용자의 날짜를 입력받아서 해당 날짜의 박스오피스 보여주기
  const url =
    "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=6b3cc0fd2fbbc64dc954888b64370810&targetDt=";

  const requestUrl = url + date; // api 서버 경로 + 사용자가 선택한 날짜

  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    console.log(data);
    // 10개만 가져오기
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(dailyBoxOfficeList);

    let result = "";
    dailyBoxOfficeList.forEach((item) => {
      result += `<tr>`;
      result += `<td>${item.rank}</td>`;
      result += `<td>${item.rankInten}</td>`;
      result += `<td><a href='${item.movieCd}'>${item.movieNm}</a></td>`;
      result += `<td>${item.openDt}</td>`;
      result += `<td>${item.audiCnt}</td>`;
      result += `<td>${item.audiAcc}</td>`;
      result += `<td>${item.salesAcc}</td>`;
      result += `</tr>`;
    });

    const table = document.querySelector("table");
    const tbody = table.querySelector("tbody");
    tbody.innerHTML = result;
    table.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

//사용자가 날짜를 변경하면 선택된 날짜 가져와서 데이터 요청하러 가기
dateInput.addEventListener("change", (e) => {
  const selDate = e.target.value; //사용자가 선택한 날 가져와 변수저장
  console.log(selDate);

  // selDate : 2026-08-05 => 20260805
  // 대쉬없애는 방법 2가지
  // 1. selDate.replace("-", "").replace("-", "");
  // 2. selDate.split("-").join("")
  load(selDate.split("-").join("")); // load함수에 매개변수로 보내기
});

// 사용자가 영화명 클릭 시 영화 상세정보 가져와서 화면에 보여주기
// 1) movieCd 가져오기 : href
// 2) a 태그 기능 중지 : e.preventDefault()
// http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=6b3cc0fd2fbbc64dc954888b64370810&movieCd=20124079

const movieDetail = async (movieCd) => {
  const url =
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=6b3cc0fd2fbbc64dc954888b64370810&movieCd=";
  const requestUrl = url + movieCd;
  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    console.log(data);

    const info = data.movieInfoResult.movieInfo;
    // 화면에 보여주기
    let result = `<ul>`;
    result += `<li>영화명 : ${info.movieNm}</li>`;
    result += `<li>영어 영화명 : ${info.movieNmEn}</li>`;
    result += `<li>상영시간 : ${info.showTm}분</li>`;
    // 장르
    let genres = "";
    info.genres.forEach((genne) => {
      genres += `${genres.genreNm},`;
    });
    result += `<li>장르 : ${genres}</li>`;

    // 감독
    let directors = "";
    info.directors.forEach((director) => {
      directors += `${director.genreNm},`;
    });
    result += `<li>감독 : ${genres}</li>`;

    // 출연배우
    let actors = "";
    info.actors.forEach((actor) => {
      directors += `${actor.genreNm},`;
    });
    result += `<li>출연배우 : ${actors}</li>`;
    result += `<li>영화등급 : ${info.audits[0].watchGradeNm}</li>`;
    result += `</ul>`;

    document.querySelector("#detail").innerHTML = result;
  } catch (error) {}
};

document.querySelector("tbody").addEventListener("click", (e) => {
  e.preventDefault();

  const aTag = e.target;
  // 속성 href
  console.log(aTag.href);
  console.log(aTag.getAttribute("href"));
  const movieCd = aTag.getAttribute("href");
  movieDetail(movieCd);
});
