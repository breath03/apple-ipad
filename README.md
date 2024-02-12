### 알면 좋은것들

### 1
position: absolute; 는 기본적으로 요소의 너비가 최대한 줄어들려고 한다.

### 2
navMenuShadowEl.addEventListener('click', function() {
  hideNavMenu()
})

위와 같은 function에 하나의 함수만 존재할 경우 밑에의 문장과 같이 줄여서 사용할 수 있음

window.addEventListener('click', hideNavMenu)

### 3
display가 flex인 상태에서 flex-direction의 값을 column으로 사용하는 이유중에 하나는 요소의 보여줌 순서를 정할 수 있기 때문이다. 
ex) 하나의 요소는 order: 0; (기본값)
    다른 하나의 요소는 order: 1; 일때는 order의 값이 낮은 것부터 먼저 나타나게 된다.