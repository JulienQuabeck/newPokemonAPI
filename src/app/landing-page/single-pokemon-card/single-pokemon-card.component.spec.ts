import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePokemonCardComponent } from './single-pokemon-card.component';

describe('SinglePokemonCardComponent', () => {
  let component: SinglePokemonCardComponent;
  let fixture: ComponentFixture<SinglePokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePokemonCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
