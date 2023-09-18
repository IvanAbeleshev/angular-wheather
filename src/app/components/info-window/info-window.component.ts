import { Component, OnInit } from '@angular/core'
import { IForecast } from 'src/app/models/forecast.model'
import { BackgroundSourceService } from 'src/app/services/store/background-source.service'
import { ErrorHandlerService } from 'src/app/services/store/error-handler.service'
import { WheatherService } from 'src/app/services/wheather.service'

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html'
})
export class InfoWindowComponent implements OnInit{
  cityValue = ''
  loading = false
  currentForecast:IForecast
  constructor(
    private wheatherService: WheatherService,
    private bgSource: BackgroundSourceService,
    private errorHandler: ErrorHandlerService
  ){}

  ngOnInit(): void {
    this.errorHandler.getErrorMessage().subscribe(
      result=>{
        if(result!=='')
          this.loading = false
      }
    )
  }

  changeCityName=(event:Event)=>{
    const { value } = (event.target as HTMLInputElement)
    this.loading = true
    this.cityValue = value
    if(value.length>3){
      this.wheatherService.getWheather(value).subscribe(
        result=>{
          this.currentForecast=result
          this.loading = false
          this.bgSource.analyzeWatherData(result.data.values)
        }
      )
    }
  }

}
