import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { FacebookSdk } from '../models/facebook-sdk.model';
import { BehaviorSubject } from 'rxjs';
import { FacebookMeta } from '../models/facebook-meta.model';

declare const FB;

@Injectable({
  providedIn: 'root'
})
export class FacebookSdkService {

  sdkInitialised: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private metaService: Meta) { }

  updateShareMetaTags(shareData: FacebookMeta) {
    this.metaService.updateTag({ property: 'fb:app_id', content: shareData.fbAppId });
    this.metaService.updateTag({ property: 'og:url', content: shareData.ogUrl });
    this.metaService.updateTag({ property: 'og:type', content: shareData.ogType });
    this.metaService.updateTag({ property: 'og:title', content: shareData.ogTitle });
    this.metaService.updateTag({ property: 'og:description', content: shareData.ogDescription });
    this.metaService.updateTag({ property: 'og:image', content: shareData.ogImage });
    this.metaService.updateTag({ property: 'og:image:alt', content: shareData.ogImageAlt });
  }

  addSDK(scriptData: FacebookSdk) {
    if (!this.sdkInitialised.value) {
      try {
        const appRoot = document.getElementsByTagName('app-root')[0];
        const scriptElement = document.createElement("script");

        scriptElement.src = 'https://connect.facebook.net/en_US/sdk.js';
        scriptElement.id = 'facebook-jssdk';

        scriptElement.onload = () => {
          FB.init({
            appId: scriptData.appId,
            status: scriptData.status,
            xfbml: scriptData.xfbml,
            version: 'v6.0'
          });
          FB.AppEvents.logPageView();
        };

        scriptElement.onerror = (error) => {
          console.log("Couldn't initialise Facebook SDK script: ", scriptElement.src, error);
          return;
        };

        appRoot.parentNode.insertBefore(scriptElement, appRoot);
        this.sdkInitialised.next(true);
        console.log('Facebook SDK Initialised!');
      }
      catch (error) {
        console.error('Failed to add Facebook SDK script: ', error);
        this.sdkInitialised.next(false);
      }
    }
    else{
      console.log('Failed: Facebook SDK Already Initialised!');
    }
  }
}
