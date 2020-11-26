import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../core/auth/guard/authentication.guard';
import { ChatComponent } from './chat/chat.component'
import { UserComponent } from './user/user.component';


const routes: Routes = [
  // { path: '', component: ChatComponent },
  { path: '', pathMatch: 'full', redirectTo: 'chat' },
  {
    path: 'chat',
    children: [
      { path: '', component: ChatComponent },
      { path: ':channelId', component: ChatComponent }
    ]
  },
  {
    path: 'user/:userId',
    component: UserComponent,
    canActivate: [AuthenticationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
