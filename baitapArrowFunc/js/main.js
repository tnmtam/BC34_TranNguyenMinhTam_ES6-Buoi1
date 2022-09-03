const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

const renderButton = () => {
    let html = "";
    for (let i = 0; i < colorList.length; i++) {
      let color = colorList[i];
      let button = `<button onclick = "changeColor('${color}')" id = "colorButton" class = "color-button ${color}"></button>`;
      html += button;
    }
    document.querySelector("#colorContainer").innerHTML = html;
  };
  
  window.changeColor = (color) => {
    document.querySelector("#house").className = "house" + " " + color;
  };
  
  let onclickButton = () => {
    let arrBtn = document.querySelectorAll("#colorContainer .color-button");
    if (arrBtn) {
      arrBtn.forEach(function (btn, key) {
        btn.addEventListener("click", function () {
          btn.classList.toggle("active");
          arrBtn.forEach(function (a, b) {
            if (key !== b) {
              a.classList.remove("active");
            }
          });
        });
      });
    }
  };
  window.onload = () => {
    renderButton();
    onclickButton()
  };


