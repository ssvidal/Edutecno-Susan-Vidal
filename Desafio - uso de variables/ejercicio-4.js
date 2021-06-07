//pedir al usuario que ingrese dias totales se transforma a numero y se guarda en variable diasTotales
const diasTotales = Number(prompt("Ingrese cantidad de dias"));

//calcular cantidad de años en el total de dias
const año = Math.floor(diasTotales / 365);

//calcular semanas restandole los años al total de dias
const semanas = Math.floor((diasTotales - (año * 365)) / 7)

//calcular dias restantes
const dias = diasTotales - (año *365) - (semanas * 7)

//mostrar mensaje 
alert(año+" años, "+ semanas+" semanas, "+dias+" dias")