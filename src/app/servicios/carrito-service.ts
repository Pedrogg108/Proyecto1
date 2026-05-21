import { Injectable, signal } from '@angular/core';
import { Juegos } from '../models/juegos';
import { Productos } from '../paginas/productos/productos';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  carrito: Juegos[] = [];
  // ProductosGuardados=signal<Productos[]>([

  // ])
  agregarJuego(p: Juegos) {
    this.carrito.push(p);
  }

  obtenerJuego(){
    return this.carrito;
  }
  aumentarJuego(id: number){
    const juego=this.carrito.find(p=>p.id===id);
    if(juego){
      juego
      //lectura va en la interface
    }
  }
}