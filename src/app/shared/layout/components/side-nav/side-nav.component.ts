import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() menuOptions: Array<any> = [];

  isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

}
