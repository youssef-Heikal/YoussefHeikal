const MobileMenu = document.querySelector('.mobile-menu');
const MobileLinks = document.querySelector('.mobile-links');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const link5 = document.getElementById('link5');
const btntop = document.querySelector('.up');


MobileMenu.addEventListener("click" , function(){
    MobileMenu.classList.toggle("active")
    MobileLinks.classList.toggle("active")
})

link1.addEventListener("click" , function(){
    MobileMenu.classList.remove("active")
    MobileLinks.classList.remove("active")
})

link2.addEventListener("click" , function(){
    MobileMenu.classList.remove("active")
    MobileLinks.classList.remove("active")
})

link3.addEventListener("click" , function(){
    MobileMenu.classList.remove("active")
    MobileLinks.classList.remove("active")
})

link4.addEventListener("click" , function(){
    MobileMenu.classList.remove("active")
    MobileLinks.classList.remove("active")
})

link5.addEventListener("click" , function(){
    MobileMenu.classList.remove("active")
    MobileLinks.classList.remove("active")
})




btntop.addEventListener("click" , function(){
    scrollTo(0 , 0);
})



window.onscroll = function(){
    if (window.pageYOffset >= 500 ) {
        btntop.style.visibility = "visible";
    } else{
        btntop.style.visibility = "hidden";
    }
    
}


