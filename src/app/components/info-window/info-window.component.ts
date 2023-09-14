import { Component, OnInit } from '@angular/core'
import { IForecast } from 'src/app/models/forecast.model'
import { WheatherService } from 'src/app/services/wheather.service'

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html'
})
export class InfoWindowComponent implements OnInit{
  cityValue = ''
  currentForecast:IForecast
  constructor(
    private wheatherService: WheatherService,
  ){}

  ngOnInit(): void {
    //const result = this.wheatherService.getWheather().subscribe()
  }

  changeCitiesName=(value:string)=>{
    this.cityValue = value
    if(value.length>4){
      this.wheatherService.getWheather(value).subscribe(result=>this.currentForecast=result)
    }
  }

}
