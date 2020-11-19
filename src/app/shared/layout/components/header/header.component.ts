import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/auth/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentUser: any = null;

  constructor(
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.auth.currentUser.subscribe( user => {
      this.currentUser = user;
    })
  }
}
