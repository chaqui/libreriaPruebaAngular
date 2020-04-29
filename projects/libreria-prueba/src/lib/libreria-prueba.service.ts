import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibreriaPruebaService {

  constructor() { }

  /**
   * saludo
   */
  public saludo() {
    return 'saludos desde la libreria';
  }
}
