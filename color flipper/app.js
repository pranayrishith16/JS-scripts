const len = 256;
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const r = [getRandomNumber(), getRandomNumber(), getRandomNumber()];
  document.body.style.backgroundColor = 'rgb' + '(' + r[0] + ',' + r[1] +',' + r[2] + ')';
  color.textContent = 'rgb' + '(' + r[0] + ',' + r[1] +',' + r[2] + ')';
});

function getRandomNumber() {
  return Math.floor(Math.random() * len);
}