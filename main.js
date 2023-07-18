const headerMobile = document.querySelector('#header__mobile');
const headerDesktop = document.querySelector('#header__desktop');
const footerMobile = document.querySelector('#footer__mobile');
const footerDesktop = document.querySelector('#footer__desktop');
const btnOpen = document.querySelector('#btn_open');
const btnClose = document.querySelector('#btn_close');
const homeBanner = document.querySelector('.home__banner');
const mobileMenuWindow = document.querySelector('#mobile__menu_window');
const originalWindow = document.querySelector('#original_window');
const title = document.querySelector('.title');

window.addEventListener('resize', () => {
  if (window.innerWidth < 480) {
    headerDesktop.classList.add('hidden');
    footerDesktop.classList.add('hidden');
    headerMobile.classList.remove('hidden');
    footerMobile.classList.remove('hidden');
  }
  if (window.innerWidth >= 480) {
    headerMobile.classList.add('hidden');
    footerMobile.classList.add('hidden');
    headerDesktop.classList.remove('hidden');
    footerDesktop.classList.remove('hidden');
  }
});

console.log(mobileMenuWindow);
console.log(originalWindow);
console.log(title);

title.addEventListener('click', () => {
  mobileMenuWindow.classList.add('hidden');
  originalWindow.classList.remove('hidden');
  window.location.href = './index.html';
});

btnOpen.addEventListener('click', () => {
  mobileMenuWindow.classList.remove('hidden');
  originalWindow.classList.add('hidden');
  // homeBanner.classList.add('hidden');
});

btnClose.addEventListener('click', () => {
  mobileMenuWindow.classList.add('hidden');
  originalWindow.classList.remove('hidden');
  // homeBanner.classList.remove('hidden');
});
