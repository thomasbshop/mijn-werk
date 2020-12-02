import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ChannelService } from './services/channel.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  public channel?: any;

  constructor(
    public channelService: ChannelService
  ) {
    this.subscriptions.push(
      this.channelService.selectedChannel.subscribe(channel => {
        this.channel = channel;
      })
    );
   }

  ngOnInit(): void {
    this.channelService.channelIDs.subscribe(channelData => {
      console.log(channelData);
    } );
  }

}
