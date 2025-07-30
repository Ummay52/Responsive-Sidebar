const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");


function toggleSideBar() {
     sidebar.classList.toggle("close")
    toggleBtn.classList.toggle("rotate")

    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate')
    });
}

//toggle the visibility of a submenu
function toggleSubMenu(button) {
    // Get the next sibling element of button that is <ul> (the submenu)
    const subMenu = button.nextElementSibling;
    
    // First, close all other dropdown menus
    const allButtons = document.querySelectorAll('.dropdown-btn');
    allButtons.forEach(btn => {
        if (btn !== button) {
            const otherSubMenu = btn.nextElementSibling;
            if (otherSubMenu.classList.contains('show')) {
                otherSubMenu.classList.remove('show');
                btn.classList.remove('rotate');
            }
        }
    });

    // Then toggle the clicked submenu
    subMenu.classList.toggle("show");
    button.classList.toggle("rotate");
    
    // If sidebar is closed, open it
    if(sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close');
        toggleBtn.classList.toggle('rotate');
    }
}

 
    

