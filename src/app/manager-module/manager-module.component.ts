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

  parseFromDate(dateString: string) {
    if (dateString) {
        console.log("dateString "+dateString);
        this.fromDate = dateString;
    } else {
        console.log("dateString"+dateString);
        this.fromDate = "";
    }
  }

  parseToDate(dateString: string) {
    if (dateString) {
        console.log("dateString "+dateString);
        this.toDate = dateString;
    } else {
        console.log("dateString"+dateString);
        this.toDate = "";
    }
  }

  getTheseDates()
  {
    if(this.radioSelected == "dates")
    {
      if(this.toDate.length > 0 && this.fromDate.length > 0)
      {
        this.historyFlag = false;
        this.errorFromResponse = false;
        this.errorStringFromResponse = "";

        let obs = this.http.get('http://localhost:8080/restproject/webapi/products/managerDates/'+this.fromDate+"/"+this.toDate);
        obs.subscribe((data:any) =>
        {
          this.historyFlag = true;
          console.log("login response : "+data.errorMessage);

          if(data.result == true)
          {
            //login --> change module

            console.log("dates : "+data.transactionIds);
            this.transList = data.transactionIds
          }
          else
          {
            this.historyFlag = fal