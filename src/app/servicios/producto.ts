import { Injectable, Signal, signal } from '@angular/core';
import { Juegos } from '../models/juegos';

@Injectable({
  providedIn: 'root',
})
export class Producto {
  productos = signal<Juegos[]>([
    {
      id: 1,
      nombre: "Dragon Ball Sparking Zero",
      descripcion: "juego",
      precio: 70,
      genero: "Pelea",
      disponibilidad: true,
      oferta: false,
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
      img: "../assets/forzahorizon6.jpg",
      alt: "Forza horizon 6"
    }
  ]);
  favoritos = signal<Juegos[]>([]);
  agregarFavorito(juego: Juegos) {
    // Verificamos si ya existe para no duplicarlo
    const yaExiste = this.favoritos().some(fav => fav.id === juego.id);

    if (!yaExiste) {
      this.favoritos.update(lista => [...lista, juego]);
      console.log('Agregado a favoritos:', juego.nombre);
    }
  }
}
