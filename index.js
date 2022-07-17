var button = document.querySelector(".bbutton");
var menu = document.querySelector(".menu");
function toggle_menu() {
  console.log("clicked");
  button.classList.toggle("active");
  menu.classList.toggle("active");
}
