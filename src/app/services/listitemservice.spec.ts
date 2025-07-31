import { TestBed } from '@angular/core/testing';

import { Listitemservice } from './listitemservice';

describe('Listitemservice', () => {
  let service: Listitemservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Listitemservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
