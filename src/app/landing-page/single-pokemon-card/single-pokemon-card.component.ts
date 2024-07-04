import { Component, EventEmitter, Input, Output} from '@angular/core';
import { SinglePokemonInfoComponent } from './single-pokemon-info/single-pokemon-info.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-single-pokemon-card',
  standalone: true,
  imports: [SinglePokemonInfoComponent, NgIf, NgClass],
  templateUrl: './single-pokemon-card.component.html',
  styleUrl: './single-pokemon-card.component.scss'
})
export class SinglePokemonCardComponent {

  openSinglePokemonInfo = false;
  
  @Input() PokemonObject: any;
  @Input() usedLanguage: any;
  @Input() namesInGerman: string[] = [];
  @Input() typesInGerman: string [] = [];

  constructor() {
    console.log('Child: ', this.namesInGerman);  
  }

  openCard() {
    this.openSinglePokemonInfo = true;
  }

  CloseInfoContainer(){
    this.openSinglePokemonInfo = false;
  }
}