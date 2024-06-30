import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SinglePokemonCardComponent } from './single-pokemon-card/single-pokemon-card.component';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SinglePokemonCardComponent, NgFor, NgIf, NgClass],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor() {
    this.renderPokemon();
  }
  Pokemon: any = [];

  async renderPokemon(){
    for(let i = 1; i<=20; i++){
      let urlOfApi = `https://pokeapi.co/api/v2/pokemon/${i}?limit=20&offset=20`;
      let response = await fetch(urlOfApi);
      try{
        let responseAsJson = await response.json();
        this.Pokemon.push(responseAsJson);
      }catch(e){
        console.error(e);
      }
    }
    console.log(this.Pokemon);
  }
}
