import { Component } from '@angular/core';
import { Juegos } from '../../models/juegos';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carrito-service';
import { FavoritoServicio } from '../../servicios/favorito-servicio';
import { OfertasServicio } from '../../servicios/ofertas-servicio';
@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})

export class Productos {
  constructor(private carritoServicio: CarritoService, private favoritoServicio: FavoritoServicio, private OfertasServicio: OfertasServicio) { }
  // metodoAgregarAFavoritos(juego: Juegos) {
  //   this.svc.agregarFavorito(juego);
  // }

  Productos: Juegos[] = [
    {
      id: 1,
      nombre: "Dragon Ball Sparking Zero",
      descripcion: "Dragon Ball: Sparking! Zero es un espectacular juego de lucha 3D desarrollado por Spike Chunsoft y publicado por Bandai Namco. Conocido oficialmente como la cuarta entrega de la legendaria saga Budokai Tenkaichi, destaca por su frenética jugabilidad, entornos destructibles y un impresionante roster inicial de más de 180 personajes",
      precio: 70,
      genero: "Pelea",
      disponibilidad: true,
      favorito: false,
      oferta: false,
      descuento: 0,
      cantidad: 1,
      img: "../assets/DBZ.jpg",
      alt: "DBZ"
    },
    {
      id: 2,
      nombre: "Resident evil Requiem",
      descripcion: "Resident Evil: Requiem, también conocido como Resident Evil 9 y titulado en Japón como Biohazard Requiem (バイオハザード レクイエム Baiohazādo Rekuiemu?), es la novena entrega numerada de la línea principal de Resident Evil y el undécimo título de la serie. Fue lanzado el 27 de febrero de 2026 para PlayStation 5, Xbox Series X/S, Nintendo Switch 2 y PC",
      precio: 60,
      genero: "Terror",
      disponibilidad: true,
      favorito: false,
      oferta: true,
      descuento: 0,
      cantidad: 1,
      img: "../assets/ReRequiem.jpg",
      alt: "RERequiem"
    },
    {
      id: 3,
      nombre: "Monster Hunter: World",
      descripcion: "Monster Hunter: World es un videojuego de rol y acción de Capcom donde asumes el rol de un cazador que explora el Nuevo Mundo. Tu objetivo es cazar o capturar monstruos gigantescos utilizando un amplio arsenal de armas. Con los materiales obtenidos, crearás y mejorarás tu equipo para enfrentarte a desafíos cada vez mayores.",
      precio: 50,
      genero: "Accion",
      disponibilidad: true,
      favorito: false,
      oferta: false,
      descuento: 0,
      cantidad: 1,
      img: "../assets/monsterHunterWorld.jpg",
      alt: "MonsterHunterWorld"
    },
    {
      id: 4,
      nombre: "Silent Hill 2 Remake",
      descripcion: "El remake de Silent Hill 2 es una aclamada reimaginación del clásico de terror psicológico de 2001. Desarrollado por Bloober Team y publicado por Konami, el título moderniza la historia de James Sunderland, quien llega al pueblo envuelto en niebla tras recibir una inquietante carta de su esposa fallecida, Mary",
      precio: 49,
      genero: "Terror",
      disponibilidad: true,
      favorito: false,
      oferta: false,
      descuento: 0,
      cantidad: 1,
      img: "../assets/silentHill2.jpg",
      alt: "Silent Hill 2 remake"
    },
    {
      id: 5,
      nombre: "Expedition 33",
      descripcion: "Clair Obscur: Expedition 33 es un aclamado juego de rol desarrollado por Sandfall Interactive. Ambientado en un mundo de fantasía oscura inspirado en la Francia de la Belle Époque, su historia sigue a un grupo que busca destruir a una entidad conocida como La Pintora para poner fin a un ciclo mortal y letal",
      precio: 67,
      genero: "Accion",
      disponibilidad: true,
      favorito: false,
      oferta: false,
      descuento: 0,
      cantidad: 1,
      img: "../assets/expedition.jpg",
      alt: "Expedition33"
    },
    {
      id: 6,
      nombre: "Forza Horizon 6",
      descripcion: "Forza Horizon 6 es un videojuego de carreras de mundo abierto desarrollado por Playground Games que traslada el icónico Horizon Festival a Japón. Los jugadores exploran el mapa más denso y vertical de la saga—desde rascacielos urbanos en Tokio hasta carreteras de montaña— mientras conducen más de 550 vehículos reales y avanzan por un sistema de progresión de pulseras.",
      precio: 39,
      genero: "Carrera",
      disponibilidad: false,
      favorito: false,
      oferta: true,
      descuento: 0,
      cantidad: 1,
      img: "../assets/forzahorizon6.jpg",
      alt: "Forza horizon 6"
    },
    {
      id: 7,
      nombre: "Resident Evil Veronica",
      descripcion: "Resident Evil Veronica es una nueva versión de Resident Evil Code: Veronica del año 2000.Este nuevo título conserva la esencia del juego original, a la vez que introduce una jugabilidad modernizada, una historia reinventada y gráficos vívidamente detallados.En 2027, la locura y la intriga, el amor y el odio se combinan para crear una nueva y escalofriante entrega de survival horror. Han pasado 3 meses desde el desastre biológico en Raccoon City.Claire Redfield, que sobrevivió junto con Leon S. Kennedy y Sherry Birkin, viaja a Francia en busca de su hermano, Chris Redfield.",
      precio: 70,
      genero: "Horror",
      disponibilidad: true,
      favorito: false,
      oferta: false,
      descuento: 0,
      cantidad: 1,
      img: "../assets/ReVeronica.png",
      alt: "Resident Evil Veronica"
    },
    {
      id: 8,
      nombre: "God Of War Trilogy Remake",
      descripcion: "El God of War Trilogy Remake es un ambicioso proyecto en desarrollo por parte de Santa Monica Studio que reconstruirá desde cero los tres juegos clásicos de la saga griega (God of War, God of War II y God of War III).Este recopilatorio oficial, anunciado por PlayStation, tiene como objetivo adaptar las sangrientas aventuras de Kratos contra el Panteón griego a los estándares visuales y técnicos de la era moderna",
      precio: 90,
      genero: "Acción",
      disponibilidad: true,
      favorito: false,
      oferta: false,
      descuento: 0,
      cantidad: 1,
      img: "../assets/GOWremake.jpg",
      alt: "Gow Of War Trilogy Remake"
    },
    {
      id: 9,
      nombre: "The Last of us Part II Remastered",
      descripcion: "The Last of Us Parte II Remastered es la versión definitiva y optimizada para la nueva generación del aclamado juego de acción, sigilo y supervivencia de Naughty Dog. El título ofrece una experiencia de más de 20 horas centrada en la visceral historia de venganza de Ellie y Abby en un mundo post-apocalíptico",
      precio: 40,
      genero: "Acción",
      disponibilidad: true,
      favorito: false,
      oferta: true,
      descuento: 0,
      cantidad: 1,
      img: "../assets/Tlou2.jpg",
      alt: "The last of us II"
    }
  ]
  agregarAcarrito(p: Juegos) {
    this.carritoServicio.agregarJuego(p);
  }
  agregarFavoritos(p: Juegos) {
    this.favoritoServicio.agregarJuego(p);

  }
  agregarOfertas(p: Juegos) {
    this.OfertasServicio.agregarJuego(p);
  }
  quitarFavoritos(p: Juegos) {
    this.favoritoServicio.quitarDeFavoritos(p.id)
    p.favorito = false
  }
}

//   public infoJuegos: Juegos[];
//   constructor() {
//     this.infoJuegos = [{
//       id: 1,
//       nombre: "Dragon Ball Sparking Zero",
//       descripcion: "juego",
//       precio: 70,
//       genero:"Pelea",
//       disponibilidad:true,
//       img: "../assets/DBZ.jpg",
//       alt: "DBZ"
//     },
//     {
//       id: 2,
//       nombre: "Resident evil Requiem",
//       descripcion: "juego",
//       precio: 60,
//       genero:"Terror",
//       disponibilidad:true,
//       img: "../assets/ReRequiem.jpg",
//       alt: "RERequiem"
//     },
//     {
//       id: 3,
//       nombre: "Monster Hunter World",
//       descripcion: "juego",
//       precio: 50,
//       genero:"Accion",
//       disponibilidad:true,
//       img: "../assets/monsterHunterWorld.jpg",
//       alt: "MonsterHunterWorld"
//     }
//     ]
//   }
//   juegoSeleccionado: any = null
//   verMas(juegos: any) {
//     this.juegoSeleccionado = juegos
//   }

