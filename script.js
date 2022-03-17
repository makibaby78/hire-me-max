/* Header Responsive */
const btnHeader = document.querySelectorAll('.btn-header-res');
const btnHeaderO = document.querySelector('.btn-ho');
const btnHeaderC = document.querySelector('.btn-hc');
const contentHeader = document.querySelector('.header-res')

btnHeader[0].addEventListener('click', activeHeader)
btnHeader[1].addEventListener('click', activeHeader)

function activeHeader() {
    if(contentHeader.className.indexOf('header-res-active')==-1){
        contentHeader.classList.add('header-res-active')
        btnHeaderC.classList.remove('hide');
    }else{
        contentHeader.classList.remove('header-res-active')
        btnHeaderC.classList.add('hide');
    }
}
/* End of Header Responsive */

/* On scroll Header Background */
const header = document.querySelector('.header');
const skillBarClass = document.querySelectorAll('.skill-bar');

const loadBar = ['load-bar80', 'load-bar60', 'load-bar75', 'load-bar60', 'load-bar40', 'load-bar60', 'load-bar60', 'load-bar60', 'load-bar40', 'load-bar40'];

let scrollLastVal = 0;


function scrolling(){
    let scrollDetector = window.scrollY;
    
    if(window.scrollY>=500){
        header.classList.add('header-color');
    }else{
        header.classList.remove('header-color');
    }
    if(scrollLastVal<scrollDetector){
        header.style.top = "-80px";
        contentHeader.style.margin = "80px auto auto auto";
        contentHeader.style.transition =  "0";
    }else{
        header.style.top = "0";
        contentHeader.style.margin = "0 auto auto auto";
        contentHeader.style. transition =  "0.3s";
    }
    scrollLastVal = scrollDetector;
}
scrolling()

window.addEventListener('scroll', ()=>{
    scrolling();

    let content = document.querySelector('.block-3');
    let contentPositionTp = content.getBoundingClientRect().top;
    let contentPositionBm = content.getBoundingClientRect().bottom;
    let screenPosition = window.innerHeight;


    if(contentPositionTp<screenPosition&&contentPositionBm+screenPosition>screenPosition){
        for(let x=0; x<=skillBarClass.length-1;x++){
            skillBarClass[x].classList.add(loadBar[x])
        }
    }else{
        for(let x=0; x<=skillBarClass.length-1;x++){
            skillBarClass[x].classList.remove(loadBar[x])
        }
    }
})
/* End */
/* Reference Slider */
const btnSlider = document.querySelectorAll('.rsb');
const slideActive = document.querySelector('.ref-slid');


let autoSlide;
autoSlide = setInterval( () => {
    autoSlideF();
}, 4000);

function autoSlideF() {
    if(slideActive.className.indexOf('active0')>-1){
        slideActive.classList.remove('active0');
        slideActive.classList.add('active1')
        btnRefSlider(1)
    }else if(slideActive.className.indexOf('active1')>-1){
        slideActive.classList.remove('active1');
        slideActive.classList.add('active2')
        btnRefSlider(2)
    }else if(slideActive.className.indexOf(`active${btnSlider.length-1}`)>-1){
        slideActive.classList.remove('active2');
        slideActive.classList.add('active0')
        btnRefSlider(0)
    }
}

for(let y=0; y<=btnSlider.length-1;y++){
    btnSlider[y].addEventListener('click', ()=>{
        clearInterval(autoSlide)
        btnRefSlider(y)
        contRefSlider(y)
        autoSlide = setInterval( () => {
            autoSlideF();
        }, 4000); 
    })
}
function btnRefSlider(y) {
    for(let x=0;x<=btnSlider.length-1;x++){
        btnSlider[x].classList.remove('active')
    }
    btnSlider[y].classList.add('active')
}

function contRefSlider(y) {
    for(let x=0;x<=btnSlider.length-1;x++){
        slideActive.classList.remove(`active${x}`)
    }
    slideActive.classList.add(`active${y}`);
}
/* END */

/* Scroll To Top */
const mybutton = document.getElementById('myBtn');

window.onscroll = () => {
    scrollFunction()
}

function scrollFunction() {
    if(document.body.scrollTop>50||document.documentElement.scrollTop>50){
        mybutton.style.display = "block"
    }else{
        mybutton.style.display = "none"
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

mybutton.addEventListener('click', topFunction);
/* End */