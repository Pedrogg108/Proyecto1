import { Component } from '@angular/core';
import { Juegos } from '../../models/juegos';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carrito-service';
import { FavoritoServicio } from '../../servicios/favorito-servicio';
@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})

export class Productos {
  constructor(private carritoServicio: CarritoService, private favoritoServicio: FavoritoServicio) {}
  // metodoAgregarAFavoritos(juego: Juegos) {
  //   this.svc.agregarFavorito(juego);
  // }

  Productos: Juegos[] = [
    {
      id: 1,
      nombre: "Dragon Ball Sparking Zero",
      descripcion: "juego",
      precio: 70,
      genero: "Pelea",
      disponibilidad: true,
      oferta: false,
      cantidad: 1,
      img: "../assets/DBZ.jpg",
      alt: "DBZ"
    },
    {
      id: 2,
      nombre: "Resident evil Requiem",
      descripcion: "juego",
      precio: 60,
      genero: "Terror",
      disponibilidad: true,
      oferta: false,
      cantidad: 1,
      img: "../assets/ReRequiem.jpg",
      alt: "RERequiem"
    },
    {
      id: 3,
      nombre: "Monster Hunter World",
      descripcion: "juego",
      precio: 50,
      genero: "Accion",
      disponibilidad: true,
      oferta: false,
      cantidad: 1,
      img: "../assets/monsterHunterWorld.jpg",
      alt: "MonsterHunterWorld"
    },
    {
      id: 4,
      nombre: "Silent Hill 2 Remake",
      descripcion: "juego",
      precio: 16.50,
      genero: "Terror",
      disponibilidad: true,
      oferta: false,
      cantidad: 1,
      img: "../assets/silentHill2.jpg",
      alt: "Silent Hill 2 remake"
    },
    {
      id: 5,
      nombre: "Expedition 33",
      descripcion: "juego",
      precio: 67,
      genero: "Accion",
      disponibilidad: true,
      oferta: false,
      cantidad: 1,
      img: "../assets/expedition.jpg",
      alt: "Expedition33"
    },
    {
      id: 6,
      nombre: "Forza Horizon 6",
      descripcion: "juego",
      precio: 39,
      genero: "Carrera",
      disponibilidad: false,
      oferta: true,
      cantidad: 1,
      img: "../assets/forzahorizon6.jpg",
      alt: "Forza horizon 6"
    }
  ]
  agregarAcarrito(p:Juegos){
    this.carritoServicio.agregarJuego(p);
  }
  agregarFavoritos(p:Juegos){
    this.favoritoServicio.agregarJuego(p);
  }
}

//   public infoJuegos: Juegos[];
//   constructor() {
//     this.infoJuegos = [{
//       id: 1,
//       nombre: "Dragon Ball Sparking Zero",
//       descripcion: "juego",
//       precio: 70,
//       genero:"Pelea",
//       disponibilidad:true,
//       img: "../assets/DBZ.jpg",
//       alt: "DBZ"
//     },
//     {
//       id: 2,
//       nombre: "Resident evil Requiem",
//       descripcion: "juego",
//       precio: 60,
//       genero:"Terror",
//       disponibilidad:true,
//       img: "../assets/ReRequiem.jpg",
//       alt: "RERequiem"
//     },
//     {
//       id: 3,
//       nombre: "Monster Hunter World",
//       descripcion: "juego",
//       precio: 50,
//       genero:"Accion",
//       disponibilidad:true,
//       img: "../assets/monsterHunterWorld.jpg",
//       alt: "MonsterHunterWorld"
//     }
//     ]
//   }
//   juegoSeleccionado: any = null
//   verMas(juegos: any) {
//     this.juegoSeleccionado = juegos
//   }

