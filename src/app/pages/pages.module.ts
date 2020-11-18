import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [LogInComponent, SignUpComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    PagesRoutingModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzSelectModule,
    NzSpinModule,
    NzCardModule
  ]
})
export class PagesModule { }
