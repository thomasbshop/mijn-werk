import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatComponent } from './chat.component';
import { LayoutModule } from '../../shared/layout/layout.module'
import { NzLayoutModule } from 'ng-zorro-antd/layout';



@NgModule({
  declarations: [ChatComponent, ChatInputComponent, ChannelsComponent, ChatMessageComponent, ChatWindowComponent ],
  imports: [
    CommonModule,
    NzLayoutModule,
    LayoutModule
  ],
  exports: [ChatWindowComponent]
})
export class ChatModule { }
