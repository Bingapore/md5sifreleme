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
    this.clientType = event.target.value;
  }

  //take the address input
  registrationInputForAddState(event:any)
  {
    this.stateAddress = event.target.value;
  }

  registrationInputForAddCity(event:any)
  {
    this.cityAddress = event.target.value;
  }

  registrationInputForAddZipcode(event:any)
  {
    this.zipCodeAddress = event.target.value;
  }

  registrationInputForAddStreet(event:any)
  {
    this.streetAddress = event.target.value;
  }


  validateRegistration()
  {

    if( this.userName.length == 0 || this.password.length == 0 || this.firstName.length == 0 || this.lastName.length == 0 || this.phoneNumber.toString().length == 0 || this.userEmail.length == 0 || this.stateAddress.length == 0 || this.cityAddress.length == 0 || this.zipCodeAddress.toString().length == 0 || this.streetAddress.length == 0 )
    {
      this.errorFlag = true;
      this.errorMessage = "Please enter all the fields";
      console.log(this.errorMessage);
      return;
    }

    if(this.phoneNumber.toString().length < 10 || this.phoneNumber.toString().length > 10)
    {
      this.errorFlag = true;
      this.errorMessage = "enter a 10 digit number";
      console.log(this.errorMessage);
      return;
    }

    if(this.phoneNumber.toString().length == 10 && isNaN(this.phoneNumber))
    {
      this.errorFlag = true;
      this.errorMessage = "enter only numbers as a PhoneNumber";
      console.log(this.errorMessage);
      return;
    }

    if(this.clientType.length == 0)
    {
      this.errorFlag = true;
      this.errorMessage = "Are you a Trader or a Client?";
      console.log(this.errorMessage);
      return;
    }

    if(this