var terminaisMult = ["", ""];
var terminaisCirc = ["", ""];
var escala = "";
const COMv = document.getElementById("salvarCOM");
const _10Av = document.getElementById("salvar10A");
const VRAv = document.getElementById("salvarVRA");

/*
Funções para botões do multímetro
 */

function salvarCOM(){
    if (terminaisMult[0] === "COM"){
        terminaisMult[0] = ""
        console.log(terminaisMult[0])
        document.getElementById("pontaNeg").innerHTML = ""
        COMv.style.backgroundColor = "rgb(10, 35, 67)"
    }
    else{
        terminaisMult[0] = "COM"
        console.log(terminaisMult[0])
        document.getElementById("pontaNeg").innerHTML = "COM"
        COMv.style.backgroundColor = "rgb(58, 74, 97)"
    }
}

function salvar10A(){
    if (terminaisMult[1] === "10A"){
        terminaisMult[1] = ""
        console.log(terminaisMult[1])
        document.getElementById("pontaPos").innerHTML = ""
        _10Av.style.backgroundColor = "rgb(10, 35, 67)"
    }
    else if (terminaisMult[1] === "VRA"){
        VRAv.style.backgroundColor = "rgb(10, 35, 67)"
        terminaisMult[1] = "10A"
        console.log(terminaisMult[1])
        document.getElementById("pontaPos").innerHTML = "10A"
        _10Av.style.backgroundColor = "rgb(58, 74, 97)"
    }
    else{
        terminaisMult[1] = "10A"
        console.log(terminaisMult[1])
        document.getElementById("pontaPos").innerHTML = "10A"
        _10Av.style.backgroundColor = "rgb(58, 74, 97)"
    }
}

function salvarVRA(){
    if (terminaisMult[1] === "VRA"){
        terminaisMult[1] = ""
        console.log(terminaisMult[1])
        document.getElementById("pontaPos").innerHTML = ""
        VRAv.style.backgroundColor = "rgb(10, 35, 67)"
    }
    else if (terminaisMult[1] === "10A"){
        _10Av.style.backgroundColor = "rgb(10, 35, 67)"
        document.getElementById("pontaPos").innerHTML = "V&Omega;&mu;mA"
        terminaisMult[1] = "VRA"
        console.log(terminaisMult[1]) 
        VRAv.style.backgroundColor = "rgb(58, 74, 97)"
    }
    else{
        document.getElementById("pontaPos").innerHTML = "V&Omega;&mu;mA"
        terminaisMult[1] = "VRA"
        console.log(terminaisMult[1]) 
        VRAv.style.backgroundColor = "rgb(58, 74, 97)"
    }
}

function salvarEsc(n){
    if (escala === ""){
        escala = `escala${n}`
        console.log(escala)
        document.getElementById(escala).style.backgroundColor = "rgb(20, 52, 96)"
    }
    else{
        document.getElementById(escala).style.backgroundColor = "rgb(8, 27, 54)"
        escala = `escala${n}`
        console.log(escala)
        document.getElementById(escala).style.backgroundColor = "rgb(20, 52, 96)"
    }

    if (1 <= n && n <=3){
        document.getElementById("visorEsc").innerHTML = "V"
    }
    else if (n === 4){
        document.getElementById("visorEsc").innerHTML = "&mu;A"
    }
    else if (n === 5){
        document.getElementById("visorEsc").innerHTML = "mA"
    }
    else if (n === 6 || n === 7){
        document.getElementById("visorEsc").innerHTML = "A"
    }
    else if (n === 8){
        document.getElementById("visorEsc").innerHTML = "&Omega;"
    }
    else if (n === 9 || n === 10){
        document.getElementById("visorEsc").innerHTML = "k&Omega;"
    }
    else if (n === 11){
        document.getElementById("visorEsc").innerHTML = "M&Omega;"
    }
}

function off(){
    terminaisMult = ["", ""];
    terminaisCirc = ["", ""];
    document.getElementById("visorValor").innerHTML = ""
    document.getElementById("visorEsc").innerHTML = ""

    if (escala !== ""){
        document.getElementById(escala).style.backgroundColor = "rgb(8, 27, 54)"
        escala = ""
    }
}

/* + funções para o circuito ( a desenvolver ) */

function measure(){
    if (terminaisMult[0] !== "COM" || terminaisMult[1] === ""){
        alert("Não foi possível coletar a medida, multímetro conectado errado.")
    }
    else{
        console.log(terminaisMult, terminaisCirc, escala)
    }
}

/*
Script para rodar o cursor do multímetro
*/

/*
Script para o botão de abrir/fechar chave
*/

var index = 0

document.getElementById("botao").addEventListener("click", function(){
    if (index%2 === 0){
        document.getElementById("botao").style.backgroundColor = "blue";
        document.getElementById("botao").style.justifyContent = "flex-end"
        document.getElementById("switchState").innerHTML = "fechada"
        document.getElementById("chave").setAttribute("d", "M50.19,199.61 L89.17,199.61")
        index++
    }
    else{
        document.getElementById("botao").style.backgroundColor = "black";
        document.getElementById("botao").style.justifyContent = "flex-start"
        document.getElementById("switchState").innerHTML = "aberta"
        document.getElementById("chave").setAttribute("d", "M50.19,199.61 L89.17,184.55")
        index++        
    }
});

/*Script para selecionar o multímetro que será usado*/

const mult1 = document.getElementById("mult1")
const mult2 = document.getElementById("mult2")
var multSel = ""

mult1.addEventListener("click", function(){
    if (multSel === ""){
        mult1.style.backgroundColor = "rgba(196, 196, 196, 1)"
        multSel = "mult1"
    }
    else if (multSel === "mult2"){
        mult1.style.backgroundColor = "rgba(196, 196, 196, 1)"
        mult2.style.backgroundColor = "white"
        multSel = "mult1"
    }
    else{
        mult1.style.backgroundColor = "white"
        multSel = ""
    }
    console.log(multSel)
});

mult2.addEventListener("click", function(){
    if (multSel === ""){
        mult2.style.backgroundColor = "rgba(196, 196, 196, 1)"
        multSel = "mult2"
    }
    else if (multSel === "mult1"){
        mult2.style.backgroundColor = "rgba(196, 196, 196, 1)"
        mult1.style.backgroundColor = "white"
        multSel = "mult2"
    }
    else{
        mult2.style.backgroundColor = "white"
        multSel = ""
    }
    console.log(multSel)
});
