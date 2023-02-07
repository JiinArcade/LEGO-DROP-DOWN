const sidebarMenuButton = document.querySelector('.gnb-icon-button')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')

function openSidebar() {
  sidebar.classList.add('is-active');
  overlay.classList.add('is-active');
}

// 언제 실행할건지
sidebarMenuButton.addEventListener('click', openSidebar);

function closeSidebar() {
  sidebar.classList.remove('is-active');
  overlay.classList.remove('is-active');
}

overlay.addEventListener('click', closeSidebar);



// 변수 하나 or 여려개 List가 있고 없고 차이
const drawerMenuButtonList = document.querySelectorAll('.drawer-menu-button')

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode;
  drawerMenu.classList.toggle('is-open');
}  

// drawerMenuButton[0].addEventListener('click', toggleDrawerMenu);
// drawerMenuButton[1].addEventListener('click', toggleDrawerMenu);
// drawerMenuButton[2].addEventListener('click', toggleDrawerMenu);

drawerMenuButtonList.forEach(function (button) {
   console.log(button);
   button.addEventListener('click' , toggleDrawerMenu)
})