/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lengthConversion = 3.281
const volumeConversion = 0.264
const massConversion = 2.204

let convertBtn = document.getElementById("convert-btn")
let num = document.getElementById("input") 

let pVol = document.getElementById("volume-el")
let pLen = document.getElementById("length-el")
let pMass = document.getElementById("mass-el")


convertBtn.addEventListener("click", function() {
  let num1 = num.value;
  let metersToFeet = num1 * lengthConversion;
  let feetToMeters = num1 / lengthConversion;
  pLen.textContent = `${num1} meters = ${metersToFeet.toFixed(3)} feet | ${num1} feet = ${feetToMeters.toFixed(3)} meters`;
  
  let num2 = num.value
  let literToGallon = num2 * volumeConversion;
  let gallonToLiter = num2 / volumeConversion;
  pVol.textContent = `${num2} litres = ${literToGallon.toFixed(3)} gallon | ${num2} gallon = ${gallonToLiter.toFixed(3)} litres`;
  
  let num3 = num.value
  let kiloToPound = num3 * massConversion;
  let poundToKilo = num3 / massConversion;
  pMass.textContent = `${num3} kilogram = ${kiloToPound.toFixed(3)} pound | ${num3} pound = ${poundToKilo.toFixed(3)} kilogram`;
});





