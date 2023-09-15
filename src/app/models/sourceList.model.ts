export enum EnWeatherTypes{
  cloud,
  rain,
  snow,
  light
}

export interface ISourceList{
  title: EnWeatherTypes,
  src: string
}