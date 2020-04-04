import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FacebookSdk } from '../../models/facebook-sdk.model';

@Component({
  selector: 'app-facebook-sdk',
  templateUrl: './facebook-sdk.component.html',
  styleUrls: ['./facebook-sdk.component.scss']
})
export class FacebookSdkComponent implements OnInit {
  
  sdkForm: FormGroup;
  
  fbSdkData: FacebookSdk = {
    appId: '283054399382020',
    status: true,
    xfbml: true
}
  constructor(private formBuilder: FormBuilder) {
    this.sdkForm = this.formBuilder.group(this.fbSdkData);
   }

  ngOnInit() {
  }
  
  onSubmit(formData) {
    console.log('SDK data: ', formData);
  }

}
