import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanvasComponent } from './canvas/canvas.component';

@Component({
  selector: 'app-single-pokemon-info',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgClass, CanvasComponent],
  templateUrl: './single-pokemon-info.component.html',
  styleUrl: './single-pokemon-info.component.scss'
})
export class SinglePokemonInfoComponent implements OnInit {

  @Input() Pokemon: any;
  @Output() CloseInfo = new EventEmitter;

  movesEng: string[] = [];
  movesGer: any[] = [];

  ngOnInit(): void {
    this.renderMoves();    
  }

  async renderMoves() {
    for (let i = 0; i < this.Pokemon.moves.length; i++) {
      let url = this.Pokemon.moves[i].move.url;
      let response = await fetch(url);      
      try {
        let responseAsJson = await response.json();        
        this.movesEng.push(responseAsJson.name);
      } catch (e) {
        console.error(e);
      }
    }
  }

  closeSinglePokemonInfo() {
    this.CloseInfo.emit();
  }
}
