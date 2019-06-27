# ES6의 모듈에 대해서

## JavaScript의 시작과 현재

- JavaScript는 웹에서 간편하게 쓰이도록 설계
- 처음에는 대부분의 로직들을 서버단에서 해결
- 프론트에서는 뷰만 담당하는 형태
- JavaScript가 하는 일의 대부분은 form의 검증, 간단한 dom 조작 정도
- JavaScript의 생태계가 점점 넓어지고 복잡해짐
- 그에 따라서 코드량이 많아지고 복잡화
- 하나의 파일 내에서 많은 코드를 넣고 관리하기 어려워짐

## 전역 변수

- JavaScript의 대표적인 단점
- `var` 키워드를 쓰지 않으면 전역 개체의 프로퍼티로 등록됨
- 복잡한 코드 혹은 너무 많은 히스토리를 가진 코드를 가지고 작업할 경우 중복된 변수를 사용할 수도 있는 문제가 있음
- 이를 해결하기 위한 많은 해결책 제시됨
  - 즉시실행함수 : 함수가 즉시 실행되기 때문에 전역변수에 대한 영향을 주지 않을 수 있음
  - 네임스페이스패턴 : 변수명이 길어지고 복잡해지는 문제가 있음
  - 샌드박스패턴 등
- 제시된 해결책 중 주요 커뮤니티 진영 (모듈 패턴)
  - commonjs
  - AMD
  - 같은 목표 : 자바스크립트의 모듈화, 의존성 관리
    - 의존성 관리 : 한 모듈이 다른 모듈을 필요로 하는 의존관계
  - 다른점 : 브라우저 환경에서의 해결방법 차이
    - commonjs : 자바스크립트를 브라우저 밖(서버 사이드)에서도 활용할 수 있게끔 하는 차원에서의 모듈화 지향
    - AMD : commonjs의 한부류였으나 브라우저 내에서의 환경을 더 고려
  - 많은 사용자들의 니즈를 반영하여 ES6에서는 모듈 개념이 추가됨

## 모듈의 import, export

- import는 가져오기
- export는 내보내기
  