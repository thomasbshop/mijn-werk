import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component'


const routes: Routes = [
  // { path: '', component: ChatComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'chat' },
  {
    path: '',
    component: ChatComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
