import { Component } from '@angular/core';
import { Juegos } from '../../models/juegos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  public infoJuegos: Juegos[];
  constructor() {
    this.infoJuegos = [{
      id: 1,
      nombre: "Samsung A06",
      descripcion: "64GB/4GB Ram",
      precio: 456000,
      img: "../../../assets/DBZ.jpg",
      alt: "DBZ"
    }
    ]
  }
  juegoSeleccionado: any = null
  verMas(juegos: any) {
    this.juegoSeleccionado = juegos
  }
}
