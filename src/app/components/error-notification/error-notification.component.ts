import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ErrorHandlerService } from 'src/app/services/store/error-handler.service';

@Component({
  selector: 'app-error-notification',
  templateUrl: './error-notification.component.html'
})
export class ErrorNotificationComponent implements OnInit{
  constructor(
    private notification: NzNotificationService,
    private errorHandler: ErrorHandlerService  
  ){}

  ngOnInit(): void {
    this.errorHandler.getErrorMessage().subscribe(res=>{
      this.notification
      .blank(
        'API error',
        'Have not gotten reply from api service'
      )
    })
  }
}
