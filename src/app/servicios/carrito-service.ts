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

   calcularTotal() {
    this.total = 0;
    this.carrito.forEach(juego => {
      this.total += juego.precio * juego.cantidad;
    })
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
    this.calcularTotal();
  }
  disminuirCantidad(id: number) {
    const juego = this.carrito.find(p => p.id === id);
    if (juego && juego.cantidad > 1) {
      juego.cantidad--;
    }
    this.calcularTotal();
  }
  eliminarJuego(id: number) {
    this.carrito = this.carrito.filter(p => p.id !== id);
    this.calcularTotal();
  }
  total: number = 0;
}
