import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stdbutton } from './stdbutton';

describe('Stdbutton', () => {
  let component: Stdbutton;
  let fixture: ComponentFixture<Stdbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stdbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stdbutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
