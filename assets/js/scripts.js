var body = document.querySelector('body')
var menuContainer = document.querySelector('#main-menu-mobile');
var triggers = document.querySelectorAll('.toggle-mobile-menu');

for (var trigger of triggers) {
    trigger.onclick = function() {
        menuContainer.classList.toggle('open');
        menuTrigger.classList.toggle('is-active')
        body.classList.toggle('lock-scroll')
    }
}
