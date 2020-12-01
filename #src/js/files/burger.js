 // burger
    const burger = document.querySelector('.burger');
    const asideMenu = document.querySelector('.aside');
    const main = document.querySelector('.main');
    burger.addEventListener("click", () =>{
        asideMenu.classList.toggle("_hide");
        main.classList.toggle("_active");
        burger.classList.toggle("burger_active");
    });