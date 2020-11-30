import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { RouterModule } from '@angular/router';
import { SideNavItemsComponent } from './components/side-nav-items/side-nav-items.component';



@NgModule({
  declarations: [HeaderComponent, SideNavComponent, SideNavItemsComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule
  ],
  exports: [HeaderComponent, SideNavComponent, SideNavItemsComponent]
})
export class LayoutModule { }
