let planets = [
    {name: "Mercury", inner: true, diameter: 3031.9, color: "#696969"},
    {name: "Venus", inner: true, diameter: 7520.8, color: "#b89165"},
    {name: "Earth", inner: true, diameter: 7917.5, color: "#5a5b86"},
    {name: "Mars", inner: true, diameter: 4212.3, color: "#df8c4e"},
    {name: "Jupiter", inner: false, diameter: 86881, color: "#f6a049"},
    {name: "Saturn", inner: false, diameter: 72367, color: "#dcd3a1"},
    {name: "Uranus", inner: false, diameter: 31518, color: "#b4d9df"},
    {name: "Neptune", inner: false, diameter: 30599, color: "#456eff"},
];
planets.forEach(p => console.log(p.name))

function averageDiameter(parameter){
    return "Average Diameter:" + parameter.reduce((x, y) => x + y.diameter, 0) / parameter.length;
    
}
console.log(averageDiameter(planets));

let index = 0;
let indexNode = document.querySelector("#index")
let increaseNode = document.querySelector("#increase");
let decreaseNode = document.querySelector("#decrease");
let planetNode = document.querySelector("#planet")
let typeNode = document.querySelector("#type")
let displayNode = document.querySelector("#display")

function displayIndex(){
    indexNode.innerText = "Index: " + index;
}

function decrease(){
    if(index > 0){
        increaseNode.disabled = false;
        index--;
        displayIndex();
        updatePlanetDisplay();
    }
    else{
        decreaseNode.disabled = true;
    }
}

function increase(){
    if(index < planets.length - 1){
        decreaseNode.disabled = false;
        index++;
        displayIndex();        
        updatePlanetDisplay();
    }
    else{
        increaseNode.disabled = true;
    }
}

function updatePlanetDisplay(){
    p = planets[index];
    planetNode.innerText = p.name;
    if(p.inner === true){
       typeNode.innerText = "Inner Planet" 
    }
    else if(p.inner === false){
        typeNode.innerText = "Outer Planet"
    }
    displayNode.style.backgroundColor = p.color;
    displayNode.style.height = (p.diameter / 100) + "px";
    displayNode.style.width = (p.diameter / 100) + "px";

}

updatePlanetDisplay();