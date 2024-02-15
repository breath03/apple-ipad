### 알면 좋은것들

### 1
`position: absolute;` 는 기본적으로 요소의 너비가 최대한 줄어들려고 한다.

### 2
```javascript
navMenuShadowEl.addEventListener('click', function() {
  hideNavMenu()
})
```
위와 같은 function에 하나의 함수만 존재할 경우 밑에의 문장과 같이 줄여서 사용할 수 있음
```javascript
window.addEventListener('click', hideNavMenu)
```

### 3
`display가 flex인 상태`에서 `flex-direction의 값`을 `column`으로 사용하는 이유중에 하나는 요소의 보여줌 순서를 정할 수 있기 때문이다.
```plaintext 
ex) 하나의 요소는 order: 0; (기본값)
    다른 하나의 요소는 order: 1; 일때는 order의 값이 낮은 것부터 먼저 나타나게 된다.
```

### 4
```javascript
el.classList.toggle('active')
``` 
-> `toggle`은 add와 remove 명령어를 동시에 실행하는 명령어라고 생각하면 된다.

### 5(용어)
```plaintext
아코디언 메뉴 (accordion menu) : 화면이 작아졌을때 밑에 footer에 내용들이 제목으로만 나열되고 그 제목을 눌러서 제목에 해당하는 여러 메뉴를 볼 수 있는 구조(?)
```