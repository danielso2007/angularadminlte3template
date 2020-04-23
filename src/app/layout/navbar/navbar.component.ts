import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/security/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.authService.logout().subscribe(() => this.router.navigate([environment.defaultLoginRoute]));
  }
}
