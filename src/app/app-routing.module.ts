import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PoolsComponent } from './pools/pools.component';
import { ReviewComponent } from './review/review.component';
import { SigninComponent } from './signin/signin.component';
import { HostComponent } from './host/host.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '/', component: SearchComponent},
  {path: '/pools/:id', component: PoolsComponent},
  {path: '/review', component: ReviewComponent},
  {path: '/guest/signin', component: SigninComponent},
  {path: '/host', component: HostComponent},
  {path: '/dashboard', component: DashboardComponent},
  {path: '**', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
