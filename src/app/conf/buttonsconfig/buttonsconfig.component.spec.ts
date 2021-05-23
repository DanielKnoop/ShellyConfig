import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsconfigComponent } from './buttonsconfig.component';

describe('ButtonsconfigComponent', () => {
  let component: ButtonsconfigComponent;
  let fixture: ComponentFixture<ButtonsconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
