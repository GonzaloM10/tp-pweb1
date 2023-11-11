const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", (e) => {
  const popUp = `
    <div class="popup">
        <div class="rectangulo">
           <h3>Próximo recital: Slipknot</h3>
           <img src="../IMG/bandas/album-Slipknot.webp" alt="Slipknot" title="Slipknot"/>
           <p>¡ Últimas entradas disponibles !</p>
           <p>Fecha: 13/9/2023</p>
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