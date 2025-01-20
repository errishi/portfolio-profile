const icon = document.querySelector("#nav-icon");
const Mobile_nav = document.querySelector("#mobile-nav");
const Xicon = document.getElementById("Xnav-icon");
const Activate = document.querySelector(".active");
const Xactivate = document.querySelector(".active2");

icon.addEventListener('click',()=>{
    Activate.style.visibility = 'hidden';
    Activate.style.transition = 'all 0.3s ease 0.2s';
    Xicon.style.visibility = 'visible';
});

Xicon.addEventListener('click', ()=>{
    Xactivate.style.visibility = 'hidden';
    Xactivate.style.transition = 'all 0.3s ease 0.2s';
    icon.style.visibility = 'visible';
})
