import { TestBed } from '@angular/core/testing';

import { FacebookSdkService } from './facebook-sdk.service';

describe('FacebookSdkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacebookSdkService = TestBed.get(FacebookSdkService);
    expect(service).toBeTruthy();
  });
});
