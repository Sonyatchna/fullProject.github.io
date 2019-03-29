import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/HttpService/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  private token;

  public changePassword: FormGroup = this.fb.group({
    password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
    confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])]
  });

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private router: Router,
    private notifier: NotifierService,
    private activeRoute: ActivatedRoute
  ) {
    this.changePassword.valueChanges
      .subscribe(({ password, confirmPassword }) => {
          if (password !== confirmPassword) {
            this.changePassword
              .get('confirmPassword')
              .setErrors({ notSame: true });
          } else {
            this.changePassword
              .get('confirmPassword')
              .setErrors(null);
          }
        }
      );
    this.activeRoute.params.subscribe(({ token }) => this.token = token);
  }

  changePass() {
    const { password } = this.changePassword.value;
    this.httpService.changePass({password, token: this.token})
      .subscribe(res => {
          this.notifier.notify('success', 'Your password has been successfully changed!');
          this.router.navigate(['/login']);
        },
        err =>
          this.notifier.notify('error', err)
      );
  }

}
