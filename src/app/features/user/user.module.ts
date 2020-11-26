import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@NgModule({
  declarations: [UserComponent, UserProfileComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    LayoutModule,
    NzBreadCrumbModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzMenuModule
  ]
})
export class UserModule { }
