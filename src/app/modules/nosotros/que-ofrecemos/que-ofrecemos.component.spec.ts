import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueOfrecemosComponent } from './que-ofrecemos.component';

describe('QueOfrecemosComponent', () => {
  let component: QueOfrecemosComponent;
  let fixture: ComponentFixture<QueOfrecemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueOfrecemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueOfrecemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
