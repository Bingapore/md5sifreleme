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

  onTextEnteredInInputForPostName(event:any)
  {
    this.nameToPost = event.target.value;
  }

  onTextEnteredInInputForPostCost(event:any)
  {
    this.costToPost = event.target.value;
  }

  onTextEnteredInInputForGet(event:any)
  {
    this.costToGet = event.target.value;
  }

  postThisData()
  {
    // console.log("posting "+this.costToPost);
    if(this.nameToPost.length > 0 && this.costToPost.toString().length > 0 )
    {
      // console.log("inside if condition");
      let obs = this.http.post('http://localhost:8080/restproject/webapi/products/newProduct/',
      {"pName":this.nameToPost,
        "pCost":this.costToPost}
      );

      obs.subscribe((data:any) => console.log(data));
    }
 