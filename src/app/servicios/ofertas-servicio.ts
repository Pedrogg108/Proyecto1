import { Injectable } from '@angular/core';
import { Juegos } from '../models/juegos';
 @Injectable({
  providedIn: 'root',
})
export class OfertasServicio {
  ofertas: Juegos[] = [];
agregarJuego(p: Juegos) {

    this.ofertas.push({ ...p });
  }
  obtenerJuego(){
    return this.ofertas
}
 }
// @Injectable({
//   providedIn: 'root',
// })
// export class OfertasServicio {

//   ofertas: Juegos[] = [];

//   agregarJuego(juegos: Juegos[]) {
//     this.ofertas = juegos;
//   }

//   obtenerJuego() {
//     return this.ofertas;
//   }
// }