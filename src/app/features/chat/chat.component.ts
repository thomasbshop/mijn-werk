import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  channels: Array<any> = ['#1', '#2', '#3']
  constructor() { }

  ngOnInit(): void {
  }

}
