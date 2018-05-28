import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from './../../services/data/data.service';

@Component({
  selector: 'fg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 dataLogin: FormGroup;

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataLogin = this.fb.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }

  login() {
    this.dataService.setCookie('anything');
  }

  onSubmit() {
    if (this.dataLogin.status === "VALID") {
      console.log(this.dataLogin.value);
      this.dataService.setCookie(JSON.stringify(this.dataLogin.value));
      this.router.navigate(['/']);
    } else {
      console.log('Dados inválidos');
    }
  }

}
