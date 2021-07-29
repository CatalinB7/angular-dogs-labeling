import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicContainerComponent } from './pic-container.component';

describe('PicContainerComponent', () => {
  let component: PicContainerComponent;
  let fixture: ComponentFixture<PicContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
