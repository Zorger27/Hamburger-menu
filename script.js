const navMenu = document.querySelector("#navMenu");
const menuList = document.querySelector(".menu");

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    menuList.classList.toggle("open");
});
