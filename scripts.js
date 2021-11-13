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

function toggleContactInfo() {
    $('#contactButton').toggleClass('button-active');

    delay = 0;
    $('.contact-button').each(function(index,item){
        setTimeout(function() {
            $(item).toggleClass('show-contact-buttons');
          
        }, delay);
        delay += 50;   
    });
}