import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatComponent } from './chat.component';
import { LayoutModule } from '../../shared/layout/layout.module'
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [ChatComponent, ChatInputComponent, ChannelsComponent, ChatMessageComponent, ChatWindowComponent ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzCommentModule,
    NzListModule,
    NzAvatarModule,
    NzToolTipModule,
    NzIconModule,
    LayoutModule
  ],
  exports: [ChatWindowComponent]
})
export class ChatModule { }
