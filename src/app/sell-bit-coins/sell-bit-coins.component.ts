
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PrimaryKeyClassService } from '../primary-key-class.service';

@Component({
  selector: 'app-sell-bit-coins',
  templateUrl: './sell-bit-coins.component.html',
  styleUrls: ['./sell-bit-coins.component.css']
})
export class SellBitCoinsComponent implements OnInit {

  userPrimaryKey:string = "";

  bitCoins:number;
  fiatCurrency:number;

  bValue:number;
  bDesired:number;
  calSubTotal:number = 0;

  calCommissionFiat:number;
  calCommissionBit:number;
  commRate:number;

  errorFlag:boolean = false;
  errorMessageFromResponse:string="";

  buyFlag:boolean = true;

  //radioCommType
  radioSelected:string="";
  bitRadioFlag:boolean = true;

  constructor(private http: HttpClient , private router: Router, private primaryKeyService: PrimaryKeyClassService) { }

  ngOnInit() {

    this.getTheCommissionRate();
    this.getTheUserAccountBalance();
    this.getTheCurrentBitValue();

  }

  getTheCurrentBitValue()
  {
    let obs = this.http.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    obs.subscribe((data:any) =>
    {
      console.log("currentBitCoinValue response : "+data.bpi.USD.rate_float);
      this.bValue = data.bpi.USD.rate_float;
    });
  }

  getTheCommissionRate()
  {
    this.userPrimaryKey = this.primaryKeyService.getPrimaryKey();
    let obs = this.http.get('http://localhost:8080/restproject/webapi/products/clientType/'+this.userPrimaryKey);
    obs.subscribe((data:any) =>
    {
      console.log("response : "+data.commissionRate);