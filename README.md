### 알면 좋은것들

position: absolute; 는 기본적으로 요소의 너비가 최대한 줄어들려고 한다.


navMenuShadowEl.addEventListener('click', function() {
  hideNavMenu()
})

위와 같은 function에 하나의 함수만 존재할 경우 밑에의 문장과 같이 줄여서 사용할 수 있음

window.addEventListener('click', hideNavMenu)