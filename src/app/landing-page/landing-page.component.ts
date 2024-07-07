import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SinglePokemonCardComponent } from './single-pokemon-card/single-pokemon-card.component';
import { CommonModule, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SinglePokemonCardComponent, NgFor, NgIf, NgClass, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {

  allTypes: string[] = [];
  indexOfSearchedPokemon: any;
  openedPokemonInfo: boolean = false;
  overflowScroll = '';
  overflowHidden = 'hidden';

  ngOnInit(): void {
    this.renderAllData();
  }

  async renderAllData() {
    this.renderPokemon();
    this.renderTypes();
  }

  Pokemon: any = [];
  noOfPokemon = 20;
  filteredTypes: string[] = [];
  loadedPokemon: any = [];
  filteredPokemon: any = [];
  activeSearch: boolean = false;
  searchedPokemon: number = 0;
  usedLanguage = 'english';
  namesInGerman: string[] | any = [];
  movesInGerman: string[] = [];
  typesOfAllPokemon: string[] = [];
  typesOfOnePokemonEng: string[] = [];
  typesOfOnePokemon: string[] | any = [];
  typesOfAllPokemonEng: string[] | any = [];
  typesInGerman: string[] = [];

  /**
   * This function renders the Pokemon, which will be displayed afterwards
   */
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
    this.getAllTypes();
  }

  /**
   * This function renders all types in the english languages
   */
  async renderTypes() {
    for (let i = 0; i < this.Pokemon.length; i++) {
      for (let j = 0; j < this.Pokemon[i].types.length; j++) {
        let url = this.Pokemon[i].types[j].type.url;
        let response = await fetch(url);
        try {
          let responseAsJson = await response.json();
          let typInEng = responseAsJson.name;
          this.typesOfOnePokemonEng.push(typInEng);
        } catch (e) {
          console.error(e);
        }
      }
      this.typesOfAllPokemonEng.push(this.typesOfOnePokemonEng);
      this.typesOfOnePokemonEng = [];
    }
  }

  /**
   * this function loads 20 more Pokemon
   */
  async loadMorePokemon() {
    this.noOfPokemon += 20;
    this.typesOfAllPokemon = [];
    this.typesOfAllPokemonEng = [];
    await this.renderAllData();
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

  /**
   * This function receives the filtered Types and displays the Pokemon which are from this typ
   * @param type []
   */
  collectFilter(type: string) {
    this.Pokemon = [];
    if (type == '') {
      this.renderPokemon();
    } else {
      for (let i = 0; i < this.loadedPokemon.length; i++) {
        for (let j = 0; j < this.loadedPokemon[i].types.length; j++) {
          let TypeOfPokemon = this.loadedPokemon[i].types[j].type.name;
          if (type.includes(TypeOfPokemon)) {
            if (this.Pokemon.includes(this.loadedPokemon[i])) { } else {
              this.Pokemon.push(this.loadedPokemon[i]);
            }
          }
        }
      }
    }
  }

  /**
   * This function receives the index of the searched Pokemon of the header.component.ts
   * @param indexOfSearchedPokemon :number
   */
  searchPokemonWithIndex(indexOfSearchedPokemon: number) {
    this.searchedPokemon = indexOfSearchedPokemon;
    this.Pokemon = [];
    this.activeSearch = true;
    this.rendersearchedPokemon();
  }

  /**
   * This function renders the searched Pokemon only
   */
  async rendersearchedPokemon() {
    let urlOfApi = `https://pokeapi.co/api/v2/pokemon/${this.searchedPokemon + 1}?limit=1&offset=20`;
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
  renderOldVersionOfPokemon() {
    this.noOfPokemon - 20;
    this.Pokemon = [];
    this.renderPokemon();
  }

  scrollHidden() {
    this.openedPokemonInfo = true;
  }
}