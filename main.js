// array of the words
// 1 == Easy
// 2 == Normal
// 3 == Hard
let words = [
[
    "Rust",
    "Element",
    "Php",
    "Python",
    "Java",
    "code",
    "Town",
    "Scale",
    "Hello",
    "Test",
    "Lorem",
    "Noun",
    "Verb",
    "Word",
    "over",
    "Back",
    "Have",
    "too",
    "here",
    "park",
    "See"
],
[
    "Today",
    "Friends",
    "Have",
    "pensive",
    "respite",
    "Placate",
    "Miser",
    "Dogma",
    "Panache",
    "Gust",
    "Country",
    "Twitter",
    "Roles",
    "Funny",
    "Coding",
    "Github",
    "Testing",
    "Html",
    "bold",
    "Color",
    "white"
],
[
    "JavaScript",
    "Manger",
    "Fashioned",
    "Moment",
    "Questions",
    "November",
    "Always",
    "Acronym",
    "LeetCode",
    "YouTube",
    "Runner",
    "Programing",
    "LinkedIn",
    "Styling",
    "Destructuring",
    "Performance",
    "Secounds",
]
];

let lvl = {
    "Easy" : 6,
    "Normal" : 4,
    "Hard" : 3
}


// Get Elements in Html

let btnSatrt = document.querySelector(".start")
let lvlName = document.querySelector(".lvl")
let secondName = document.querySelector(".secounds")
let word = document.querySelector(".the-word")
let theinput = document.querySelector(".input")
let upcoming = document.querySelector(".upcoming-words")
let timeLeft = document.querySelector(".time span")
let scoreGot = document.querySelector(".score .got")
let scoreTotal = document.querySelector(".score .total")
let finish = document.querySelector(".finish")
let gamelvl = document.querySelector(".gamelvl")
let select = document.querySelector(".select")
let opt = document.querySelectorAll(".select option")

let defultLvl;


select.onclick = function () {
    defultLvl = select.value
    localStorage.setItem("lvl",defultLvl)
    setTimeout(function() {location.reload()},3000)
}
window.onload = function () {
    select.value = localStorage.getItem("lvl")
    defultLvl = localStorage.getItem("lvl")
}

let lvlSocund = lvl[localStorage.getItem("lvl")]

lvlName.innerHTML = localStorage.getItem("lvl");
secondName.innerHTML = lvlSocund;


let scoretotal;
if (localStorage.getItem("lvl") == "Easy") {
    scoretotal = words[0].length
} else if (localStorage.getItem("lvl") == "Normal") {
    scoretotal = words[1].length
}  else if (localStorage.getItem("lvl") == "Hard") {
    scoretotal = words[2].length
} 
scoreTotal.innerHTML = scoretotal
let TimeLeft = lvlSocund
timeLeft.innerHTML = TimeLeft

btnSatrt.onclick = function () {
    btnSatrt.style.display = "none"
    theinput.value = ""
    theinput.focus()
    word.innerHTML = ""
    getRandomWord ()
    finish.style.display = "none"
    scoreGot.innerHTML = "0"
    timeLeft.innerHTML = TimeLeft
    gamelvl.style.display = "none"
}

theinput.onpaste = function (){
    return false
}

function getRandomWord () {
    if (defultLvl === "Easy") {
        let randomWord = words[0][Math.floor(Math.random() * words[1].length)]
        word.append(randomWord)
        let indexWord = words[0].indexOf(randomWord)
        words[0].splice(indexWord,1)
        upcoming.innerHTML = ""
        for(let i = 0; i < words[0].length; i++) {
            let div = document.createElement("div")
            let txt = document.createTextNode(words[0][i])
            div.appendChild(txt)
            upcoming.appendChild(div)
        }

    } else if (defultLvl === "Normal") {
        let randomWord = words[1][Math.floor(Math.random() * words[1].length)]
        word.append(randomWord)
        let indexWord = words[1].indexOf(randomWord)
        words[1].splice(indexWord,1)
        upcoming.innerHTML = ""
        for(let i = 0; i < words[1].length; i++) {
            let div = document.createElement("div")
            let txt = document.createTextNode(words[1][i])
            div.appendChild(txt)
            upcoming.appendChild(div)
        }

    } else if (defultLvl === "Hard") {
        let randomWord = words[2][Math.floor(Math.random() * words[2].length)]
        word.append(randomWord)
        let indexWord = words[2].indexOf(randomWord)
        words[2].splice(indexWord,1)
        upcoming.innerHTML = ""
        for(let i = 0; i < words[2].length; i++) {
            let div = document.createElement("div")
            let txt = document.createTextNode(words[2][i])
            div.appendChild(txt)
            upcoming.appendChild(div)
        }
    }
    startPlay ()
}


function startPlay () {
    timeLeft.innerHTML = TimeLeft
    let time = setInterval(() => {
        timeLeft.innerHTML--;
        if (timeLeft.innerHTML === "0") {
            clearInterval(time)

            if (defultLvl === "Easy" &&
                word.innerHTML.trim().toLowerCase() === theinput.value.toLowerCase()) {
                    theinput.value = "";
                    scoreGot.innerHTML++
                    if (words[0].length > 0) {
                        word.innerHTML = ""
                        getRandomWord ()
                    } else {
                        let span = document.createElement("span")
                        let txt = document.createTextNode("عااااش")
                        span.append(txt)
                        finish.append(span)
                        finish.style.backgroundColor = "green"
                        finish.style.display = "block"
                    }
            } 
            else if (defultLvl === "Normal" &&
                word.innerHTML.trim().toLowerCase() === theinput.value.toLowerCase()) {
                    theinput.value = "";
                    scoreGot.innerHTML++
                    if (words[1].length > 0) {
                        word.innerHTML = ""
                        getRandomWord ()
                    } else {
                        let span = document.createElement("span")
                        let txt = document.createTextNode("عااااش")
                        span.append(txt)
                        finish.append(span)
                        finish.style.backgroundColor = "green"
                        finish.style.display = "block"
                        setInterval(function() {span.innerHTML+="."},800)
                        setTimeout(function() {location.reload()},3000)
                    }
            } 
            else if (defultLvl === "Hard" &&
                word.innerHTML.trim() === theinput.value) {
                    theinput.value = "";
                    scoreGot.innerHTML++
                    if (words[2].length > 0) {
                        word.innerHTML = ""
                        getRandomWord ()
                    } else {
                        let span = document.createElement("span")
                        let txt = document.createTextNode("عااااش")
                        span.append(txt)
                        finish.append(span)
                        finish.style.backgroundColor = "green"
                        finish.style.display = "block"
                        setInterval(function() {span.innerHTML+="."},800)
                        setTimeout(function() {location.reload()},3000)
                    }
            } else {
                let span = document.createElement("span")
                let txt = document.createTextNode("Game Over")
                span.append(txt)
                finish.append(span)
                finish.style.display = "block"
                setInterval(function() {span.innerHTML+="."},800)
                setTimeout(function() {location.reload()},3000)
            }
        }
    }, 1000)
}
