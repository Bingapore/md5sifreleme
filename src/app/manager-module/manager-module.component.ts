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

  err