import { Component, OnInit } from '@angular/core';
import { ChannelService } from './services/channel.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  // channels: Array<any> = []

  constructor(
    public channelService: ChannelService
  ) { }

  ngOnInit(): void {
  }

}
