// 1.1
var numar = 10;
let text = "Salut!";
const adevarat = true;

// 1.2
const tipDeDate = (text) => typeof text;
tipDeDate.forEach(element => console.log(typeof element));


// 1.3
let stringToNumber = Number("14");
let numberToString = String(24);

// 1.4
let numele = "Victoria";
let varsta = 20;
let mesaj = `Ma numesc ${numele} si am ${varsta} ani.`;

// 1.5
let a = 5;
let b = 10;
[a, b] = [b, a];
// const [nr1,nr2]=[5,8,2]
// 1.6
const verificaNullSauUndefined = (variabila) => variabila == null;

// 1.7
let obiect = { nume: "Victoria", varsta: 20, activ: true, adresa: "Chisinau" };
delete obiect.activ;

// 1.8
let array = [42, "test", true, null, { key: "value" }];
array.forEach(element => console.log(typeof element));







// 2.1
const sum = (a, b) => a + b;

// 2.2
const arieDreptunghi = (latime, inaltime = 1) => latime * inaltime;

// 2.3
const patrat = (numar) => numar ** 2;

// 2.4
const stringUpperCase = (text) => ({ lungime: text.length, textMajuscule: text.toUpperCase() });

// 2.5
const calcule = (numar) => ({ dublu: numar * 2, patrat: numar ** 2 });

// 2.6
const sumaArrow = (a, b) => a + b;

// 2.7
const functie = (array, f) => array.map(f);










// 3.1
let masina = { marca: "Toyota", model: "Corolla", an: 2020 };

// 3.2
console.log(masina.marca, masina["model"]);

// 3.3
masina = { ...masina, culoare: "rosu", an: 2023 };

// 3.4
delete masina.model;

// 3.5
Object.entries(masina)
.forEach(([cheie, valoare]) => console.log(`${cheie}: ${valoare}`));

// 3.6
masina.descriere = function() { return `Marca: ${this.marca}, An: ${this.an}, Culoare: ${this.culoare}`; };

// 3.7
const persoana = (nume, varsta) => `Salut! Ma numesc ${nume} si am ${varsta} ani.`;

// 3.8
console.log("culoare" in masina);

// 3.9
let casa = { adresa: { strada: "Stefan cel Mare", oras: "Chisinau" } };

// 3.10
const creeazaStudent = (nume, varsta, nota) => ({ nume, varsta, nota });

// 3.11
let masinaNoua = { ...masina };

// 3.12
const calculator = {
    adunare: (a, b) => a + b,
    scadere: (a, b) => a - b,
    inmultire: (a, b) => a * b,
    impartire: (a, b) => a / b
};

// 3.13
const { marca, an } = masina;
















// 4.1
let orase = ["Chisinau", "Bucuresti", "Iasi"];
console.log(orase.at(0), orase.at(-1));

// 4.2
orase = ["Timisoara", ...orase, "Cluj"].slice(0, -1);

// 4.3
let culori = ["rosu", "verde", "albastru"];
culori.forEach(culoare => console.log(culoare));

// 4.4
let animale = ["caine", "pisica", "elefant"];
animale.forEach(animal => console.log(`Animal: ${animal}`));

// 4.5
const filtreazaNumere = (arr) => arr.filter(num => num > 10);

// 4.6
let numere = [5, 15, 3, 20].sort((a, b) => a - b);

// 4.7
let patrate = numere.map(num => num ** 2);
let sumaElemente = numere.reduce((acc, val) => acc + val, 0);

// 4.8 
const numbers = [1, 2, 3, 4, 5];
const suma = numbers.reduce((acc, val) => acc + val, 0);
console.log(suma);

// 4.9 
const fructe = ["mar", "banana", "portocala"];
console.log(fructe.includes("banana")); 
console.log(fructe.indexOf("banana") !== -1); 

