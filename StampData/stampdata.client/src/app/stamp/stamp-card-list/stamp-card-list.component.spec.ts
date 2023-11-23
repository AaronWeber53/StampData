import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StampCardListComponent } from './stamp-card-list.component';

describe('StampCardListComponent', () => {
  let component: StampCardListComponent;
  let fixture: ComponentFixture<StampCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StampCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StampCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
