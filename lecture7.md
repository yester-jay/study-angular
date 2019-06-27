# Component 배치

## 웹 스톱워치 만들기

### 컴포넌트 구조

- header
- section
  - time-display
  - buttons
- footer

### 컴포넌트 만드는 방법

1. 플러그인을 이용

   > Angular Files (VS Code Plugin)  
   > : App Generation을 쉽게 도와주는 플러그인

   - VS Code 창의 탐색기에서 폴더 구조 위 마우스 우클릭
   - Generate ... 메뉴를 이용

1. Angular-Cli 명령어를 이용

   ``` bash
   > ng generate component header  
   > ng g c header
   ```

    - 앱폴더 및 파일을 자동으로 생성
    - app.module.ts에 자동으로 생성된 컴포넌트를 등록해준다
    - 기본적으로 생성되는 앱 selector는 'app-{name}'

> Angular Language Service (VS Code Plugin)  
> : 연결 가능한 app-selector 등을 자동으로 추천해주는 기능 등을 제공

