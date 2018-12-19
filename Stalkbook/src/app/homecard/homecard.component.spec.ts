import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecardComponent } from './homecard.component';

describe('HomecardComponent', () => {
  let component: HomecardComponent;
  let fixture: ComponentFixture<HomecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
