import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  public greeting
  onButtonClick(value){
    this.greeting = "hello"+"-"+value
    console.log("input button click")
  }

  public name="test"


  //structural directive examples
  public isEnabled = false;

  //demonstration of ngFor directive.
  public colors = ["red","green","blue","pink","orange","white"]

  //demonstration  of receiving the data from parent component into the chile component/component interaction
  @Input('parentName') inputname;

  //demonstration of sending message from child component to parent component.
  @Output() public childEmitter = new EventEmitter();

  public fireEvent(){
    console.log("i am clickable")
    this.childEmitter.emit('hi i am fired from child component');
  }


}
