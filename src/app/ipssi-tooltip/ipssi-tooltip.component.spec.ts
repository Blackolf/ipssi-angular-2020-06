import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpssiTooltipComponent } from './ipssi-tooltip.component';

describe('IpssiTooltipComponent', () => {
  let component: IpssiTooltipComponent;
  let fixture: ComponentFixture<IpssiTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpssiTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpssiTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
