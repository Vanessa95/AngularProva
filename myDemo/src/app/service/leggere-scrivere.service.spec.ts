import { TestBed, inject } from '@angular/core/testing';

import { LeggereScrivereService } from './leggere-scrivere.service';

describe('LeggereScrivereService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeggereScrivereService]
    });
  });

  it('should be created', inject([LeggereScrivereService], (service: LeggereScrivereService) => {
    expect(service).toBeTruthy();
  }));
});
