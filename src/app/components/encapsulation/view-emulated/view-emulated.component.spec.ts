import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmulatedComponent } from './view-emulated.component';

describe('ViewEmulatedComponent', () => {
  let component: ViewEmulatedComponent;
  let fixture: ComponentFixture<ViewEmulatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmulatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmulatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
