# DI

> DI : Dipendency Injection  
> 게으름뱅이 개발자들이 만들어낸 훌륭한 시스템

- 의존관계 : 한 객체가 다른 객체 없이 실행을 할수 없는 관계
- 프로젝트가 커질수록 객체 간 의존관계의 복잡성이 증가
- 의존하는 하나의 객체를 바꾸기 위해서는 관련된 파일들을 모두 수정해야 하는 문제 발생
  - 의존성 관리 시스템을 만들게 된 동기
- 의존성을 관리하는 프로그램을 통해 각 객체에서 필요한 의존 객체를 자동으로 가져다 주입하는 방식으로 변화
  - 객체를 만들때 필요한 의존객체들을 명시해주기만 하면 자동으로 의존관계가 만들어진다
  - 의존성 주입 시스템