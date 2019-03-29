import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/HttpService/http.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup = this.fb.group({
    login: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])]
  });

  constructor(private fb: FormBuilder, private httpService: HttpService, private router: Router, private notifier: NotifierService) {
  }

  sendForm1() {
    this.httpService.login(this.loginForm.value)
      .subscribe(({ token, message }) => {
          console.log(`login token received : ${token}`);
          localStorage.setItem('token', token);
          this.router.navigate(['/users']);
          this.notifier.notify('success', message);
      },
      err =>
        this.notifier.notify('error', err)
      );
  }
}
