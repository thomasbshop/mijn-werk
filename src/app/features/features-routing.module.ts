import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component'
import { UserComponent } from './user/user.component';


const routes: Routes = [
  // { path: '', component: ChatComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'chat' },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
