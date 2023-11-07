import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmloyeeModalComponent } from './create-emloyee-modal.component';

describe('CreateEmloyeeModalComponent', () => {
  let component: CreateEmloyeeModalComponent;
  let fixture: ComponentFixture<CreateEmloyeeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmloyeeModalComponent]
    });
    fixture = TestBed.createComponent(CreateEmloyeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
