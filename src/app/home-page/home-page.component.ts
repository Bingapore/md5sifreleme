
import { Component, OnInit } from '@angular/core';
import { PrimaryKeyClassService } from '../primary-key-class.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  bitCoins:number;
  fiatCurrency:number;
  userPrimaryKey:string="";

  errorMessageFromResponse:string="";
  errorFlag:boolean = false;

  //loading money
  amountLoaded:number;

  constructor(private http: HttpClient , private router: Router , private primaryKeyService: PrimaryKeyClassService) { }

  ngOnInit() {
    console.log("ngOnInit()"+this.primaryKeyService.getPrimaryKey());
    this.userPrimaryKey = this.primaryKeyService.getPrimaryKey();
    this.getTheUserAccountBalance();
  }

  //get the bitCoins and fiatCurrency
  getTheUserAccountBalance()
  {
    console.log("ngOnInit()++"+this.primaryKeyService.getPrimaryKey());

    let obs = this.http.get('http://localhost:8080/restproject/webapi/products/balance/'+this.userPrimaryKey);

    obs.subscribe((data:any) =>
    {

      console.log("accounts response : "+data.errorMessage);
