import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/HttpService/http.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerForm: FormGroup = this.fb.group({
    firstName: ['', Validators.compose([Validators.required])],
    lastName: ['', Validators.compose([Validators.required])],
    login: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])]
  });

  constructor(private fb: FormBuilder,  private httpService: HttpService, private router: Router, private notifier: NotifierService) {}

  sendForm2() {
    this.httpService.register(this.registerForm.value)
      .subscribe(({ message }) => {
          this.router.navigate(['/login']);
          this.notifier.notify('success', message);
      },
      err =>
        this.notifier.notify('error', err)
      );
  }
}
