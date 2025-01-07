const checkBtnEl = document.querySelector("button");

checkBtnEl.addEventListener("click", () => {
    const numPrimero = document.getElementById('numInicial').value;
    const baseInicial = document.getElementById('baseInicial').value;
    const baseFinal = document.getElementById('baseFinal').value;
    const guessEl = document.querySelector(".guess");//texto que aparecera como resultado
    let baseDiez = 0; //esta el numero incial en base 10
    //comprueba que la base si existe
    if (baseInicial < 2  || baseFinal < 2){
        guessEl.textContent = "La base tiene que ser mayor a 2"
        return;
    } 

    if (!Number.isInteger(Number(baseInicial)) || !Number.isInteger(Number(baseFinal))) {
        guessEl.textContent = "Solo se pueden ingresar números enteros";
        return;
    }
    
    
    let numInicial = numPrimero.replace(/ /g, '');//remplaza todos los espacios en el texto por vacio
    numInicial = numInicial.toUpperCase();
    const myArr = numInicial.split("");//pone cada caracter en un espacio del arraylist
    const arregloNum = []; //Arreglo de unicamente numeros donde ya se habra verificado si es apto los caracteres y cambiada las letras a numros
    //El siguient arraylist no hace nada, es constante, 
    //compara letras en base a su numero ascii y devuelve un numero al que seria en una base mayor a 10
    let comparacionNum = [];
    for (let i = 65, j=10; i < 91; i++) {
    comparacionNum[i] = j;
    ++j;
    }

    //comprueba que el texto dado son solo letras y numeros y luego los añade a un array
   for(let i=0;  i < numInicial.length; ++i){
    if(!Number.isNaN(Number(myArr[i]))){
        arregloNum[i] = Number(myArr[i]);
    }else if((myArr[i].charCodeAt(0) > 64) && (myArr[i].charCodeAt(0) < 91)){
        arregloNum[i] = comparacionNum[myArr[i].charCodeAt(0)];
    }else{
        guessEl.textContent = "Solo se pueden colocar numeros enteros y letras"
        return;
    }
   }
    //comprueba que el numero si corresponda a la base dada
   for(let i=0; i < numInicial.length; ++i){
        if(arregloNum[i] >= baseInicial){
            guessEl.textContent = "El numero no corresponde a la base dada";
            return;
        }
    }

    //cambio a base 10
    for(let i=0,  n = arregloNum.length; i < n; ++i){
        baseDiez = baseDiez + (arregloNum[i])*( baseInicial**(n-i-1));
    }

    let residuo = 0;
    let multiplo = 0;
    let resultado = [];
    //cambio a la base final
    do{
        multiplo = parseInt(baseDiez/baseFinal);
        residuo = baseDiez%baseFinal;
        resultado.push(residuo);
        baseDiez = multiplo;
        
    }while(multiplo > baseFinal);
    residuo = baseDiez%baseFinal;
    resultado.push(residuo);
   
    let escribir = '';
    for(let i=0; i < resultado.length; ++i){
        escribir = escribir.concat(resultado[resultado.length-i-1]);
    }
    
   guessEl.textContent = escribir;
});