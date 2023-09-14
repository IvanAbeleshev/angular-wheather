import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { formatDate } from '@angular/common'
import { Observable } from 'rxjs'
import { IForecast } from '../models/forecast.model'

@Injectable({
  providedIn: 'root'
})
export class WheatherService {
  private host = 'https://api.tomorrow.io/v4/weather'
  private APIKey = 'wsKP5J56zfCYKOvK9MGKfxIv6L8fdeXQ'

  constructor(private http: HttpClient) {}

  getWheather=(location?:string):Observable<IForecast>=>{
    location = location || 'Odesa'
    const queryParams = new HttpParams({fromObject:{
      location, 
      'apikey': this.APIKey
    }})

    return this.http.get<IForecast>(`${this.host}/realtime`, {params: queryParams}).pipe()
  }
}
