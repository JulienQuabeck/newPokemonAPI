import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePokemonInfoComponent } from './single-pokemon-info.component';

describe('SinglePokemonInfoComponent', () => {
  let component: SinglePokemonInfoComponent;
  let fixture: ComponentFixture<SinglePokemonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePokemonInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePokemonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
