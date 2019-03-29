import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/HttpService/http.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.css']
})
export class RestorePasswordComponent {

  public restorePassword: FormGroup = this.fb.group({
    login: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])]
  });

  constructor(private fb: FormBuilder,  private httpService: HttpService, private router: Router, private notifier: NotifierService) { }

  sendEmail() {
    this.httpService.sendEmail(this.restorePassword.value)
      .subscribe(({ message }) => {
          this.notifier.notify('success', message);
        },
        err =>
          this.notifier.notify('error', err)
      );
  }

}
