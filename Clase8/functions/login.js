var objetoUsuario = {usuario: "admin" , contrasenia: 123456};

const ingresar = () =>{

    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.querySelector("#contrasenia").value;
    let mensajeValidacion = document.querySelector('#mensaje-validacion');

    if(usuario == objetoUsuario.usuario && contrasenia == objetoUsuario.contrasenia){

        mensajeValidacion.className="text-success";
        mensajeValidacion.innerHTML=`Bienvenido ${usuario}`;

        setTimeout(()=>{
            window.location="./html/index.html";
        },3000);

    }else{
        mensajeValidacion.className="text-danger";
        mensajeValidacion.innerHTML="Usuario o Contraseña incorrecta";
    };
}
