var index = 0

document.getElementById("botao").addEventListener("click", function(){
    if (index%2 === 0){
        document.getElementById("botao").style.backgroundColor = "blue";
        document.getElementById("botao").style.justifyContent = "flex-end"
        index++
    }
    else{
        document.getElementById("botao").style.backgroundColor = "black";
        document.getElementById("botao").style.justifyContent = "flex-start"
        index++        
    }
});