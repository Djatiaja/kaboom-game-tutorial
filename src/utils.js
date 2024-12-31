export function displayDialoge(text, onDisplayEnd) {
  const dialogUi = document.getElementById("textbox-container");
  const dialog = document.getElementById("dialogue");

  dialogUi.style.display = "block";

  let index = 0;
  let currentText = "";

  const intervalRef = setInterval(() => {
    if (index < text.length) {
      currentText += text[index];
      dialog.innerText = currentText;
      index++;
      return;
    }
    clearInterval(intervalRef);
  }, 5);

  const closeBtn = document.getElementById("close")

  function onCloseBtnClick() {
    onDisplayEnd();

    dialogUi.style.display= "none";
    dialog.innerText = "";
    clearInterval(intervalRef);

    closeBtn.removeEventListener("click", onCloseBtnClick);
  }

  closeBtn.addEventListener("click", onCloseBtnClick)
}


export function setCamScale(k){
    const resizeFactor = k.width() / k.height();

    if(resizeFactor<1){
        k.camScale(k.vec2(1))
    }else{
        k.camScale(k.vec2(1.5))
    }
}