import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWheatherCondition } from 'src/app/models/forecast.model';
import { EnWeatherTypes, ISourceList } from 'src/app/models/sourceList.model';

@Injectable({
  providedIn: 'root'
})
export class BackgroundSourceService {
  sourceList:ISourceList[]=[
    {
      title: EnWeatherTypes.light,
      src: '/assets/img/backgrounds/light-sky.jpg'
    },
    {
      title: EnWeatherTypes.cloud,
      src: '/assets/img/backgrounds/cloudy-sky.jpg'
    },
    {
      title: EnWeatherTypes.rain,
      src: '/assets/img/backgrounds/rain-sky.jpg'
    },
    {
      title: EnWeatherTypes.snow,
      src: '/assets/img/backgrounds/snow.jpg'
    },
  ]

  private weatherCondition = new BehaviorSubject<string>(this.sourceList[0].src) 

  constructor() { }

  analyzeWatherData=(weatherData:IWheatherCondition)=>{
    let result:string = this.sourceList.find(el=>el.title===EnWeatherTypes.light)?.src!
    if(weatherData.cloudCover>30){
      result = this.sourceList.find(el=>el.title===EnWeatherTypes.cloud)?.src!
    }
    if(weatherData.rainIntensity>0.5){
      result = this.sourceList.find(el=>el.title===EnWeatherTypes.rain)?.src!
    }
    if(weatherData.snowIntensity>0.5){
      result = this.sourceList.find(el=>el.title===EnWeatherTypes.snow)?.src!
    }
    
    this.weatherCondition.next(result) 
  }

  getCurrent=()=>{
    return this.weatherCondition.asObservable()
  }
}
