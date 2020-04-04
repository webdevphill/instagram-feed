import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { FacebookShare } from '../models/facebook-share.model';

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
}
