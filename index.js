class Tarjeta {
    constructor(id, marcaDeTarjeta, interes) {
        this.id = id;
        this.marcaDeTarjeta = marcaDeTarjeta;
        this.interes = interes;
    }
}

let tarjetas = [];
let tarjetaVisa = new Tarjeta(1, "Visa", 1.34);
let tarjetaMaster = new Tarjeta(2, "Master", 1.45);
let tarjetaAmex = new Tarjeta(3, "AmericanExpress", 2.45);

tarjetas.push(tarjetaVisa);
tarjetas.push(tarjetaMaster);
tarjetas.push(tarjetaAmex);

let continuar = false;

do {
     alert("Bienvenido al simulador de tarjetas de crédito");
     let resultado;
     let monto = parseFloat(prompt("Inserte monto a calcular")); 
     let cantidadCuotas = parseInt(prompt("Ingrese el número de cuotas")); 

     // Acá el usuario ingresa 1, 2 o 3. Que también es el identificador (ID) de cada tarjeta.
     let tarjetaId = parseInt(prompt("Inserte tarjeta a usar: 1. Visa 2. MasterCard 3. AmericanExpress")); 
     let tarjetaSeleccionada = tarjetas.find(tarjeta => tarjeta.id == tarjetaId); // True, False

     resultado = monto / cantidadCuotas * tarjetaSeleccionada.interes;

     alert("El valor resultado de la cuota es: " + resultado);
     } while(continuar);