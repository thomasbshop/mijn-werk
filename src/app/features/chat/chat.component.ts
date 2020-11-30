import { Component, OnInit } from '@angular/core';
import { ChannelService } from './services/channel.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
<<<<<<< Updated upstream
=======
  // channels: Array<any> = []
>>>>>>> Stashed changes

  constructor(
    public channelService: ChannelService
  ) { }

  ngOnInit(): void {
  }

}
