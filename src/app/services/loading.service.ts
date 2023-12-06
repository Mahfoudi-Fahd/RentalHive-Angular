import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoading = new BehaviorSubject<boolean>(false);

  constructor() { }
  
  show() {
    this.isLoading.next(true);
  }

  // Method to hide the loading screen
  hide() {
    this.isLoading.next(false);
  }

  // Observable to subscribe to the loading state changes
  isLoading$() {
    return this.isLoading.asObservable();
  }
}
