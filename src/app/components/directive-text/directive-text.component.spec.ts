import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTextComponent } from './directive-text.component';

describe('DirectiveTextComponent', () => {
  let component: DirectiveTextComponent;
  let fixture: ComponentFixture<DirectiveTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
