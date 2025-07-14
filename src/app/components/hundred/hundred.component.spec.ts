import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HundredComponent } from './hundred.component';

describe('HundredComponent', () => {
  let component: HundredComponent;
  let fixture: ComponentFixture<HundredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HundredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HundredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
