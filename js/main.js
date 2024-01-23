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
// ...(전개 연산자)를 이용한 얕은 복사라고 한다. querySelectorAll로 찾은 값들을 배열로 담아주는 역할을 함(?)
const headerMenuEls = [...document.querySelectorAll('ul.menu > li')]
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const searchShadowEl = searchWrapEl.querySelector('.shadow');
const searchInputEl = searchWrapEl.querySelector('input');
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')]

searchStarterEl.addEventListener('click', showSearch);
searchCloserEl.addEventListener('click', hideSearch);
searchShadowEl.addEventListener('click', hideSearch);

function showSearch() {
  headerEl.classList.add('searching');
  document.documentElement.classList.add('fixed');
  headerMenuEls.reverse().forEach(function(el, index) {
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
  });
  searchDelayEls.forEach(function(el, index) {
    el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
  });
  // setTimeout이라는 함수를 사용해서 위에서 실행되는 애니메이션처리를 다 끝낸후에 원하는 처리를 할 수 있게 만든다.
  // -> setTimeout이라는 함수를 쓰지않을 경우에는 원하는 동작이 실행되지 않는다.  
  setTimeout(function() {
    searchInputEl.focus();
  }, 600);
};
function hideSearch() {
  headerEl.classList.remove('searching');
  document.documentElement.classList.remove('fixed');
  headerMenuEls.reverse().forEach(function(el, index) {
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
  });
  searchDelayEls.reverse().forEach(function(el, index) {
    el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
  });
  searchDelayEls.reverse();
  // 해당 input의 내용에 입력했던 값을 지워주기!
  searchInputEl.value = '';
};
