import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  errorMessage:string = "";

  userName:string = "";
  password:string = "";
  firstName:string = "";
  lastName:string = "";
  phoneNumber:number ;
  userEmail:string = "";
  initialBitCoins:number = 0;

  //clientType
  clientType:string = "";

  //AddressVariables
  stateAddress:string = "";
  cityAddress:string = "";
  zipCodeAddress:number ;
  streetAddress:string = "";

  errorFlag:boolean = false;

  constructor(private http: HttpClient , private router: Router)
   { }

  ngOnInit() {
    this.errorFlag = false;
  }

  registrationInputForUserName(event:any)
  {
    this.us