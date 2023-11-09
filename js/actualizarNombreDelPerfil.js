
// aca le agrego un escuchador al documento que cuando la pagina cargue ("DOMContentLoaded") NO POR COMPLETO sino que solo el dom,
// hago lo siguiente:
document.addEventListener("DOMContentLoaded", (e)=>{

    // obtengo el valor de una localStorage por la key que le puse en el login.js
    // (basicamnte seria como decirle al localStorage, buscame una variable que se llame asi: "login__username" y dame su valor,
    //  obvio que si no encuentra ninguna variable local llamada asi, te dara null)
    let nombreDelUsuario = localStorage.getItem("login__username");

    // despues me traigo a la etiqueta "p" que es la que muestra el nombre al lado de la fotito de perfil, la traigo por su id
    let perfilNombre = document.getElementById("nombre-del-usuario");

    // y desp al contenido de esa etiqueta p (.textContent) le asigno el nombre que recuperé de la variable localStorage
    perfilNombre.textContent = nombreDelUsuario;

    // en la linea anterior, NO usé el ".value" porque ese solo se usa para cuando son inputs, pero como esta es una etiqueta "p", debo
    // pedir su valor con el "".textContent"
});

