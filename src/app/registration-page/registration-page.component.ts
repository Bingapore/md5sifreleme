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
    this.userName = event.target.value;
  }

  registrationInputForPassword(event:any)
  {
    this.password = event.target.value;
  }

  registrationInputForFirstName(event:any)
  {
    this.firstName = event.target.value;
  }

  registrationInputForLastName(event:any)
  {
    this.lastName = event.target.value;
  }

  registrationInputForPhoneNumber(event:any)
  {
    this.phoneNumber = event.target.value;
  }

  registrationInputForEmail(event:any)
  {
    this.userEmail = event.target.value;
  }

  radioClientType(event:any)
  {
