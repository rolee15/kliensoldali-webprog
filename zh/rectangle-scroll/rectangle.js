window.addEventListener("scroll", () => {
  const verticalScrollPx = window.scrollY;
  const height = window.outerHeight;
  let ratio = verticalScrollPx / height;

  const rectangle = document.getElementById("rectangle");

  if (ratio < 0.2) {
    rectangle.style.backgroundColor = "red";
  } else if (ratio < 0.4) {
    rectangle.style.backgroundColor = "yellow";
  } else if (ratio < 0.6) {
    rectangle.style.backgroundColor = "green";
  } else if (ratio < 0.8) {
    rectangle.style.backgroundColor = "lightblue";
  } else {
    rectangle.style.backgroundColor = "purple";
  }
});

function toColor(num) {
  num >>>= 0;
  var b = num & 0xff,
    g = (num & 0xff00) >>> 8,
    r = (num & 0xff0000) >>> 16,
    a = ((num & 0xff000000) >>> 24) / 255;
  return "rgba(" + [r, g, b, a].join(",") + ")";
}
