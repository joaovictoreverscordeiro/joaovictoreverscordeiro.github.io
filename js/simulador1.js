var terminaisMult = ["", ""];
var escala = 0;
const COMv = document.getElementById("salvarCOM");
const _10Av = document.getElementById("salvar10A");
const VRAv = document.getElementById("salvarVRA");

function around(a){
    return a * (1 + ((-1) ** Math.random()) * Math.random * 0.05)
}

R_OHM = around(0.5) /*Ohm*/
V_OHM = around(1.2) /*Volts*/
R_VOLT = around(10 ** 6) /*Ohm*/
R_AMP = around(0.01) /*Ohm*/
R = around(2 * 10 ** 5) /*Ohm*/
C = around(5 * 10 ** (-5)) /*Farad*/
V_0 = around(9) /*Volts*/


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
    if (escala === 0){
        escala = n
        console.log(escala)
        document.getElementById(`escala${n}`).style.backgroundColor = "rgb(20, 52, 96)"
    }
    else{
        document.getElementById(`escala${escala}`).style.backgroundColor = "rgb(8, 27, 54)"
        escala = n
        console.log(escala)
        document.getElementById(`escala${n}`).style.backgroundColor = "rgb(20, 52, 96)"
    }

    if (1 <= n && n <=3){
        document.getElementById("escala").innerHTML = "V"
        document.getElementById("valor").innerHTML = "0.0"
    }
    else if (n === 4){
        document.getElementById("escala").innerHTML = "&mu;A"
        document.getElementById("valor").innerHTML = "0.0"
    }
    else if (n === 5){
        document.getElementById("escala").innerHTML = "mA"
        document.getElementById("valor").innerHTML = "0.0"
    }
    else if (n === 6 || n === 7){
        document.getElementById("escala").innerHTML = "A"
        document.getElementById("valor").innerHTML = "0.0"
    }
    else if (n === 8){
        document.getElementById("escala").innerHTML = "&Omega;"
        document.getElementById("valor").innerHTML = "0.0"
    }
    else if (n === 9 || n === 10){
        document.getElementById("escala").innerHTML = "k&Omega;"
        document.getElementById("valor").innerHTML = "0.0"
    }
    else if (n === 11){
        document.getElementById("escala").innerHTML = "M&Omega;"
        document.getElementById("valor").innerHTML = "0.0"
    }
}

