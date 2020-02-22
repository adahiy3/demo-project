import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  //example of prperty binding.
  public myId= "propertybindingId"
   name = "Amit"
   public textValue="test2"
   public isDisabled=false

   //class binding example
   public applySuccessClass="text-success"
   public applyDangerClass="text-danger"
   public applySpecialClass="text-special"


   //apply mutiple classes using ngClass attribute of angular
    public isSuccess=true
    applySpecialText=true;

   applySuccessClasses={
     "text-success" : this.isSuccess,
    "text-special" : this.applySpecialText
   }
  

  constructor() { }

  ngOnInit() {
  }

}
