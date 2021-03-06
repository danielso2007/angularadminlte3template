import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { AutoLoginGuardService } from 'src/app/core/security/auto.login.guard.service';


const routes: Routes = [
  {
    path: '', canActivate: [ AutoLoginGuardService ],
    children: [
      { path: '', component: LoginComponent },
      { path: 'new-register', component: NewRegisterComponent },
      { path: 'recover-password', component: RecoverPasswordComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
