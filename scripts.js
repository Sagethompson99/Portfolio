const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
        displayScrollElement(el);
        } else if (elementOutofView(el)) {
        hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => { 
    handleScrollAnimation();
});

$(document).ready(function() { 
    handleScrollAnimation();
});

function openNav() {
    var closeNav = $('.sidenav-close-button');
    document.getElementById("sidenav").style.marginRight = "0";	
    closeNav.toggleClass('rotate');
}

function closeNav() {
    var closeNav = $('.sidenav-close-button');
    document.getElementById("sidenav").style.marginRight = "-301";	
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

function openVisualize(){
    window.open("https://play.google.com/store/apps/details?id=com.sage.Visualize")
}

function openPuttPoints(){
    window.open("https://play.google.com/store/apps/details?id=com.minigolf.puttpoints")
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