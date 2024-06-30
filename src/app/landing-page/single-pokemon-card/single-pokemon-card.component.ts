import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SinglePokemonInfoComponent } from './single-pokemon-info/single-pokemon-info.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-single-pokemon-card',
  standalone: true,
  imports: [SinglePokemonInfoComponent, NgIf],
  templateUrl: './single-pokemon-card.component.html',
  styleUrl: './single-pokemon-card.component.scss'
})
export class SinglePokemonCardComponent {


  openSinglePokemonInfo = false;
  
  @Input() PokemonObject: any;

  constructor() {
  }

  openCard() {
    this.openSinglePokemonInfo = true;
  }

  CloseInfoContainer(){
    this.openSinglePokemonInfo = false;
  }
}
