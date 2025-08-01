import { TestBed } from '@angular/core/testing';

import { Emithandlerservice } from './emithandlerservice';

describe('Emithandlerservice', () => {
  let service: Emithandlerservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Emithandlerservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
