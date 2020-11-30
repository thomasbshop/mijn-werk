import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  channels: Array<any> = ['#1', '#2', '#3']
  constructor() { }

  ngOnInit(): void {
  }

}
