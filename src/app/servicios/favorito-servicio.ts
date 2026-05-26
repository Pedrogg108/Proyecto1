import { Injectable } from '@angular/core';
import { Juegos } from '../models/juegos';

@Injectable({
  providedIn: 'root',
})
export class FavoritoServicio {
  favoritos: Juegos[] = [];
  agregarJuego(p: Juegos) {
    const juegoExistente = this.favoritos.find(juego => juego.id === p.id);
    if (juegoExistente) {
      juegoExistente.cantidad++;

    }
    else {
      this.favoritos.push({...p, cantidad: 1});
    }
  }

  obtenerJuego() {
    return this.favoritos;
  }
  aumentarJuego(id: number) {
    const juego = this.favoritos.find(p => p.id === id);
    if (juego) {
      juego.cantidad++
      //lectura va en la interface
    }
  }
  quitarDeFavoritos(id: number) {
    this.favoritos = this.favoritos.filter(p => p.id !== id);
  }
}
