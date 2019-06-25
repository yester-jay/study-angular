function Component(constrctorFn?: Function){

    /**
     * 클래스를 꾸며주는 로직
     * Component html, css 등등이 포함된다
     */

    return constrctorFn
}

@Component()

class AppComponent{
    // @Input() height: number;
    constructor(){}
}