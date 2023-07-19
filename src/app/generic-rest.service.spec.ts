import { TestBed } from '@angular/core/testing';

import { GenericRESTService } from './generic-rest.service';

describe('GenericRESTService', () => {
  let service: GenericRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
