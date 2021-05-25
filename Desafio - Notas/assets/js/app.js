//holaa
/*hola*/

var nombre = prompt("ingrese su nombre", "Susan")
var carrera = prompt("Ingrese su carrera","Desarrollador Frontend")

var ramo1 = prompt("Ingrese el nombre de su ramo","Html")
var nota1r1 = Number(prompt("Ingrese nota 1 ["+ ramo1+"]", "7"))
var nota2r1 = Number(prompt("Ingrese nota 2 ["+ ramo1+"]", "7"))
var nota3r1 = Number(prompt("Ingrese nota 3 ["+ ramo1+"]", "7"))
var promedio1 = (nota1r1 + nota2r1 + nota3r1) / 3

var ramo2 = prompt("Ingrese el nombre de su ramo","Css")
var nota1r2 = Number(prompt("Ingrese nota 1 ["+ ramo2+"]", "7"))
var nota2r2 = Number(prompt("Ingrese nota 2 ["+ ramo2+"]", "7"))
var nota3r2 = Number(prompt("Ingrese nota 3 ["+ ramo2+"]", "7"))
var promedio2 = (nota1r2 + nota2r2 + nota3r2) / 3

var ramo3 = prompt("Ingrese el nombre de su ramo","Javascript")
var nota1r3 = Number(prompt("Ingrese nota 1 ["+ ramo3+"]", "7"))
var nota2r3 = Number(prompt("Ingrese nota 2 ["+ ramo3+"]", "7"))
var nota3Necesaria = 12 - nota1r3 - nota2r3;
var mensaje;

if(nota3Necesaria > 7){
    mensaje ="Necesitas una nota muy alta por lo tanto, ya no puedes aprobar este ramo"
}else if(nota3Necesaria < 1){
    mensaje = "Necesitas una nota menor a 1 por lo tanto, ya aprobaste!."
}else{
    mensaje ="Para aprobar el ramo "+ramo3+" con nota 4, necesitas obtener un "+ nota3Necesaria+" en la nota 3"
}


//contenedor general
document.write("<div class='container bg-light'>");
//navbar
document.write("<nav class='navbar navbar-light bg-light'>");
document.write("<div class='container'>");
document.write("<a class='navbar-brand fs-1 fw-normal' href='#'>Notas finales</a>")
document.write("<a class='navbar-brand' href='#'>");
document.write("<img src='./assets/img/logo.png' alt='logo-desafio-latam' width='150px'>")
document.write("</a>")
document.write("</div>")
document.write("</nav>")

//datos alumno
document.write("<div class='row info-alumno'>")
document.write("<div class='col'>")
document.write("<p class='fw-bold'>Nombre: </p>")
document.write("</div>")
document.write("<div class='col'>")
document.write("<p>"+nombre+"</p>")
document.write("</div>")
document.write("</div>")
document.write("<div class='row info-alumno'>")
document.write("<div class='col'>")
document.write("<p class='fw-bold'>Carrera: </p>")
document.write("</div>")
document.write("<div class='col'>")
document.write("<p>"+carrera+"</p>")
document.write("</div>")
document.write("</div>")

//tabla
document.write("<table class='table table-hover'>");
//mensaje final
document.write("<caption>"+ mensaje +"</caption>")

document.write("<thead class='bg-dark text-light'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr");
document.write("</thead>");
document.write("<tbody>");
//fila 1
document.write("<tr>");
document.write("<th scope='row'>"+ramo1+"</th>");
document.write("<td>"+nota1r1+"</td>");
document.write("<td>"+nota2r1+"</td>");
document.write("<td>"+nota3r1+"</td>");
document.write("<td>"+promedio1+"</td>");
document.write("<tr>");
//fila 2
document.write("<tr>");
document.write("<th scope='row'>"+ramo2+"</th>");
document.write("<td>"+nota1r2+"</td>");
document.write("<td>"+nota2r2+"</td>");
document.write("<td>"+nota3r2+"</td>");
document.write("<td>"+promedio2+"</td>");
document.write("<tr>");
//fila 3
document.write("<tr>");
document.write("<th scope='row'>"+ramo3+"</th>");
document.write("<td>"+nota1r3+"</td>");
document.write("<td>"+nota2r3+"</td>");
document.write("<td> - </td>");
document.write("<td> - </td>");
document.write("<tr>");
document.write("</tbody>");
document.write("</table");
document.write("</div>");