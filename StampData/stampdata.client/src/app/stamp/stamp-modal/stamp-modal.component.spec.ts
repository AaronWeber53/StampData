import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StampModalComponent } from './stamp-modal.component';

describe('StampModalComponent', () => {
  let component: StampModalComponent;
  let fixture: ComponentFixture<StampModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StampModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StampModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
