export interface IWheatherCondition{
  cloudBase:null,
  cloudCeiling:null,
  cloudCover:number,
  dewPoint:number,
  freezingRainIntensity:number,
  humidity:number,
  precipitationProbability:number,
  pressureSurfaceLevel:number,
  rainIntensity:number,
  sleetIntensity:number,
  snowIntensity:number,
  temperature:number,
  temperatureApparent:number,
  uvHealthConcern:number,
  uvIndex:number,
  visibility: number,
  weatherCode:number,
  windDirection:number,
  windGust:number,
  windSpeed:number
}

export interface ICityLocation{
  lat:number,
  lon:number,
  name:string,
  type:string
}

export interface IForecast{
  data:{
    time:string,
    values:IWheatherCondition
  },
  location:ICityLocation
}