let urlApi = "http://localhost:3000/api/products";
let elements =
  '<a href="./product.html?id=' +
  urlApi +
  '">' +
  "<article>" +
  '<img src=".../' +
  urlApi +
  '" alt="' +
  urlApi +
  '">' +
  '<h3 class="productName">' +
  urlApi +
  "</h3>" +
  '<p class="productDescription">' +
  urlApi +
  "</p>" +
  "</article>" +
  "</a>";
let element_items = document.getElementById("items");

let fr = `jevno${elements}`; // 2 iem méthode

fetch(urlApi, {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    response.forEach((element) => {
      element_items.innerHTML +=
        '<a href="./product.html?id=' +
        element._id +
        '">' +
        "<article>" +
        '<img src="' +
        element.imageUrl +
        '" alt="' +
        element.altTxt +
        '">' +
        '<h3 class="productName">' +
        element.name +
        "</h3>" +
        '<p class="productDescription">' +
        element.description +
        "</p>" +
        "</article>" +
        "</a>";
    });
  });
