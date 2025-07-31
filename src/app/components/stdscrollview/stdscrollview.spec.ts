import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stdscrollview } from './stdscrollview';

describe('Stdscrollview', () => {
  let component: Stdscrollview;
  let fixture: ComponentFixture<Stdscrollview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stdscrollview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stdscrollview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
