import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm!: FormGroup;
  isLoading = false;

  submitForm(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    if (this.loginForm.valid) {
      // this.isLoading = !isLoading;
      const {email, password} = this.loginForm.value;
      console.log(this.loginForm)
      // // TODO call the auth service
      // this.subscriptions.push(
      //   this.auth.login(email, password).subscribe(success => {
      //     if (success) {
      //       this.router.navigateByUrl(this.returnUrl);
      //     } else {
      //       this.displayFailedLogin();
      //     }
      //     this.loadingService.isLoading.next(false);
      //   })
      // );
    } else {
      // this.isLoading = !isLoading;
      // this.displayFailedLogin();
    }
  }


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  // private displayFailedLogin(): void {
  //   const failedLoginAlert = new Alert('Invalid email/password combination, try again.', AlertType.Danger);
  //   this.alertService.alerts.next(failedLoginAlert);
  // }
}
