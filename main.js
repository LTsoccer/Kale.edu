
var spin = document.querySelector('.spinning');
var move = document.querySelector('.spin');

spin.addEventListener('mouseenter', function () {
    move.classList.add('fa-spin');
});

spin.addEventListener('mouseleave', function () {
    move.classList.remove('fa-spin');
});

const dropDown = document.querySelectorAll(".drop-down");
dropDown.forEach( button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        bottom = e.target.nextElementSibling;
        bottom.classList.toggle("hidden");

    });
});

