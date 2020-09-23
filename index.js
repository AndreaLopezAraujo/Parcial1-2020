url =
  "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";
  
const info = document.getElementById("info");
valor="Burguers";
function changeContent(valor) {
  info.innerHTML = "<h2> <hr>Burguers<hr></h2>"
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
        let comidas;
        i=0;
        if(valor=="Tacos")
        {
            i=1;
        }
        else if (valor=="Salads")
        {
            i=2;
        }
        else if (valor=="Desserts")
        {
            i=3;
        }
        else if (valor=="Drinks and Sides")
        {
            i=4;
        }
        comidas=json[i].products;
      for (let o of comidas) {
        let content = `<div class="card">\
        <img src="${o["image"]}" class="card-img-top" alt="${o["name"]}">\
        <div class="card-body">\
          <h5 class="card-title">${o["name"]}</h5>\
          <p class="card-text">${o["description"]}</p>\
          <p class="card-text">${o["price"]}</p>\
          <button type="button" class="btn btn-dark">Add to car</button>
        </div>\
        </div>`;
        info.innerHTML += content;
      }
    });
    console.log(fetch(url))
}

changeContent(valor)

const p_burguers = document.getElementById("burguers_but")
p_burguers.addEventListener("click", () => {
    valor="Burguers";
  changeContent(valor)
})
const p_tacos = document.getElementById("tacos_but")
p_tacos.addEventListener("click", () => {
    valor="Tacos";
  changeContent(valor)
})
const p_salads = document.getElementById("salads_but")
p_salads.addEventListener("click", () => {
    valor="Salads";
  changeContent(valor)
})
const p_desserts = document.getElementById("desserts_but")
p_desserts.addEventListener("click", () => {
    valor="Desserts";
  changeContent(valor)
})
const p_drinks = document.getElementById("drinks_but")
p_drinks.addEventListener("click", () => {
    valor="Drinks and Sides";
  changeContent(valor)
})
