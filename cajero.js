class Billete //mi clase global
{
  constructor(v,c)//defino las variables a mostrar
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero() //puse la función
{
  var t = document.getElementById("dinero"); //t me recibe lo de la caja de texto
  dinero = parseInt(t.value); //convierto texto a numero
  for(var bi of caja) //defini variable bi y cree ciclo for
  {
    if (dinero > 0) //primera condicion: si el dinero es mayor a 0
    {
      div = Math.floor(dinero / bi.valor); //hago la division redondeando hacia abajo
      if (div > bi.cantidad) //2 condición: el resultado es mayor que la cantidad de billetes disponibles
      {
        papeles = bi.cantidad; //papeles igual a cantidad disponible
      }
      else // sino tengo
      {
        papeles = div; //papeles igual a la cantidad de la división
      }
      entregado.push( new Billete (bi.valor, papeles) ); //valor del billete actual y cantidad(papeles)
      dinero = dinero - (bi.valor * papeles); //al dinero que tengo en este momento tomalo pero restale el valor y los papeles de los billetes que ya entregue para que en la proxima iteracción des el dinero correcto
      }
    }
    if(dinero > 0) //si me lo pregunta es por que no tengo billetes para darte
    {
    resultado.innerHTML = "Fondos insuficientes :( ";
    }
    else
    {
    for (var e of entregado) //voy a tener una instancia de cada objeto dentro de la e
    {
      if (e.cantidad > 0)
      {
        resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />"; //para escribir en pantalla la cantidad de billetes y que valor
      }
    }
  }
}

var caja = []; //array vacios
var entregado = []; // billete que le entrego al usuario
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5));
var dinero;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");

var b= document.getElementById("extraer");
b.addEventListener("click", entregarDinero); //puse la acción y dispare la función
