class Car{
    // age
    // constructor에서 접근자의 타입을 설정하면 상위에서 변수 선언을 하지 않아도 자동으로 변수 선언이 된다

    constructor(public age: number){
        this.age = age;
    }

}

let car = new Car(10);

car.age
