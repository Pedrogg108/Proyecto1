import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../servicios/carrito-service';
import { Juegos } from '../../models/juegos';

@Component({
  selector: 'app-carrito',
  imports: [RouterLink],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {
  juegosEnCarrito: Juegos[] = [];
  constructor(private carritoServicio: CarritoService) { }
  ngOnInit() {
    this.juegosEnCarrito = this.carritoServicio.obtenerJuego();
    this.calcularTotal();
  }
  // calcularTotal() {
  //   this.total = 0;
  //   this.juegosEnCarrito.forEach(juego => {
  //     this.total += juego.precio * juego.cantidad;
  //   })
  // }
  aumentarCantidad(id: number) {
    this.carritoServicio.aumentarJuego(id);
    this.calcularTotal();
  }
  disminuirCantidad(id: number) {
    this.carritoServicio.disminuirCantidad(id);
    this.calcularTotal();
  }
  eliminarJuego(id: number) {
    this.carritoServicio.eliminarJuego(id);
    this.juegosEnCarrito = this.carritoServicio.obtenerJuego();
    this.calcularTotal();
  }
  calcularTotal() {
    this.carritoServicio.calcularTotal();
    this.total = this.carritoServicio.total;
  }
  total: number = 0;
}
