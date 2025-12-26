/*
Script que roda a lista de desafios da página inicial
*/

const num = 3;

var n = 1;
document.getElementById("contador").innerHTML=`Página ${n}/${num}`;

function anterior(){
    if (n > 1) {
        n--
        document.getElementById("contador").innerHTML=`Página ${n}/${num}`;
        document.getElementById(`pag${n}`).classList.remove("hidden");
        document.getElementById(`pag${n+1}`).classList.add("hidden");
    }
    else{
        n = num;
        document.getElementById("contador").innerHTML=`Página ${n}/${num}`;
        document.getElementById(`pag${n}`).classList.remove("hidden");
        document.getElementById(`pag1`).classList.add("hidden");
    }
}

function proxima(){
    if (n < num){
        n++
        document.getElementById("contador").innerHTML=`Página ${n}/${num}`;
        document.getElementById(`pag${n}`).classList.remove("hidden");
        document.getElementById(`pag${n-1}`).classList.add("hidden");
    }
    else{
        n = 1;
        document.getElementById("contador").innerHTML=`Página ${n}/${num}`;
        document.getElementById(`pag${n}`).classList.remove("hidden");
        document.getElementById(`pag${num}`).classList.add("hidden");
    }
}