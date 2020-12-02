import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatDistance } from 'date-fns';
import { Observable, Subscription } from 'rxjs';
import { ChannelService } from '../../services/channel.service';

interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public channel?: Observable<any>;
  public messages?: Observable<any>;
  public newMessageText: string = '';

  constructor(
    private route: ActivatedRoute,
    private channelService: ChannelService
  ) { 
    this.subscriptions.push(
      this.channelService.selectedChannel.subscribe(channel => {
        this.channel = channel;
      })
    );

    this.subscriptions.push(
      this.channelService.selectedChannelMessages.subscribe(messages => {
        this.messages = messages;
      })
    );
  }

    // tslint:disable-next-line:no-any
  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };

  likes = 0;
  dislikes = 0;
  time = formatDistance(new Date(), new Date());

  like(): void {
    // this.likes = 1;
    // this.dislikes = 0;
  }

  dislike(): void {
    // this.likes = 0;
    // this.dislikes = 1;
  }

  loadMessages() {}
  loadData(pi: number): void {
    this.data = new Array(5).fill({}).map((_, index) => {
      return {
        href: 'http://ant.design',
        title: `ant design part ${index} (page: ${pi})`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources ' +
          '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      };
    });
  }

  onClick(): void {
    console.log('clicked');
  }

  public newMessage(message: string): void {
    this.submitting = true;
    this.channelService.addMessage(message);
    this.submitting = false;
    // reset input
    this.newMessageText = '';
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.loadData(1);
    this.subscriptions.push(
      this.route.paramMap.subscribe(params => {
        const channelId = params.get('channelId');
        this.channelService.changeChannel.next(channelId);
      })
    );
  }

}
