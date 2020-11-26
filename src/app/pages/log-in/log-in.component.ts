import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/auth/services/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit, OnDestroy {

  public loginForm!: FormGroup;
  private subscriptions: Subscription[] = [];
  private returnUrl: string;

  constructor(
    private fb: FormBuilder, 
    // private alertService: AlertService,
    // private loadingService: LoadingService,
    private auth: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/app/chat';
    this.createForm();
   }

  isLoading = false;
  alertMessage?: string
  
  createForm(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      remember: [false]
    });
  }

  submitForm(): void {

    if (this.loginForm.valid) {
      this.isLoading = !this.isLoading;
      const {email, password} = this.loginForm.value;
      console.log(this.loginForm)
      // TODO call the auth service
      this.subscriptions.push(
        this.auth.login(email, password).subscribe(result => {
          if (result) {
            console.log(result);
            console.log(this.returnUrl);
            this.router.navigateByUrl(this.returnUrl);
          } else {
            console.log(result);
            this.alertMessage = result.message;
            // this.displayFailedLogin();
          }
          this.isLoading = !this.isLoading;
        })
      );
    } else {
      // this.displayFailedLogin();
    }

    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
  }

  ngOnInit(): void {
    this.auth.logout();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  afterClose(): void {
    console.log('close');
  }
  private displayFailedLogin(): void {
    // const failedLoginAlert = new Alert('Invalid email/password combination, try again.', AlertType.Danger);
    // this.alertService.alerts.next(failedLoginAlert);
  }
}
