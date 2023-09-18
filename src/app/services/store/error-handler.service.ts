import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  private errorMessage = new Subject<string>()

  constructor() { }

  handleError(error: HttpErrorResponse) {
    this.errorMessage.next(error.error||'Something bad happened; please try again later.')
    return throwError(() => {
      new Error('Something bad happened; please try again later.')
    });
  }

  getErrorMessage=()=>{
    return this.errorMessage.asObservable()
  }
}
