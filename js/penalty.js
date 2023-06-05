const button = document.getElementById('btn-hacker1')
button.addEventListener('click', () => t = 60 )
button.addEventListener('click', sortear1)

t = 60
function contdown(){
    document.getElementById('contador').innerHTML = "Sinal valido por : <br> " + t + " segundos"
    t--
    if(t < 0){
        document.getElementById(`1`).src = "./img/bola.png";
        document.getElementById(`1`).style.width = '30px'
        document.getElementById(`2`).src = "./img/bola.png";
        document.getElementById(`2`).style.width = '30px'
        document.getElementById(`3`).src = "./img/bola.png";
        document.getElementById(`3`).style.width = '30px'
        document.getElementById(`4`).src = "./img/bola.png";
        document.getElementById(`4`).style.width = '30px'
        document.getElementById(`5`).src = "./img/bola.png";
        document.getElementById(`5`).style.width = '30px'
        document.getElementById('contador').innerHTML = "expirado"
        document.getElementById('contador').style.color = 'red'
        document.getElementById('btn-hacker1').disabled = false
        document.getElementById('texto-hack').innerHTML = " "
    }else{
        setTimeout(contdown, 1000)
        document.getElementById('btn-hacker1').disabled = true
    }
}


function sortear1(){  
    
    //guarda os numeros sorteados
    //espera 10 segundos
    setTimeout(() => {
        contdown()
        var sorteados = []
        //sorteia quantos numeros serão sorteados    
        var numDeVezes = Math.floor(Math.random()*4+1)
        
        for(i = 0; i < numDeVezes; i++){
            numSorte = Math.floor(Math.random()*5+1)
            //verifica se o numero sorteado já esta na stream
            if(sorteados.indexOf(numSorte) === -1){
            sorteados.push(numSorte) 
            }else{
                i--
            }
        }
        document.getElementById(`${sorteados[0]}`).src = "./img/umx.png";
        document.getElementById(`${sorteados[0]}`).style.width = '50px'
        document.getElementById(`${sorteados[1]}`).src = "./img/doisx.png";
        document.getElementById(`${sorteados[1]}`).style.width = '50px'
        document.getElementById(`${sorteados[2]}`).src = "./img/tresx.png";
        document.getElementById(`${sorteados[2]}`).style.width = '50px'
        document.getElementById(`${sorteados[3]}`).src = "./img/quatrox.png";
        document.getElementById(`${sorteados[3]}`).style.width = '50px'
        document.getElementById(`${sorteados[4]}`).src = "./img/cincox.png";
        document.getElementById(`${sorteados[4]}`).style.width = '50px'
    }, 10000);
    setTimeout(() => {
        document.getElementById('texto-hack').innerHTML = "loading..."
        document.getElementById('texto-hack').style.color = 'red'
    }, 1000);

    setTimeout(() => {
        document.getElementById('texto-hack').innerHTML = "I. A. Analisando"
        document.getElementById('texto-hack').style.color = 'yellow'
    }, 5000);

    setTimeout(() => {
        document.getElementById('texto-hack').innerHTML = "Preparando o sinal"
        document.getElementById('texto-hack').style.color = 'rgb(233, 255, 32)'
    }, 7000);

    setTimeout(() => {
        document.getElementById('texto-hack').innerHTML = "Sinal pronto"
        document.getElementById('texto-hack').style.color = 'rgb(63, 255, 38)'
    }, 10000);

}
