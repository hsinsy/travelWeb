import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelListPageComponent } from './travel-list-page.component';

describe('TravelListPageComponent', () => {
  let component: TravelListPageComponent;
  let fixture: ComponentFixture<TravelListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelListPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
