import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemstoneEditComponent } from './gemstone-edit.component';

describe('GemstoneEditComponent', () => {
  let component: GemstoneEditComponent;
  let fixture: ComponentFixture<GemstoneEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemstoneEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GemstoneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
