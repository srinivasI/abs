import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartformComponent } from './cartform.component';

describe('CartformComponent', () => {
  let component: CartformComponent;
  let fixture: ComponentFixture<CartformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
