import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FacebookSdk } from '../../models/facebook-sdk.model';
import { FacebookSdkService } from 'src/app/services/facebook-sdk.service';

@Component({
  selector: 'app-facebook-sdk',
  templateUrl: './facebook-sdk.component.html',
  styleUrls: ['./facebook-sdk.component.scss']
})
export class FacebookSdkComponent implements OnInit {
  
  sdkForm: FormGroup;
  
  fbSdkData: FacebookSdk = {
    appId: '283054399382020',
    status: false, // Checks users login status on load, can reduce overhead is using Facebook Login
    xfbml: true // Search site for social plugins added using XFBML, slows down load times.
}
  constructor(private fbSdkService: FacebookSdkService, private formBuilder: FormBuilder) {
    this.sdkForm = this.formBuilder.group(this.fbSdkData);
   }

  ngOnInit() {
  }
  
  onSubmit(formData) {
    console.log('SDK data: ', formData);
    this.fbSdkService.addSDK(formData);
  }
}
