import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StampFilterComponent } from './stamp-filter.component';

describe('StampFilterComponent', () => {
  let component: StampFilterComponent;
  let fixture: ComponentFixture<StampFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StampFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StampFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
