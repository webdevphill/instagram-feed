import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FeedOptions } from 'src/app/models/feed-options.model';
import { InstagramFeedService } from 'src/app/services/instagram-feed.service';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss']
})
export class InstagramFeedComponent implements OnInit {

  feedForm: FormGroup;

  feedOptions: FeedOptions ={
    accessToken: '',
    clientId: '',
    get: 'user', // popular, user
    locationId: null,
    resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
    sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
    tagName: null,
    userId: 32667302483 // can be found here -> https://www.instagram.com/{username}/?__a=1
  }

  constructor(private feedService: InstagramFeedService, private formBuilder: FormBuilder) { 
    this.feedForm = this.formBuilder.group(this.feedOptions);
  }

  ngOnInit() {

  }

  onSubmit(formData){
    console.log('form data: ', formData);

    this.feedService.feedUrl(this.feedOptions).then(url => {
      console.log('get feed url: ', url);
    })
    .catch(error => console.error('Feed Component: Error getting feedUrl: ', error));

    this.feedService.feedData(this.feedOptions).then(url => {
      console.log('get feed data: ', url);
    })
    .catch(error => console.error('Feed Component: Error getting feedData: ', error));
  }

}
