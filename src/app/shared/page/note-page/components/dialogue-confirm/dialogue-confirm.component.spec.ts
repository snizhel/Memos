import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueConfirmComponent } from './dialogue-confirm.component';

describe('DialogueConfirmComponent', () => {
  let component: DialogueConfirmComponent;
  let fixture: ComponentFixture<DialogueConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
