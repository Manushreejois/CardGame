import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckComponentComponent } from './deck-component.component';

describe('DeckComponentComponent', () => {
  let component: DeckComponentComponent;
  let fixture: ComponentFixture<DeckComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
