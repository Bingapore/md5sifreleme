import { Component, OnInit, Input } from '@angular/core';
import { PrimaryKeyClassService } from '../primary-key-class.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-history',
  templateUrl: './client-history.component.html',
  styleUrls: ['./client-history.component.css']
})
export class ClientHistoryComponent implements OnInit {
  @Input() transId:number;

  errorFlag:boolean = false;
  errorMessageFromResponse:string = "";

  clientId:string = "";
  transType:string = "";
  transVal:number;
  transCommission:number;
  transCommissionType:string = "";
  transStatus:string = "";
  bitCoinValue:number;

  constructor(private http: HttpClient , private router: Router , private primaryKeyService: PrimaryKeyClassService) { }

  ngOnInit() {
    this.getTheTransactionInfo();
  }

  get