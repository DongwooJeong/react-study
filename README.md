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
### 3.5 Inputs and State
* unit conversion app 만들기
    - 시간을 분으로 바꾸고 분을 시간으로 바꾸어보기
    1. document div 변수 만드는 부분과 App 함수, 그리고 render하는 부분만 남긴다
    2. JSX 스타일에 맞게 hours와 minutes를 넣을 input과 label을 만들어준다
        1. input에 id를 줘서 label에서 for로 받을 수 있도록 만들어준다
        2. 사실 이건 JSX에서는 틀린거임
            * for는 javascript거임 JSX꺼가 아님
            * for를 htmlFor로 바꾸어준다
    3. minutes에 필요한 state를 만들어준다
        + 아직 input의 value를 control할 수 없는 상태임 (uncontrolled)
            * 일단 useState 만들어주고, input에 value(minutes)를 줌
        + 사용자가 값을 입력할 때마다 업데이트시키기
            * 새로운 함수 onChange를 만들고, input에 onChange를 새로 만들어주기
    4. 입력값을 받아오기
        + 이미 event.target.value에서 입력값을 갖고 오고 있음
        + modifier로 입력값을 가져옴
***
### 3.6 State Practice part One
* Recap
    - 이벤트를 듣는다
        + onChange={onChange}
    - 이벤트가 발생하면 값을 업데이트해준다
        + setMinutes(event.target.value);
    - UI에 나타남
        + value={minutes}
* 계속 만들어보자
    1. 했던 거 hours에도 해주기
        + label과 input 다 div 안에 넣어주기
    2. 시간을 분으로 바꾸는 공식 넣어주기
        + value={minutes / 60}
        + Math.round로 반올림해주기
    3. reset 버튼 만들기
        + 버튼을 하나 만들어준다
        + onClick에 reset을 할 수 있도록 만들어준다
        + 함수를 만들어준다
            * setMinutes(0)
    4. disabled를 넣어서 hours는 값을 입력하지 못하도록 만들어준다
***
### 3.7 State Practice part Two
* Conversion Flip (분을 시로 바꾸는데에서 시를 분으로 바꾸는 상태로 바꾸기)
    1. Flip용 버튼을 하나 만들어준다
    2. Flip에 쓸 함수(onFlip)도 하나 만들어준다
    3. 함수에 쓸 새로운 State를 만들어준다
        + State의 초기값을 false로 만들어준다
        + 함수를 실행하면 modifier(setFlipped)를 실행한다
        + modifier는 flipped의 상태를 바꿔준다(!flipped) -  negation
            * true -> false, false -> true
            * 사실 이렇게 하면 안좋고, 배웠던 것처럼 current를 써보자
                - (current) => !current
    4. disabled에 boolean을 넣어주자
        + hours와 minutes의 t/f 값이 반대로 가도록 설정
            - disabled={flipped === false}
    5. 아직 Hours에서 Minutes로 단위 변환이 안돼서 넣어보자
        + onChange = {onChange}
            * 이제 value를 넣을 수는 있는데, 입력한 값이 아니라 minutes에서 round한 값만 나옴
        + ternary operator라는 걸 써보자
            * in-line if문 같은 것
            * value= {flipped ? minutes : Math.round(minutes/60)}
            * Minutes에도 ternary operator를 써주자
        + 헷갈리니까 minutes라는 이름을 amount로 바꿔주자
    6. flip할 때마다 입력값이 같이 옮겨져서 reset도 동시에 해버리자
***
### 3.8 Recap
* 추가 수정
    + Flip 버튼을 좀 더 직관적으로 만들어보자
        ```html
        <button onClick={onFlip}>{flipped ? "Turn back" : "Flip"}</button>
        ```
