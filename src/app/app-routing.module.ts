import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then(f => f.FeedbackModule)
  },
  { path: '',
    redirectTo: '/feedback',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
