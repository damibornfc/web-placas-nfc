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
  ];

  const listaFotos = catalogoActivo === 'calco' ? modelosCalco : modelosPlaca;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Barra superior */}
      <header style={{ backgroundColor: '#111111', borderBottom: '1px solid #262626', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-0.5px' }}>
          Tap<span style={{ color: '#facc15' }}>Plus</span>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <a
            href="#packs"
            style={{ backgroundColor: '#facc15', color: '#0a0a0a', padding: '8px 16px', borderRadius: '20px', fontWeight: '800', fontSize: '13px', textDecoration: 'none' }}
          >
            Ver Packs
          </a>
          <a
            href="#configurar"
            style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '8px 14px', borderRadius: '20px', fontWeight: '700', fontSize: '13px', textDecoration: 'none' }}
          >
            Configurar mi placa
          </a>
        </div>
      </header>

      <main style={{ maxWidth: '1040px', margin: '0 auto', padding: '44px 20px' }}>
        {/* Hero Principal */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ display: 'inline-block', backgroundColor: '#1f1f1f', border: '1px solid #333333', color: '#facc15', fontSize: '12px', fontWeight: '800', padding: '6px 14px', borderRadius: '20px', marginBottom: '18px', textTransform: 'uppercase' }}>
            Tecnología NFC + QR Editable sin Abonos
          </span>
          <h1 style={{ fontSize: '42px', fontWeight: '900', lineHeight: '1.12', marginBottom: '18px', color: '#ffffff' }}>
            Placas y Calcos NFC + QR <br />
            <span style={{ color: '#facc15' }}>para tu local o para revender.</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#a3a3a3', maxWidth: '660px', margin: '0 auto 30px', lineHeight: '1.5' }}>
            Tus clientes acercan el celular y van directo a tus Reseñas de Google, Instagram, WhatsApp, TikTok, Menú o Tienda Online. Comprá desde 1 unidad o llevá packs mayoristas con margen real.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <a
              href="#packs"
              style={{ backgroundColor: '#facc15', color: '#0a0a0a', padding: '15px 28px', borderRadius: '12px', fontWeight: '800', textDecoration: 'none', fontSize: '16px' }}
            >
              📦 Ver Packs y Precios
            </a>
            <a
              href="https://mercadopago.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#009ee3', color: '#ffffff', padding: '15px 24px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', fontSize: '16px' }}
            >
              💳 Mercado Pago
            </a>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#25d366', color: '#0a0a0a', padding: '15px 24px', borderRadius: '12px', fontWeight: '800', textDecoration: 'none', fontSize: '16px' }}
            >
              💬 WhatsApp
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#1f1f1f', border: '1px solid #333333', color: '#ffffff', padding: '15px 24px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', fontSize: '16px' }}
            >
              📸 @tapplusar
            </a>
          </div>
        </div>

        {/* Cómo funciona en 4 pasos */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', textAlign: 'center', marginBottom: '8px' }}>Configurarlo es así de simple</h2>
          <p style={{ color: '#a3a3a3', textAlign: 'center', marginBottom: '28px', fontSize: '15px' }}>
            Cada unidad se activa en 1 minuto desde el celular, sin descargar aplicaciones.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
            {[
              { num: '1', titulo: 'Escaneás o acercás', desc: 'Tu cliente acerca su teléfono por NFC o escanea el código QR.' },
              { num: '2', titulo: 'Pegás tu enlace', desc: 'Cargás el link de Google, Instagram, WhatsApp, TikTok o tu Menú.' },
              { num: '3', titulo: 'Guardás con tu PIN', desc: 'Protegés tu placa con tu clave personal de 4 dígitos.' },
              { num: '4', titulo: 'Listo, editable siempre', desc: 'Podés cambiar el link de destino cuando quieras sin reprogramar el chip.' }
            ].map((paso) => (
              <div key={paso.num} style={{ backgroundColor: '#161616', border: '1px solid #262626', borderRadius: '16px', padding: '22px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#facc15', color: '#0a0a0a', fontWeight: '900', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  {paso.num}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '6px', color: '#ffffff' }}>{paso.titulo}</h3>
                <p style={{ fontSize: '14px', color: '#a3a3a3', lineHeight: '1.4' }}>{paso.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Catálogo Visual de Diseños Reales */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', textAlign: 'center', marginBottom: '8px' }}>Nuestros Formatos y Diseños</h2>
          <p style={{ color: '#a3a3a3', textAlign: 'center', marginBottom: '24px', fontSize: '15px' }}>
            Hacé clic en un formato para ver las fotos reales de nuestros modelos listos para entregar.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginBottom: '20px' }}>
            <div
              onClick={() => setCatalogoActivo(catalogoActivo === 'calco' ? null : 'calco')}
              style={{ backgroundColor: '#161616', border: catalogoActivo === 'calco' ? '2px solid #facc15' : '1px solid #262626', borderRadius: '18px', padding: '24px', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ color: '#38bdf8', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase' }}>10 × 10 cm • Adhesivo</span>
                <span style={{ backgroundColor: '#262626', color: '#facc15', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '700' }}>
                  {catalogoActivo === 'calco' ? 'Ocultar fotos ▲' : 'Ver fotos ▼'}
                </span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px' }}>Calco NFC + QR</h3>
              <p style={{ color: '#a3a3a3', fontSize: '14px', lineHeight: '1.5' }}>
                Vinilo laminado de alta durabilidad para vidrieras, cajas y mostradores. Desde <strong style={{ color: '#ffffff' }}>$10.000</strong> c/u o <strong style={{ color: '#facc15' }}>$3.500</strong> en pack mayorista.
              </p>
            </div>

            <div
              onClick={() => setCatalogoActivo(catalogoActivo === 'placa' ? null : 'placa')}
              style={{ backgroundColor: '#161616', border: catalogoActivo === 'placa' ? '2px solid #facc15' : '1px solid #262626', borderRadius: '18px', padding: '24px', cursor: 'pointer' }}
            >
            
              
                  
                  <p style={{ fontSize: '13px', color: '#d4d4d4', lineHeight: '1.4' }}>
                      ✓ {p.recupero}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '0 22px 22px' }}>
                  <a
                    href={'https://wa.me/542954535676?text=' + encodeURIComponent(p.mensaje)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'block', textAlign: 'center', backgroundColor: '#facc15', color: '#0a0a0a', padding: '12px', borderRadius: '12px', fontWeight: '800', textDecoration: 'none', fontSize: '14px' }}
                  >
                    Encargar este pack por WhatsApp
                  </a>
                </div>
            
            ))}
          </div>
        </section>

        {/* Panel Configurador para Clientes */}
        <section id="configurar" style={{ backgroundColor: '#161616', border: '1px solid #333333', borderRadius: '20px', padding: '32px', maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px', color: '#ffffff' }}>¿Ya tenés tu placa TapPlus?</h3>
          <p style={{ color: '#a3a3a3', fontSize: '14px', marginBottom: '20px' }}>
            Ingresá el número impreso en tu calco o placa para activarla o cambiar su enlace de destino.
          </p>
          <form onSubmit={handleConfigurar} style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <input
              type="text"
              placeholder="Ej: 0001"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid #404040', backgroundColor: '#0a0a0a', color: '#ffffff', fontSize: '16px', width: '160px', textAlign: 'center', fontWeight: '700' }}
            />
            <button
              type="submit"
              style={{ backgroundColor: '#facc15', color: '#0a0a0a', padding: '12px 22px', borderRadius: '10px', fontWeight: '800', border: 'none', cursor: 'pointer', fontSize: '16px' }}
            >
              Configurar
            </button>
          </form>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '28px', color: '#737373', fontSize: '13px', borderTop: '1px solid #262626', marginTop: '48px' }}>
        © 2026 TapPlus Argentina • tapplus.com.ar • Envíos a todo el país
      </footer>
    </div>
  );
}  
        

        {/* Panel Configurador para Clientes */}
        <section id="configurar" style={{ backgroundColor: '#161616', border: '1px solid #333333', borderRadius: '20px', padding: '32px', maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px', color: '#ffffff' }}>¿Ya tenés tu placa TapPlus?</h3>
          <p style={{ color: '#a3a3a3', fontSize: '14px', marginBottom: '20px' }}>
            Ingresá el número impreso en tu calco o placa para activarla o cambiar su enlace de destino.
          </p>
          <form onSubmit={handleConfigurar} style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <input
              type="text"
              placeholder="Ej: 0001"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid #404040', backgroundColor: '#0a0a0a', color: '#ffffff', fontSize: '16px', width: '160px', textAlign: 'center', fontWeight: '700' }}
            />
            <button
              type="submit"
              style={{ backgroundColor: '#facc15', color: '#0a0a0a', padding: '12px 22px', borderRadius: '10px', fontWeight: '800', border: 'none', cursor: 'pointer', fontSize: '16px' }}
            >
              Configurar
            </button>
          </form>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '28px', color: '#737373', fontSize: '13px', borderTop: '1px solid #262626', marginTop: '48px' }}>
        © 2026 TapPlus Argentina • tapplus.com.ar • Envíos a todo el país
      </footer>
    </div>
  );
}