// 4.10 
const array1 = ["Salut", "lume"];
const array2 = ["bine", "venit"];
const rezultat = array1.concat(array2);
const rezultat2 = [...array1, ...array2];
console.log(rezultat, rezultat2);

// 4.11 
const matrice = [[1, 2], [3, 4]];
console.log(matrice[0][1]);

// 4.12 
function eliminaDuplicate(arr) {
    return [...new Set(arr)];
}
console.log(eliminaDuplicate([1, 2, 2, 3, 4, 4, 5]));

// 4.13 
const arr = [10, 20, 30, 40, 50];
const subArray = arr.slice(1, 4);
console.log(subArray);
arr.splice(2, 1);
console.log(arr);











// 5.1 
document.getElementById("titlu").textContent = "Text nou";

// 5.2 
document.querySelectorAll("li").forEach(li => li.style.color = "red");

// 5.3 
const p = document.createElement("p");
p.textContent = "Paragraf nou";
document.getElementById("container").appendChild(p);

// 5.4 
document.querySelector("img").src = "new_image.jpg";

// 5.5 
document.getElementById("box").classList.add("noua-clasa");

// 5.6 
document.querySelector("p").remove();

// 5.7 
document.getElementById("buton").addEventListener("click", () => {
    document.querySelector("h2").textContent = "Text modificat";
});

// 5.8 
document.getElementById("input").addEventListener("input", (e) => {
    document.getElementById("output").textContent = e.target.value;
});

// 5.9 
const lista = document.querySelector("ul");
console.log(lista.firstElementChild.textContent, lista.lastElementChild.textContent);

// 5.10 
document.getElementById("buton").addEventListener("click", () => {
    document.getElementById("element").classList.toggle("active");
});

// 5.11 
const table = document.createElement("table");
for (let i = 0; i < 3; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 2; j++) {
        const cell = row.insertCell();
        cell.textContent = `R${i+1}C${j+1}`;
    }
}
document.body.appendChild(table);

// 5.12 
document.getElementById("add").addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "Element nou";
    document.querySelector("ul").appendChild(li);
});













// 7.1
setTimeout(() => console.log("Salut!"), 2000);


// 7.2
let count = 1;
const interval = setInterval(() => count > 5 ? clearInterval(interval) : console.log(count++), 1000);




// 7.3
const salut = callback => (console.log("Salut!"), callback());
salut(() => console.log("Callback apelat"));




// 7.4
function asteapta() {
    return new Promise(resolve => setTimeout(() => resolve("Gata!"), 2000));
}


// 7.5 returnează o promisiune de a furniza 
// valoarea la un moment dat în viitor
function promisiune(val) {
    return new Promise((resolve, reject) => {
        val ? resolve("Succes!") : reject("Eroare!");
    });
}


// 7.6
async function executa() {
    const rezultat = await asteapta();
    console.log(rezultat);
}
executa();


// 7.7 „rezolvă” o valoare dată la o Promisiune.
// Promise.resolve() va apela metoda then()
// cu două callback-uri pregătite;
function f1() { return Promise.resolve("f1"); }
function f2() { return Promise.resolve("f2"); }
function f3() { return Promise.resolve("f3"); }
f1().then(console.log).then(f2).then(console.log).then(f3).then(console.log);


// 7.8
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => console.log(data));


// 7.9
Promise.all([f1(), f2(), f3()]).then(console.log);
Promise.allSettled([f1(), f2(), f3()]).then(console.log);








// 8.1
export function adunare(a, b) { return a + b; }
export function scadere(a, b) { return a - b; }


// 8.2
import { adunare, scadere } from "./mathUtils.js";
console.log(adunare(5, 3), scadere(5, 3));


// 8.3
export default function salut() { console.log("Salut!"); }


// 8.4
import hello from "./salutari.js";
hello();


// 8.5
export const nume = "Ion";
export const age = 25;


// 8.6
import * as date from "./dateUtilizator.js";
console.log(date.nume, date.varsta);







