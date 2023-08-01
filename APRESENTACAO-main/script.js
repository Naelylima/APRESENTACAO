function openModalFromSVG(groupId) {
  const modal = document.getElementById("modal");
  const fade = document.getElementById("fade");
  const modalRadija = document.getElementById("modalRadija")

  if (modal && fade && groupId) {
    if (groupId == 'naely') {
      modal.classList.toggle("hide");
      fade.classList.toggle("hide");
    }
    if (groupId == 'gui') {
      modalRadija.classList.toggle("hide");
      fade.classList.toggle("hide");

    }
  } else {
    console.error("Elementos não encontrados no DOM.");
  }
}

// Adicione um event listener para receber mensagens do arquivo SVG
var teste = '';
window.addEventListener("message", function (event) {
  if (event.data.type === "openModal") {
    console.log(event.data);
    openModalFromSVG(event.data.id);
    teste = event.data.id
  }
  else {
    console.log('else');
    console.log(event.data);
  }
});

// FECHAR O MODAL

const closeModalButton = document.getElementById("close-modal")
const fade = document.getElementById("fade");
const modal = document.getElementById("modal");

const toggleModal = (teste) => {
  if (teste == 'naely') {
    modal.classList.toggle("hide")
  }
  if (teste == 'gui') {
    modalRadija.classList.toggle("hide")
  }
  fade.classList.toggle("hide");
};

[fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal(teste));
});
