import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaddleadsComponent } from './edit-addleads.component';

describe('EditleadsComponent', () => {
  let component: EditaddleadsComponent;
  let fixture: ComponentFixture<EditaddleadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditaddleadsComponent]
    });
    fixture = TestBed.createComponent(EditaddleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
