// 장바구니!

const basketstarterEl = document.querySelector('header .basket-starter');
const basketEl = basketstarterEl.querySelector('.basket');

basketstarterEl.addEventListener('click', function(event) {
  event.stopPropagation();
  // contains()메소드는 해당 값이 class에 있는지 없는지 확인하는 메소드 
  // -> contains()메소드 말고는 remove, add 등이 있다.
  if (basketEl.classList.contains('show')) {
    //hide
    hideBasket()
  } else {
    // show
    showBasket()
  }
});
basketEl.addEventListener('click', function(event){
  event.stopPropagation();
});

window.addEventListener('click', function() {
  hideBasket()
});

function showBasket() {
  basketEl.classList.add('show');
};
function hideBasket() {
  basketEl.classList.remove('show');
};




// 검색!
const headerEl = document.querySelector('header');
const headerMenuEls = [...document.querySelectorAll('ul.menu > li')]
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const searchshadowEl = searchWrapEl.querySelector('.shadow');

searchStarterEl.addEventListener('click', showSearch);
searchCloserEl.addEventListener('click', hideSearch);
searchshadowEl.addEventListener('click', hideSearch);

function showSearch() {
  headerEl.classList.add('searching');
  document.documentElement.classList.add('fixed');
  headerMenuEls.reverse().forEach(function(el, index) {
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
  });
};
function hideSearch() {
  headerEl.classList.remove('searching');
  document.documentElement.classList.remove('fixed');
  headerMenuEls.reverse().forEach(function(el, index) {
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
  });
};
