# react-study
===
노마드코더 React 기초 강의: [ReactJS로 영화 웹 서비스 만들기](https://nomadcoders.co/react-for-beginners/lobby?utm_source=free_course&utm_campaign=react-for-beginners&utm_medium=site)
***
# Table of Contents
1. [Introduction](#1-introduction)
2. [The Basics of React](#2-the-to-javascript)
3. [State](#3-state)
4. [Props](#4-props)
5. [Create React App](#5-create-react-app)
6. [Effects](#6-effects)
7. [Practice Movie App](#7-practice-movie-app)
***
1\) Introduction
---
### 1.1 Welcome
* 페이스북에서 만들었음
***
### 1.2 Why React
* 2015년에 신기술로 나왔음
* 상위 1만개의 웹사이트 중 45퍼센트가 리액트를 사용 중
* 페이스북이 전체 웹사이트를 리액트로 만들었기 때문에 오래 갈 기술임
* JS와 가까워서 JS를 등에 업은 큰 커뮤니티를 갖고 있음
* React Native라는 걸로 ios나 안드로이드 앱을 만들 수도 있음
***
### 1.3 Requirements
* prerequisite course: [바닐라 JS로 크롬 앱 만들기](https://nomadcoders.co/javascript-for-beginners/lobby?utm_source=free_course&utm_campaign=javascript-for-beginners&utm_medium=site)
* 설치사항: 브라우저와 텍스트에디터
***
2\) The Basics of React
---
### 2.0 Introduction
* ReactJS는 웹사이트를 interactive하게 만들어줌
* 다음 강의에서 ReactJS없이 만드는 웹사이트가 ReactJS로 만든 웹사이트와 어떻게 다른지 확인할 것
***
### 2.1 Before React
* 버튼을 클릭하는 간단한 앱 만들기
    1. html 파일을 만든다
    2. id가 있는 button을 만든다
    3. 버튼의 id를 받는 변수를 만든다
    4. 클릭 이벤트를 listen해서 함수를 실행시킨다
    5. 실행시킬 함수를 만든다
    6. 화면에 클릭 수를 출력할 메시지를 넣는다
    7. 클릭 수를 저장하는 변수를 만들고, 클릭할 때마다 함수에서 1씩 증가시킨다
    8. 스크립트에서 span을 가져와서 클릭 수를 저장하는 변수를 span의 innerText로 만든다
    9. 기존의 텍스트를 살리기 위해 ``를 써서 텍스트안에 변수를 담는 방법을 사용한다
        ```html
        <!DOCTYPE html>
            <html>
                <body>
                    <span>Total clicks: 0</span>
                    <button id="btn">Click me</button>
                </body>
                <script>
                    let counter = 0;
                    const button = document.getElementById("btn");
                    const span = document.querySelector("span")
                    function handleClick() {
                        counter = counter + 1;
                        span.innerText = `Total clicks: ${counter}`;
                    }
                    button.addEventListener("click", handleClick);
                </script>
            </html>
        ```
    - 이 방식은 굉장히 복잡함
* 리액트를 설치해보자
    - 두 개의 JavaScript 코드를 import해야 함
        + react
        + react-dom
    - script src로 불러오자
***
### 2.2 Our First React Element
* 위의 JS코드를 React로 구현해보자
* ReactJS의 규칙 중 하나는 HTML을 직접 작성하지 않고(span이나 button을 만들어내는데에) 대신 JavaScript를 사용함
* ReactJS로 element를 생성하기 (어려운 방식)
    - 보통 이 방법으로는 하지 않음
    1. span 생성
        ```JS
        const variableName = React.createElement("span");
        ```
        + 괄호 안에 들어가는 건 element이름과 같아야 함
    2. body 안에 생성된 span을 넣어주기
        + react-dom을 사용해야 함
            * 모든 React element들을 HTML body에 둘 수 있도록 해주는 library
            * react는 interactive하게 만들어주는 library
        ```JS
        ReactDOM.render(span, root)
        ```
        + render: 보여준다(사용자에게)
        + span을 root 안에 render한다
    3. html안에 id를 가진 div를 만든다
    4. script 안에 만든 id를 찾아서 변수로 만들어준다
    5. 1번에서 생성한 span 이외에 다른 argument로 꾸며본다
        ```JS
        const span = React.createElement(
            "span",
            { id: "sexy-span", style: { color: "red" } },
            "Hello, I'm span"
        );
        ```
***
### 2.3 Events in React
* 버튼 만들고 버튼에서 일어나는 event 감지하기
    1. 버튼 만들기
        + 위에서 span을 만든 것처럼 똑같이 만들어줌
    2. render를 span 대신 새로 만든 버튼 변수로 해주기
        + span과 button 둘다 render를 하고 싶다면?
            - div를 render하고, 그 안에 span과 button을 받는 array를 넣어준다
                ```js
                const container = React.createElement("div", null, [span, btn]);
                ```
    3. button에 event listener를 넣어준다
        + 두번째 argument에 arrow function을 넣어준다
            ```js
            const btn = React.createElement(
                "button", 
                {
                    onClick: () => console.log("I'm clicked"),
                }, 
                "Click me"
            );
            ```
    - click 외에 mouse enter 등 다양한 event를 사용할 수 있음
***
### 2.4 Recap
* React.createElement의 argument
    1. HTML 태그 
    2. object with props
        + JS에서와 같이 addEventListener할 필요 없이 바로 작동시킬 수 있음 (on~)
    3. content
***
### 2.5 JSX
* createElement를 대체할 훨씬 편한 방법을 배워보자
* JSX: JavaScript를 확장한 syntax
    - React element를 만들어주는데, HTML과 생긴 게 비슷함
    ```js
    const Title = (
        <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
                Hello I'm a title
        </h3>
    );
* Babel이라는 code transformer를 사용해줘야 JSX를 사용할 수 있음
    - 기존의 script 태그를 <script type="text/babel"></script>로 바꿔줘야 함
***
### 2.6 JSX part Two
* 기존의 container(array 썼던 부분)도 JSX로 고쳐보자
    1. container도 마찬가지로 변수로 만들고, div 태그로 감싸서 Title과 Button을 넣어준다
        ```js
        const Container = <div> Title Button </div>
        ```
    2. 위에서 만들었던 Title과 Button 변수를 함수로 만들어준다
        ```js
        const Button = () => ()
        function Button() { return }
        ```
    - 위는 arrow function, 밑은 원래 function을 적는 방식임
    3. Container를 함수를 받게끔 고쳐준다
        ```js
        const Container = <div>
            <Title />
            <Button />
            </div>
        ```
        + 컴포넌트의 첫 글자는 **반드시** 대문자여야 함 (**T**itle, **B**utton)
            * ReactJS와 JSX가 html태그로 헷갈릴 수 있기 때문
***
3\) State
---
### 3.0 Understanding State
* state: 데이터가 저장되는 곳
* 예시에서 counter를 state에 담을 수 있음
* 기존 함수 부분을 다 지우고 새로 만들어보자
    1. counter 만들기
        + script 부분에 counter 변수 생성
        + 콘테이너 안에 카운터 변수를 담을 텍스트 부분에 그냥 변수를 {} 안에 넣어서 표현하면 됨
            * 변수를 연결
    2. 함수를 만들기
        + counter가 1씩 올라감
        + eventlistener 없이, 예전에 배웠던 prop 사용
            * button 부분에 함수 넣기
                ```html
                <button onClick={countUp}>Click me</button>
                ```
        + 아직 UI가 업데이트되지 않음
            * console.log 해보면 counter는 증가 중
            * rendering은 처음에 코드가 실행될 때 한번만 하고, 그 이후에 button이 클릭돼서 counter가 1씩 증가했을 때 Total clicks가 있는 부분에 업데이트(re-rendering)해주진 않음
    3. 함수 안에 render하는 코드를 넣어주기
        + 그럼 클릭할 때마다 countUp함수가 실행돼서 리렌더링 작업이 진행됨
        + render하는 함수가 중복적으로 사용되기 때문에 함수를 따로 만들어주고, render함수가 필요한 곳에 넣어줌(두 군데)
* 아직 더 쉬운 방법이 남아있음
    - 값을 바꿀 때마다(counter가 올라갈 때마다) 다시 render해야 해서
* vanilla.js와 react 파일이 다른 점
    - chrome 개발자 도구 element에서 확인해보면 UI에서 바뀐 부분만 업데이트해줌
        + react.js는 다른 부분(우리가 바꾼 부분)만 파악함(생성함)
***
### 3.1 setState part One
* react.js 내에서 데이터를 저장하고 자동으로 리렌더링을 일으킬 수 있는 방법을 알아보자
* 기존에 counter 변수를 생성해서 데이터를 담는 방법 말고, State를 사용해보자
    - 컨테이너(App) 함수 안에 state 생성
        ```js
        const data = React.useState();
        ```
        + console.log해보면 [undefined, f]와 같은 array를 줌
            * undefined: 데이터
                - counter 변수
                - useState(0); 처럼 초기값 부여 가능
                    + 부여 안 하면 NaN 뜨더라
            * f: data를 바꿀 때 사용하는 함수
                - countUp 함수
        + 배열에서 요소를 꺼내서 이름을 부여하는 shortcut을 배워보자
            ```js
            // 원래 방식
            const food = ["tomato", "potato"];
            const tomato = food[0];
            const potato = food[1];
            // shortcut
            const [myFavFood, mySecondFavFood] = food;
            ```
***
### 3.2 setState part Two
* 이전 강의에 이어서 계속해보자
* 왜 modifier가 필요할까?
    - 매번 render를 할 필요가 없어짐
* modifer를 활용해보자
    ```js
    const [counter, setCounter] = React.useState(0);
    const countUp = () => {
        setCounter(counter + 1);   
    }
    ```
    1. counter의 초기값을 0으로 지정
    2. countUp 함수 안에 modifier를 정의해줌
        + modifier(setCounter)안에서 일어나는 일은 자동으로 리렌더링해줌
        + modifier 함수 이름은 set + (앞에 변수 이름)으로 해줌


***
### 3.3 Recap
* modifer로 state를 변경할 때 component 자체가 재생성됨
    - 새로운 값을 가지고 re-render됨
    - 데이터가 바뀔 때마다 component를 re-rendering하고 UI를 refresh함
    - 하지만 react.js는 변경되는 부분만 바꿈
    - **modifier 함수로 state를 바꿀 때, 컴포넌트 전체가 새로운 value로 재생성된다**
        + state가 바뀔 때 re-rendering이 일어난다
***
### 3.4 State Functions
* state 응용하기
* state를 바꾸는 두 가지 방법
    1. 직접 modifier 안에 새 값으로 설정
    2. 지금 한 방식: 이전 값을 이용해서 현재 값을 계산하는 것
        + 더 좋은 방식
            * counter가 다른 곳에서도 변경될 수 있기 때문
            ```js
            setCounter((current) => current + 1);
            ```
            * current state를 보장해주기 때문에 더 안전한 방식
***
4\) Props
---
***
5\) Create React App
---
***
6\) Effects
---
***
7\) Practice Movie App
---
***