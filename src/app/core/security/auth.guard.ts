import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

import { tap, map, take, first } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuthState(state.url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }
  canLoad(route: Route): Observable<boolean> {
    return this.checkAuthState(window.location.pathname).pipe(take(1));
  }

  private checkAuthState(url: string): Observable<boolean> {
    return this.authService.isLoggedIn()
    .pipe(
      first(),
      tap(is => {
        if (!is) {
          this.authService.redirectUrl = url;
          this.router.navigate([environment.defaultLoginRoute]);
        }
      })
    );
  }

}
