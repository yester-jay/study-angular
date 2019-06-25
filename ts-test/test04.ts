class Parent {
    public one
    protected two
    private three

    constructor(){
        this.one
        this.two
        this.three
    }
}

class Child extends Parent {
    constructor(){
        super(); // 상속받는 경우 써야한다
        
        this.one
        this.two
    }
}

let p = new Parent().one;
// 다른 변수들은 접근 불가
