import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SttingsComponent } from './sttings.component';

describe('SttingsComponent', () => {
  let component: SttingsComponent;
  let fixture: ComponentFixture<SttingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SttingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SttingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
