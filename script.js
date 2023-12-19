const var1 = document.getElementById("valor1");
const var2 = document.getElementById("valor2");
const btn_suma = document.getElementById("sumar");
const btn_resta = document.getElementById("resta");
const btn_multiplicacion = document.getElementById("multiplicacion");
const btn_division = document.getElementById("division");
const btn_clear = document.getElementById("clear");
const result = document.getElementById("result");
var1.value = "";//se utiliza para limpiar los input antes de iniciar cualquier operacion
var2.value = "";

let intputVar1 = "";
var1.addEventListener("change", function (){
    intputVar1 = parseFloat(var1.value)
});

let intputVar2 = "";
var2.addEventListener("change", function (){
    intputVar2 = parseFloat(var2.value)
});

let resultado = "";

btn_suma.addEventListener("click", function () {
    resultado = (intputVar1 + intputVar2);
    result.innerHTML += `<div> ${intputVar1} + ${intputVar2} = ${resultado}</div>`;
    var1.value = "";//despues de utilizar los input y dar resultado los limpia
    var2.value = "";
    intputVar1 = "";
    intputVar2 = "";
});

btn_resta.addEventListener("click", function () {
    resultado = (intputVar1 - intputVar2);
    result.innerHTML += `<div> ${intputVar1} - ${intputVar2} = ${resultado}</div>`;
    var1.value = "";//despues de utilizar los input y dar resultado los limpia
    var2.value = "";
    intputVar1 = "";
    intputVar2 = "";
});

btn_multiplicacion.addEventListener("click", function () {
    resultado = (intputVar1 * intputVar2);
    result.innerHTML += `<div> ${intputVar1} * ${intputVar2} = ${resultado}</div>`;
    var1.value = "";//despues de utilizar los input y dar resultado los limpia
    var2.value = "";
    intputVar1 = "";
    intputVar2 = "";
});

btn_division.addEventListener("click", function () {
    resultado = (intputVar1 / intputVar2);
    result.innerHTML += `<div> ${intputVar1} / ${intputVar2} = ${resultado}</div>`;
    var1.value = "";//despues de utilizar los input y dar resultado los limpia
    var2.value = "";
    intputVar1 = "";
    intputVar2 = "";
});

btn_clear.addEventListener("click", function () {
    result.innerHTML = "";
});