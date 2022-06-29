const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(coupon.value).then(() => {
    btn.textContent = "copied";
    setTimeout(() => {
      btn.textContent = "Copy";
    }, 3000);
  });
};

btn.addEventListener("click", copyText);

// const btn = document.querySelector(".btn");
// const coupon = document.querySelector(".coupon");

// const copyText = (e) => {
//   e.preventDefault();

//   coupon.select();
//   coupon.setSelectionRange(0, 999999);
//   document.execCommand("copy");

//   btn.textContent = "Copied!!!";
//   setTimeout(() => {
//     btn.textContent = "Copy";
//   }, 3000);
// };

// btn.addEventListener("click", copyText);
