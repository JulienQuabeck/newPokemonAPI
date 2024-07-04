import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss'
})
export class CanvasComponent {
	
@Input()Pokemon: any = [];

  constructor() {
    console.log('Stats: ',this.Pokemon);
  }


  title = 'angular17ssrapp';
	chartOptions = {
		title: {
			text: "Angular Column Chart with Index Labels"
		},
		animationEnabled: true,
		axisY: {
			includeZero: true
		},
		data: [{
			type: "column", //change type to (column) bar, line, area, pie, etc
			//indexLabel: "{y}", //Shows y value on all Data Points
			indexLabelFontColor: "#5A5757",
			dataPoints: [
				{ x: 10, y: 71 },
				{ x: 20, y: 55 },
				{ x: 30, y: 50 },
				{ x: 40, y: 65 },
				{ x: 50, y: 71 },
				{ x: 60, y: 92, indexLabel: "Highest\u2191" },
				{ x: 70, y: 68 },
				{ x: 80, y: 38, indexLabel: "Lowest\u2193"  },
				{ x: 90, y: 54 },
				{ x: 100, y: 60 }
			]
		}]
	}
}
