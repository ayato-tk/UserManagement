import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [UsersService],
    })
  );

  it('should be created', () => {
    const service: UsersService = TestBed.inject(UsersService);
    expect(service).toBeTruthy();
  });
});
