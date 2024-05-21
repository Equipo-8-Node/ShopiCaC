const btnScrollUp = document.querySelector(".btnScrollUp");

window.onscroll = function () {
  var posicion = window.scrollY;

  if (posicion > 0) {
    btnScrollUp.style.display = "block";
  } else {
    btnScrollUp.style.display = "none";
  }
};

btnScrollUp.addEventListener("click", scrollUp);

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
