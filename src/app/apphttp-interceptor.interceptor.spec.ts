import { TestBed } from '@angular/core/testing';

import { ApphttpInterceptorInterceptor } from './apphttp-interceptor.interceptor';

describe('ApphttpInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApphttpInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApphttpInterceptorInterceptor = TestBed.inject(ApphttpInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
