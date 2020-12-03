import { Component, OnDestroy, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';
import { Observable, Observer, Subscription } from 'rxjs';
import { find, map } from 'rxjs/operators';
import { ChannelService } from '../../services/channel.service';

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

  validateForm: FormGroup;
  isVisible = false;
  isAddLoading = false;

  constructor(
    private route: ActivatedRoute,
    private channelService: ChannelService,
    private fb: FormBuilder
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

    this.validateForm = this.fb.group({
      channel: ['', [Validators.required], [this.channelNameAsyncValidator]],
      description: ['', [Validators.required]]
    });
  }

  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };

  likes = 0;
  dislikes = 0;

  like(): void {
    // this.likes = 1;
    // this.dislikes = 0;
  }

  dislike(): void {
    // this.likes = 0;
    // this.dislikes = 1;
  }

  onClick(): void {
    this.isVisible = true;
  }

  public newMessage(message: string): void {
    this.submitting = true;
    this.channelService.addMessage(message);
    this.submitting = false;
    // reset input
    this.newMessageText = '';
  }

  // modal form
  handleCancel(): void {
    this.isVisible = false;
  }

  submitForm(value: { channel: string; description: string }, e: MouseEvent): void {
    this.isAddLoading = true;
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
    this.channelService.addChannel(value);
    this.isVisible = false;
    this.isAddLoading = false;
    this.resetForm(e)
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  // checks if the channel exists.
  channelNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        const channels = this.channelService.channelIDs;
        let nameExists = channels.pipe(
          map(channels => {return channels.map(x => x.name).find(( x: any ) =>  x === control.value )}));
        nameExists.subscribe(found => {
          console.log(found); return found}, error => console.log(error));
          console.log(nameExists)
          if (nameExists) {
            // you have to return `{error: true}` to mark it as an error event
            observer.next({ error: true, duplicated: true });
          } else {
            observer.next(null);
          }
          observer.complete();
      }, 100);
  });

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.paramMap.subscribe(params => {
        const channelId = params.get('channelId');
        this.channelService.changeChannel.next(channelId);
      })
    );
  }

}
