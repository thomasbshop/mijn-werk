import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, of as observableOf } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/auth/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  public channels: Observable<any> = observableOf([]);
  public selectedChannel: Observable<any>;
  public selectedChannelMessages: Observable<any>;
  public changeChannel: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  // public changeChannel: BehaviorSubject<string | null> = new BehaviorSubject<string | null>('CylTfhNeQ3EDXWyhRMAD');

  constructor(
    private db: AngularFirestore,
    private authService: AuthenticationService
  ) {
      this.selectedChannel = this.changeChannel.pipe(
        switchMap(channelId => {
          if (channelId) {
            return db.doc(`channel/${channelId}`).valueChanges();
          }
          return observableOf(null);
        })
      );

      this.selectedChannelMessages = this.changeChannel.pipe(
        switchMap(channelId => {
          if (channelId) {
            return db.collection(`/channel/${channelId}/messages/`, ref => {
              return ref.orderBy('createdAt', 'desc').limit(100);
            })
            .valueChanges()
            .pipe(map(arr => arr.reverse()));
          }
          return observableOf(null);
        })
      );

      this.channels = db.collection('channel').valueChanges();
  }

  public addMessage(text: string): void {
    const channelId = this.changeChannel.value;
    console.log(channelId);
    const message = {
      message: text,
      createdAt: new Date(),
      sender: this.authService.currentUserSnapshot
    };
    console.log(message);
    this.db.collection(`channel/${channelId}/messages`).add(message);
  }
}
