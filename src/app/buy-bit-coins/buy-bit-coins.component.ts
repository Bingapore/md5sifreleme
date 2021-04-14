
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
