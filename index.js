const hasDropdown = document.querySelectorAll('.has-dropdown');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const exitButton = document.querySelector('.exit-button');
const body = document.querySelector('body');
const darkButton = document.querySelector('#theme-button-dark');
const lightButton = document.querySelector('#theme-button-light');
const darkTheme = document.querySelector('.dark');

hasDropdown.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    const dropdown = element.parentElement.querySelector('.dropdown-menu');
    dropdown.classList.toggle('active');
  })
});

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  hamburger.style.display = 'none';
  body.style.overflowY = 'hidden';
});

exitButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  hamburger.style.display = 'block';
  body.style.overflowY = 'visible';
  const dropdown = document.querySelector('.dropdown-menu');
  dropdown.classList.remove('active');
});

darkButton.addEventListener('click', () => {
  body.classList.add('dark');
  darkButton.style.display = 'none';
  lightButton.style.display = 'block';
});

lightButton.addEventListener('click', () => {
  body.classList.remove('dark');
  darkButton.style.display = 'block';
  lightButton.style.display = 'none';
});


