const checkBtnEl = document.querySelector("button");

checkBtnEl.addEventListener("click", () => {
    const numPrimero = document.getElementById('numInicial').value;
    const baseInicial = document.getElementById('baseInicial').value;
    const baseFinal = document.getElementById('baseFinal').value;
    
    const guessEl = document.querySelector(".guess");//texto que aparecera como resultado
    let numInicial = numPrimero.replace(/ /g, '');//remplaza todos los espacios en el texto por vacio
    numInicial = numInicial.toUpperCase();
    const myArr = numInicial.split("");//pone cada caracter en un espacio del arraylist
    const arregloNum = []; //Arreglo de unicamente numeros donde ya se habra verificado si es apto los caracteres y cambiada las letras a numros
    //El siguient arraylist no hace nada, es constante, 
    //compara letras en base a su numero ascii y devuelve un numero al que seria en una base mayor a 10
    let comparacionNum = [];
    for (let i = 65, j=11; i < 91; i++) {
    comparacionNum[i] = j;
    ++j;
    }


   for(i=0; i < numInicial.length; ++i){
    if(!Number.isNaN(Number(myArr[i]))){
        arregloNum[i] = Number(myArr[i]);
    }else if((myArr[i].charCodeAt(0) > 64) && (myArr[i].charCodeAt(0) < 91)){
        arregloNum[i] = comparacionNum[myArr[i].charCodeAt(0)];
    }else{
        guessEl.textContent = "Solo se pueden colocar numeros enteros y letras"
        return;
    }
   }

   guessEl.textContent = arregloNum.toString();
});