# TypeScript 2

## Class 특징

- TypeScrupt의 클래스는 ES6의 클래스보다 많은 기능을 가지고 있다.
- 자바스크립트는 프로토타입 기반의 언어 (자세한 설명은 생략)
- 클래스는 하나의 객체
- 프로토타입에서도 상속을 구현하는 방법이 있긴 하나 방법이 복잡
- ES6에서는 상속을 구현하기 쉬워짐
- interface는 타입을 지정하는 것
- interface를 js에서는 지원하지 않는다

## 접근제한자

- public : 어디서나 접근 가능
- protected : 상속받는 경우 접근 가능
- private : 선언한 객체 내에서만 접근 가능
- 자바스크립트는 지원하지 않는 기능

## Decorator

- '@' 기호로 시작
- 해당하는 클래스를 꾸며주는 로직을 담고 있다
- ex. AppComponent의 Decorator는 해당 앱의 html, css 등의 정보를 담는다
