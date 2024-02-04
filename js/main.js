// 해당 경로에서 파일을 가져와 ipads라는 변수(?)같은 개념으로 사용할 수 있게 하는 것(?) 
import ipads from '../data/ipads.js'
import navigations from '../data/navigations.js'




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
searchCloserEl.addEventListener('click', function(event) {
  event.stopPropagation()
  hideSearch()
});
searchShadowEl.addEventListener('click', hideSearch);

function showSearch() {
  headerEl.classList.add('searching');
  stopScroll()
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
  playScroll()
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
function playScroll() {
  document.documentElement.classList.remove('fixed');
}
function stopScroll() {
  document.documentElement.classList.add('fixed');
}




// 헤더 메뉴 토글!
const menuStarterEl = document.querySelector('header .menu-starter')
menuStarterEl.addEventListener('click', function() {
  if (headerEl.classList.contains('menuing')) {
    headerEl.classList.remove('menuing')
    searchInputEl.value = '';
    playScroll()
  } else {
    headerEl.classList.add('menuing')
    stopScroll()
  }
})




//헤더 검색!
const searchTextFieldEl = document.querySelector('header .textfield')
const searchCancelEl = document.querySelector('header .search-canceler')
searchTextFieldEl.addEventListener('click', function() {
  headerEl.classList.add('searching--mobile')
  searchInputEl.focus()
})
searchCancelEl.addEventListener('click', function() {
  headerEl.classList.remove('searching--mobile')
})




// 최상위(윈도우)측에서 사이즈를 다시 설정할때 실행되는 함수 
window.addEventListener('resize', function() {
  if(window.innerWidth <= 740) {
    headerEl.classList.remove('searching')
  }else {
    headerEl.classList.remove('searching--mobile')
  }
})




//
const navEl = document.querySelector('nav')
const navMenuTogglerEl = navEl.querySelector('.menu-toggler')

navMenuTogglerEl.addEventListener('click', function() {
  if(navEl.classList.contains('menuing')) {
    navEl.classList.remove('menuing')
  }else {
    navEl.classList.add('menuing')
  }
})




// 요소의 가시성 관찰
// IntersectionObserver함수 = 현재의 영역에 원하는 컨텐츠가 있는지 확인할 수 있는 함수이다. 
const io = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if(!entry.isIntersecting) {
      return
    }
    // entry.target으로 보이는 요소를 찾은 것 -> 찾은거에 이어서 함수들을 실행한 것
    entry.target.classList.add('show')
  })
})
const infoEls = document.querySelectorAll('.info')
infoEls.forEach(function(el) {
  io.observe(el)
})




// 비디오 재생!
const video = document.querySelector('.stage video')
const playBtn = document.querySelector('.stage .controller--play')
const pauseBtn = document.querySelector('.stage .controller--pause')

playBtn.addEventListener('click', function() {
  video.play()
  playBtn.classList.add('hide')
  pauseBtn.classList.remove('hide')
})
pauseBtn.addEventListener('click', function() {
  video.pause()
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
})




// ****************************************************************************************
// '당신에게 맞는 iPad는?' 랜더링!
const itemsEl = document.querySelector('section.compare .items')
ipads.forEach(function(ipad) {
  const itemEl = document.createElement('div')
  itemEl.classList.add('item')

  let colorList = ''
  ipad.colors.forEach(function(color) {
    colorList += `<li style="background-color: ${color};"></li>`
  })

  itemEl.innerHTML = /* html */ `
  <div class="thumbnail">
    <img src="${ipad.thmbnail}" alt="${ipad.name}">
  </div>
  <ul class="colors">
    ${colorList}
  </ul>
  <h3 class="name">${ipad.name}</h3>
  <p class="tagline">${ipad.tagline}</p>
  <!-- .toLocaleString('en-US') 은 en-US에서 사용하는 숫자처리 방식과 같이 표현해주겠다는 뜻이다. -->
  <p class="price">₩${ipad.price.toLocaleString('en-US')}부터</p>
  <button class="btn">구입하기</button>
  <a href="${ipad.url}" class="link">더 알아보기</a>
  `

  itemsEl.append(itemEl)
})




const navigationsEl = document.querySelector('footer .navigations')
navigations.forEach(function(nav) {
  const mapEl = document.createElement('div')
  mapEl.classList.add('map')

  let mapList = ''
  nav.maps.forEach(function(map) {
    mapList += /* html */ `<li>
      <a href="${map.url}">${map.name}</a>
    </li>`
  })

  mapEl.innerHTML = /* html */ `
    <h3>
      <span class="text">${nav.title}</span>
    </h3>
    <ul>
      ${mapList}
    </ul>
  `

  navigationsEl.append(mapEl)
})




const thisYearEl = document.querySelector('span.this-year')
thisYearEl.textContent = new Date().getFullYear()