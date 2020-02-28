const menuBtn = document.querySelector("#navBtn");


let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
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