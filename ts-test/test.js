var Car = /** @class */ (function () {
    // age
    // constructor에서 접근자의 타입을 설정하면 상위에서 변수 선언을 하지 않아도 자동으로 변수 선언이 된다
    function Car(age) {
        this.age = age;
        this.age = age;
    }
    return Car;
}());
var car = new Car(10);
car.age;
