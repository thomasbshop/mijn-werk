import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LayoutModule } from '../shared/layout/layout.module'
import { ChatComponent } from './chat/chat.component'
import { ChatWindowComponent } from './chat/components/chat-window/chat-window.component'
import { FeaturesRoutingModule } from './features-routing.module';


@NgModule({
  declarations: [ChatComponent, ChatWindowComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    LayoutModule,
    NzLayoutModule
  ]
})
export class FeaturesModule { }
