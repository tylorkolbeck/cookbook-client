import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private readonly apiHost = environment.apiHost;
  private _token = '';
  public userToken = new BehaviorSubject<string>(this._token);

  public get token() {
    return this._token;
  }
  public set token(value) {
    if (value) {
      this.userToken.next(value);
    }
    this._token = value;
  }

  constructor(private httpClient: HttpClient) {}
  ngOnDestroy(): void {
    console.log('destroyed')
  }

  public Login(email: string, password: string) {
    return this.httpClient
      .post(`${this.apiHost}/login`, { email, password })
      .pipe(
        catchError(this.handleLoginError),
        tap((res: any) => (this.token = res.token))
        // TODO: handle storing token in local storage
      );
  }

  private handleLoginError(error: HttpErrorResponse) {
    if (error.status === 401) {
      return throwError(() => 'Email and password do not match');
    } else {
      return throwError(() => 'An error occurred, please try again later');
    }
  }
}
