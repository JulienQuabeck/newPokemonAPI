import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanvasComponent } from './canvas/canvas.component';

@Component({
  selector: 'app-single-pokemon-info',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass, CanvasComponent],
  templateUrl: './single-pokemon-info.component.html',
  styleUrl: './single-pokemon-info.component.scss'
})
export class SinglePokemonInfoComponent {

  @Input() Pokemon : any;
  @Output() CloseInfo = new EventEmitter;

  constructor(){}


  closeSinglePokemonInfo(){
    this.CloseInfo.emit();
  }
}
