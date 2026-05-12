import { Component, inject } from '@angular/core';
import { Producto } from '../../servicios/producto';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-favoritos',
  imports: [RouterOutlet],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {
  svc = inject(Producto)
  favoritos = this.svc.favoritos;

}
