const navMenu = document.querySelector('.nav__menu');
const navToggle=document.querySelector('.nav__toggle');
const navClose=document.querySelector('#nav-close');
const navLink=document.querySelectorAll('.nav__link');




if(navToggle){
    navToggle.addEventListener('click',()=>{
        console.log("kkkee");
        navMenu.classList.add("show-menu");
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

navLink.forEach(n=>n.addEventListener('click',()=>{
    navMenu.classList.remove("show-menu");
}))

//Toggle skills accordion

const skillsHeader=document.querySelectorAll('.skills__header');
const skillsContent=document.querySelectorAll('.skills__content');


skillsHeader.forEach((sc)=>{
    sc.addEventListener('click',()=>{

        for(i=0;i<skillsContent.length;i++){
            skillsContent[i].classList.add('skills__close');
            skillsContent[i].classList.remove('skills__open');
        }

        sc.parentNode.classList.add('skills__open');
        sc.parentNode.classList.remove('skills__close');

    

    })
})

//tabs section
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active');
        });

        target.classList.add('qualification__active');

        tab.forEach(tab=>{
            tab.classList.remove('qualification__active');
        });

        tab.classList.add('qualification__active');


    })
})

