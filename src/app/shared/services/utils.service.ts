import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {

  }
  
  showAlert(title) {
    alert(title)
  }

}