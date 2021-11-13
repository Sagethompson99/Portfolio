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

function openInstagram() {
    window.open("https://www.instagram.com/sage.thompsonn/");
}

function openEmail(){
    window.open('mailto:sagethompson85@gmail.com')
}

function openLinkedin(){
    window.open("https://www.linkedin.com/in/sagethompson99/");
}