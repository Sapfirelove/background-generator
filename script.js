var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + " )";

    css.textContent = body.style.background + ";";
}

function setRandomColor(){

	color1.value = "#"+(Math.floor(Math.random()*(0x1000000))).
	toString(16); 
	color2.value = "#"+(Math.floor(Math.random()*(0x1000000))).
	toString(16); 
	setGradient();
	
}

color1.value= "#00FF00";
color2.value= "#FF0000";
setGradient();

  
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

btn.addEventListener("click", setRandomColor);