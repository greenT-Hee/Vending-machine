# Vending-machine
## 반응형 웹 만들기

### 🍒 피그마 첫 사용
#### 처음으로 피그마를 사용한 디자인 설계를 보면서 코딩했다. css에 대한 정보들이 자세하게 볼 수 있어 구현의 정확성을 높일 수 있었다. 하지만, border에 따라 달라지는 너비/ 높이 값 등에 대해서 더 꼼꼼하게 확인해야 한다는 점을 깨달았다. 그리고 만들다 보면 계속 1-5px 정도의 오차가 나게 되는데, 여러번 반복하며 만들면서 오차를 줄이려고 많이 노력했다. 

### 🍒 고민되었던 점 
#### 1) 레이아웃 잡기 <br> ✔ 벤딩머신 pC 화면에서 음료수를 고르는 부분에 처음에는 3개 X 2줄로 ```inline-block```을 사용했다. 하지만 html, css 코딩이 장황해지고 비효율적이라는 생각이 들었다. <br> ✔ 그 후, 멋사 수업을 듣고 처음으로 ```flex```에 대해 배웠다. 3-4년 전 처음 css를 공부할 때는 거의 보지 못했던 거 같은데, 최근 ```flex```가 트렌드가 된 것 같았다. 확실히 ```flex```를 사용하니 보다 빠르고 효율적으로 레이아웃을 잡았다. 하지만, ```flex```는 요소 간의 margin이 기본적으로 생겨서 피그마 도안에 맞게 너비, 여백 조정에 어려움이 있었다.

### 🍒 반응형 웹 만들기
#### 해당 페이지를 모바일에서도 볼 수 있도록, @media를 통해 반응형 웹으로 제작하였습니다. #app 속성을 통해 전체를 flex로 브라우저 크기가 작아지면 세로로 정렬될 수 있게 제작하였고, 디바이스 크기가 320px ~ 480px일 떄는 배경색은 흰색, 로고와 메인 콘텐츠 거리는 247px에서 150px로 줄였습니다.   
