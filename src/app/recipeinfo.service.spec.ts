import { TestBed } from '@angular/core/testing';

import { RecipeinfoService } from './recipeinfo.service';

describe('RecipeinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeinfoService = TestBed.get(RecipeinfoService);
    expect(service).toBeTruthy();
  });
});
