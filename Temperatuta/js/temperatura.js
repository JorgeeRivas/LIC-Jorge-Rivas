var celcius = prompt("ingrese la temperaturda en Celcius: ","");
if(isNaN(celcius)){
        alert = "Ingrese un dato valido";
        location.reload();
}

var fahrenheit;
fahrenheit =  (celcius * 9/5) + 32;

        if(fahrenheit > 100 ){
                document.getElementById('foto').src = "../img/110.jpg";
        } else if(fahrenheit >= 75 && fahrenheit <= 99 ){
                document.getElementById('foto').src = "../img/playa.jpg";
        }
        else if(fahrenheit >= 50 && fahrenheit <= 74 ){
                document.getElementById('foto').src = "../img/60.jpg";
        }
        else if(fahrenheit <50){
                document.getElementById('foto').src = "../img/0.jpg";
        } 

        var msg = celcius + " °C <br/><br/><br/> Son " + fahrenheit + "°F";
      
        //Se imprimen los datos de la operacion
        var fahrenheit = document.getElementById('mensaje');
        fahrenheit.innerHTML = '<h3>' + msg + '</h3>';

      
       