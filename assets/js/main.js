const menuBtn = document.querySelector("#navBtn");
const aboutMeBtn = document.querySelector("#aboutMeBtn");
const myWorkBtn = document.querySelector("#myWorkBtn");
const homeBtn = document.querySelector("#homeBtn");


let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
aboutMeBtn.addEventListener("click", closeMenu);
myWorkBtn.addEventListener("click", closeMenu);
homeBtn.addEventListener("click", closeMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    aboutMeBtn.setAttribute("data-toggle","collapse");
    myWorkBtn.setAttribute("data-toggle","collapse");
    homeBtn.setAttribute("data-toggle","collapse");
    aboutMeBtn.setAttribute("data-target","#navbarSupportedContent");
    myWorkBtn.setAttribute("data-target","#navbarSupportedContent");
    homeBtn.setAttribute("data-target","#navbarSupportedContent");



    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");


    //Set Menu State
    showMenu = false;
  }
}

function closeMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");

    //Set Menu State
    showMenu = false;
  }
}
