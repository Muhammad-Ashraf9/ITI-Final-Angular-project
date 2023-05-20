import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFromServerComponent } from './user-from-server.component';

describe('UserFromServerComponent', () => {
  let component: UserFromServerComponent;
  let fixture: ComponentFixture<UserFromServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFromServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFromServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
