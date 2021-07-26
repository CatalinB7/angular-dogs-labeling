import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsPagesComponent } from './dogs-pages.component';

describe('DogsPagesComponent', () => {
  let component: DogsPagesComponent;
  let fixture: ComponentFixture<DogsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
