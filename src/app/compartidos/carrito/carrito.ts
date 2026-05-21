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
  }
}
