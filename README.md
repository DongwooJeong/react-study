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
### 2.1 Introduction
* ReactJS는 웹사이트를 interactive하게 만들어줌
* 다음 강의에서 ReactJS없이 만드는 웹사이트가 ReactJS로 만든 웹사이트와 어떻게 다른지 확인할 것
***
### 2.2 Before React
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