let form = document.forms.myForm;

const divtPholeLT = document.getElementById("tPholeLT");
const divtPholeLB = document.getElementById("tPholeLB");
const divtPholeRT = document.getElementById("tPholeRT");
const divtPholeRB = document.getElementById("tPholeRB");

form.cbHoleLT.onchange = show;
form.cbHoleLB.onchange = show;
form.cbHoleRT.onchange = show;
form.cbHoleRB.onchange = show;

function show() {
  if (form.cbHoleLT.checked) {
    divtPholeLT.classList.remove("hide");
  } else {
    divtPholeLT.classList.add("hide");
  }
  if (form.cbHoleLB.checked) {
    divtPholeLB.classList.remove("hide");
  } else {
    divtPholeLB.classList.add("hide");
  }
  if (form.cbHoleRT.checked) {
    divtPholeRT.classList.remove("hide");
  } else {
    divtPholeRT.classList.add("hide");
  }
  if (form.cbHoleRB.checked) {
    divtPholeRB.classList.remove("hide");
  } else {
    divtPholeRB.classList.add("hide");
  }
}