***
### 3.9 Final Practice and Recap
* 시간 변환기에다가 거리 변환기도 넣어주자
    1. 새로운 App 함수를 만들고 거기에 시간변환기 함수를 넣어주자
        + 요렇게 -> <MinutesToHours />
    2. 그리고 새로운 거리 변환기 함수를 만들어서 마찬가지로 App 함수에 넣어주자
        + App 함수 내에서 알아서 render가 될 것
    3. 사실 변환기 사이에서 선택을 하는 것이 맞기 때문에, SELECT 함수를 써보자
        1. select를 div 안에 만들고, option도 만든다
            * 여기까진 html임
        2. option에 value(0,1)를 줘서 listen할 수 있게 만든다
        3. select 값을 바꾸면(onChange) 실행할 함수(onSelect)를 만들어준다
        4. React.useState를 하나 만들어주고, 이 modifier(setIndex)를 event.target.value를 갖고오도록 만들어서 함수 onSelect에 넣어준다
        5. 나중에 쓰게 select에 value={index}를 넣어준다
        6. 이제 실제 변환기 함수를 선택할 수 있도록 만들어준다
            1. js를 쓰기 위해 {}안에 적는다
                ```js
                {index === "0" ? <MinutesToHours />: null}
                {index === "1" ? <KmToMiles />: null}
                ```
* 거리 변환기는 알아서 만들어보자
***
4\) Props
---
### 4.0 Props
* 로직을 고립시켜서 분리된 컴포넌트로 만들었음
    - header, footer, notification bar 등등 모두가 각각의 로직을 가진 컴포넌트가 될 수 있음
    - 전 강의에서 만든 거에서 App이 부모 컴포넌트였음
* Prop을 배워보자
    - Prop은 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법
    - 이전 예시에서는 자식 컴포넌트(KmToMiles)가 부모 컴포넌트로부터 데이터를 받아올 필요가 없었음
    - 일단 버튼을 몇 개 만들어보자
        + 참고: function에서 return 할때 뒷부분 ()로 안 묶어주면 안 뜬다
            * 추가 설명: return하고 그냥 엔터를 치면 안되고, ( 가 같은 줄에 있어야 되더라
        + 두 가지 버튼을 만들었는데, 각 버튼의 style을 따로 만들어줄 필요가 없다면?
* Prop 만드는 법
    1. 일반적인 syntax처럼 렌더링하는 App(부모 컴포넌트)에 적어준다
        ```html
        <Btn text="Save Changes" />
        ```
        + 꼭 text일 필요는 없음. banana여도 됨
    2. Btn 함수의 argument에(이게 prop) 새로 만든 property를 넣어줌
        + 그럼 밑에서 렌더링을 할때 해당 property를 인자로 해서 함수를 실행시키게 됨
        + prop의 값으로 함수 내의 다른 영역을 자유롭게 바꿀 수도 있음
            ```html
            <Btn big= {true} />
            fontSize: big ? 18 : 15
            ```

***
### 4.1 Memo
* 또 props에 뭘 보낼 수 있는지 알아보자
    - 함수도 보낼 수 있음
    - button에 onClick 함수 기능을 넣어보자
        + state를 바꾸게 될 것
            ```html
            const [value, setValue] =React.useState("Save Changes");
            const changeValue = () => setValue("Revert Changes");
            <Btn text={value} onClick={changeValue} />
            ```
        + 밑에서 onClick을 만들어준건 **prop일 뿐**임
            * props가 함수에 들어가서 실행될 때 비로소 event listener가 되는 것
* React Memo (memorize)
    - 문제점: console.log를 해서 봤을 때, Save Changes 버튼을 눌렀음에도 불구하고, state가 변하지 않는 두번째 버튼(continue)이 re-render 되는 현상을 발견함
        + 우리는 이 컴포넌트가 다시 그려지는 것을 원하지 않음
    - 해결책: props가 변경되지 않는 한에서 해당 컴포넌트가 다시 그려질지를 결정하기
        ```html
        const MemorizedBtn = React.memo(Btn)
        ```
    - MemorizedBtn은 Btn의 memorized version
    - 결론: 부모 컴포넌트의 state가 변경된다면 모든 자식은 다 re-render되기 때문에, 이게 앱 속도 등에 영향을 줄수도 있음. 따라서 react memo를 활용해보자
***
### 4.2 Prop Types
* 문제: props가 너무 많아져서 props를 쓰다가 실수함
    - string을 넣어야 하는데 숫자를 넣는 실수
* 해결책: PropTypes라는 패키지를 사용하자
    - 패키지 설치
        + https://unpkg.com/prop-types@15.7.2/prop-types.js
    - Prop Types 설정하기
        ```html
        Btn.propTypes = {
            text: PropTypes.string,
            fontSize: PropTypes.number,
        }
        ```
    - 그러면 type을 잘못 지정했을 때 console에서 경고 메시지 받을 수 있음
    - 주의할 점
        + https://unpkg.com/react@17.0.2/umd/react.development.js 로 리액트 패키지 바꿔줘야 함
        + React memo와 같이 사용하고 있으면 Btn 대신에 MemorizedBtn이라고 써줘야 함
    - optional이나 required와 같은 property도 줄 수 있음
        ```html
        Btn.propTypes = {
            text: PropTypes.string.isRequired,
        }
        ```
    - default value도 설정할 수 있음
        + JavaScript가 설정해주는 기능
        ```html
        function Btn({ text, fontSize = 14 }) {}
        ```
***
### 4.3 Recap
* props 쓰는 방법
    1. props.text, props.fontSize처럼 직접 넣기
        1. 함수의 object에 props를 넣고
        2. 함수 내부에 props.text처럼 넣기
    2. ES6의 방식대로(우리가 한 방식) object에 중괄호로 넣기
*** 
5\) Create React App
---
### 5.0 Introduction
* create-react-app: react 어플리케이션을 만드는 최고의 방식
    - 기존의 방식: 직접 script를 import하는 방식
    - 장점
        + 여러 사전 설정을 해줌
        + 개발 서버에 접근
        + 자동으로 새로고침
            * **auto-reload(자동 재실행)**
        + 즉각적으로 어플리케이션에 css를 포함시킴
        + 웹사이트를 publish하는 command가 있음
        + 코드를 압축해서 빠르게 만듦
    - 어떻게 사용할까
        1. node.js 설치
            * 웹사이트에서 recommended 버전 설치
                - cmd 창에서 아래의 커맨드로 설치 여부 확인
                    + node -v
                    + npx
        2. code my-app(폴더명) 명령어로 vscode에서 만들어진 폴더 열기
        3. package.json 확인하기
            * script 부분에 우리가 사용할 수 있는 명령어들이 있음
        4. terminal을 열어서 npm start 누르면 개발용 서버(development server)가 만들어짐
            * 자동으로 웹페이지가 열림
        5. src 폴더(모든 파일들이 들어갈 폴더)에서 index.js 찾기
        6. 필요없는 css나 테스팅 코드랑 파일 지우기
