import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayokComponent } from './payok.component';

describe('PayokComponent', () => {
  let component: PayokComponent;
  let fixture: ComponentFixture<PayokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
