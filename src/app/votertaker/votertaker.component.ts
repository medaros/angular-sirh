import { Component } from '@angular/core';

@Component({
  selector: 'app-votertaker',
  template: `
    <h2>Doit-on mettre en place des cours de sport en entreprise?</h2>
    <h3>Oui: {{agreed}}, Non: {{disagreed}}</h3>
    <app-voter *ngFor="let voter of voters" [name]="voter" (voted)="onVoted($event)"></app-voter>
  `
})
export class VotertakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['anas', 'julie', 'houda', 'assa', 'bernard', 'josette'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
