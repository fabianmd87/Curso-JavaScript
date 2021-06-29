let nombre, apellido, dni, peso, altura;
var persona;

function Persona(pNombre, pApellido, pDni, pPeso, pAltura) {
  this.nombre = pNombre;
  this.apellido = pApellido;
  this.dni = pDni;
  this.peso = pPeso;
  this.altura = pAltura;

  this.mostrar = function () {
    alert(this.nombre, this.apellido);
  }
}

function crearPersona() {
  solicitarDatosPersona()
  persona = new Persona(nombre, apellido, dni, peso, altura)
  alert(
    `Los datos ingresados son: ${persona.nombre} ${persona.apellido} ${persona.dni}`
  );
}
function mostrar(){
  alert(persona.nombre, persona.apellido);
}
function solicitarDatosPersona() {
  nombre = prompt("ingrese nombre");
  apellido = prompt("ingrese apellido");
  dni = prompt("ingrese DNI");
  peso = parseInt(prompt("Ingrese su peso en KG"));
  altura = parseFloat(prompt("Ingrese su altura en CM"));
}

//como crear una persona con el construcctor
//const persona1 = new Persona(marcelo, devalle, 1);


function Usuario(pIdusuario) {

}


function calculoIMC() {
  let resultado = persona.peso / persona.altura ** 2;
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
function revisarDato() {
  if (persona.nombre == "") {
    persona.nombre = prompt("Debe ingresar su nombre");
  }
  if (persona.apellido == "") {
    persona.apellido = prompt("Debe ingresar su apellido");
  }
  if (persona.dni == "") {
    persona.dni = prompt("Debe ingresar su dni");
  }
}
