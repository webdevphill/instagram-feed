import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FacebookShare } from 'src/app/models/facebook-share.model';
import { FacebookSdkService } from 'src/app/services/facebook-sdk.service';

@Component({
  selector: 'app-facebook-share',
  templateUrl: './facebook-share.component.html',
  styleUrls: ['./facebook-share.component.scss']
})
export class FacebookShareComponent implements OnInit {

  shareForm: FormGroup;

  fbShareData: FacebookShare = {
    fbAppId: '283054399382020',
    ogUrl: 'https://instafeedbasic.webdevphill.com',
    ogType: 'website',
    ogTitle: 'Facebook SDK With Angular',
    ogDescription: 'Facebook SDK example using Angular',
    ogImage: 'http://instafeedbasic.webdevphill.com/assets/WebDevPhill_Logo_WhiteFill.png',
    ogImageAlt: 'WebDevPhill Logo',
    dataShare: true,
    dataWidth: 450,
    dataShowFaces: true,
    showShare: true
  }

  constructor(private fbSdkService: FacebookSdkService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.shareForm = this.formBuilder.group(this.fbShareData);
  }

  onSubmit(formData){
    this.fbSdkService.setMetaTags(formData);
  }

}
