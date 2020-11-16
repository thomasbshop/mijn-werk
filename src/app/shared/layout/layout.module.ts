import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';



@NgModule({
  declarations: [HeaderComponent, SideNavComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule
  ],
  exports: [HeaderComponent, SideNavComponent]
})
export class LayoutModule { }
