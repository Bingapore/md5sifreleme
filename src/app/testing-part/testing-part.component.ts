import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testing-part',
  templateUrl: './testing-part.component.html',
  styleUrls: ['./testing-part.component.css']
})
export class TestingPartComponent implements OnInit {

  nameToPost:s