import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListleadsComponent } from './listleads.component';

describe('ListleadsComponent', () => {
  let component: ListleadsComponent;
  let fixture: ComponentFixture<ListleadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListleadsComponent]
    });
    fixture = TestBed.createComponent(ListleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
