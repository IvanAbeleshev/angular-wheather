import { Component, OnInit } from '@angular/core'
import { BackgroundSourceService } from 'src/app/services/store/background-source.service';

@Component({
  selector: 'app-common-background',
  templateUrl: './common-background.component.html'
})
export class CommonBackgroundComponent implements OnInit{
  changeBg=false
  src='/assets/img/backgrounds/cloudy-sky.jpg'
  constructor(private bgSource: BackgroundSourceService){}
  ngOnInit(): void {
    this.bgSource.getCurrent().subscribe(
      res=> {
        this.changeBg = true
        setTimeout(()=>{
          this.changeBg = false
          this.src = res
        },400)
      }
    )
  }

}
