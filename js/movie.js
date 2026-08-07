async function load() {
  const targetDt = document.querySelector("#targetDt").value;

  const response = await fetch(
    `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=6b3cc0fd2fbbc64dc954888b64370810&targetDt=${targetDt}`,
  );

  const data = await response.json();
  const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

  let result = "<ul>";

  dailyBoxOfficeList.forEach((item) => {
    result += `<li>🔢랭킹 : ${item.rank}</li>`;
    result += `<li>📅개봉일 : ${item.openDt}</li>`;
    result += `<li>🎥영화이름 : ${item.movieNm}</li>`;
    result += "------------------------------------------";
  });

  result += "</ul>";

  document.querySelector("div").innerHTML = result;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  load();
});
