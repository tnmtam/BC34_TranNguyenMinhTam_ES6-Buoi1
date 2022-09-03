let hoverMe = () => {
    let str = document.querySelector("h2.heading").innerHTML;
    let chars = [...str];
    let html = "";
    for (let i in chars) {
      if (chars[i].match(" ")) {
        chars.splice(i, 1);
      }
      html += `<span>${chars[i]}</span>`;
    }
    document.querySelector("h2.heading").innerHTML = html;
  };
  window.onload = function (){
      hoverMe()
  }