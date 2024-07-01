import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
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

  searchValue = '';
  openFilterContainer = false;
  language = 'english';

  switchLanguage() {
    if (this.language == 'english') {
      this.language = 'german';
    } else {
      this.language = 'english';
    }
  }

  search() {
    this.searchValue = this.searchValue.toLowerCase();
    console.log(this.searchValue);
    this.searchValue = '';
  }

  openFilter() {
    if (this.openFilterContainer == false) {
      this.openFilterContainer = true;
      console.log(this.types);
    } else {
      this.openFilterContainer = false;
    }
  }
}


