url =
    "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";

const info = document.getElementById("info");
const totalCarrito = document.getElementById("numero");
let total = "";
const carritoTotal = [];
elementos = 0;
numero = 0;
encontrado = false;
i = 0;
valor = "Burguers";
function changeContent(valor) {
    info.innerHTML = "";
    totalCarrito.innerHTML = numero + " items";
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            let titulo = `<h2 align="center"><hr>${valor}<hr></h2>`;
            let ini = `<div class="card-deck">`;
            let fin = `</div>`;
            let comidas;
            if (valor == "Tacos") {
                i = 1;
                comidas = json[i].products;
                Concomidas(comidas);
                info.innerHTML = titulo + ini + total + fin;
            }
            else if (valor == "Salads") {
                i = 2;
                comidas = json[i].products;
                Concomidas(comidas);
                info.innerHTML = titulo + ini + total + fin;
            }
            else if (valor == "Burguers") {
                i = 0;
                comidas = json[i].products;
                Concomidas(comidas);
                info.innerHTML = titulo + ini + total + fin;
            }
            else if (valor == "Desserts") {
                i = 3;
                comidas = json[i].products;
                Concomidas(comidas);
                info.innerHTML = titulo + ini + total + fin;
            }
            else if (valor == "Drinks and Sides") {
                i = 4;
                comidas = json[i].products;
                Concomidas(comidas);
                info.innerHTML = titulo + ini + total + fin;
            }
            else if (valor == "Order detail") {
                let tablaIn = `<table class="table">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Qty.</th>
                    <th scope="col">Description</th>
                    <th scope="col">Until Price</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead><tbody>`;
                let tableFin = `</tbody>
                </table>`;
                recoCarrito();
                let botones = `<div class="float-right">
                <button class="botonOscuro" onclick="Cancelar()">Cancel</button>
                <button class="botonClaro" onclick="Confirmar()">Confirm order</button>
                </div>`
                info.innerHTML = titulo + tablaIn + total + tableFin + botones;
            }
        });
    console.log(fetch(url))
}
function Concomidas(comidas) {

    total = "";
    for (let o of comidas) {
        let content = `<div class="card mb-3" style="min-width: 15rem;">\
<img src="${o["image"]}" class="card-img-top" alt="${o["name"]}">\
<div class="card-body">\
  <h5 class="card-title">${o["name"]}</h5>\
  <p class="card-text">${o["description"]}</p>\
  <p class="card-text">$${o["price"]}</p>\
  <button type="button" class="btn btn-dark" id="${o["name"]}" onclick="Carrito(this,'${o["name"]}',${o["price"]})">Add to car</button>
</div>\
</div>`;
        total += content;
    }
}
function recoCarrito() {

    total = "";
    for (let o of carritoTotal) {
        let content = `<tr>
        <th>${o["Item"]}</th>
        <td>${o["Qty"]}</td>
        <td>${o["Description"]}</td>
        <td>${o["Until"]}</td>
        <td>${o["Amount"]}</td>
      </tr>`;
        total += content;
    }
}
function Confirmar() {

    for (let o of carritoTotal) {
        console.log(o);
    }
}
function Carrito(elmnt, name, price) {
    numero++;
    totalCarrito.innerHTML = numero + " items";
    if (numero > 1) {
        buscar(name);
        if (!encontrado) {
            elementos++
            let cos = { "Item": elementos, "Qty": 1, "Description": name, "Until": price, "Amount": price };
            carritoTotal.push(cos);
        }
        else {
            encontrado = false;
        }
    }
    else {
        elementos++
        let cos = { "Item": elementos, "Qty": 1, "Description": name, "Until": price, "Amount": price };
        carritoTotal.push(cos);
    }
    console.log(carritoTotal);
}
function buscar(name1) {
    for (let o of carritoTotal) {
        if (o.Description == name1) {
            o.Qty++;
            o.Amount += o.Until;
            encontrado = true;
        }
    }
}
function Cancelar() {
    var mensaje;
    alert("Cancel order")
    var opcion = prompt("Introduzca su nombre:", "Aner Barrena");

    if (opcion == null || opcion == "") {
        mensaje = "Has cancelado o introducido el nombre vacío"
    ;
    } else {
        mensaje = "Hola " + opcion;
    }
    document.getElementById("ejemplo").innerHTML = mensaje;
}
changeContent(valor)

const p_burguers = document.getElementById("burguers_but")
p_burguers.addEventListener("click", () => {
    valor = "Burguers";
    changeContent(valor)
})
const p_tacos = document.getElementById("tacos_but")
p_tacos.addEventListener("click", () => {
    valor = "Tacos";
    changeContent(valor)
})
const p_salads = document.getElementById("salads_but")
p_salads.addEventListener("click", () => {
    valor = "Salads";
    changeContent(valor)
})
const p_desserts = document.getElementById("desserts_but")
p_desserts.addEventListener("click", () => {
    valor = "Desserts";
    changeContent(valor)
})
const p_drinks = document.getElementById("drinks_but")
p_drinks.addEventListener("click", () => {
    valor = "Drinks and Sides";
    changeContent(valor)
})
const p_carrito = document.getElementById("carrito_but")
p_carrito.addEventListener("click", () => {
    valor = "Order detail";
    changeContent(valor)
})
