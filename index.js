const hasDropdown = document.querySelectorAll('.has-dropdown');

hasDropdown.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    const dropdown = element.querySelector('.dropdown-menu');
    dropdown.classList.toggle('active');
  })
});
