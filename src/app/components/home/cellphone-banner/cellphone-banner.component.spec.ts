import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellphoneBannerComponent } from './cellphone-banner.component';

describe('CellphoneBannerComponent', () => {
  let component: CellphoneBannerComponent;
  let fixture: ComponentFixture<CellphoneBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellphoneBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellphoneBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
