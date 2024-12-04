import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVendorComponent } from './navbar-vendor.component';

describe('NavbarVendorComponent', () => {
  let component: NavbarVendorComponent;
  let fixture: ComponentFixture<NavbarVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarVendorComponent]
    });
    fixture = TestBed.createComponent(NavbarVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
