
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PrimaryKeyClassService } from '../primary-key-class.service';

@Component({
  selector: 'app-buy-bit-coins',
  templateUrl: './buy-bit-coins.component.html',
  styleUrls: ['./buy-bit-coins.component.css']
})
export class BuyBitCoinsComponent implements OnInit {

  bitCoins:number;
  fiatCurrency:number;

  userPrimaryKey:string = "";

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
  fiatRadioFlag:boolean = true;

  constructor(private http: HttpClient , private router: Router, private primaryKeyService: PrimaryKeyClassService) { }

  ngOnInit() {
    this.getTheCommissionRate();
    this.getTheUserAccountBalance();
    this.getTheCurrentBitValue();
  }

  getTheUserAccountBalance()
  {
    console.log("ngOnInit()++"+this.primaryKeyService.getPrimaryKey());

    let obs = this.http.get('http://localhost:8080/restproject/webapi/products/balance/'+this.userPrimaryKey);

    obs.subscribe((data:any) =>
    {

      console.log("accounts response in buying : "+data.errorMessage);


      if(data.result == false)
      {
        this.errorMessageFromResponse = data.errorMessage;
        this.errorFlag = true;
      }
      else if(data.result == true)
      {
        this.bitCoins = data.clientBitCoins;
        this.fiatCurrency = data.clientFiatCurrency;
        this.errorFlag = false;
      }

    });
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
      this.commRate = data.commissionRate;
    });
  }

  onTextEnteredInInputForCalculatingBitCoinValues(event:any)
  {
    //calculations
    this.bDesired = event.target.value;

    this.calSubTotal = this.bValue * this.bDesired;

    //cal comm
    this.calCommissionFiat = this.calSubTotal * this.commRate;
    this.calCommissionBit = this.bDesired * this.commRate;

    if(this.fiatCurrency < this.calSubTotal)
    {