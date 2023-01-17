import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testing-part',
  templateUrl: './testing-part.component.html',
  styleUrls: ['./testing-part.component.css']
})
export class TestingPartComponent implements OnInit {

  nameToPost:string = "";
  costToPost:number ;
  costToGet:string = "";
  title:string = 'first-web-app';
  fromParent:string = '';
  namesList = ['ravi','teja','Talari','Ramesh','Rama']

  constructor(private http: HttpClient)
  {

  }

  ngOnInit()
  {
    console.log("in ngOnInit()")

  }

  parentEmitter(passedParent:string)
  {
    this.fromParent = passedParent;
  }

  onTextEnteredInInput