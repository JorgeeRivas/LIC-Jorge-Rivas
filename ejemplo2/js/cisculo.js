const PI = 3.1415926535;
var radio = prompt('Introduzca el radio del círculo:','');
if(isNaN(radio)){
    alert("Solo numeros");
    location.reload();
}
var area;
area = PI*radio*radio;
document.write("<header><h1>El área del círculo es: " + area + "</h1><hr/><br /></header>");
