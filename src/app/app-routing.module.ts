import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './core/auth/guard/authentication.guard';
import { LogInComponent } from './pages/log-in/log-in.component';

const routes: Routes = [
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'chat', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
    canActivate: [AuthenticationGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
