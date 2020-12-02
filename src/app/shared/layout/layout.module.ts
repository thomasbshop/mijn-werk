import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { RouterModule } from '@angular/router';
import { SideNavItemsComponent } from './components/side-nav-items/side-nav-items.component';



@NgModule({
  declarations: [HeaderComponent, SideNavComponent, SideNavItemsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzAvatarModule,
    NzModalModule,
    NzFormModule
  ],
  exports: [HeaderComponent, SideNavComponent, SideNavItemsComponent]
})
export class LayoutModule { }
