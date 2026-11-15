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

  const modelos = [
    {
      nombre: 'Reseñas de Google',
      icono: '⭐',
      color: '#ea4335',
      fondo: '#fef2f2',
      descripcion: 'Lleva al cliente directo a dejar 5 estrellas en tu perfil de Google Maps.'
    },
    {
      nombre: 'Instagram',
      icono: '📸',
      color: '#dc2743',
      fondo: '#fdf2f8',
      descripcion: 'Abre tu perfil de Instagram al instante para sumar seguidores reales.'
    },
    {
      nombre: 'WhatsApp Directo',
      icono: '💬',
      color: '#16a34a',
      fondo: '#f0fdf4',
      descripcion: 'Inicia un chat directo con tu negocio sin tener que agendar el número.'
    },
    {
      nombre: 'TikTok',
      icono: '🎵',
      color: '#0f172a',
      fondo: '#f1f5f9',
      descripcion: 'Dirige a tus clientes a tu cuenta o video destacado de TikTok.'
    },
    {
      nombre: 'Menú Restaurant',
      icono: '🍽️',
      color: '#d97706',
      fondo: '#fffbeb',
      descripcion: 'Ideal para mesas y barras: abre tu carta digital o PDF con un toque.'
    },
    {
      nombre: 'Conexión WiFi',
      icono: '📶',
      color: '#0284c7',
      fondo: '#f0f9ff',
      descripcion: 'Conecta a tus clientes al WiFi del local sin dictar contraseñas.'
    }
  ];

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

      <main style={{ maxWidth: '920px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: '800', lineHeight: '1.2', marginBottom: '16px', color: '#0f172a' }}>
            Conecta tu negocio con un simple toque
          </h1>
          <p style={{ fontSize: '18px', color: '#475569', maxWidth: '620px', margin: '0 auto 28px' }}>
            Calcos y expositores inteligentes con chip NFC y código QR. Tus clientes acercan su celular y van directo a tus Reseñas de Google, Instagram, WhatsApp, TikTok, Menú o WiFi.
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
                {formatoActivo === 'calco' ? 'Ocultar modelos ▲' : 'Ver 6 modelos ▼'}
              </span>
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '10px' }}>Calco NFC + QR (10 × 10 cm)</h2>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.5' }}>
              Ideal para pegar en vidrieras, mostradores, mesas o espejos. Haz clic aquí para ver los 6 diseños disponibles.
            </p>
          </div>

          <div
            onClick={() => setFormatoActivo(formatoActivo === 'placa' ? null : 'placa')}
            style={{
              backgroundColor: '#ffffff',
              padding: '24px',
              borderRadius: '16px',
              border: formatoActivo === 'placa' ? '2px solid #0284c7' : '1px solid #e2e8f0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: '700', color: '#0284c7', textTransform: 'uppercase' }}>Formato Mostrador</span>
              <span style={{ fontSize: '12px', backgroundColor: '#e0f2fe', color: '#0369a1', padding: '4px 10px', borderRadius: '12px', fontWeight: '700' }}>
                {formatoActivo === 'placa' ? 'Ocultar modelos ▲' : 'Ver 6 modelos ▼'}
              </span>
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '10px' }}>Placa Expositora (10 × 15 cm)</h2>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.5' }}>
              Impresión full color de alto impacto visual para cajas y escritorios. Haz clic aquí para ver los 6 diseños disponibles.
            </p>
          </div>
        </div>

        {formatoActivo && (
          <div style={{ backgroundColor: '#ffffff', padding: '28px', borderRadius: '18px', border: '2px solid #bae6fd', marginBottom: '40px', boxShadow: '0 8px 24px rgba(2,132,199,0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
              <div>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#0284c7', textTransform: 'uppercase' }}>Catálogo de Diseños</span>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>Modelos para {tituloFormato}</h3>
              </div>
              <button
                onClick={() => setFormatoActivo(null)}
                style={{ backgroundColor: '#f1f5f9', color: '#475569', border: 'none', padding: '8px 14px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}
              >
                ✕ Cerrar
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              {modelos.map((m) => (
                <div key={m.nombre} style={{ border: '1px solid #e2e8f0', borderRadius: '14px', padding: '18px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <span style={{ fontSize: '26px', backgroundColor: m.fondo, padding: '8px', borderRadius: '10px' }}>{m.icono}</span>
                      <div>
                        <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase' }}>{tituloFormato}</div>
                        <h4 style={{ fontSize: '17px', fontWeight: '800', color: m.color }}>{m.nombre}</h4>
                      </div>
                    </div>
