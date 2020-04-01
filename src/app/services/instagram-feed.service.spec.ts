import { TestBed } from '@angular/core/testing';

import { InstagramFeedService } from './instagram-feed.service';

describe('InstagramFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstagramFeedService = TestBed.get(InstagramFeedService);
    expect(service).toBeTruthy();
  });
});
