// JS for shopping list.
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let list = document.querySelectorAll("li");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value ="";
    let btns = document.createElement("button");
    btns.appendChild(document.createTextNode("Delite"));
    li.append(btns);
    btns.addEventListener("click", function(){
        this.parentNode.remove();
    })
    li.addEventListener("click", function(){
        this.classList.toggle("done");
    })
}

for (let i=0; i < list.length; i++){
    list[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}

for(let i=0; i < list.length; i++){
    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    list[i].append(btn);
    btn.addEventListener("click", function(){
        this.parentNode.remove();
    })
}

function addEventClick(){
    if (inputLength() > 0){
        createListElement();
    }
}

function addEventKeypress(press){
        if(inputLength() > 0 && press.keyCode === 13){
            createListElement();
        }
}

button.addEventListener("click", addEventClick);

input.addEventListener("keypress", addEventKeypress);


// JS for gradient background generator. 
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function addGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + "; - "+ color1.value + ", " + color2.value + ". ";
}
color1.addEventListener("input", addGradient);

color2.addEventListener("input", addGradient);