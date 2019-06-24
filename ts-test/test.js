// typescript의 class는 ES6의 class보다 많은 기능을 지원

// ES6로 변환 시
class Appcomponent {
}

// ES5로 변환 시 - class 문법이 없기 때문에 아래와 같이 변환됨
var Appcomponent = /** @class */ (function () {
    function Appcomponent() {
    }
    return Appcomponent;
}());
