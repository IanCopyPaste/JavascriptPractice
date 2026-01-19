console.time("Program Started");
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

    if (isNaN(txtInpt.value)) {
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
    } else {
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
    for (let numbs of numbers) {
        result += numbs;
    }
    return result / numbers.length;
}
const res = sum(1, 2, 3, 4, 5);

console.log(res)

function rollDice(params) {
    const numOfDice = document.getElementById("numOfDice");
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="assetsImage/${value}.png" alt="Dice ${value}">`)
    }

    diceResult.textContent = `dice: ${values.join(", ")}`
    diceImages.innerHTML = images.join(" ");
}
function addImages() {
    const diceImages = document.getElementById("diceImages");
    const image = `<img src="assetsImage/1.png" alt="Dice 1">`
    diceImages.innerHTML += (image + "niggas");
}

let notes = [];

function addNote() {
    const note = document.getElementById("addNote").value;
    const noteResult = document.getElementById("noteResult");
    const noteContainer = `<p>${note}</p>`

    if (noteResult.value == "") {
        alert("pls enter a corresponding text");
        return;
    }

    noteResult.innerHTML += notes;
}



function closeModal() {
    document.getElementById("overlay").style.display = "none";
}
function openModal() {
    document.getElementById("overlay").style.display = "flex";
}

let objects = ["paper", "scissors", "book", "pen", "crayon"];

objects.forEach(capitalized);
objects.forEach(display);

function capitalized(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
    console.log(element);
}



let countries = ["philippines", "china", "indonesia", "malaysia", "singapore"]
const wordResult = document.getElementById("wordResult");

countries.forEach(countriesInterate);
countries.forEach(displayCountries);

function countriesInterate(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function displayCountries(element) {
    console.log(element);
}

const numsss = [1, 2, 3, 4, 5];

numsss.forEach((element, index) => {
    setTimeout(() => {
        console.log(element);
    }, index * 1000);
});

const person = {
    fname: "ian",
    lname: "adote"
}
console.log(person.fname)

class People {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    displayPerson() {
        console.log(`Name: ${this.name}`);
        console.log(`Gender: ${this.gender}`);
    }
}

const people1 = new People("ian", "Male");

people1.displayPerson();

class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }
}

const user1 = new User("Ian");
const user2 = new User("Ron");
const user3 = new User("Poison");

console.log(`Hello! ${user1.username}!`);
console.log(`Hello! ${user2.username}!`);
console.log(`Hello! ${user3.username}!`);
console.log(`User Count: ${User.userCount}`)

function paper() {
    return "paper";
}

//bato bato pick game basic fundamentals
const displayHand = document.getElementById("display-hand");
const txtWarn = document.getElementById("txt-warn");
const winScore = document.getElementById("winScore");
const loseScore = document.getElementById("loseScore");
const tieScore = document.getElementById("tieScore");

let winS = 0, loseS = 0, tieS = 0;

let cpuHand;
let playerHand;

let isRolled = false;

const hands = ["Paper", "Rock", "Scissors"];

function randomHand() {
    const value = hands[Math.floor(Math.random() * 3) + 0];
    return value
}

function rollHand() {
    cpuHand = randomHand()
    displayHand.value = cpuHand;
    txtWarn.textContent = ""
    isRolled = true;
}

function checkHand() {
    if (cpuHand == undefined) {
        alert("No Enemy Input Yet");
        return;
    } else if (!isRolled) {
        alert("Roll the hand first!");
        return;
    }
    if (cpuHand === playerHand) {
        tieS += 1;
        tieScore.textContent = `Tie: ${tieS}`;
        txtWarn.textContent = "Tie Score!"
    } else if (
        (playerHand === "Rock" && cpuHand === "Scissors") ||
        (playerHand === "Paper" && cpuHand === "Rock") ||
        (playerHand === "Scissors" && cpuHand === "Paper")
    ) {
        winS += 1;
        winScore.textContent = `Wins: ${winS}`;
        txtWarn.textContent = "You Win!"
    } else {
        loseS += 1;
        loseScore.textContent = `Losses: ${loseS}`;
        txtWarn.textContent = "You Lose!"
    }

    isRolled = false;
}
function btnPaper() {
    playerHand = "Paper"
    checkHand()
}
function btnRock() {
    playerHand = "Rock"
    checkHand()
}
function btnScissors() {
    playerHand = "Scissors"
    checkHand()
}

//navigate landing page sample
function toProj3(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


const txtPeople = document.getElementById("people-container");
const ian = {
    fullname: "Ian Adote",
    age: 19,
    isStudent: true,
    hobbies: ["karate", "jellyfish", "cooking"],
    address: {
        street: "Howmart Rd.",
        city: "Quezon City",
        country: "Philippines"

    }
};

const ron = {
    fullname: "Ron Adote",
    age: 19,
    isStudent: true,
    hobbies: ["crive", "travel", "eating"],
    address: {
        street: "Howmart Rd.",
        city: "Quezon City",
        country: "Philippines"

    }
};
const poison = {
    fullname: "fatty poison",
    age: 19,
    isStudent: false,
    hobbies: ["game", "eat", "sleep"],
    address: {
        street: "Nigga Rd.",
        city: "O'block City",
        country: "Philippines"

    }
};

let people = [ian, ron, poison];
let containers = [];

for (let index = 0; index < people.length; index++) {
    const person = people[index];
    const dbContainer = `
    <div>
            <h3>${person.fullname}</h3>
            <p>Age: ${person.age}</p>
            <p>Student: ${person.isStudent}</p>
            <p>Hobbies: ${person.hobbies.join(", ")}</p>
            <p>Address: ${person.address.street}, ${person.address.city}, ${person.address.country}</p>
            <button onclick="deletePerson()"><h2>Delete</h2></button>
    </div>
            `;
    containers.push(dbContainer);
    txtPeople.innerHTML += containers[index];
}

function deletePerson(params) {
    console.log("niggas")
}

const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const dayName = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(days[dayName])

const fill = document.querySelector(".toFill");

fill.innerHTML = `<h1>BOOM!</h1>`

function addNums() {
    let num = 0;

    function addNum() {
       num += 1;
       console.log(num); 
    }
    
    function minusNum() {
       num -= 1;
       console.log(num); 
    }
    
    function getNum() {
        console.log(`Total number is ${num}`);
    }
    return {addNum,minusNum,getNum};
}

const nums = addNums();

nums.addNum();
nums.addNum();
nums.minusNum();
nums.getNum();


function boom() {
    setTimeout(() => {
       fill.innerHTML += `<img src="assetsImage/giphy.gif" alt="?">` 
    }, 2000);
}
console.timeEnd("Program Started");