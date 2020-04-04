import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { FacebookShare } from '../models/facebook-share.model';

@Injectable({
  providedIn: 'root'
})
export class FacebookSdkService {

  constructor(private metaService: Meta) { }

  setMetaTags(shareData: FacebookShare) {
    this.metaService.updateTag({ name: 'fb:app_id', content: shareData.fbAppId });
    this.metaService.updateTag({ name: 'og:url', content: shareData.ogUrl });
    this.metaService.updateTag({ name: 'og:type', content: shareData.ogType });
    this.metaService.updateTag({ name: 'og:title', content: shareData.ogTitle });
    this.metaService.updateTag({ name: 'og:description', content: shareData.ogDescription });
    this.metaService.updateTag({ name: 'og:image', content: shareData.ogImage });
    this.metaService.updateTag({ name: 'og:image:alt', content: shareData.ogImageAlt });
  }
}
