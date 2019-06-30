#  생명주기

- 컴폰너트가 생성되고 파기될 때 까지의 일련의 과정
- 특정 시점이 되면 hook method 호출

## Hook Mehod 호출 순서
1. ngOnChanges
2. ngOnInit
3. ngDoCheck
4. ngAfterContentInit
5. ngAfterContentChecked
6. ngAfterViewInit
7. ngAfterViewChecked
8. ngOnDestroy

- 외부로부터 바인딩된 속성값 확인 및 가져오기
- 자기자신을 만들기 시작
- 자기자신의 데이터값 확인
  - 하위요소의 데이터값 확인
  - 하위요소의 뷰 만들기
- 자기자신의 뷰를 만들기
