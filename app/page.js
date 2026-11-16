'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [codigo, setCodigo] = useState('');
  const [formatoActivo, setFormatoActivo] = useState(null);
  const router = useRouter();

  const handleConfigurar = (e) => {
    e.preventDefault();
    const limpio = codigo.trim();
    if (limpio) {
      router.push('/p/' + limpio + '?editar=1');
    }
  };

  const modelosCalco = [
    {
      nombre: 'Reseñas de Google • Modelo 1',
      imagen: '/WhatsApp Image calco reseña google 2026-11-15 at 22.40.33.jpeg',
      color: '#ea4335',
      descripcion: 'Lleva al cliente directo a dejar 5 estrellas en Google Maps.'
    },
    {
      nombre: 'Reseñas de Google • Modelo 2',
      imagen: '/WhatsApp Image calco reseña 2 026-11-15 at 22.40.34.jpeg',
      color: '#ea4335',
      descripcion: 'Diseño alternativo para sumar opiniones positivas en tu local.'
    },
    {
      nombre: 'Reseñas de Google • Modelo 3',
      imagen: '/WhatsApp Image calco reseña 3 2026-11-15 at 22.40.34.jpeg',
      color: '#ea4335',
      descripcion: 'Ideal para vidrieras, cajas y mostradores de atención.'
    },
    {
      nombre: 'Instagram • Modelo 1',
      imagen: '/WhatsApp Image calco instagran 2026-11-15 at 22.40.33.jpeg',
      color: '#dc2743',
      descripcion: 'Abre tu perfil de Instagram al instante para sumar seguidores.'
    },
    {
      nombre: 'Instagram • Modelo 2',
      imagen: '/WhatsApp Image calco instagran 2 2026-11-15 at 22.40.33.jpeg',
      color: '#dc2743',
      descripcion: 'Segundo diseño de alto impacto visual para tu cuenta de Instagram.'
    },
    {
      nombre: 'WhatsApp Directo • Modelo 1',
      imagen: '/WhatsApp Image wasap 2026-11-15 at 22.40.33.jpeg',
      color: '#16a34a',
      descripcion: 'Inicia un chat directo con tu negocio sin agendar el número.'
    },
    {
      nombre: 'WhatsApp Directo • Modelo 2',
      imagen: '/WhatsApp Image calco wasap2026-11-15 at 22.40.34.jpeg',
      color: '#16a34a',
      descripcion: 'Diseño alternativo para consultas rápidas por WhatsApp.'
    },
    {
      nombre: 'TikTok',
      imagen: '/WhatsApp Image tik tok2026-11-15 at 22.40.33 (1).jpeg',
      color: '#0f172a',
      descripcion: 'Dirige a tus clientes a tu perfil o videos de TikTok.'
    },
    {
      nombre: 'Menú Digital',
      imagen: '/WhatsApp Image calco menu digital 2026-11-15 at 22.40.33.jpeg',
      color: '#d97706',
      descripcion: 'Ideal para mesas y barras: abre tu carta digital con un toque.'
    },
    {
      nombre: 'Tienda Online',
      imagen: '/WhatsApp Image calco tienda online 2026-11-15 at 22.40.33.jpeg',
      color: '#0284c7',
      descripcion: 'Lleva a tus clientes directo a tu catálogo web para comprar.'
    }
  ];

  const modelosPlaca = [
    {
      nombre: 'Reseñas de Google • Modelo 1',
      imagen: '/WhatsApp Image placas resseña 2026-11-16 at 10.44.52.jpeg',
      color: '#ea4335',
      descripcion: 'Expositor de mostrador para sumar reseñas de 5 estrellas.'
    },
    {
      nombre: 'Reseñas de Google • Modelo 2',
      imagen: '/WhatsApp Image placas reseñas 2 2026-11-16 at 10.44.52.jpeg',
      color: '#ea4335',
      descripcion: 'Segundo diseño vertical para cajas y escritorios.'
    },
    {
      nombre: 'Reseñas de Google • Modelo 3',
      imagen: '/WhatsApp Image placas reseñas 3 2026-11-16 at 10.44.52.jpeg',
      color: '#ea4335',
      descripcion: 'Tercer estilo de placa expositora para tu negocio.'
    },
    {
      nombre: 'Instagram • Modelo 1',
      imagen: '/WhatsApp Image placas instagran 2026-11-16 at 10.44.54.jpeg',
      color: '#dc2743',
      descripcion: 'Invita a tus clientes a seguirte en Instagram con un toque.'
    },
    {
      nombre: 'Instagram • Modelo 2',
      imagen: '/WhatsApp Image placas instagran 2 2026-11-16 at 10.44.54.jpeg',
      color: '#dc2743',
      descripcion: 'Diseño alternativo para mostrador de Instagram.'
    },
    {
      nombre: 'WhatsApp Directo • Modelo 1',
      imagen: '/WhatsApp Image placa wasap 2026-11-16 at 10.44.52.jpeg',
      color: '#16a34a',
      descripcion: 'Atención al cliente inmediata en WhatsApp con un toque.'
    },
    {
      nombre: 'WhatsApp Directo • Modelo 2',
      imagen: '/WhatsApp Image placas wasap 22026-11-16 at 10.44.54.jpeg',
      color: '#16a34a',
      descripcion: 'Segundo diseño vertical para contacto por WhatsApp.'
    },
    {
      nombre: 'Menú Digital',
      imagen: '/WhatsApp Image placa menu 2026-11-16 at 10.44.52.jpeg',
      color: '#d97706',
      descripcion: 'Expositor para mesas y barras con acceso directo a tu carta.'
    },
    {
      nombre: 'Tienda Online',
      imagen: '/WhatsApp Image placa tienda online 2026-11-16 at 10.44.52.jpeg',
      color: '#0284c7',
      descripcion: 'Muestra tu tienda virtual en el mostrador con un simple toque.'
    }
  ];

  const listaActual = formatoActivo === 'calco' ? modelosCalco : modelosPlaca;
  const tituloFormato = formatoActivo === 'calco'
    ? 'Calco NFC + QR (10 × 10 cm)'
    : 'Placa Expositora (10 × 15 cm)';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <header style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-0.5px' }}>
          Tap<span style={{ color: '#38bdf8' }}>Plus</span>
        </div>
        <span style={{ fontSize: '13px', backgroundColor: '#1e293b', padding: '6px 12px', borderRadius: '20px', color: '#94a3b8' }}>
          Tecnología NFC + QR
        </span>
      </header>

      <main style={{ maxWidth: '980px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: '800', lineHeight: '1.2', marginBottom: '16px', color: '#0f172a' }}>
            Conecta tu negocio con un simple toque
          </h1>
          <p style={{ fontSize: '18px', color: '#475569', maxWidth: '640px', margin: '0 auto 28px' }}>
            Calcos y expositores inteligentes con chip NFC y código QR. Tus clientes acercan su celular y van directo a tus Reseñas de Google, Instagram, WhatsApp, TikTok, Menú o Tienda Online.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <a
              href="https://mercadopago.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#009ee3', color: '#ffffff', padding: '14px 26px', borderRadius: '10px', fontWeight: '700', textDecoration: 'none', fontSize: '16px', boxShadow: '0 4px 12px rgba(0,158,227,0.3)' }}
            >
              💳 Pagar con Mercado Pago
            </a>

            <a
              href="https://mercadolibre.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#ffe600', color: '#1e293b', padding: '14px 26px', borderRadius: '10px', fontWeight: '700', textDecoration: 'none', fontSize: '16px', boxShadow: '0 4px 12px rgba(255,230,0,0.3)' }}
            >
              🛒 Comprar en MercadoLibre
            </a>

            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#25d366', color: '#ffffff', padding: '14px 26px', borderRadius: '10px', fontWeight: '700', textDecoration: 'none', fontSize: '16px', boxShadow: '0 4px 12px rgba(37,211,102,0.3)' }}
            >
              💬 Consultar por WhatsApp
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: '#ffffff', padding: '14px 26px', borderRadius: '10px', fontWeight: '700', textDecoration: 'none', fontSize: '16px', boxShadow: '0 4px 12px rgba(220,39,67,0.3)' }}
            >
              📸 Seguir en Instagram
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
          <div
            onClick={() => setFormatoActivo(formatoActivo === 'calco' ? null : 'calco')}
            style={{
              backgroundColor: '#ffffff',
              padding: '24px',
              borderRadius: '16px',
              border: formatoActivo === 'calco' ? '2px solid #0284c7' : '1px solid #e2e8f0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: '700', color: '#0284c7', textTransform: 'uppercase' }}>Formato Adhesivo</span>
              <span style={{ fontSize: '12px', backgroundColor: '#e0f2fe', color: '#0369a1', padding: '4px 10px', borderRadius: '12px', fontWeight: '700' }}>
                {formatoActivo === 'calco' ? 'Ocultar diseños ▲' : 'Ver 10 modelos ▼'}
              </span>
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '10px' }}>Calco NFC + QR (10 × 10 cm)</h2>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.5' }}>
              Ideal para pegar en vidrieras, mostradores, mesas o espejos. Haz clic aquí para ver los 10 diseños reales disponibles.
            </p>
          </div>

          <div
