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
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/chat';
    this.createForm();
   }

  isLoading = false;
  
  createForm(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    if (this.loginForm.valid) {
      // this.isLoading = !isLoading;
      const {email, password} = this.loginForm.value;
      console.log(this.loginForm)
      // TODO call the auth service
      this.subscriptions.push(
        this.auth.login(email, password).subscribe(success => {
          if (success) {
            this.router.navigateByUrl(this.returnUrl);
          } else {
            this.displayFailedLogin();
          }
          this.isLoading = !this.isLoading;
        })
      );
    } else {
      // this.isLoading = !isLoading;
      // this.displayFailedLogin();
    }
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    // this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  afterClose(): void {
    console.log('close');
  }
  private displayFailedLogin(): void {
    // const failedLoginAlert = new Alert('Invalid email/password combination, try again.', AlertType.Danger);
    // this.alertService.alerts.next(failedLoginAlert);
  }
}
