import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyMinusComponent } from './twentyMinus.component';

describe('TwentyMinusComponent', () => {
  let component: TwentyMinusComponent;
  let fixture: ComponentFixture<TwentyMinusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwentyMinusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwentyMinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