function off(){
    terminaisMult = ["", ""];
    document.getElementById("valor").innerHTML = ""
    document.getElementById("escala").innerHTML = ""

    if (escala !== 0){
        document.getElementById(`escala${escala}`).style.backgroundColor = "rgb(8, 27, 54)"
        escala = 0
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

/*
Script que de fato roda o simulador
 */

let estado = 0
let V = 0
let I = 0
const V0 = 9

document.getElementById("coletar").addEventListener("click", () => {
    if (estado === 0){

        /*Checar se está tudo ok*/

        if (terminaisMult[0] === "" || terminaisMult[1] === ""){
            alert("Terminais conectados da forma errada")
        }
        else if (multSel === ""){
            alert("Escolha qual multímetro usar")
        }
        else{    
            estado = 1
            /* cronômetro */
            
            var tempo = 0

            cronometro = setInterval(() => {
                tempo = tempo + 10
                var tempoCtrl = tempo

                let digitos = ["", "", "", "", "", ""]

                for (let i = 0; i < 6; i++){
                    if (i < 2){
                        digitos[i] = (tempoCtrl%(10 ** (i+2)))/(10 ** (i+1))
                        tempoCtrl = tempoCtrl - digitos[i] * (10 ** (i+1))
                    }
                    else if (i === 2){ 
                        tempoCtrl = tempoCtrl/1000 /**Transforma tempoCtrl em segundos */
                        digitos[i] = ((tempoCtrl)%60)%10
                    }
                    else if (i === 3){
                        digitos[i] = (((tempoCtrl)%60) - ((tempoCtrl)%60)%10)/10
                    }
                    else if (i === 4){
                        digitos[i] = (((tempoCtrl)-(tempoCtrl)%60)/60)%10
                    }
                    else if (i === 5){
                        digitos[i] = ((((tempoCtrl)-(tempoCtrl)%60)/60) - (((tempoCtrl)-(tempoCtrl)%60)/60)%10)/10
                    }
                }

                for (let i = 0; i<6; i++){
                    document.getElementById(`digito${i}`).innerHTML = digitos[i]
                }
            }, 10);

            evolucao = setInterval(() => {
                /*Preparação ---  Checar se as conexões estão coerentes com a escala*/
                function Check(terminais, escalaMult){
                    if (escalaMult = 0){
                        return true
                    }
                    else if ((escalaMult >= 1 && escalaMult <= 6) || (escalaMult >= 8 && escalaMult <= 11)){
                        if (terminais == ["COM", "VRA"]){
                            return true
                        }
                        else{
                            return false
                        }
                    }
                    else if (escalaMult === 7){
                        if (terminais == ["COM", "10A"]){
                            return true
                        }
                        else{
                            return false
                        }
                    }
                }

                let check = Check(terminaisMult, escala)

                if (check === true){
                    if (multSel = "mult1"){
                        if (index%2 === 0){
                            if (8 <= escala && escala <= 11){
                                /*Capacitor carregando com o ohmimetro*/
                                V = V + (0.1 / (R_OHM * C)) * (V_OHM - V)
                            }
                            else if (4 <= escala && escala <= 7){
                                /*Capacitor descarregando no amperimento*/
                                V = V * (1 - 0.1/(R_AMP * C))
                            }
                            else if (1 <= escala && escala <= 3){
                                /*Capacitor descarregando no voltímetro*/
                                V = V * (1 - 0.1/(R_VOLT * C))
                            }
                            else if (escala === 0){
                                /*Tensão permanece constante*/
                                V = V
                            }
                        }
                        else{
                            if (8 <= escala && escala <= 11){
                                /*Capacitor carregando com o ohmimetro e a própria bateria*/
                                V = V + (0.1/(R * C)) * (V_0 - (R/R_OHM) * (V - V_OHM))
                            }
                            else if (4 <= escala && escala <= 7){
                                /*Capacitor carregando com o amperímetro em paralelo*/
                                V = V + 0.1 * ((V_0 - V)/(R * C) - (V)/(R_AMP * C))
                            }
                            else if (1 <= escala && escala <= 3){
                                /*Capacitor carregando com voltímetro em paralelo*/
                                V = V + 0.1 * ((V_0 - V)/(R * C) - (V)/(R_VOLT * C))
                            }
                            else if (escala === 0){
                                V = V + (V_0 - V) * (0.1/(R * C))
                            }                        
                        }
                    }
                    else if (multSel === "mult2"){
                        if (index%2 === 0){
                            if (8 <= escala && escala <= 11){
                                /*Tensão permanece constante*/
                                V = V
                            }
                            else if (4 <= escala && escala <= 7){
                                /*Tensão permanece constante*/
                                V = V
                            }
                            else if (1 <= escala && escala <= 3){
                                /*Tensão permanece constante*/
                                V = V
                            }
                            else if (escala === 0){
                                /*Tensão permanece constante*/
                                V = V
                            }
                        }
                        else{
                            if (8 <= escala && escala<= 11){
                                /*Capacitor carregando com o ohmimetro e a própria bateria*/
                                V = V + (V_0 + V_OHM - V) * (0.1/((R_OHM + R) * C))
                            }
                            else if (4 <= escala && escala <= 7){
                                /*Capacitor carregando com o amperímetro em série*/
                                V = V + (V_0 - V) * (0.1/((R + R_AMP) * C))
                            }
                            else if (1 <= escala && escala <= 3){
                                /*Capacitor carregando com voltímetro em série*/
                                V = V + (V_0 - V) * (0.1/((R + R_VOLT) * C))
                            }
                            else if (escala === 0){
                                /*Tensão permanece constante*/
                                V = V
                            }                        
                        }
                    }
                }
                else if (check === false){
                    if (multSel === "mult1"){
                        if (index%2 === 0){
                            V = V
                        }
                        else{
                            V = V * (1 + 0.1 / (R * C))
                        }
                    }
                    else if (multSel === "mult2"){
                        V = V
                    }    
                }  
            }, 100);

            multimetro = setInterval(() => {
                /*Printar o resultado de acordo com a escala e a preparação */

                if (escala === 0){

                }
                else if (escala === 1 && check === true){

                }
                /* ... */
                else if (check === false){

                }
            }, 500);
        }
    }
});

document.getElementById("interromper").addEventListener("click", () => {
    if (estado === 1){
        estado = 0
        clearInterval(cronometro)
        clearInterval(multimetro)
        clearInterval(evolucao)
    }
    else if (estado === 0){
        for (let i = 0; i<6; i++){
            document.getElementById(`digito${i}`).innerHTML = "0"
        }        
    }
});

