menu = document.getElementById('menu-icon');
navlist = document.querySelector('.navlist');

menu.onclick = function() {
    navlist.classList.toggle('active')
}
