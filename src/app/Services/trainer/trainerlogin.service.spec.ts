import { TestBed } from '@angular/core/testing';

import { TrainerloginService } from './trainerlogin.service';

describe('TrainerloginService', () => {
  let service: TrainerloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
