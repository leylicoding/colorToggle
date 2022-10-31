const image = document.querySelector('.btn-toggle');
const getUl = document.querySelector('aside ul');

image.addEventListener('click', function() {
    toggleNav();
})

/* Expiration function */
const toggleNav = function(color) {
    getUl.style.visibility = getUl.style.visibility === 'visible' ? 'hidden' : 'visible';
    document.body.style.backgroundColor = color;

}
/* Arrow function */
document.querySelector("#box1").addEventListener("click", () => toggleNav("#b4afaf"));

document.querySelector("#box2").addEventListener("click", () => toggleNav("red"));

document.querySelector("#box3").addEventListener("click", () => toggleNav("orange"));

document.querySelector("#box4").addEventListener("click", () => toggleNav("purple"));

document.querySelector("#box5").addEventListener("click", () => toggleNav("green"));
