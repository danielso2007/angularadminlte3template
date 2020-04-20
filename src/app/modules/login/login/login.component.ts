import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  aFormGroup: FormGroup;

  constructor(
    private title: Title,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.title.setTitle('Login');
    this.createForm();
    this.aFormGroup = this.formBuilder.group({});
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    this.router.navigate(['dashboard']);
  }

}
