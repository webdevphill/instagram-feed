import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstagramFeedComponent } from './components/instagram-feed/instagram-feed.component';
import { FacebookSdkComponent } from './components/facebook-sdk/facebook-sdk.component';
import { FacebookShareComponent } from './components/facebook-share/facebook-share.component';
import { FacebookComponent } from './components/facebook/facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    InstagramFeedComponent,
    FacebookSdkComponent,
    FacebookShareComponent,
    FacebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
