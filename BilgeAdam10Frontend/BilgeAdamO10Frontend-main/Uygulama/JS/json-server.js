//"https://jsonplaceholder.typicode.com/" URL'ini kullanarak users adresine birer adet get, post, patch, put ve delete isteği gönderin.

// GET
function getData(url, callback) {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      // TODO: response alınacak
      const response = JSON.parse(request.responseText);
      callback("Data çekildi.", response);
    } else if (request.readyState === 4) {
      // TODO: hata mesajı verilecek.
      callback("Data çekilemedi.");
    }
  });

  request.open("GET", url);
  request.send();
}
getData("https://jsonplaceholder.typicode.com/users", (message, data) => {
  console.log(message);
  if (data) {
    console.log(data);
  }
});

// POST
function postData(url, data, callback) {
  const http = new XMLHttpRequest();
  const params = JSON.stringify(data);
  http.open("POST", url, true);

  http.setRequestHeader("Content-type", "application/json");

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText);
    }
  };
  http.send(params);
}

const user1 = {
  id: 152,
  name: "as sa",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

postData(
  "https://jsonplaceholder.typicode.com/users",
  user1,
  (message, data) => {
    console.log(message);
    if (data) {
      console.log(data);
    }
  }
);
