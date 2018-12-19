import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomfriendComponent } from './customfriend.component';

describe('CustomfriendComponent', () => {
  let component: CustomfriendComponent;
  let fixture: ComponentFixture<CustomfriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomfriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomfriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
