import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css']
})
export class NewRegisterComponent implements OnInit {

  loginForm: FormGroup;
  aFormGroup: FormGroup;

  constructor(
    private title: Title,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.title.setTitle('Registration');
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
    this.router.navigate(['login']);
  }

}
