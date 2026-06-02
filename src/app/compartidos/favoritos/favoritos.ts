import { Component,OnInit} from '@angular/core';
import { FavoritoServicio } from '../../servicios/favorito-servicio';
import { RouterOutlet } from '@angular/router';
import { Juegos } from '../../models/juegos';
import { CarritoService } from '../../servicios/carrito-service';
@Component({
  selector: 'app-favoritos',
  imports: [RouterOutlet],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit{
  juegosEnFavorito: Juegos[] = [];
  constructor(private favoritos: FavoritoServicio, private carritoServicio: CarritoService) { }
  ngOnInit() {
    this.juegosEnFavorito = this.favoritos.obtenerJuego();
  }
  aumentarCantidad(id: number) {
    this.favoritos.aumentarJuego(id);
  }
  eliminar(id: number) {
    this.favoritos.quitarDeFavoritos(id);
    this.juegosEnFavorito = this.favoritos.obtenerJuego();
  }
   agregarAcarrito(p:any){
    this.carritoServicio.agregarJuego(p);
  }
}
