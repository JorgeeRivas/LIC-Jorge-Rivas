var base = prompt('Introduzca la base del rectángulo','');
if(isNaN(base)){
    alert("Solo numeros");
    location.reload();
}
var altura = prompt('Introduzca la altura del rectángulo','');
if(isNaN(altura)){
    alert("Solo numeros");
    location.reload();
}
var area;
area = base*altura
document.write("<header><h1>El área del rectángulo es: " + area + "</h1><hr/><br /></header>");