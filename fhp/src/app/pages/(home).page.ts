import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'fhp-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <fhp-analog-welcome/>
  `,
})
export default class HomeComponent {
}
