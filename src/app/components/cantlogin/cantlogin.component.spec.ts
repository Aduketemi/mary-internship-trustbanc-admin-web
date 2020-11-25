import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantloginComponent } from './cantlogin.component';

describe('CantloginComponent', () => {
  let component: CantloginComponent;
  let fixture: ComponentFixture<CantloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
