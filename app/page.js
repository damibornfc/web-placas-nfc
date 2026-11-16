'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [codigo, setCodigo] = useState('');
  const [filtroPack, setFiltroPack] = useState('todos');
  const [catalogoActivo, setCatalogoActivo] = useState(null);
  const router = useRouter();

  const handleConfigurar = (e) => {
    e.preventDefault();
    const limpio = codigo.trim();
    if (limpio) {
      router.push('/p/' + limpio + '?editar=1');
    }
  };

  const packs = [
    {
      categoria: 'local',
      badge: 'Ideal para probar',
      cantidad: '×1',
      titulo: '1 Calco NFC + QR (10 × 10 cm)',
      subtitulo: 'Adhesivo de alta resistencia • Editable con PIN',
      precio: '$10.000',
      unitario: 'Precio por unidad',
      ganancia: '',
      recupero: 'Pégalo en tu vidriera, caja o mostrador en segundos.',
      mensaje: 'Hola TapPlus! Quiero pedir 1 Calco NFC + QR (10x10 cm) a $10.000'
    },
    {
      categoria: 'local',
      badge: 'Más elegido por comercios',
      cantidad: '×1',
      titulo: '1 Placa Expositora (10 × 15 cm)',
      subtitulo: 'Con pie de apoyo para mostrador • Editable con PIN',
      precio: '$25.000',
      unitario: 'Precio por unidad',
      ganancia: '',
      recupero: 'Presencia premium para cajas, recepciones y escritorios.',
      mensaje: 'Hola TapPlus! Quiero pedir 1 Placa Expositora (10x15 cm) a $25.000'
    },
    {
      categoria: 'local',
      badge: 'Con tu marca',
      cantidad: '×1',
      titulo: 'Personalizado con tu Logo (1 u.)',
      subtitulo: 'Calco 10×10 ($15.000) o Placa 10×15 ($35.000)',
      precio: 'Desde $15.000',
      unitario: 'Diseño incluido con tu logo y colores',
      ganancia: '',
      recupero: 'Hacemos el diseño con la identidad visual de tu local.',
      mensaje: 'Hola TapPlus! Quiero pedir un diseño Personalizado con mi Logo'
    },
    {
      categoria: 'local',
      badge: 'Combo Local × 3',
      cantidad: '×3',
      titulo: 'Pack × 3 Unidades (Mismo formato)',
      subtitulo: '3 Calcos ($25.000) o 3 Placas ($65.000)',
      precio: 'Desde $25.000',
      unitario: '$8.333 c/calco • $21.666 c/placa',
      ganancia: '',
      recupero: 'Ideal para cubrir caja, vidriera y salón de atención.',
      mensaje: 'Hola TapPlus! Quiero pedir el Pack x 3 unidades para mi local'
    },
    {
      categoria: 'local',
      badge: 'Pack Marca Propia × 5',
      cantidad: '×5',
      titulo: 'Pack × 5 Personalizados con Logo',
      subtitulo: '5 Calcos ($55.000) o 5 Placas ($135.000)',
      precio: 'Desde $55.000',
      unitario: '$11.000 c/calco • $27.000 c/placa',
      ganancia: '',
      recupero: 'Ahorrás hasta $40.000 con diseño personalizado incluido.',
      mensaje: 'Hola TapPlus! Quiero pedir el Pack x 5 Personalizados con mi Logo'
    },
    {
      categoria: 'revender',
      badge: 'Recomendado para empezar',
      cantidad: '×10',
      titulo: 'Pack Mayorista × 10 Calcos',
      subtitulo: '10 Calcos 10×10 cm con NFC + QR editable',
      precio: '$50.000',
      unitario: '$5.000 cada uno',
      ganancia: 'Revendiendo a $10.000 ganás $50.000 limpios',
      recupero: 'Recuperás tu inversión con solo 5 ventas',
      mensaje: 'Hola TapPlus! Quiero pedir el Pack Mayorista x 10 Calcos ($50.000)'
    },
    {
      categoria: 'revender',
      badge: 'Alta rentabilidad',
      cantidad: '×10',
      titulo: 'Pack Mayorista × 10 Placas',
      subtitulo: '10 Placas Expositoras 10×15 cm con NFC + QR',
      precio: '$110.000',
      unitario: '$11.000 cada una',
      ganancia: 'Revendiendo a $25.000 ganás $140.000 limpios',
      recupero: 'Recuperás tu inversión con solo 5 ventas',
      mensaje: 'Hola TapPlus! Quiero pedir el Pack Mayorista x 10 Placas ($110.000)'
    },
    {
      categoria: 'revender',
      badge: 'Mayor margen',
      cantidad: '×30',
      titulo: 'Pack Mayorista × 30 Unidades',
      subtitulo: '30 Calcos ($120.000) o 30 Placas ($285.000)',
      precio: 'Desde $120.000',
      unitario: '$4.000 c/calco • $9.500 c/placa',
      ganancia: 'Ganancia neta de hasta $465.000 por pack',
      recupero: 'Recuperás tu inversión vendiendo menos de un tercio',
      mensaje: 'Hola TapPlus! Quiero pedir el Pack Mayorista x 30 unidades'
    },
    {
      categoria: 'revender',
      badge: 'Distribuidor • Menor costo',
      cantidad: '×100',
      titulo: 'Pack Distribuidor × 100 Unidades',
      subtitulo: '100 Calcos ($350.000) o 100 Placas ($850.000)',
      precio: 'Desde $350.000',
      unitario: '$3.500 c/calco • $8.500 c/placa',
      ganancia: 'Ganancia neta de hasta $1.650.000 por pack',
      recupero: 'Máximo margen para revendedores y agencias',
      mensaje: 'Hola TapPlus! Quiero consultar por el Pack Distribuidor x 100 unidades'
    },
    {
      categoria: 'mesas',
      badge: 'Gastronomía • 6 × 9 cm',
      cantidad: '×10',
      titulo: 'Pack 10 Mesas • Mini Acrílico Menú',
      subtitulo: 'Portarretratos acrílico 6×9 cm con logo + NFC + QR',
      precio: '$130.000',
      unitario: '$13.000 cada mesa',
      ganancia: '',
      recupero: 'Compacto para mesas de bares, cafés y restaurantes.',
      mensaje: 'Hola TapPlus! Quiero pedir el Pack 10 Mesas Mini Acrilico Menu 6x9 ($130.000)'
    },
    {
      categoria: 'mesas',
      badge: 'Gastronomía • 6 × 9 cm',
      cantidad: '×25',
      titulo: 'Pack 25 Mesas • Mini Acrílico Menú',
      subtitulo: 'Portarretratos acrílico 6×9 cm con logo + NFC + QR',
      precio: '$290.000',
      unitario: '$11.600 cada mesa',
      ganancia: '',
      recupero: 'Actualizá precios de tu carta online sin reimprimir.',
      mensaje: 'Hola TapPlus! Quiero pedir el Pack 25 Mesas Mini Acrilico Menu 6x9 ($290.000)'
    },
    {
      categoria: 'mesas',
      badge: 'Gastronomía • 6 × 9 cm',
      cantidad: '×50',
      titulo: 'Pack 50 Mesas • Mini Acrílico Menú',
      subtitulo: 'Portarretratos acrílico 6×9 cm con logo + NFC + QR',
      precio: '$525.000',
      unitario: '$10.500 cada mesa',
      ganancia: '',
      recupero: 'Equipá todo tu salón con diseño personalizado.',
      mensaje: 'Hola TapPlus! Quiero pedir el Pack 50 Mesas Mini Acrilico Menu 6x9 ($525.000)'
    }
  ];

  const packsFiltrados = filtroPack === 'todos'
    ? packs
    : packs.filter((p) => p.categoria === filtroPack);
