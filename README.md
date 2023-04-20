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