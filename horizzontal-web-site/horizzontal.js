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


function run(){
    let run = document.getElementsByClassName('run')[0];
    let randomNumber = (Math.random() * 50);
    
    if (randomNumber > 10) {
        randomPosition = randomNumber +'em';
    } else {
        randomPosition += 10;
    }

    run.style.left = randomPosition;
    run.style.top = randomPosition;
    run.style.transition = "2s ease";
}