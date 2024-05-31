const burgerIcon = document.querySelector(".burger");
const closeIcon = document.querySelector(".close");
const sideBar = document.querySelector(".sideBar");

burgerIcon.addEventListener("click", () => {
  sideBar.style.display = "flex";
});

closeIcon.addEventListener("click", () => {
  sideBar.style.display = "none";
});
