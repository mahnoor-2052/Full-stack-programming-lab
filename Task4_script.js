function addColors() {
  let colors = [
    document.getElementById("color1").value,
    document.getElementById("color2").value,
    document.getElementById("color3").value
  ];

  let container = document.getElementById("colorContainer");

  colors.forEach(function(color) {
    let box = document.createElement("div");
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.backgroundColor = color;
    box.style.display = "inline-block";
    box.style.margin = "5px";
    container.appendChild(box);
  });

  document.getElementById("browserInfo").innerText =
    "Width: " + window.innerWidth +
    " Height: " + window.innerHeight;
}

function clearColors() {
  document.getElementById("colorContainer").innerHTML = "";
}
