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
      recupero: 'Pégalo en tu vidriera, caja o mostrador en segundos.'
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
      recupero: 'Presencia premium para cajas, recepciones y escritorios.'
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
      recupero: 'Hacemos el diseño con la identidad visual de tu local.'
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
      recupero: 'Ideal para cubrir caja, vidriera y salón de atención.'
    },
    {
      categoria: 'local',
      badge: 'Pack Marca Propia × 5',
      cantidad: '×5',
      titulo: 'Pack × 5 Personalizados con Logo',
      subtitulo: '5 Calcos ($65.000) o 5 Placas ($135.000)',
      precio: 'Desde $65.000',
      unitario: '$13.000 c/calco • $27.000 c/placa',
      ganancia: '',
      recupero: 'Diseño personalizado incluido con el logo de tu negocio.'
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
      recupero: 'Recuperás tu inversión con solo 5 ventas.'
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
      recupero: 'Recuperás tu inversión con solo 5 ventas.'
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
      recupero: 'Recuperás tu inversión vendiendo menos de un tercio.'
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
      recupero: 'Máximo margen para revendedores y agencias.'
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
      recupero: 'Compacto para mesas de bares, cafés y restaurantes.'
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
      recupero: 'Actualizá precios de tu carta online sin reimprimir.'
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
      recupero: 'Equipá todo tu salón con diseño personalizado.'
    }
  ];
  const packsFiltrados = filtroPack === 'todos' ? packs : packs.filter((p) => p.categoria === filtroPack);

  const modelosCalco = [
    { nombre: 'Reseñas de Google • Mod. 2', imagen: '/WhatsApp Image calco reseña 2 026-11-15 at 22.40.34.jpeg' },
    { nombre: 'Reseñas de Google • Mod. 3', imagen: '/WhatsApp Image calco reseña 3 2026-11-15 at 22.40.34.jpeg' },
    { nombre: 'Instagram • Mod. 2', imagen: '/WhatsApp Image calco instagran 2 2026-11-15 at 22.40.33.jpeg' },
    { nombre: 'WhatsApp Directo • Mod. 1', imagen: '/WhatsApp Image wasap 2026-11-15 at 22.40.33.jpeg' },
    { nombre: 'WhatsApp Directo • Mod. 2', imagen: '/WhatsApp Image calco wasap2026-11-15 at 22.40.34.jpeg' },
    { nombre: 'TikTok', imagen: '/WhatsApp Image tik tok2026-11-15 at 22.40.33 (1).jpeg' },
    { nombre: 'Menú Digital', imagen: '/WhatsApp Image calco menu digital 2026-11-15 at 22.40.33.jpeg' }
  ];

  const modelosPlaca = [
    { nombre: 'Reseñas de Google • Mod. 1', imagen: '/WhatsApp Image placas resseña 2026-11-16 at 10.44.52.jpeg' },
    { nombre: 'Reseñas de Google • Mod. 2', imagen: '/WhatsApp Image placas reseñas 2 2026-11-16 at 10.44.52.jpeg' },
    { nombre: 'Reseñas de Google • Mod. 3', imagen: '/WhatsApp Image placas reseñas 3 2026-11-16 at 10.44.52.jpeg' },
    { nombre: 'Instagram • Mod. 2', imagen: '/WhatsApp Image placas instagran 2 2026-11-16 at 10.44.54.jpeg' },
    { nombre: 'WhatsApp Directo • Mod. 1', imagen: '/WhatsApp Image placa wasap 2026-11-16 at 10.44.52.jpeg' },
    { nombre: 'WhatsApp Directo • Mod. 2', imagen: '/WhatsApp Image placas wasap 22026-11-16 at 10.44.54.jpeg' },
    { nombre: 'Menú Digital', imagen: '/WhatsApp Image placa menu 2026-11-16 at 10.44.52.jpeg' }
    { nombre: 'Wi-Fi • Mod. 1', imagen: '/wifi tarjeta 1.jpeg' },
{ nombre: 'Wi-Fi • Mod. 2', imagen: '/wifi tarjeta 2.jpeg' },
{ nombre: 'Tienda Web', imagen: '/tienda web tarjeta.jpeg' },
  ];

  const listaFotos = catalogoActivo === 'calco' ? modelosCalco : modelosPlaca;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#090d16', color: '#ffffff', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ backgroundColor: '#0f172a', borderBottom: '1px solid #1e293b', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#090d16', border: '1.5px solid #38bdf8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="10" viewBox="0 0 24 12" fill="none">
              <path d="M4 9C8.5 5 15.5 5 20 9" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M7.5 11C10.2 8.8 13.8 8.8 16.5 11" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: '8px', fontWeight: '900', color: '#ffffff' }}>TapPlus</span>
          </div>
          <div style={{ fontSize: '23px', fontWeight: '900', color: '#ffffff' }}>
            Tap<span style={{ color: '#38bdf8' }}>Plus</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href="#packs" style={{ backgroundColor: '#38bdf8', color: '#090d16', padding: '8px 16px', borderRadius: '20px', fontWeight: '800', fontSize: '13px', textDecoration: 'none' }}>
            Ver Packs
          </a>
          <a href="#configurar" style={{ backgroundColor: '#1e293b', color: '#ffffff', border: '1px solid #334155', padding: '8px 14px', borderRadius: '20px', fontWeight: '700', fontSize: '13px', textDecoration: 'none' }}>
            Configurar
          </a>
        </div>
      </header>

      <main style={{ maxWidth: '1040px', margin: '0 auto', padding: '44px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ display: 'inline-block', backgroundColor: '#0f172a', border: '1px solid #38bdf8', color: '#38bdf8', fontSize: '12px', fontWeight: '800', padding: '6px 14px', borderRadius: '20px', marginBottom: '18px' }}>
            TECNOLOGÍA NFC + QR EDITABLE SIN ABONOS
          </span>
          <h1 style={{ fontSize: '40px', fontWeight: '900', lineHeight: '1.15', marginBottom: '18px', color: '#ffffff' }}>
            Más reseñas y seguidores <br />
            <span style={{ color: '#38bdf8' }}>con un simple toque.</span>
          </h1>
          <p style={{ fontSize: '17px', color: '#cbd5e1', maxWidth: '640px', margin: '0 auto 30px', lineHeight: '1.5' }}>
            Apoyan el celular y califican en Google, siguen tu Instagram, abren tu WhatsApp, TikTok o Menú Digital.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <a href="#packs" style={{ backgroundColor: '#38bdf8', color: '#090d16', padding: '14px 26px', borderRadius: '12px', fontWeight: '800', textDecoration: 'none' }}>
              Ver Packs y Precios
            </a>
            <a href="https://mercadopago.com.ar" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#ffffff', color: '#090d16', padding: '14px 22px', borderRadius: '12px', fontWeight: '800', textDecoration: 'none' }}>
              Mercado Pago
            </a>
            <a href="https://wa.me/5492954535676" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#25d366', color: '#090d16', padding: '14px 22px', borderRadius: '12px', fontWeight: '800', textDecoration: 'none' }}>
              WhatsApp
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#0f172a', border: '1px solid #38bdf8', color: '#ffffff', padding: '14px 22px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none' }}>
              @tapplusar
            </a>
          </div>
        </div>
<section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', textAlign: 'center', marginBottom: '24px', color: '#ffffff' }}>
            Nuestros Formatos y Diseños
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginBottom: '20px' }}>
            <div
              onClick={() => setCatalogoActivo(catalogoActivo === 'calco' ? null : 'calco')}
              style={{ backgroundColor: '#111827', border: '1px solid #38bdf8', borderRadius: '18px', padding: '24px', cursor: 'pointer' }}
            >
              <div style={{ color: '#38bdf8', fontSize: '12px', fontWeight: '800', marginBottom: '8px' }}>
                10 × 10 CM • ADHESIVO ({catalogoActivo === 'calco' ? 'OCULTAR FOTOS' : 'VER FOTOS'})
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px', color: '#ffffff' }}>Calco NFC + QR</h3>
              <p style={{ color: '#cbd5e1', fontSize: '14px' }}>
                Vinilo laminado para vidrieras y mostradores. Desde $10.000 c/u o $3.500 en pack mayorista.
              </p>
            </div>

            <div
              onClick={() => setCatalogoActivo(catalogoActivo === 'placa' ? null : 'placa')}
              style={{ backgroundColor: '#111827', border: '1px solid #38bdf8', borderRadius: '18px', padding: '24px', cursor: 'pointer' }}
            >
              <div style={{ color: '#38bdf8', fontSize: '12px', fontWeight: '800', marginBottom: '8px' }}>
                10 × 15 CM • CON PIE ({catalogoActivo === 'placa' ? 'OCULTAR FOTOS' : 'VER FOTOS'})
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px', color: '#ffffff' }}>Placa Expositora Mostrador</h3>
              <p style={{ color: '#cbd5e1', fontSize: '14px' }}>
                Expositor vertical con pie de apoyo. Desde $25.000 c/u o $8.500 en pack mayorista.
              </p>
            </div>

            <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '18px', padding: '24px' }}>
              <div style={{ color: '#38bdf8', fontSize: '12px', fontWeight: '800', marginBottom: '8px' }}>
                6 × 9 CM • ACRÍLICO MESA
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px', color: '#ffffff' }}>Mini Acrílico Menú Mesas</h3>
              <p style={{ color: '#cbd5e1', fontSize: '14px' }}>
                Portarretratos acrílico 6×9 cm con tu logo y QR/NFC a tu carta digital. Packs de 10, 25 y 50 mesas.
              </p>
            </div>
          </div>

          {catalogoActivo && (
            <div style={{ backgroundColor: '#0f172a', border: '1px solid #38bdf8', borderRadius: '18px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#38bdf8' }}>
                  {catalogoActivo === 'calco' ? 'Modelos Calcos 10 × 10 cm' : 'Modelos Placas 10 × 15 cm'}
                </h4>
                <button
                  onClick={() => setCatalogoActivo(null)}
                  style={{ backgroundColor: '#1e293b', color: '#ffffff', border: 'none', padding: '8px 14px', borderRadius: '8px', cursor: 'pointer' }}
                >
                  Cerrar
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
                {listaFotos.map((item) => (
                  <div key={item.nombre} style={{ backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '14px', padding: '14px' }}>
                    <img
                      src={encodeURI(item.imagen)}
                      alt={item.nombre}
                      style={{ width: '100%', height: '210px', objectFit: 'contain', backgroundColor: '#ffffff', borderRadius: '10px', marginBottom: '10px' }}
                    />
                    <div style={{ fontWeight: '800', fontSize: '14px', marginBottom: '10px', color: '#ffffff' }}>
                      {item.nombre}
                    </div>
                    <a
                      href="https://wa.me/5492954535676"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'block', textAlign: 'center', backgroundColor: '#38bdf8', color: '#090d16', padding: '9px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none', fontSize: '13px' }}
                    >
                      Pedir este modelo
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
<section id="packs" style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '900', textAlign: 'center', marginBottom: '8px', color: '#ffffff' }}>
            Elegí tu Pack TapPlus
          </h2>
          <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '24px', fontSize: '15px' }}>
            Cuantas más unidades llevás, menor es el costo unitario y mayor tu margen de ganancia.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '30px' }}>
            {[
              { id: 'todos', label: 'Todos los packs' },
              { id: 'revender', label: 'Para Revender (Mayorista)' },
              { id: 'local', label: 'Para mi Local / Personalizados' },
              { id: 'mesas', label: 'Menú Mesas 6×9 cm' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFiltroPack(tab.id)}
                style={{
                  backgroundColor: filtroPack === tab.id ? '#38bdf8' : '#111827',
                  color: filtroPack === tab.id ? '#090d16' : '#ffffff',
                  border: '1px solid #334155',
                  padding: '10px 18px',
                  borderRadius: '24px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '20px' }}>
            {packsFiltrados.map((p) => (
              <div
                key={p.titulo}
                style={{ backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ backgroundColor: '#1e293b', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#38bdf8', textTransform: 'uppercase' }}>{p.badge}</span>
                    <span style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff' }}>{p.cantidad}</span>
                  </div>
                  <div style={{ padding: '22px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', marginBottom: '6px' }}>{p.titulo}</h3>
                    <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '16px' }}>{p.subtitulo}</p>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '14px' }}>
                      <span style={{ fontSize: '32px', fontWeight: '900', color: '#38bdf8' }}>{p.precio}</span>
                      <span style={{ fontSize: '13px', color: '#ffffff', fontWeight: '700' }}>{p.unitario}</span>
                    </div>
                    {p.ganancia && (
                      <div style={{ backgroundColor: '#052e16', border: '1px solid #166534', color: '#4ade80', padding: '8px 12px', borderRadius: '10px', fontSize: '13px', fontWeight: '700', marginBottom: '10px' }}>
                        💰 {p.ganancia}
                      </div>
                    )}
                    <p style={{ fontSize: '13px', color: '#e2e8f0', lineHeight: '1.4' }}>✓ {p.recupero}</p>
                  </div>
                </div>
                <div style={{ padding: '0 22px 22px' }}>
                  <a
                    href="https://wa.me/5492954535676"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'block', textAlign: 'center', backgroundColor: '#38bdf8', color: '#090d16', padding: '12px', borderRadius: '12px', fontWeight: '800', textDecoration: 'none', fontSize: '14px' }}
                  >
                    Encargar este pack por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="configurar" style={{ backgroundColor: '#111827', border: '1px solid #38bdf8', borderRadius: '20px', padding: '32px', maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px', color: '#ffffff' }}>
            ¿Ya tenés tu placa TapPlus?
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '14px', marginBottom: '20px' }}>
            Ingresá el número impreso en tu calco o placa para activarla o cambiar su enlace de destino.
          </p>
          <form onSubmit={handleConfigurar} style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <input
              type="text"
              placeholder="Ej: 0001"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid #334155', backgroundColor: '#090d16', color: '#ffffff', fontSize: '16px', width: '160px', textAlign: 'center', fontWeight: '700' }}
            />
            <button
              type="submit"
              style={{ backgroundColor: '#38bdf8', color: '#090d16', padding: '12px 22px', borderRadius: '10px', fontWeight: '800', border: 'none', cursor: 'pointer', fontSize: '16px' }}
            >
              Configurar
            </button>
          </form>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '28px', color: '#94a3b8', fontSize: '13px', borderTop: '1px solid #1e293b', marginTop: '48px' }}>
        © 2026 TapPlus Argentina • tapplus.com.ar • Envíos a todo el país
      </footer>
    </div>
  );
}
