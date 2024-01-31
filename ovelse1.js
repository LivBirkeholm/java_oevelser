const alkoholBilleder = document.querySelectorAll(".alkohol");
const sodaBilleder = document.querySelectorAll(".soda");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  alkoholBilleder.forEach((billede) => {
    billede.addEventListener("click", clickBillede);
  });
  sodaBilleder.forEach((billede) => {
    billede.addEventListener("click", clickBillede);
  });
}

function clickBillede() {
  if (this.classList.contains("alkohol")) {
    console.log("Indeholder Alkohol");
  } else {
    console.log("Alkoholfri");
  }
}
