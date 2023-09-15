import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wind-direction',
  templateUrl: './wind-direction.component.html'
})
export class WindDirectionComponent {
 @Input() windDirection: number
}
