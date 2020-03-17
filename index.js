const hasDropdown = document.querySelectorAll('.has-dropdown');
console.log(hasDropdown);

hasDropdown.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    const dropdown = element.querySelector('.dropdown-menu');
    console.log(dropdown);
    dropdown.classList.toggle('active');
  })
});
