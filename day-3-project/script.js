const color = document.querySelector(".color");
const generate = document.querySelector(".generate");

const generateColor = () => {
  const hex = Math.random().toString(16).substring(2, 8);
  console.log(hex);
  document.body.style.backgroundColor = "#" + hex;
  color.innerHTML = "#" + hex;
};
generate.addEventListener("click", generateColor);

// let hex = Math.random().toString(16).substring(2, 8);
// console.log(hex);
