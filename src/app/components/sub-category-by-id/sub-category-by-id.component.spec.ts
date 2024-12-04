import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryByIdComponent } from './sub-category-by-id.component';

describe('SubCategoryByIdComponent', () => {
  let component: SubCategoryByIdComponent;
  let fixture: ComponentFixture<SubCategoryByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubCategoryByIdComponent]
    });
    fixture = TestBed.createComponent(SubCategoryByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
