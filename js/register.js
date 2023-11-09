// EN MI COMPU, SE VE TODO BIEN AL 80% DEL ZOOM, cualquier cosa es ajustar las posiciones para que lo vean bien los demas

//En caso de no existir, crea el array de usuarios y lo agrega al localStorage.
let usuarios = localStorage.getItem("usuarios");

if (!usuarios) {
  usuarios = [];

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// traigo el formulario por la etiqueta
let formulario = document.querySelector("form");
// traigo mi div que muestra los msj de errores por su clase
let muestraDeErrores = document.querySelector(".muestraDeErrores");

// cuando detecte que se quiere intentar enviar el formulario (submit), hace lo siguiente:
formulario.addEventListener("submit", (e) => {
  // preveeo que NO se envíe el fomulario automáticamente
  e.preventDefault();

  // creo las variables
  let mensaje = "";

  let nombreValidado = true;
  let contraseniaValidada = true;
  let repetirContraseniaValidada = true;
  let fechaNacimientoValidada = true;
  let emailValidado = true;
  let lasContraseniasCoinciden = true;

  // traigo todos los input por los id (usé el getElementById pq con el querySelector no me dejaba hacer el .value, nose pq)
  let nombre = document.getElementById("register__username");
  let contrasenia = document.getElementById("register__password");
  let repetirContrasenia = document.getElementById("repit__password");
  let fechaNacimiento = document.getElementById("date");
  let email = document.getElementById("email");

  //-----------------------------------------------------------------------------------------------------------------
  // ------------------------------------- defino las expresiones regulares------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------

  //  arranca con "/^", desp sigue con: caracteres de la a-z (minusculas), caracteres de la A-Z (MAYUSCULAS), caracteres del 0 al 9
  //  luego aclaro que estos caracteres pueden repetirse entre 4 y 8 veces (SIN incluir a los extremos)
  let expresionNombre = /^[a-zA-Z0-9]{5,7}$/;

  //  arranca con "/^", desp sigue con: caracteres de la a-z (minusculas), caracteres de la A-Z (MAYUSCULAS), caracteres del 0 al 9
  //  luego aclaro que estos caracteres pueden repetirse AL MENOS una vez, osea que pueden haber entre 1 e infinitos caracteres pero al menos 1 tiene q haber
  let expresionContrasenia = /^[a-zA-Z0-9]{1,}$/;

  //  arranca con "/^", desp puede seguir: o "|" un 0 seguido de un digito del 1 al 9
  //                                       o "|" un 1 o 2 seguido de un digito entre 0 y 9
  //                                       o "|" un 3 seguido de un 0 o un 1

  //  desp sigue con una barra, luego puede seguir: o "|" con un 0 seguido de un digito del 1 al 9
  //                                                o "|" con un 1 seguido de un digito del 0 al 2
  //  desp sigue con otra barra, luego con 4 digitos cualquiera y por ultimo, cierra la expresion con el "$/"
  let expresionFechaNacimiento =
    /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/; //--> esta NO la uso pero si la queremos usar, debemos hacer un input de tipo text y NO de tipo date

  //________________________________________________________________________________________________________________________________
  let expDate = /^\d{4}-\d{2}-\d{2}$/; // esta la uso porque el input date, te da la fecha al revés y con guiones (2023-11-22)
  //________________________________________________________________________________________________________________________________

  // bueno, arranca con "/^" y puede seguir con cualquier caracter alfanumerico "/w", un punto "/." o un guion "-" y con el "+" le
  // decimos que POR LO MENOS debe haber un caracter, depsues pueden haber infinitos y estar mezclados obvio, despues sigue si o si
  // un arroba "@", seguido pueden haber caracteres de la a-z tanto MINUSCULAS como MAYUSCULAS "a-zA-Z" o cualquier digito "\d" o
  // un punto "\." o un guion "-" y luego aclaramos que deben haber AL MENOS dos caracteres cualquiera de los antes especificados
  // hasta una cantidad infinita, por ultimo termino la expresion con "$/"
  let expresionEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  // ---------------------------------------------------------------------------------------------------------------------------

  // si el nombre esta vacio
  if (nombre.value == "") {
    mensaje += "<label for='register__username'>* Introduce un NOMBRE</label>";
    nombreValidado = false;
  } // si el nombre NO esta vacio pero NO cumple con la validacion
  else {
    if (expresionNombre.test(nombre.value) == false) {
      mensaje += "<label for='register__username'>* Nombre inválido</label>";
      nombreValidado = false;
    }
  }

  // si la contraseña esta vacia
  if (contrasenia.value == "") {
    mensaje +=
      "<label for='register__password'>* Introduce una CONTRASEÑA</label>";
    contraseniaValidada = false;
  } // si la contraseña NO esta vacia pero No cumplre con la validacion
  else {
    if (expresionContrasenia.test(contrasenia.value) == false) {
      mensaje +=
        "<label for='register__password'>* Contraseña  inválida</label>";
      contraseniaValidada = false;
    }
  }

  // si el repetir contraseña esta vacio
  if (repetirContrasenia.value == "") {
    mensaje += "<label for='repit__password'>* Repita su CONTRASEÑA</label>";
    repetirContraseniaValidada = false;
  }

  /*     esta la podemos usar si ponemos en vez de un input de tipo date, un unput de tipo texto (supongo)
if (expresionFechaNacimiento.test(fechaNacimiento.value) == false) {
    alert("error fecha de nacimiento");
}
*/
  // si la fecha esta vacia
  if (fechaNacimiento.value == "") {
    mensaje += "<label for='date'>* Introduce una FECHA</label>";
    fechaNacimientoValidada = false;
  } // si la fecha NO esta vacia pero NO cumple con la validacion
  else {
    if (expDate.test(fechaNacimiento.value) == false) {
      mensaje += "<label for='date'>* Fecha inválida</label>";
      fechaNacimientoValidada = false;
    }
  }

  // si el email esta vacio
  if (email.value == "") {
    mensaje += "<label for='email'>* Introduce un EMAIL</label>";
    emailValidado = false;
  } // si el email NO esta vacio pero NO cumple con la validacion
  else {
    if (expresionEmail.test(email.value) == false) {
      mensaje += "<label for='email'>* Email inválido</label>";
      emailValidado = false;
    }
  }

  // si la contraseña y el repetirContraseña NO estan vacios, entra al 1er if
  if (contrasenia.value != "" && repetirContrasenia.value != "") {
    // si cada una SI que cumplen con las validaciones, entra al 2do if
    if (
      expresionContrasenia.test(contrasenia.value) == true &&
      expresionContrasenia.test(repetirContrasenia.value) == true
    ) {
      // ahora, si los valores de las dos, son distintos, entra al 3er if
      if (contrasenia.value != repetirContrasenia.value) {
        mensaje +=
          "<label for='repit__password'>* NO COINCIDEN LAS CONTRASEÑAS</label>";
        lasContraseniasCoinciden = false;
      }
    }
  }

  //----------------------------- final -----------------------------------------
  // si CUALQUIERA (aunq sea 1 solo) de los input es false, osea que: o estan vacios, o NO cumplieron con las validaciones, entra al if
  if (
    !nombreValidado ||
    !contraseniaValidada ||
    !repetirContraseniaValidada ||
    !fechaNacimientoValidada ||
    !emailValidado ||
    !lasContraseniasCoinciden
  ) {
    // y al div del html, le inserto los mensajes que fue recolectando la variable "mensaje" a lo largo de las validaciones
    muestraDeErrores.innerHTML = mensaje;
  } // ahora, si ninguna validacion dio false, osea que esta todo bien, envia el fomulario, por lo que luego te envia a la ruta que esta en el "action" del form
  else {
    //Antes de enviar el formulario, crea el nuevo usuario y lo agrega en el localStorage.

    //corto la contraseña y la doy vuelta
    let contraseniaParte1 = contrasenia.value.slice(
      0,
      Math.round(contrasenia.value.length / 2)
    );

    let contraseniaParte2 = contrasenia.value.slice(
      Math.round(contrasenia.value.length / 2),
      contrasenia.value.length
    );

    let contraseniaInversa = contraseniaParte2 + contraseniaParte1;

    //Creo el nuevo usuario, con la contraseña invertida
    let nuevoUsuario = {
      nombre: nombre.value,
      email: email.value,
      contrasenia: contraseniaInversa,
    };

    //Agrego el usuario al local storage
    let usuariosLS = JSON.parse(localStorage.getItem("usuarios"));

    usuariosLS.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuariosLS));

    formulario.submit();
  }
});
