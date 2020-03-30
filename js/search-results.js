
let name = sessionStorage.getItem("name")
let mass = sessionStorage.getItem("mass") 
let gender = sessionStorage.getItem("gender") 
let skin_color = sessionStorage.getItem("skin_color") 
let homeworld = sessionStorage.getItem("homeworld") 
let height = sessionStorage.getItem("height") 

document.getElementById("name").innerHTML = name
document.getElementById("mass").innerHTML = `Mass: ${mass}`
document.getElementById("gender").innerHTML = `Gender: ${gender}`
document.getElementById("skin_color").innerHTML = `Skin Color: ${skin_color}`
document.getElementById("homeworld").innerHTML = `Homeworld: ${homeworld}`
document.getElementById("height").innerHTML = `Height: ${height}`