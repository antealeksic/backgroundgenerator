//select h3, color1 and color 2 and body
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//d.r.y. so i will make a function of body.style... so we dont repeat ourselves

function setGradient() {
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
    //adding text to css var
    css.textContent = body.style.background + ",";

}

// grabbing colors with event listener (ovo sam prvo pisao)

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

