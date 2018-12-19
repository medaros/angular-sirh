import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotertakerComponent } from './votertaker.component';

describe('VotertakerComponent', () => {
  let component: VotertakerComponent;
  let fixture: ComponentFixture<VotertakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotertakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotertakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
