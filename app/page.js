'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [codigoPlaca, setCodigoPlaca] = useState('');
  const router = useRouter();

  const irAPlaca = (e) => {
    e.preventDefault();
    if (codigoPlaca.trim()) {
      router.push('/p/' + codigoPlaca.trim() + '?editar=true');
    }
  };

  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto', padding: '24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#111' }}>Conecta tu negocio con un toque</h1>
      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.5' }}>
        Expositores inteligentes con tecnología <strong>NFC y Código QR</strong>. Consigue más reseñas en Google, seguidores en Instagram, contactos en WhatsApp o conecta clientes a tu WiFi al instante.
      </p>

      <div style={{ margin: '30px 0', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>¿Quieres comprar nuestras placas?</h2>
        <p style={{ color: '#64748b', marginBottom: '20px' }}>Envíos a todo el país. Sin abonos mensuales y 100% configurables.</p>
        <a
          href="https://mercadolibre.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', backgroundColor: '#ffe600', color: '#2d3277', fontWeight: 'bold', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', marginBottom: '10px' }}
        >
          Comprar en MercadoLibre
        </a>
        <br />
        <a
          href="https://wa.me/5492954535676"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', backgroundColor: '#25D366', color: '#fff', fontWeight: 'bold', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', marginTop: '8px' }}
        >
          Consultar por mayor en WhatsApp
        </a>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', borderTop: '1px solid #eee' }}>
        <h3 style={{ fontSize: '1.1rem', color: '#333' }}>¿Ya tienes tu placa y quieres cambiar el enlace?</h3>
        <form onSubmit={irAPlaca} style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '12px' }}>
          <input
            type="text"
            placeholder="Ej: 0001"
            value={codigoPlaca}
            onChange={(e) => setCodigoPlaca(e.target.value)}
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', width: '140px' }}
          />
          <button type="submit" style={{ padding: '10px 18px', backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            Configurar
          </button>
        </form>
      </div>
    </main>
  );
}
