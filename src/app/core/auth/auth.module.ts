import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 
import { AuthRoutingModule } from './auth-routing.module';
// services
import { AuthenticationService } from './services/authentication.service';
// guards
import { AuthenticationGuard } from './guard/authentication.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard
  ]
})
export class AuthModule { }
