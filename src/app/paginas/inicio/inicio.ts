import { Component } from '@angular/core';
import { Productos } from '../productos/productos';

@Component({
  selector: 'app-inicio',
  imports: [Productos],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {}
