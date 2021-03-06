import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintoolbarComponent } from './maintoolbar.component';

describe('MainmenuComponent', () => {
  let component: MaintoolbarComponent;
  let fixture: ComponentFixture<MaintoolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintoolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
