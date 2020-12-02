import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/auth/services/authentication.service';
import { ChannelService } from '../chat/services/channel.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  public user?: User;
  public currentUser: any = null;
  public channel?: any;

  constructor(
    private auth: AuthenticationService,
    public channelService: ChannelService
  ) {
    this.subscriptions.push(
      this.auth.currentUser.subscribe( user => {
        this.currentUser = user;
        console.log(this.currentUser);
        // this.loadingService.isLoading.next(false);
      })
    );

    // this.subscriptions.push(
    //   this.channelService.selectedChannel.subscribe(channel => {
    //     this.channel = channel;
    //   })
    // );
   }

  ngOnInit() {
  }

}
