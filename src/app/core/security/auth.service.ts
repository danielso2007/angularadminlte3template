import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { UserLogin } from '../models/user-login.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, mapTo, catchError, map, mergeMap } from 'rxjs/operators';
import { ResponseApi } from '../models/response-api';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly JWT_TOKEN = environment.TOKEN;
  redirectUrl: string;
  user$: UserLogin;

  constructor(private http: HttpClient) { }

  login(user: { username: string, password: string }): Observable<UserLogin> {
    let responseApi = new ResponseApi();
    responseApi.data = user;
    responseApi.data.token = 'af559z4hcYUI5Uw7s2HcnPiL0OBrQU7d';
    return of(responseApi).pipe(
      catchError(this.handleError),
      map((responseApi: ResponseApi) => {
        console.log(responseApi);
        this.doLoginUser(responseApi.data.user, responseApi.data.token)
        return responseApi.data.user as UserLogin;
      })
    );
    // return this.http.post<any>(`${environment.apiUrl}/login`, user)
    //   .pipe(
    //     tap(tokens => this.doLoginUser(user.username, tokens)),
    //     mapTo(true),
    //     catchError(error => {
    //       console.error(error.error);
    //       return of(false);
    //     }));
  }

  logout(): Observable<boolean> {
    return of(this.doLogoutUser());
    // return this.http.post<any>(`${environment.apiUrl}/logout`, { })
    //   .pipe(
    //     tap(() => this.doLogoutUser()),
    //     mapTo(true),
    //     catchError(error => {
    //       console.error(error.error);
    //       return of(false);
    //     }));
  }

  isLoggedIn(): Observable<boolean> {
    return of(!!this.getJwtToken());
  }

  refreshToken(): Observable<any> {
    return of(false);
  }

  getJwtToken(): string {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(user: UserLogin, token: string) {
    this.user$ = user;
    this.storeJwtToken(token);
  }

  private doLogoutUser() {
    this.user$ = null;
    this.removeTokens();
    return true;
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  private handleError = (error: any) => {
    console.error("ERROR => ", error);
    return throwError(error);
  }

}
