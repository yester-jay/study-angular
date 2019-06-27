import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData: string
  
  min: number = 0
  sec: number = 0
  ms: number = 0

  timeInterval;

  constructor() {
    
    // console.log(this.inputData);
  }

  timeStart(){
    this.timeStop();
    this.timeInterval = setInterval(()=>{
      this.ms ++;
    }, 10);
  }

  timeStop(){
    clearInterval(this.timeInterval);
  }

  timeReset(){
    this.timeStop();
    this.ms = 0;
  }

  ngOnChanges(changes){
    for(let propName in changes){
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
  }

}
