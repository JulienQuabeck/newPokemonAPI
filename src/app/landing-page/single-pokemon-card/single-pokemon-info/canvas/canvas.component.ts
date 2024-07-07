import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
	selector: 'app-canvas',
	standalone: true,
	imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
	templateUrl: './canvas.component.html',
	styleUrl: './canvas.component.scss'
})
export class CanvasComponent implements OnInit {

	@Input() Pokemon: any = [];

	HP: number = 0;
	ATTACK: number = 0;
	DEFENSE: number = 0;
	SPECIALATTACK: number = 0;
	SPECIALDEFENSE: number = 0;
	SPEED: number = 0;
	title = `Stats`;
	chartOptions: any;
	chartOptionsGer: any;

	ngOnInit(): void {		
		let hp: number = this.Pokemon.stats[0].base_stat;
		let attack: number = this.Pokemon.stats[1].base_stat;
		let defense: number = this.Pokemon.stats[2].base_stat;
		let specialAttack: number = this.Pokemon.stats[3].base_stat;
		let specialDefense: number = this.Pokemon.stats[4].base_stat;
		let speed: number = this.Pokemon.stats[5].base_stat;
		this.HP = hp;
		this.ATTACK = attack;
		this.DEFENSE = defense;
		this.SPECIALATTACK = specialAttack;
		this.SPECIALDEFENSE = specialDefense;
		this.SPEED = speed;		

		this.chartOptions = {
			title: {
				text: ""
			},
			animationEnabled: true,
			axisY: {
				includeZero: true
			},
			axisX: {
				labelFormatter: function (e: any) {
					return e.label;
				}
			},
			data: [{
				type: "column", //change type to (column) bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				dataPoints: [
					{ x: 0, y: this.HP, label: "hp" },
					{ x: 1, y: this.ATTACK, label: "attack" },
					{ x: 2, y: this.DEFENSE, label: "defense" },
					{ x: 3, y: this.SPECIALATTACK, label: "special-attack" },
					{ x: 4, y: this.SPECIALDEFENSE, label: "special-defense" },
					{ x: 5, y: this.SPEED, label: "speed" },
				]
			}]
		}
	}
}
