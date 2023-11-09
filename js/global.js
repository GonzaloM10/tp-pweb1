const body = document.querySelector("body");
const btnRecitales = document.getElementById("btn-recitales");

btnRecitales.addEventListener("click", () => {
  const popUp = `
    <div class="popup">
        <button id="btn-close-popup">X</button>
        Texto prueba
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
