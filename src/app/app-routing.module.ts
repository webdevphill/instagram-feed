import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookComponent } from './components/facebook/facebook.component';
import { InstagramFeedComponent } from './components/instagram-feed/instagram-feed.component';


const routes: Routes = [
  { path: '', component: FacebookComponent },
  { path: 'facebook', component: FacebookComponent },
  { path: 'instagram', component: InstagramFeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
