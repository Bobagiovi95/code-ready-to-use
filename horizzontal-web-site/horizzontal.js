const container = document.querySelector('.container');
let scrollLine = document.querySelector('.scroll');

container.addEventListener('wheel', (e)=> {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
    scrollLine.style.width = container.scrollLeft / 2 + 'px';
});

function openNav(){
    document.getElementsByClassName('side-nav')[0].style.width = "15em";
    document.getElementById('nav').style.opacity = "1";
}

function closeNav(){
    document.getElementsByClassName('side-nav')[0].style.width = "5em";
    document.getElementById('nav').style.opacity = "0";
}

/* Run animation, da risolvere.*/

function run(){
    let run = document.getElementsByClassName('run')[0];
    let randomNumber = (Math.random() * 100);
    
    let randomPosition = (100 + 'vw') - (randomNumber + 'vw');


    run.style.transform = `translateX(${randomPosition}) translateY(${randomPosition})`;
}

/* Modal Open and Close */
const modal = document.querySelector('#modal');
const openModalButton = document.querySelector('.open-modal');
const closeModalButtom = document.querySelector('.close-modal');

openModalButton.addEventListener('click', openModal);
closeModalButtom.addEventListener('click', closeModal);

function openModal(){
    modal.showModal();
}

function closeModal(){
    modal.setAttribute('closing', "");
    modal.addEventListener('animationend', ()=>{
        modal.removeAttribute('closing');
        modal.close();
    }, {once: true});
}
