import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Itemcomp } from './itemcomp';

describe('Itemcomp', () => {
  let component: Itemcomp;
  let fixture: ComponentFixture<Itemcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Itemcomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Itemcomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
