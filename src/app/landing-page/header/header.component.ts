import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() types: string[] = [];
  @Input() Pokemon: any = [];
  @Output() filter = new EventEmitter;
  @Output() IndexOfSearchedPokemon = new EventEmitter;
  @Output() Language = new EventEmitter;

  filteredTypes: string[] = [];

  searchValue = '';
  openFilterContainer = false;
  language = 'english';
  pokemonNames: string[] = [];
  indexOfSearch: number = 0;

  /**
   * This function sends all Pokemon types to the landing-page.Component.ts
   * @param types : string
   */
  sendFilterToLandingPage(types: string) {
    if (this.filteredTypes.includes(types)) {
      let typPosition = this.filteredTypes.indexOf(types);
      this.filteredTypes.splice(typPosition, 1);
      this.filter.emit(this.filteredTypes);
    } else {
      this.filteredTypes.push(types);
      this.filter.emit(this.filteredTypes)
    }
  }
  //keine einzelnen typen übertragen sondern ein Array, welches alle gefilterten typen beinhaltet

  /**
   * This function lets the user change between 2 languages
   */
  switchLanguage() {
    if (this.language == 'english') {
      this.language = 'german';
    } else {
      this.language = 'english';
    }
    this.sendLanguage(this.language);    
  }

    /**
   * This function sends the information of the used language to the landing-page-component.ts
   */
    sendLanguage(language: string){
      this.Language.emit(language);   
    }

  /**
   * This function determines the index of the search Pokemon
   */
  search() {
    if (this.searchValue == '') {

    } else {
      this.searchValue = this.searchValue.toLowerCase();
      for (let i = 0; i < this.Pokemon.length; i++) {
        this.pokemonNames.push(this.Pokemon[i].name);
      }
      this.indexOfSearch = this.pokemonNames.indexOf(this.searchValue);
      this.sendIndexOfSearchedPokemon();
      this.searchValue = '';
    }
  }

  /**
   * This function sends the index of the searched Pokemon to the landing-page.Component.ts
   * @param indexOfSearch : number
   */
  sendIndexOfSearchedPokemon() {
    this.IndexOfSearchedPokemon.emit(this.indexOfSearch);
  }

  /**
   * This function opens the Filter-Container
   */
  openFilter() {
    if (this.openFilterContainer == false) {
      this.openFilterContainer = true;
    } else {
      this.openFilterContainer = false;
    }
  }
}