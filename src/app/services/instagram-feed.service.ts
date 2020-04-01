import { Injectable } from '@angular/core';
//import { buildUrl, instafeed } from 'instafeed-lite';
import { FeedOptions } from '../models/feed-options.model';


@Injectable({
  providedIn: 'root'
})
export class InstagramFeedService {

  constructor() { }

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
