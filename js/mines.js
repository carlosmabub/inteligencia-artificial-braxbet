const button = document.getElementById('btn-hacker')
button.addEventListener('click', () => t = 60 )
button.addEventListener('click', sortear)

t = 60
function disabled(){
    document.getElementById('contador').innerHTML = "Sinal valido por : <br> " + t + " segundos"
    t--
    if(t < 0){
        button.disabled = false
        document.getElementById('contador').innerHTML = "expirado"
        document.getElementById('contador').style.color = 'red'
        document.getElementById('texto-hack').innerHTML = " "
    }else{
        setTimeout(disabled, 1000);
        button.disabled = true
    }
}

function sortear(){
    //reseta todas as imagens
    document.getElementById(`1`).src = "../img/empty.png";
    document.getElementById(`2`).src = "../img/empty.png";
    document.getElementById(`3`).src = "../img/empty.png";
    document.getElementById(`4`).src = "../img/empty.png";
    document.getElementById(`5`).src = "../img/empty.png";
    document.getElementById(`6`).src = "../img/empty.png";
    document.getElementById(`7`).src = "../img/empty.png";
    document.getElementById(`8`).src = "../img/empty.png";
    document.getElementById(`9`).src = "../img/empty.png";
    document.getElementById(`10`).src = "../img/empty.png";
    document.getElementById(`11`).src = "../img/empty.png";
    document.getElementById(`12`).src = "../img/empty.png";
    document.getElementById(`13`).src = "../img/empty.png";
    document.getElementById(`14`).src = "../img/empty.png";
    document.getElementById(`15`).src = "../img/empty.png";
    document.getElementById(`16`).src = "../img/empty.png";
    document.getElementById(`17`).src = "../img/empty.png";
    document.getElementById(`18`).src = "../img/empty.png";
    document.getElementById(`19`).src = "../img/empty.png";
    document.getElementById(`20`).src = "../img/empty.png";
    document.getElementById(`21`).src = "../img/empty.png";
    document.getElementById(`22`).src = "../img/empty.png";
    document.getElementById(`23`).src = "../img/empty.png";
    document.getElementById(`24`).src = "../img/empty.png";
    document.getElementById(`25`).src = "../img/empty.png";
    
    //espera 10 segundos
    setTimeout(() => {
        disabled()
        //guarda os numeros sorteados
        var sorteados = []
  
        for(i = 0; i < 5; i++){
            //escolher um numero de 1 a 25 e guarda na variavel
            numSorte = Math.floor(Math.random()*25+1)
            //verifica se o numero sorteado já esta na stream
            //se não estiver, coloca no final da lista
            if(sorteados.indexOf(numSorte) === -1){
            sorteados.push(numSorte) 
            //se estiver, ele conta novamente
            }else{
                i--
            }
        }
        //troca as imagens pelas estrelas
        document.getElementById(`${sorteados[0]}`).src = "../img/diamond.png";
        document.getElementById(`${sorteados[1]}`).src = "../img/diamond.png";
        document.getElementById(`${sorteados[2]}`).src = "../img/diamond.png";
        document.getElementById(`${sorteados[4]}`).src = "../img/diamond.png";
        document.getElementById(`${sorteados[5]}`).src = "../img/diamond.png";
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

