// Certifique-se de que o código é executado após o carregamento da página
document.addEventListener("DOMContentLoaded", () => {
    const openModalButton = document.querySelector("#naelyG path");
    const closeModalButton = document.querySelector("#close-modal");
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");
  
    // Fução para abrir e fechar modal
    const toggleModal = () => {
        console.log('oi');
        modal.classList.toggle("hide");
        fade.classList.toggle("hide");
    };
  
    [openModalButton, closeModalButton, fade].forEach((el) => {
      el.addEventListener("click", () =>toggleModal());
    });
  });
  