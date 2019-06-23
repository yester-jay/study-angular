# Angular Component 생성하기

> src / app / app.module.ts

## @ : Decorator
- @NgModule : 해당 클래스틑 모듈로 만들어주겠다는 명시
    - 모듈 : 독립 가능한 기능단위의 묶음
- @Component : 해당 클래스를 컴포넌트로 만들어주겠다는 명시
    - selector : tag name
    - templateUrl : 가져올 html
    - styleUrls : 가져올 css

## Angular Devkit
> npm i @angular-devkit/build-angular

## Hello component generate
1. app 폴더 내에 hello 폴더 생성
1. hello.component.ts 파일 생성
1. class 선언 (export class HelloComponent)
1. 해당 클래스를 컴포넌트로 선언 (@Component)
1. @Component 아래 selector, templateUrl, styleUrls 지정
    1. selecte : 컴포넌트를 부를 때 사용하는 태그명
    1. templateUrl : 컴포넌트의 내용을 담은 html
    1. styleUrls : 컴포넌트 html을 꾸며줄 css (배열로 작성하며, 여러개 등록이 가능)
1. hello.component.html, hello.component.css 파일 생성
1. app.module.ts에 새로운 HelloComponent를 등록해야지만 정상적으로 사용가능
    1. @NgModules 아래 declarations에 HelloComponent 추가
    1. app.component.html에 HelloComponent 태그 추가
    1. localhost에서 hello.component.html의 내용이 해당 컴포넌트로 잘 호출되는지 확인
