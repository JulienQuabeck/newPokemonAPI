import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
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

  allTypes: string[] = [];

  constructor() {
    this.renderPokemon();
  }

  Pokemon: any = [];
  noOfPokemon = 20;

  async renderPokemon() {
    for (let i = this.Pokemon.length + 1; i <= this.noOfPokemon; i++) {
      let urlOfApi = `https://pokeapi.co/api/v2/pokemon/${i}?limit=${this.noOfPokemon}&offset=20`;
      let response = await fetch(urlOfApi);
      try {
        let responseAsJson = await response.json();
        this.Pokemon.push(responseAsJson);
      } catch (e) {
        console.error(e);
      }
    }
    console.log(this.Pokemon);
    await this.getAllTypes();
  }

  loadMorePokemon() {
    this.noOfPokemon += +20;
    this.renderPokemon();
  }

  getAllTypes() {
    for (let i = 0; i < this.Pokemon.length; i++) {
      for (let j = 0; j < this.Pokemon[i].types.length; j++) {
        let newTyp = this.Pokemon[i].types[j].type.name;
        if (this.allTypes.includes(newTyp)) {

        } else {
          this.allTypes.push(newTyp);
        }
      }
    }
  }
}
