import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingContainerComponent } from './sliding-container.component';

describe('SlidingContainerComponent', () => {
  let component: SlidingContainerComponent;
  let fixture: ComponentFixture<SlidingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
