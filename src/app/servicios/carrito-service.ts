import { Injectable } from '@angular/core';
import { Juegos } from '../models/juegos';


@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  carrito: Juegos[] = [];
  // ProductosGuardados=signal<Productos[]>([

  // ])
  agregarJuego(p: Juegos) {
    const juegoExistente = this.carrito.find(juego => juego.id === p.id);
    if (juegoExistente) {
      juegoExistente.cantidad++;

    }
    else {
      this.carrito.push({...p, cantidad: 1});
    }
  }

  obtenerJuego() {
    return this.carrito;
  }
  aumentarJuego(id: number) {
    const juego = this.carrito.find(p => p.id === id);
    if (juego) {
      juego.cantidad++
      //lectura va en la interface
    }
  }
  disminuirCantidad(id: number) {
    const juego = this.carrito.find(p => p.id === id);
    if (juego && juego.cantidad > 1) {
      juego.cantidad--;
    }
  }
  eliminarJuego(id: number) {
    this.carrito = this.carrito.filter(p => p.id !== id);
  }
  
}