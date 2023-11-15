// traigo mi fecha local para poder ponerla en el popUp asi cuando lo abrimos, se mantiene actualizada la fecha xd
// creo mi objeto date
let fecha = new Date();

// de la fecha, pido el dia (no uso el .getDay() porque eso me da el numero del dia de la semana, ejemplo, si es martes, me tira un 2, asique uso el date que me da el dia del mes)
let dia = fecha.getDate();
// de la fecha, pido el mes (pero como funciona como array, el primer mes es la posicion 0 asique le sumo 1)
let mes = fecha.getMonth()+1;
// de la fecha, pido el año
let año = fecha.getFullYear();

// si el dia es menor a 26, le sumo dos, pongo esto para que figure que el recital es dentro de dos dias y no justo hoy pero pongo de limite 26 porque si por ejemplo me dice
// que estamos a 30, si le sumo 2, me mostrará 32 entonces esta mal, entonces solo que el sume 2 si es menor a 26 dias, si estamos en un dia  entre 26 y 30, nos va a decir que
// el recital es ese mismo dia, capricho mio poner esto
if (dia < 26) {
  dia += 2;
}

// aca compruebo que me da bien alas fechas 
let fechaActual = dia + "/" + mes + "/" + año;
console.log(fechaActual);

const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", (e) => {
  const popUp = `
    <div class="popup">
        <div class="rectangulo">
           <h3>Próximo recital: Slipknot</h3>
           <img src="../IMG/bandas/album-Slipknot.webp" alt="Slipknot" title="Slipknot"/>
           <p>¡ Últimas entradas disponibles !</p>
           <p>Fecha: ${fechaActual} </p>
           <p>Horario: 17:30hs.</p>
           <p class="horario">Estadio: River.</p>
           <button class="button-login" id="btn-close-popup">Cerrar</button>
        </div>
    </div>
`;
  body.innerHTML += popUp;
  body.style.overflow = "hidden";

  console.log("popup agregado");

  const btnClosePupUp = document.getElementById("btn-close-popup");

  btnClosePupUp.addEventListener("click", () => {
    body.style.overflow = "";

    const popUpHtml = document.querySelector(".popup");
    popUpHtml.style.display = "none";
  });
});