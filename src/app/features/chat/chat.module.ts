import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ChannelService } from './services/channel.service';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatComponent } from './chat.component';
import { LayoutModule } from '../../shared/layout/layout.module'


@NgModule({
  declarations: [ChatComponent, ChatInputComponent, ChannelsComponent, ChatMessageComponent, ChatWindowComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzEmptyModule,
    NzCommentModule,
    NzListModule,
    NzAvatarModule,
    NzToolTipModule,
    NzIconModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzPageHeaderModule,
    NzMenuModule,
    NzModalModule,
    LayoutModule
  ],
  providers: [
    ChannelService
  ],
  exports: [ChatWindowComponent]
})
export class ChatModule { }
