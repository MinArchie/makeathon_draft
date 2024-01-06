let text = document.getElementById('text');
let sun = document.getElementById('sun');
let sky = document.getElementById('sky');
let valley1 = document.getElementById('valley1');
let valley2 = document.getElementById('valley2');
let valley3 = document.getElementById('valley3');
let birds = document.getElementById('birds');



function updateParallax() {
    let value = window.scrollY;
    let opacity = 1 - value / 500; // Adjust the divisor for the fade-out speed

    text.style.marginTop = value * 2.5 + 'px';

    if (window.innerWidth > 600) {

        sun.style.transform = `translate(0, ${value * 0.5}px)`;
        valley3.style.transform = `translate(0, ${value * 0.1}px)`;
        valley2.style.transform = `translate(0, ${value * 0.2}px)`;
        valley1.style.transform = `translate(0, ${value * 0.2}px)`;
        sky.style.transform = `translate(0, ${value * 0.2}px)`;
        birds.style.transform = `translate(${value * -0.5}px, 0)`;
    } else if (window.innerWidth <= 600 && window.innerWidth > 449) {
        sun.style.transform = `translate(0, ${value * 0.5}px)`;
        valley3.style.transform = `translate(0, ${value * 0.3}px)`;
        valley2.style.transform = `translate(0, ${value * 0.3}px)`;
        valley1.style.transform = `translate(0, ${value * 0.3}px)`;
        sky.style.transform = `translate(0, ${value * 0.2}px)`;
        birds.style.transform = `translate(${value * -0.5}px, 0)`;
    } else {
        sun.style.transform = `translate(0, ${value * 0.5}px)`;
        valley3.style.transform = '';
        valley2.style.transform = '';
        sky.style.transform = '';
        birds.style.transform = '';
    }
}

window.addEventListener('scroll', updateParallax);

// Initial update
updateParallax();




document.addEventListener('DOMContentLoaded', function () {
    // Function to highlight the hovered box and reset others
    function highlightBox(box) {
        var colorContainers = document.querySelectorAll('.color-container');
        colorContainers.forEach(function (otherBox) {
            otherBox.classList.remove("highlight");
        });

        box.classList.add("highlight");
    }

    // Function to reset all boxes
    function resetBoxes() {
        var colorContainers = document.querySelectorAll('.color-container');
        colorContainers.forEach(function (box) {
            box.classList.remove("highlight");
        });
    }

    // Attach event listeners to each color-container
    var colorContainers = document.querySelectorAll('.color-container');
    colorContainers.forEach(function (box) {
        box.addEventListener('mouseenter', function () {
            highlightBox(box);
        });

        box.addEventListener('mouseleave', function () {
            resetBoxes();
        });
    });
});






