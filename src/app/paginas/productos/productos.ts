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
      nombre: "Dragon Ball Sparking zero",
      descripcion: "juego",
      precio: 70,
      img: "../assets/DBZ.jpg",
      alt: "DBZ"
    },
    {
      id: 2,
      nombre: "Resident evil Requiem",
      descripcion: "juego",
      precio: 60,
      img: "../assets/ReRequiem.jpg",
      alt: "RERequiem"
    },
    {
      id: 3,
      nombre: "Monster Hunter World",
      descripcion: "juego",
      precio: 50,
      img: "../assets/monsterHunterWorld.jpg",
      alt: "MonsterHunterWorld"
    }
    ]
  }
  juegoSeleccionado: any = null
  verMas(juegos: any) {
    this.juegoSeleccionado = juegos
  }
}
