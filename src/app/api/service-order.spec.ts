import { TestBed } from '@angular/core/testing';

import { ServiceOrder } from './service-order';

describe('ServiceOrder', () => {
  let service: ServiceOrder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceOrder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
