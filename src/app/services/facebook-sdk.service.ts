import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { FacebookShare } from '../models/facebook-share.model';
import { FacebookSdk } from '../models/facebook-sdk.model';

declare const FB;

@Injectable({
  providedIn: 'root'
})
export class FacebookSdkService {

  constructor(private metaService: Meta) { }

  updateShareMetaTags(shareData: FacebookShare) {
    this.metaService.updateTag({ property: 'fb:app_id', content: shareData.fbAppId });
    this.metaService.updateTag({ property: 'og:url', content: shareData.ogUrl });
    this.metaService.updateTag({ property: 'og:type', content: shareData.ogType });
    this.metaService.updateTag({ property: 'og:title', content: shareData.ogTitle });
    this.metaService.updateTag({ property: 'og:description', content: shareData.ogDescription });
    this.metaService.updateTag({ property: 'og:image', content: shareData.ogImage });
    this.metaService.updateTag({ property: 'og:image:alt', content: shareData.ogImageAlt });
  }

  addSDK(scriptData: FacebookSdk) {
    let scriptElement, appRoot = document.getElementsByTagName('app-root')[0];
    scriptElement = document.createElement("script");

    scriptElement.src = 'https://connect.facebook.net/en_US/sdk.js';
    scriptElement.id = 'facebook-jssdk';
    scriptElement.async = true;
    scriptElement.defer = true;

    scriptElement.onload = () => {
        FB.init({
          appId: scriptData.appId,
          status: scriptData.status,
          xfbml: scriptData.xfbml,
          version: 'v6.0'
        });
        FB.AppEvents.logPageView();
    };

    scriptElement.onerror = (error: any) => {
        console.log("Couldn't Facebook script: ", scriptElement.src, error);
    };

    appRoot.parentNode.insertBefore(scriptElement, appRoot);
  }
}
