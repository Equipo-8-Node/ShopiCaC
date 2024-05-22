const btnArriba = document.querySelector(".btnArriba");

window.onscroll = function () {
  var posicion = window.scrollY;

  if (posicion > 0) {
    btnArriba.style.display = "flex";
  } else {
    btnArriba.style.display = "none";
  }
};

btnArriba.addEventListener("click", scrollUp);

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
