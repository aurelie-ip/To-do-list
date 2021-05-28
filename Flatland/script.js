let square = document.getElementById('square');
let words = document.getElementById('words');

square.addEventListener('click', (event) => clicked())
square.addEventListener('mouseover', (event) => changeColour('grey'))
square.addEventListener('mouseout', (event) => changeColour('red'))

function changeColour(colour){
    square.style.background = colour;
}

document.onload = greeting();



function greeting(){
    console.log("Welcome to Flatland, I am Square");
    words.innerHTML = "Welcome to flatland, I am Square";
}

function clicked(){
    let msg = "Build a <br>" + createBuzzwordPhrase()
    words.innerHTML = msg;
}
function createBuzzwordPhrase() {
    /* See https://en.wikipedia.org/wiki/List_of_buzzwords */
    let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
    let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
    let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

    let idx_buz = Math.floor(Math.random() * buzz.length);
    let idx_act = Math.floor(Math.random() * action.length);
    let idx_out = Math.floor(Math.random() * outcome.length);

    return  buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}