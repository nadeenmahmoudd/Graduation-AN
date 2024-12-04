import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByIdComponent } from './products-by-id.component';

describe('ProductsByIdComponent', () => {
  let component: ProductsByIdComponent;
  let fixture: ComponentFixture<ProductsByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsByIdComponent]
    });
    fixture = TestBed.createComponent(ProductsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
