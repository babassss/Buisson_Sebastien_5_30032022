let urlApi = "http://localhost:3000/api/products/";
//let _id = document.getElementById("id");

let url = window.location;
let id_product = url.search.slice(4);
console.log(url, "url");
let test = document.getElementById("colors").value;
console.log(test);
//Ajout de l'evenement click
let elt_addToCart = document.getElementById("addToCart");
elt_addToCart.addEventListener("click", function () {
  // document.location.href = url;
  localStorage.setItem("canape", JSON.stringify([id_product, colors]));
  //localStorage.clear();
  let tt = localStorage.getItem("canape");
  console.log(JSON.parse(tt));
  if (tt === null) {
    localStorage.setItem("canape", JSON.stringify([]));
  } else {
  }
  //let produitLocalStorage = JSON.parse(localStorage.getItem("canape"));
});

fetch(urlApi + id_product, {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  //integration image + alttxt dans le html
  .then(function (response) {
    console.log(response);
    let elements = document.getElementsByClassName("item__img")[0];
    console.log(elements);
    elements.innerHTML =
      '<img src="' + response.imageUrl + '" alt="' + response.altTxt + '">';
    //integration du prix
    let elt_price = document.getElementById("price");
    console.log(elt_price);
    elt_price.innerHTML = response.price;
    //integration description
    let elt_description = document.getElementById("description");
    console.log(elt_description);
    elt_description.innerHTML = response.description;
    //integration choix de couleurs
    let elt_color = document.getElementById("colors");
    console.log(elt_color);
    let arr_colors = response.colors;
    console.log(arr_colors);
    arr_colors.forEach(function (element) {
      elt_color.innerHTML +=
        '<option value="' + element + '">' + element + "</option>";
    });
  });
