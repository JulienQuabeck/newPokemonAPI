import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  language = 'english';

  switchLanguage(){
    if(this.language=='english'){
      this.language = 'german';
    }else{
      this.language = 'english';
    }
  }
}
