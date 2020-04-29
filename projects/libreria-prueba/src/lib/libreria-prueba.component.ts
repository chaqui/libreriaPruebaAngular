import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-libreria-prueba',
  template: `
    <p>
      hola mundo desde la libreria
    </p>
  `,
  styles: [
  ]
})
export class LibreriaPruebaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
