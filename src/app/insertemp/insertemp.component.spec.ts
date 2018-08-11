import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertempComponent } from './insertemp.component';

describe('InsertempComponent', () => {
  let component: InsertempComponent;
  let fixture: ComponentFixture<InsertempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
