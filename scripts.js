function openNav() {
    var closeNav = $('.sidenav-close-button');
    document.getElementById("sidenav").style.marginRight = "0";	
    closeNav.toggleClass('rotate');
}

function closeNav() {
    var closeNav = $('.sidenav-close-button');
    document.getElementById("sidenav").style.marginRight = "-321";	
    closeNav.toggleClass('rotate');
}