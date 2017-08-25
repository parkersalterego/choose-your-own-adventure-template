var hamMenu = document.querySelector('#ham-menu');
var nav = document.querySelector('#nav-bar');

hamMenu.addEventListener('click', function() {
  if (hamMenu.classList.contains('open')) {
    this.classList.remove('open');
    nav.classList.remove('slide-in');
    nav.classList.add('slide-out');
    document.querySelector('.nav-icon-container').classList.remove('opacity-zero');
  } else {
    this.classList.add('open');
    nav.classList.add('slide-in');
    nav.classList.remove('slide-out');
    document.querySelector('.nav-icon-container').classList.add('opacity-zero');
  }
});
