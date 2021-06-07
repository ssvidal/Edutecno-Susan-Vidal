//crear variable que almacenara suma total de numeros
let suma = 0;

//ciclo para pedir al usuario 5 numeros e ir sumandolos 
for(var i = 0; i< 5;i++){
    const numero = Number(prompt("ingrese un numero"));
    suma = suma + numero;
}   
//calcular prmedio y guardarlo en variable promedio
const promedio = suma / 5;

alert("La suma es "+suma)
alert("El promedio es "+promedio)