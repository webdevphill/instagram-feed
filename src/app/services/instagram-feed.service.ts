import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FeedOptions } from '../models/feed-options.model';


@Injectable({
  providedIn: 'root'
})
export class InstagramFeedService {

  constructor(private http: HttpClient) { }

  async authUser (appId, ) {
    // https://api.instagram.com/oauth/authorize
    // ?client_id={app-id}
    // &redirect_uri={redirect-uri}
    // &scope=user_profile,user_media
    // &response_type=
    //     https://api.instagram.com/oauth/authorize
    // ?client_id=283054399382020
    // &redirect_uri=https://instafeedbasic.webdevphill.com/
    // &scope=user_profile,user_media
    // &response_type=
  }


  async feedUrl(options: FeedOptions): Promise<any> {
    let result;
    try{
      //result = buildUrl(options);
      console.log('feedUrl: ', result);
    }
    catch(error){
      console.error('Failed to build feed URL: ', error);
    }
    return result;
  }

  async feedData(options): Promise<any>{
    let result = '';
    try{
      //result = instafeed(options);
      console.log('feedData: ', result);
    }
    catch(error){
      console.error('Failed to build feed URL: ', error);
    }
    return result;
  }

}
