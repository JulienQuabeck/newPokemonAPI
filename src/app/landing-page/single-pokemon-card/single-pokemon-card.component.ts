import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SinglePokemonInfoComponent } from './single-pokemon-info/single-pokemon-info.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-single-pokemon-card',
  standalone: true,
  imports: [SinglePokemonInfoComponent, NgIf, NgClass],
  templateUrl: './single-pokemon-card.component.html',
  styleUrl: './single-pokemon-card.component.scss'
})
export class SinglePokemonCardComponent implements OnInit {

  openSinglePokemonInfo = false;

  @Input() PokemonObject: any;
  @Input() usedLanguage: any;
  @Input() typesInEnglish: string[] = [];
  @Output() openedSinglePokemonInfo = new EventEmitter;
  test:any = [];

  ngOnInit(): void {}



  /**
   * This function sends the boolean of a Info-Card is open to the Parent-Element
   */
  sendSinglePokemonInfoToParent(){
    this.openedSinglePokemonInfo.emit();
  }

  /**
   * This function sets the openSinglePokemonInfo-Var to true
   */
  openCard() {
    this.openSinglePokemonInfo = true;
    this.sendSinglePokemonInfoToParent();
  }

    /**
   * This function sets the openSinglePokemonInfo-Var to false
   */
  CloseInfoContainer() {
    this.openSinglePokemonInfo = false;
    this.sendSinglePokemonInfoToParent();
  }
}