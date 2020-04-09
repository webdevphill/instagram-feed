import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FacebookShare } from 'src/app/models/facebook-share.model';
import { FacebookSdkService } from 'src/app/services/facebook-sdk.service';
import { FacebookMeta } from 'src/app/models/facebook-meta.model';

declare const FB;

@Component({
  selector: 'app-facebook-share',
  templateUrl: './facebook-share.component.html',
  styleUrls: ['./facebook-share.component.scss']
})
export class FacebookShareComponent implements OnInit {

  metaForm: FormGroup;
  shareBtnForm: FormGroup;
  showButtons = false;

  fbMetaData: FacebookMeta = {
    fbAppId: '283054399382020',
    ogUrl: 'https://instafeedbasic.webdevphill.com',
    ogType: 'website',
    ogTitle: 'Facebook SDK With Angular',
    ogDescription: 'Facebook SDK example using Angular',
    ogImage: 'http://instafeedbasic.webdevphill.com/assets/WebDevPhill_Logo_WhiteFill.png',
    ogImageAlt: 'WebDevPhill Logo',

  }

  fbShareBtnData: FacebookShare = {
    dataShare: true,
    dataWidth: '450',
    dataShowFaces: true,
    dataHref: 'https://instafeedbasic.webdevphill.com',
    dataLayout: 'standard',
    dataSize: 'small'
  }

  constructor(private fbSdkService: FacebookSdkService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.metaForm = this.formBuilder.group(this.fbMetaData);
    this.shareBtnForm = this.formBuilder.group(this.fbShareBtnData);
  }

  onMetaSubmit(formData){
    console.log('Update Meta Tags: ', formData);
    this.fbSdkService.updateShareMetaTags(formData);
  }

  onBtnSubmit(formData){
    console.log('Update Buttons: ', formData);
    this.showButtons = true;
    //this.fbSdkService.updateShareMetaTags(formData);
    this.fbShareBtnData = formData;
  }
  
  onReloadButton(){  
    FB.XFBML.parse();
  }

}
