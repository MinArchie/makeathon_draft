let text = document.getElementById('text');
let sun = document.getElementById('sun');
let sky = document.getElementById('sky');
let valley1 = document.getElementById('valley1');
let valley2 = document.getElementById('valley2');
let valley3 = document.getElementById('valley3');
let birds = document.getElementById('birds');
let button = document.getElementById('button');

function updateParallax() {
    let value = window.scrollY;
    let opacity = 1 - value / 500; // Adjust the divisor for the fade-out speed

    text.style.marginTop = value * 2.5 + 'px';

    if (window.innerWidth > 992) {
        button.style.marginTop = value * 0.5 + 'px';
        button.style.opacity = opacity;

        sun.style.transform = `translate(0, ${value * 0.5}px)`;
        valley3.style.transform = `translate(0, ${value * 0.3}px)`;
        valley2.style.transform = `translate(0, ${value * 0.3}px)`;
        valley1.style.transform = `translate(0, ${value * 0.3}px)`;
        sky.style.transform = `translate(0, ${value * 0.2}px)`;
        birds.style.transform = `translate(${value * -0.5}px, 0)`;
    } else if (window.innerWidth < 991 && window.innerWidth > 769) {
        sun.style.transform = `translate(0, ${value * 0.5}px)`;
        valley3.style.transform = `translate(0, ${value * 0.3}px)`;
        valley2.style.transform = `translate(0, ${value * 0.3}px)`;
        valley1.style.transform = `translate(0, ${value * 0.3}px)`;
        sky.style.transform = `translate(0, ${value * 0.2}px)`;
        birds.style.transform = `translate(${value * -0.5}px, 0)`;
        button.style.opacity = opacity;
    } else {
        sun.style.transform = `translate(0, ${value * 0.5}px)`;
        valley3.style.transform = '';
        valley2.style.transform = '';
        sky.style.transform = '';
        birds.style.transform = '';
        button.style.marginTop = value * 0.5 + 'px';
        button.style.opacity = opacity;
    }
}

window.addEventListener('scroll', updateParallax);

// Initial update
updateParallax();