***
### 5.1 Tour of CRA
* create-react-app을 가지고 전에 했던 걸 만들어보자
    1. 버튼을 만들 button.js 파일을 넣어주자
        + 전에 만들었던 것처럼 버튼의 형식을 만들고, export하기
        ```js
            function Button({text}) {
            return <button>{text}</button>;
            }
            export default Button;
            ```
    2. App.js에서 import하기
        ```js
        import Button from "./button";
        ```
    3. 전에 배웠던 버튼 만들기 그대로 해보자
        1. App.js에 버튼 넣어주기
        2. props(text)도 넣어주기
        3. prop types 지정해주기
            * npm i prop-types로 설치 먼저 해줘야 함
    4. style을 설정해보자
        * 특정 컴포넌트를 위한 CSS파일을 만들 수 있는 기능
            1. css 파일을 따로 만들고 스타일을 설정해주고 index.js에서 import만 하면 됨
                + 이렇게 하면 모든 버튼에 다 같은 style이 적용됨 (global CSS style)
                + 한 CSS 파일에 엄청나게 많은 style이 생기는 문제 발생
            2. style prop을 사용하기
                ```js
                <button 
                    style={{
                        backgroundColor: "tomato",
                        color: "white"
                    }}
                >
                    {text}
                </button>
                ```
                + style을 하나하나 직접 넣어줘야 함
        * 해결책: CSS modules
            - divide and conquer
                1. button.module.css 파일을 따로 만들기
                2. css파일에 button으로 말고, class로 style을 설정해주기 
                3. button.js에 import 시켜주기
            ```js
            import styles from "./button.module.css";
            <button className={styles.btn}> {text} </button>
            ```
            - style을 modular하게 만드는 것
            - element에서 inspect하면 랜덤 클라스를 만들어내서 사용하는 걸 볼 수 있음
***
6\) Effects
---
***
7\) Practice Movie App
---
***