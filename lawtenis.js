let pNombre, pApellido, pDni;

function Persona(pNombre,pApellido,pDni,pPeso,pAltura){
  this.nombre = pNombre;
  this.apellido = pApellido;
  this.dni = pDni;
  this.peso = pPeso;
  this.altura = pAltura;
  
  this.mostrar = function(){
    let persona = new Persona(nombre,apellido,dni);
    console.log(this.nombre,this.apellido);
  }
}




  function guardarNombre() {
  pNombre = prompt("ingrese nombre");
  pApellido = prompt("ingrese apellido");
  pDni = parseInt(prompt("ingrese DNI"));
  
  alert(
    "Los datos ingresados son:" + " " + pNombre + " " + pApellido + " " + pDni
  );
}


//como crear una persona con el construcctor
//const persona1 = new Persona(marcelo, devalle, 1);



function Usuario(pIdusuario){


}








function calculoIMC() {
  let peso = parseInt(prompt("Ingrese su peso en KG"));
  let altura = parseFloat(prompt("Ingrese su altura en CM"));
  let resultado = peso / altura ** 2;
  alert(resultado);
}

function cobroTurno() {
  let precioNormal = parseInt(prompt("ingrese precio del Turno"));
  let cantidadTurno = parseInt(prompt("ingrese la cantidad de turnos a pagar:"));
  let precio = 0;
  if (cantidadTurno < 2) {
    precio = precioNormal;
  } else if (cantidadTurno > 1 && cantidadTurno < 5)
    precio = precioNormal * cantidadTurno * 0.9;
  else if (cantidadTurno > 5) {
    precio = precioNormal * cantidadTurno * 0.5;
  }

  alert(precio);
}


//////////////////////////////////////////////////////////////////////////////////////////////////
//Funcion complementaria//
//////////////////////////////////////////////////////////////////////////////////////////////////



  function revisarDato(dni) {
  
          while (nombre == 0, apellido == 0, dni == 0 || isNaN(dni) == true) {
              if (nombre == 0) {
                  nombre = prompt("Debe ingresar su nombre");
              }
              if (apellido == 0) {
                  apellido = prompt("Debe ingresar su apellido");
              }
              if (dni == 0) {
                  dni = prompt("Debe ingresar su dni");
                  parseInt(edad);
              }
              if (isNaN(dni)) {
                  dni = prompt("Debe ingresar DNI");
              }
          }
          
          alert("Usted es:", usuario)
          
      }

