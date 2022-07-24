let valorNumero = document.getElementById('currentNumber');
let contador = 0

function reduzir(){
    if(Number(valorNumero.innerHTML) > -10){
        contador--
        corNumero()
        valorNumero.innerHTML = contador  
    } 
}

function incrementar(){
    if(Number(valorNumero.innerHTML) < 10){
        contador++
        corNumero()
        valorNumero.innerHTML = contador
    }
}


function corNumero(){
    if(Number(valorNumero.innerHTML) < 0){
        valorNumero.style.color = "red";
    } else if (Number(valorNumero.innerHTML) > 0){
        valorNumero.style.color = "rgb(37, 29, 153)";
    } else {
        valorNumero.style.color = "white";
    }
}