const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');
const mobileClick = document.querySelector('.mobile-click')

mobileNavButton.addEventListener('click', function () {
  mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
})

mobileClick.addEventListener('click', function () {
  mobileNavIcon.classList.remove('active');
	mobileNav.classList.remove('active');
  document.body.classList.remove('no-scroll')
})