import { Component, Input } from '@angular/core';
import { ICityLocation, IWheatherCondition } from 'src/app/models/forecast.model';

@Component({
  selector: 'app-weather-condition',
  templateUrl: './weather-condition.component.html',
})
export class WeatherConditionComponent {
  @Input() wheatherCondition:IWheatherCondition
  @Input() cityLocation:ICityLocation
}
