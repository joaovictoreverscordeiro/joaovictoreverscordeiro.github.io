class AddMath {
    static sortDir(pPlus) {
        let choice = Math.random()

        if (choice < (1 - pPlus)) {
            return -1
        } else {
            return 1
        }
    }

    static avgSet(set) {
        let sum = 0

        for (let i = 0; i < set.length; i++) {
            sum += set[i]
        }

        return sum / set.length
    }

    static sqSet(set) {
        let squared = []

        for (let i = 0; i < set.length; i++) {
            squared.push(set[i] ** 2)
        }

        return squared
    }
}

class Sim extends AddMath {
    static step(pPlus, x) {
        let direction = AddMath.sortDir(pPlus)
        return x + direction
    }

    static iterate(pPlus, numSteps) {
        let x = 0

        for (let i = 0; i < numSteps; i++) {
            x = Sim.step(pPlus, x)
        }

        return x
    }

    static listaIt(pPlus, numIterations, numSteps) {
        let listaXf = []

        for (let i = 0; i < numIterations; i++) {
            listaXf.push(Sim.iterate(pPlus, numSteps))
        }

        return listaXf
    }
}

let numSteps = 0
let numIt = 0
let time 
let histogramaChart
let listaCntrl = []

document.getElementById("numSteps").addEventListener("click", () => {
    numSteps = Number(document.getElementById("numStepsInput").value)

    if ((numSteps >= 0) && (numSteps === Math.floor(numSteps))){
        numSteps = Number(document.getElementById("numStepsInput").value)
        document.getElementById("printNumSteps").innerHTML = numSteps
    }
    else{
        numSteps = 0
        alert("Insira uma entrada válida")
    }
})

document.getElementById("numIt").addEventListener("click", () => {
    numIt = Number(document.getElementById("numItInput").value)
    
    if ((numIt >= 0) && (numIt === Math.floor(numIt))){    
        document.getElementById("printNumIt").innerHTML = numIt
        time = (15/numIt) * 1000
        console.log(numIt)
    }
    else{
        numIt = 0
        alert("Insira uma entrada válida")
    }
})

document.getElementById("startBtn").addEventListener("click", () => {
   
    if (histogramaChart){
        histogramaChart.destroy()
    }

    const histograma = document.getElementById("histograma")
    
    var listaIt = Sim.listaIt(window.pPlus, numIt, numSteps)
    console.log(listaIt)

    /*Criando a lista em Y para o histograma*/

    var listaYHist = []

    for (let i = -numSteps; i <= numSteps; i++){
        listaYHist.push(0)
    }

    console.log(listaYHist)

    /*Criando a lista em X para o histograma */

    var listaXHist = []

    for (let i = -numSteps; i <= numSteps; i++){
        listaXHist.push(i)
    }

    console.log(listaXHist)

    /*Conduzindo a simulação --- Obtendo a lista do histograma*/

    histogramaChart = new Chart(histograma, {
        type: 'bar',
        data: {
            labels: listaXHist,
            datasets: [{
                label: "Histograma",
                data: listaYHist,
                backgroundColor: "#0019a7"
            }]
        },
        options: {

        }
    });

    let i = 0

    const simular = setInterval(() => {
        /*Adicionando itereções */
        listaCntrl.push(listaIt[i])
        listaYHist[listaIt[i] + numSteps]++
        i++

        histogramaChart.data.datasets[0].data = listaYHist;
        histogramaChart.update()
        
        /*Parando a simulação */
        if (i === numIt){
            clearInterval(simular)
        }

        /*Média dinâmica*/
        document.getElementById("media").innerHTML = AddMath.avgSet(listaCntrl).toFixed(2)
        document.getElementById("sqMedia").innerHTML = AddMath.avgSet(AddMath.sqSet(listaCntrl)).toFixed(2)

    }, time)    
})

