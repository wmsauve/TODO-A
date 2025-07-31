import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Additemform } from './additemform';

describe('Additemform', () => {
  let component: Additemform;
  let fixture: ComponentFixture<Additemform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Additemform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Additemform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
