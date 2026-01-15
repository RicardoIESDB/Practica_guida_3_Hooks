import cafeImg from '../assets/cafe.jpg';
import medialunasImg from '../assets/medialunas.jpg';
import mateImg from '../assets/mate.jpg';
import alfajorImg from '../assets/alfajor.jpg';

export const catalog = [
  {
    id: 'caf-01',
    nombre: 'Lágrima / Cortado',
    precio: 3.50,
    enStock: true,
    imagen: cafeImg
  },
  {
    id: 'fac-01',
    nombre: 'Medialunas de Manteca',
    precio: 2.20,
    enStock: true,
    imagen: medialunasImg
  },
  {
    id: 'mat-02',
    nombre: 'Kit de Mate y Yerba',
    precio: 24.90,
    enStock: true,
    imagen: mateImg
  },
  {
    id: 'alf-03',
    nombre: 'Alfajor de Maicena',
    precio: 1.50,
    enStock: false,
    imagen: alfajorImg
  }
];