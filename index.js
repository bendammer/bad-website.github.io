const hasDropdown = document.querySelectorAll('.has-dropdown');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const exitButton = document.querySelector('.exit-button');
const body = document.querySelector('body');
const darkButton = document.querySelector('#theme-button-dark');
const lightButton = document.querySelector('#theme-button-light');
const darkTheme = document.querySelector('.dark');
const mobileTheme = document.querySelector('.theme');
const theme = localStorage.getItem('theme');
const lightbox = document.createElement('div');
const images = document.querySelectorAll('img:not(.theme)');

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
  mobileTheme.style.display = 'block';
});

exitButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  hamburger.style.display = 'block';
  body.style.overflowY = 'visible';
  const dropdown = document.querySelector('.dropdown-menu');
  dropdown.classList.remove('active');
  mobileTheme.style.display = 'none';
});

if (theme) {
  body.classList = theme;
  if (theme === 'light') {
    darkButton.style.display = 'block';
    lightButton.style.display = 'none';
  } else {
    darkButton.style.display = 'none';
    lightButton.style.display = 'block';
  }
};

darkButton.addEventListener('click', () => {
  body.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  darkButton.style.display = 'none';
  lightButton.style.display = 'block';
});

lightButton.addEventListener('click', () => {
  body.classList.remove('dark');
  localStorage.setItem('theme', 'light');
  darkButton.style.display = 'block';
  lightButton.style.display = 'none';
});

lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  });
});

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
})