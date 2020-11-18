import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LayoutModule } from '../shared/layout/layout.module'
import { ChatModule } from './chat/chat.module'
import { ChatComponent } from './chat/chat.component'
import { ChatWindowComponent } from './chat/components/chat-window/chat-window.component'
import { FeaturesRoutingModule } from './features-routing.module';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ChatModule,
    LayoutModule,
    NzInputModule,
    NzLayoutModule
  ]
})
export class FeaturesModule { }
