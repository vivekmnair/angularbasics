import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsetttingsComponent } from './addsetttings.component';

describe('AddsetttingsComponent', () => {
  let component: AddsetttingsComponent;
  let fixture: ComponentFixture<AddsetttingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsetttingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsetttingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
