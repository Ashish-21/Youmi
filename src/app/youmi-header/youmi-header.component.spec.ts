import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoumiHeaderComponent } from './youmi-header.component';

describe('YoumiHeaderComponent', () => {
  let component: YoumiHeaderComponent;
  let fixture: ComponentFixture<YoumiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoumiHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoumiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
