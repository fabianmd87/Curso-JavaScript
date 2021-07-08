let nombre;
let apellido;
let dni;
let peso;
let altura;
let persona;
let listaPersonas = [];

function Persona(pNombre, pApellido, pDni, pPeso, pAltura) {
  this.nombre = pNombre;
  this.apellido = pApellido;
  this.dni = pDni;
  this.peso = pPeso;
  this.altura = pAltura;

  this.mostrar = function () {
    alert(` ${persona.nombre} ${persona.apellido}`);
  }
}
function solicitarDatosPersona() {
  nombre = prompt("ingrese nombre");
  apellido = prompt("ingrese apellido");
  dni = prompt("ingrese DNI");
  peso = parseInt(prompt("Ingrese su peso en KG"));
  altura = parseFloat(prompt("Ingrese su altura en CM"));
  persona = new Persona(nombre, apellido, dni, peso, altura);
  listaPersonas.push(persona);
  console.table(persona);
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
