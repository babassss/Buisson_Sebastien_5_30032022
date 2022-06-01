let urlApi = "http://localhost:3000/api/products/";
//let _id = document.getElementById("id");

let url = window.location;
console.log(url.search.slice(4));

fetch(urlApi + url.search.slice(4), {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    let elements = document.getElementsByClassName("item__img")[0];
    console.log(elements);
    elements.innerHTML =
      '<img src="' + response.imageUrl + '" alt="' + response.altTxt + '">';

    let elt_color = document.getElementById("colors");
    console.log(elt_color);
    let arr_colors = response.colors;
    console.log(arr_colors);
    arr_colors.forEach(function (element) {
      elt_color.innerHTML +=
        '<option value="' + element + '">' + element + "</option>";
    });
  });
