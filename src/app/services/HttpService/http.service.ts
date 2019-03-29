import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly url = `http://localhost:3000`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  login(loginBody) {
    return this.httpClient
      .post(`${this.url}/login`, loginBody, this.httpOptions)
      .pipe(
        catchError(this._handleError),
        map((res: any) => res)
      );
  }

  register(registerBody) {
    return this.httpClient
      .post(`${this.url}/register`, registerBody, this.httpOptions)
      .pipe(
        catchError(this._handleError),
        map((res: any) => res)
      );
  }

  getListOfUsers() {
    return this.httpClient
      .get(`${this.url}/users`)
      .pipe(
        catchError(this._handleError),
        map((res: any) => res)
      );
  }

  findByIdAndRemove(id) {
    return this.httpClient
      .delete(`${this.url}/delete-user/${id}`)
      .pipe(
        catchError(this._handleError),
        map((res: any) => res)
      );
  }

  findUserById(id) {
    return this.httpClient
      .get(`${this.url}/users/${id}`)
      .pipe(
        catchError(this._handleError),
        map((res: any) => res)
      );
  }

  sendEmail(emailToSend) {
    return this.httpClient
      .post(`${this.url}/restore-password`, emailToSend, this.httpOptions)
      .pipe(
        catchError(this._handleError),
        map((res: any) => res)
      );
  }

  changePass(obj) {
    return this.httpClient
      .post(`${this.url}/change-password`, obj, this.httpOptions)
      .pipe(
        catchError(this._handleError),
        map((res: any) => res)
      );
  }

  private _handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err.error);
  }

}
