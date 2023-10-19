import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddleadsComponent } from './addleads.component';

describe('AddleadsComponent', () => {
  let component: AddleadsComponent;
  let fixture: ComponentFixture<AddleadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddleadsComponent]
    });
    fixture = TestBed.createComponent(AddleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
