// fetch() : 서버와 네트워크 요청을 보낼대 사용하는 함수
//           기본 Get

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
