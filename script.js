function toggleText() {
    let text = document.getElementById("contactinfo");
    text.classList.toggle("show");
    text.classList.toggle("hide");
  }
let text = document.getElementById("resume");
text.onclick = changeText();

function changeText() {
  let text = document.getElementById("resume");
  if (text.innerHTML === "Resume"){
    text.innerHTML = "Pause";
  } else {
    text.innerHTML = "Resume";
  }
}