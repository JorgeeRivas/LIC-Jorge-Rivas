var base = prompt('Introduzca la base del triángulo','');
if(isNaN(base)){
    alert("Solo numeros");
    location.reload();
}
var altura = prompt('Introduzca la altura del triángulo','');
if(isNaN(base)){
    alert("Solo numeros");
    location.reload();
}
var area;
area = (base*altura)/2;
document.write("<header><h1>El área del Triángulo es: " + area + "</h1><hr/><br /></header>");
