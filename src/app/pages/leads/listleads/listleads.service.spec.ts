import { TestBed } from '@angular/core/testing';

import { ListleadsService } from './listleads.service';

describe('ListleadsService', () => {
  let service: ListleadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListleadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
