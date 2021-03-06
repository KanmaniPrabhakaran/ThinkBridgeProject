import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentralService {
  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
