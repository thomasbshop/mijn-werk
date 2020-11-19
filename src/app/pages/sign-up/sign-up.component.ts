import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/auth/services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})


export class SignUpComponent {

  public signupForm!: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder, 
    // private alertService: AlertService,
    private auth: AuthenticationService,
    // private loadingService: LoadingService,
    private router: Router) {
      this.createForm();
  }

  private createForm(): void {
    this.signupForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      agree: [false]
    });
  }

  public  submitForm(value: { userName: string; email: string; password: string; confirm: string; }): void {

    if (this.signupForm.valid) {
      const {firstName, lastName, email, password} = this.signupForm.value;
      console.log(value);

      // TODO call the auth service
      this.subscriptions.push(
        this.auth.signup(firstName, lastName, email, password).subscribe(success => {
          if (success) {
            this.router.navigate(['/chat']);
          } else {
            // const failedSignupAlert = new Alert('There was a problem signing up, try again.', AlertType.Danger);
            // this.alertService.alerts.next(failedSignupAlert);
            console.log('error');
          }

          // this.loadingService.isLoading.next(false);
        })
      );
    } else {
      // const failedSignupAlert = new Alert('Please enter a valid name, email and password, try again.', AlertType.Danger);
      // this.alertService.alerts.next(failedSignupAlert);
      console.log('form not valid', this.signupForm);
    }

    for (const key in this.signupForm.controls) {
      this.signupForm.controls[key].markAsDirty();
      this.signupForm.controls[key].updateValueAndValidity();
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.signupForm.reset();
    for (const key in this.signupForm.controls) {
      this.signupForm.controls[key].markAsPristine();
      this.signupForm.controls[key].updateValueAndValidity();
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.signupForm.controls.confirm.updateValueAndValidity());
  }

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
  });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.signupForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };


  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}