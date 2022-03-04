import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-module',
  templateUrl: './manager-module.component.html',
  styleUrls: ['./manager-module.component.css']
})
export class ManagerModuleComponent implements OnInit {

  fromDate:string = "";
  toDate:string = "";

  errorFromResponse:boolean = false;
  errorStringFromResponse:string = "";

  transList:number[];
  historyFlag:boolean = false;
  showDates:boolean = false;

  radioSelected:string = "";

  constructor(private http: HttpClient , private router: Router) { }

  ngOnInit() {
  }

  parseFromDate(dat