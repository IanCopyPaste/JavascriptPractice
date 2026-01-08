const tomato = document.getElementById("tomato");
const potato = document.getElementById("potato");
const male = document.getElementById("male");
const female = document.getElementById("female");

let labels = document.getElementById("wc-label");

const vegLbl = document.getElementById("show-veg");
const genderLbl = document.getElementById("show-gender");

function hehe() {
    let ngalan = document.getElementById("texted").value;
    labels.textContent = `Welcome ${ngalan}`
    if (tomato.checked && potato.checked) {
        vegLbl.textContent = "You eat potato and tomato!";
    } else if (tomato.checked) {
        vegLbl.textContent = "You eat tomato!";
    } else if (potato.checked) {
        vegLbl.textContent = "You eat potato!";
    }

    if (male.checked) {
        genderLbl.textContent = "You are Male!";
    } else if (female.checked) {
        genderLbl.textContent = "You are Female!";
    }
}

function checkAge() {
    let age = parseInt(document.getElementById("txt-tenary").value);
    let lbl = document.getElementById("p-result");

    age >= 18
        ? lbl.textContent = "You are an Adult"
        : lbl.textContent = "You are a Minor"
}

function testMethod() {
    const strMethod = document.getElementById("txt-method").value;
    const strLabel = document.getElementById("strLabel");
    strLabel.textContent = strMethod.trim();


}

const strNum = "123";
const no = 123;

if (strNum !== no) {
    console.log("true")
} else {
    console.log("false")
}

let word = "niggas-in-da-hood"
console.log(word)
let check = word.replaceAll("o", " ");
console.log(check);

let max = 100;
let min = 1;

let ans = Math.floor(Math.random() * (max - min + min));
console.log(ans);


function rollRandomNum() {
    let num = Math.floor(Math.random() * 10) + 1;
    let inptNum = document.getElementById("inpt-number");
    let warn = document.getElementById("txt-warning");

    if (isNaN(inptNum.value)) {
        alert("pls enter a number");
        inptNum.textContent = ""
        return;
    } else if (inptNum.value > 10 || inptNum.value < 1) {
        alert("pls enter valid number");
        return;
    }
    document.getElementById("txt-number").textContent = num;

    if (num == inptNum.value) {
        warn.textContent = "Correct!";
    } else {
        warn.textContent = "Incorrect!";
    }
}

function convertTemp() {
    const txtInpt = document.getElementById("txt-convert");
    const c_t = document.getElementById("c-t");
    const t_c = document.getElementById("t-c");
    const showTemp = document.getElementById("show-temp");
    let temp;

    if(isNaN(txtInpt.value)){
        alert("Please enter a valid number!")
        return;
    }

    if (c_t.checked) {
        temp = Number(txtInpt.value);
        temp = temp * 9 / 5 + 32;
        showTemp.textContent = temp.toFixed(1) + "°F";
    } else if (t_c.checked) {
        temp = Number(txtInpt.value);
        temp = (temp - 32) * (5 / 9);
        showTemp.textContent = temp.toFixed(1) + "°C";
    }else{
        showTemp.textContent = "Please select a unit."
    }
}

let cars = ["toyota", "mistubishi", "hyundai", "nissan", "ford"]
let carsWord = cars[0];
let lenlen = [...carsWord]; 

console.log(lenlen.join('-'));
console.log(cars.join(" "))

function sum(...numbers) {
    let result = 0;
    for(let numbs of numbers){
        result += numbs;
    }
    return result/numbers.length;
}
const res = sum(1,2,3,4,5);

console.log(res)

function rollDice(params) {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="assetsImage/${value}.png" alt="Dice ${value}">`)
    }

    diceResult.textContent = `dice: ${values.join(", ")}`
    diceImages.innerHTML = images.join("");
    //diceImages.innerHTML = "<h1>Niggas</h1>";
}
function addImages() {
    const diceImages = document.getElementById("diceImages");
    const image = `<img src="assetsImage/1.png" alt="Dice 1">`
    diceImages.innerHTML += (image + "niggas");
}

function addNote() {
    
    const note = document.getElementById("addNote").value;
    const noteResult = document.getElementById("noteResult");
    const noteContainer = `<p>${note}</p>`

    if (noteResult.value == "") {
        alert("pls enter a corresponding text");
        return;
    }
    noteResult.innerHTML += noteContainer;
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
}
function openModal() {
    document.getElementById("overlay").style.display = "flex";
}