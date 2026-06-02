export interface Juegos {
    id:number;
    nombre:string;
    descripcion:string;
    precio:number;
    genero:string;
    disponibilidad:boolean;
    oferta?:boolean;
    cantidad:number;
    img?:string;
    alt?:string;
    total?:number;

}
