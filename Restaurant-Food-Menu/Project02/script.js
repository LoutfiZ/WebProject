const entrees = {
  "Choisir..." : {
    image: 'images/Choisir.jpg',
    price: 0,
  },
  "Salade" : {
    image: 'images/Salade.jpg',
    price: 5.95,
  },
    "Escargot" : {
      image: 'images/Escargot.jpg',
      price: 4.95,
    }
}

const listeRepas = {
  "Choisir..." : {
    image: 'images/Choisir.jpg',
    price: 0,
  },
  "Spaghetti" : {
    image: 'images/Spaghetti.jpg',
    price: 8.95,
  },
    "Lasagne" : {
      image: 'images/Lasagne.jpg',
      price: 9.95,
    }
}

let sum = 0;
let taxes = 0;
let totalSum = 0;
let tempRepas  = 0;
let tempEntree  = 0;

window.onload = function () {
fillSelect('entree', entrees);
fillSelect('repas', listeRepas);
}

function fillSelect(element_id, option_array) {
let optionsHTML = '';
for (let entree in option_array) {
  optionsHTML += `<option value="${entree}">${entree}</option>`;
}
document.getElementById(element_id).innerHTML = optionsHTML;
}

function handleOnEntreeChange() {
  const selEntree = document.getElementById('entree').value;
    tempEntree = entrees[selEntree].price;
    document.getElementById('image-view').src = entrees[selEntree].image;      
    document.getElementById('entreePrix').innerHTML = +entrees[selEntree].price == 0 ? "" : entrees[selEntree].price;
    sumC();
}

function handleOnRepasChange() {
  const selrepas = document.getElementById('repas').value;
    tempRepas = listeRepas[selrepas].price;
    document.getElementById('image-view1').src = listeRepas[selrepas].image;      
    document.getElementById('repasPrix').innerHTML = +listeRepas[selrepas].price == 0 ? "" : listeRepas[selrepas].price;
    sumC();
}

function sumC(){
const taxesP = 0.15;
sum = (tempEntree+tempRepas);
taxes = (sum*taxesP);
totalSum = sum +taxes;
document.getElementById('sumResult').innerHTML = sum.toFixed(2) + "$";
document.getElementById('taxesResult').innerHTML = taxes.toFixed(2) + "$";
document.getElementById('totalSumResult').innerHTML = totalSum.toFixed(2) + "$";
}

