import { Injectable } from '@angular/core';
import { Juegos } from '../models/juegos';


@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  carrito: Juegos[] = [];
  // ProductosGuardados=signal<Productos[]>([

  // ])
  agregarJuego(p: Juegos) { //CREATE
    const juegoExistente = this.carrito.find(juego => juego.id === p.id);
    if (juegoExistente) {
      juegoExistente.cantidad++;

    }
    else {
      this.carrito.push({ ...p });
    }
    this.calcularTotal()
  }

  calcularTotal() {
    this.total = 0;
    this.carrito.forEach(juego => {
      this.total += juego.precio * juego.cantidad;
    })
   
  }

  obtenerJuego() {//READ
    return this.carrito;
  }
  aumentarJuego(id: number) {//UPDATE
    const juego = this.carrito.find(p => p.id === id);
    if (juego) {
      juego.cantidad++
      
    }
    this.calcularTotal();
  }
  disminuirCantidad(id: number) {//UPDATE
    const juego = this.carrito.find(p => p.id === id);
    if (juego && juego.cantidad > 1) {
      juego.cantidad--;
    }
    this.calcularTotal();
  }
  eliminarJuego(id: number) {//DELETE 
    this.carrito = this.carrito.filter(p => p.id !== id);
    this.calcularTotal();
  }

  eliminarTodo() {//DELETE
   this.carrito=[]
    this.calcularTotal()
  }
  total: number = 0;
}
