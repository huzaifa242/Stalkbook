import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingproblemsComponent } from './trendingproblems.component';

describe('TrendingproblemsComponent', () => {
  let component: TrendingproblemsComponent;
  let fixture: ComponentFixture<TrendingproblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingproblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingproblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
