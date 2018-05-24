import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data/data.service';

@Component({
  selector: 'fg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  login() {
    this.dataService.setCookie('anything');
  }

}
