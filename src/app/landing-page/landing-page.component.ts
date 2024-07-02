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
indexOfSearchedPokemon: any;

  constructor() {
    this.renderPokemon();
  }

  Pokemon: any = [];
  noOfPokemon = 20;
  filteredTypes: string[] = [];
  loadedPokemon: any = [];
  filteredPokemon: any = [];
  activeSearch: boolean = false;
  searchedPokemon:number = 0;

  async renderPokemon() {
    for (let i = this.Pokemon.length + 1; i <= this.noOfPokemon; i++) {
      let urlOfApi = `https://pokeapi.co/api/v2/pokemon/${i}?limit=${this.noOfPokemon}&offset=20`;
      let response = await fetch(urlOfApi);
      try {
        let responseAsJson = await response.json();
        this.Pokemon.push(responseAsJson);
        if (!this.activeSearch) {
          this.loadedPokemon = this.Pokemon;
        } else {
          this.activeSearch = false;
        }
      } catch (e) {
        console.error(e);
      }
    }
    console.log(this.Pokemon);
    await this.getAllTypes();
  }

  /**
   * this function loads 20 more Pokemon
   */
  loadMorePokemon() {
    this.noOfPokemon += +20;
    this.renderPokemon();
  }

  /**
   * This function collects all types of all displayed Pokemon
   */
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


  collectFilter(type: string) {
    if (this.filteredTypes.includes(type)) {
      let position = this.filteredTypes.indexOf(type);
      this.filteredTypes.splice(position, 1);
      this.displayFilteredList(type);
      if (this.filteredTypes.length == 0) {
        this.Pokemon = [];
        this.renderPokemon();
      }
      this.displayFilteredList(type);
    } else {
      this.filteredTypes.push(type);
      this.displayFilteredList(type);
    }
  }

  /**
   * This function displays all the Pokemon, which has the searched typ
   * @param searchedType: string
   */
  displayFilteredList(searchedType: any) {
    this.filteredPokemon = [];
    this.activeSearch = true;
    for (let i = 0; i < this.Pokemon.length; i++) {
      for (let j = 0; j < this.Pokemon[i].types.length; j++) {
        let PokemonType = this.Pokemon[i].types[j].type.name
        if (PokemonType == searchedType && !this.filteredPokemon.includes(this.Pokemon[i])) {
          this.filteredPokemon.push(this.Pokemon[i]);
        }
      }
    }
    this.Pokemon = [];
    for (let i = 0; i < this.filteredPokemon.length; i++) {
      this.Pokemon.push(this.filteredPokemon[i]);
    }
  }

  /**
   * This function receives the index of the searched Pokemon of the header.component.ts
   * @param indexOfSearchedPokemon :number
   */
  searchPokemonWithIndex(indexOfSearchedPokemon: number) {
    this.searchedPokemon = indexOfSearchedPokemon;
    this.Pokemon = [];
    this.rendersearchedPokemon();
    this.activeSearch = true;
  }

  /**
   * This function renders the searched Pokemon only
   */
  async rendersearchedPokemon(){
        let urlOfApi = `https://pokeapi.co/api/v2/pokemon/${this.searchedPokemon+1}?limit=1&offset=20`;
        let response = await fetch(urlOfApi);
        try {
          let responseAsJson = await response.json();
          this.Pokemon.push(responseAsJson);
        } catch (e) {
          console.error(e);
        }
      await this.getAllTypes();
  }

  /**
   * This function renders the unfilters Pokemon list
   */
  renderOldVersionOfPokemon(){
    this.noOfPokemon - 20;
    this.Pokemon = [];
    this.renderPokemon();
  }
}
