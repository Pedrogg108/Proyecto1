import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Juegos } from '../../models/juegos';
import { OfertasServicio } from '../../servicios/ofertas-servicio';

@Component({
  selector: 'app-ofertas',
  imports: [RouterLink],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas implements OnInit{
  JuegosEnOferta:Juegos[]=[]
  constructor(private ofertasServicio:OfertasServicio){}
  ngOnInit(){
    this.JuegosEnOferta=this.ofertasServicio.obtenerJuego()
  }
  agregarAcarrito(p:any){
    this.ofertasServicio.agregarJuego(p);
  }

}
