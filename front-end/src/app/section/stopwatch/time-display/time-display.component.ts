import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
  // providers: [PageToggleService]
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData: string
  
  min: number = 0
  sec: number = 0
  ms: number = 0

  timeInterval;

  constructor(public pageToggleService: PageToggleService) {
    
    // console.log(this.inputData);
  }

  timeStart(){
    this.timeStop();
    this.timeInterval = setInterval(()=>{
      if(this.ms >= 100){
        this.ms = 0;
        this.sec++;
      }
      if(this.sec >= 60){
        this.sec = 0;
        this.min++;
      }
      this.ms ++;
    }, 10);
  }

  timeStop(){
    clearInterval(this.timeInterval);
  }

  timeReset(){
    this.timeStop();
    this.ms = 0;
    this.sec = 0;
    this.min = 0;
  }

  ngOnChanges(changes: SimpleChanges){
    // 외부로 부터 받은 값의 변화에 대한 대응
    console.log('ng on changes');
    for(let propName in changes){
      console.log(changes);
      if(propName == 'inputData'){
        switch(changes[propName].currentValue){
          case 'start':
            this.timeStart();
            break;
          case 'stop':
            this.timeStop();
            break;
          case 'reset':
            this.timeReset();
            break;
        }
      }
    }
  }

  ngOnInit() {
    // 컴포넌트가 생성될 때에 한번만 불린다
    // 컴포넌트 초기화에 시에 한번만 불러줄 값을 저장하기도 한다
    // 한번만 불려도 되는 값들을 저장
    console.log('ng on init')
  }
  ngDoCheck(){
    // 데이터 변화를 감지하여 로직을 실행
    // 여러번 불러진다
    console.log('ng do check')
  }
  ngAfterContentInit(){
    console.log('ng after content init')
  }
  ngAfterContentChecked(){
    console.log('ng after content checked')
  }
  ngAfterViewInit(){
    console.log('ng after view init')
  }
  ngAfterViewChecked(){
    console.log('ng after view checked')
  }
  ngOnDestroy(){
    console.log('ng on destroy')
  }

}
