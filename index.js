window.addEventListener("scroll", checkPosition);
function checkPosition(e) {
  document.querySelector(
    ".sky"
  ).style.transform = `matrix(1,0,0,1,0,${calculateTransformY(0, -200)})`;
  document.querySelector(
    ".cloud1"
  ).style.transform = `matrix(1,0,0,1,0,${calculateTransformY(0, -800)})`;
  document.querySelector(
    ".cloud2"
  ).style.transform = `matrix(1,0,0,1,0,${calculateTransformY(-150, -500)})`;
  document.querySelector(
    ".cloud3"
  ).style.transform = `matrix(1,0,0,1,0,${calculateTransformY(-50, -650)})`;
  document.querySelector(
    ".planet1"
  ).style.transform = `matrix(1,0,0,1,0,${calculateTransformY(-10, -100)})`;
  document.querySelector(
    ".planet2"
  ).style.transform = `matrix(1,0,0,1,0,${calculateTransformY(-30, -250)})`;
  document.querySelector(
    ".planet3"
  ).style.transform = `matrix(1,0,0,1,0,${calculateTransformY(-30, -250)})`;
  document.querySelector(
    ".leia"
  ).style.transform = `matrix(1,0,0,1,0,${calculateTransformY(-30, -250)})`;
  document.querySelector(
    ".ovni"
  ).style.transform = `matrix(1,0,0,1,${calculateTransformX(
    0,
    -800
  )},${calculateTransformY(-50, -600)})`;
}
function calculateTransformX(x1, x2) {
  let scrollDist = document.querySelector(".scrollDist");
  let scrollDistV = scrollDist.getBoundingClientRect();
  // console.log((Math.abs(scrollDistV.top) * x2) / (scrollDistV.height / 2));
  return x1 + (Math.abs(scrollDistV.top) * x2) / (scrollDistV.height / 2);
}
function calculateTransformY(y1, y2) {
  let scrollDist = document.querySelector(".scrollDist");
  let scrollDistV = scrollDist.getBoundingClientRect();
  return y1 + (Math.abs(scrollDistV.top) * y2) / (scrollDistV.height / 2);
}
