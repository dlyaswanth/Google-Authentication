  
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Details } from './details.component';

describe('Details', () => {
  let component: Details;
  let fixture: ComponentFixture<Details>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Details ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Details);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});