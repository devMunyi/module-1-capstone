// get mobile menu element
const mobileMenuToggle = document.querySelector('.hamburger__bar');
// get nav links element
const links = document.querySelectorAll('.mynav__item-link');

// handle user menu click
mobileMenuToggle.addEventListener('click', () => {
  document.body.classList.toggle('open-nav');
});

// handle user menu clicks
links.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('open-nav');
  });
});
