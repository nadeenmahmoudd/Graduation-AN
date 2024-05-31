import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookServiceFormComponent } from './book-service-form.component';

describe('BookServiceFormComponent', () => {
  let component: BookServiceFormComponent;
  let fixture: ComponentFixture<BookServiceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookServiceFormComponent]
    });
    fixture = TestBed.createComponent(BookServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
