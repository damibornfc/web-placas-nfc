'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [codigo, setCodigo] = useState('');
  const [filtroPack, setFiltroPack] = useState('todos');
  const [catalogoActivo, setCatalogoActivo] = useState(null);
  const [cicloPlan, setCicloPlan] = useState('mensual');
  const [faqAbierta, setFaqAbierta] = useState(0);
  const router = useRouter();

  const handleConfigurar = (e) => {
    e.preventDefault();
    const limpio = codigo.trim();
    if (limpio) {
      router.push('/p/' + limpio + '?editar=1');
    }
  };
>
 const packsFiltrados = filtroPack === 'todos' ? packs : packs.filter((p) => p.categoria === filtroPack);

 const modelosCalco = [
    { nombre: 'Reseñas de Google • Mod. 1', imagen: '/calco reseña.jpeg' },
    { nombre: 'Reseñas de Google • Mod. 2', imagen: '/WhatsApp Image calco reseña 2 026-11-15 at 22.40.34.jpeg' },
    { nombre: 'Reseñas de Google • Mod. 3', imagen: '/WhatsApp Image calco reseña 3 2026-11-15 at 22.40.34.jpeg' },
    { nombre: 'Instagram • Mod. 1', imagen: '/calco instagran 1.jpeg' },
    { nombre: 'Instagram • Mod. 2', imagen: '/WhatsApp Image calco instagran 2 2026-11-15 at 22.40.33.jpeg' },
    { nombre: 'WhatsApp Directo • Mod. 1', imagen: '/WhatsApp Image wasap 2026-11-15 at 22.40.33.jpeg' },
    { nombre: 'WhatsApp Directo • Mod. 2', imagen: '/WhatsApp Image calco wasap2026-11-15 at 22.40.34.jpeg' },
    { nombre: 'Tienda Online', imagen: '/calco teinda online.jpeg' },
    { nombre: 'TikTok', imagen: '/WhatsApp Image tik tok2026-11-15 at 22.40.33 (1).jpeg' },
    { nombre: 'Menú Digital', imagen: '/WhatsApp Image calco menu digital 2026-11-15 at 22.40.33.jpeg' },
  ];
const modelosPlaca = [
   { nombre: 'Reseñas de Google • Mod. 1', imagen: '/WhatsApp Image placas resseña 2026-11-16 at 10.44.52.jpeg' },
    { nombre: 'Reseñas de Google • Mod. 2', imagen: '/WhatsApp Image placas reseñas 2 2026-11-16 at 10.44.52.jpeg' },
    { nombre: 'Reseñas de Google • Mod. 3', imagen: '/WhatsApp Image placas reseñas 3 2026-11-16 at 10.44.52.jpeg' },
    { nombre: 'Instagram • Mod. 1', imagen: '/instagran tarjeta 1.jpeg' },
    { nombre: 'Instagram • Mod. 2', imagen: '/WhatsApp Image placas instagran 2 2026-11-16 at 10.44.54.jpeg' },
    { nombre: 'WhatsApp Directo • Mod. 1', imagen: '/WhatsApp Image placa wasap 2026-11-16 at 10.44.52.jpeg' },
    { nombre: 'WhatsApp Directo • Mod. 2', imagen: '/WhatsApp Image placas wasap 22026-11-16 at 10.44.54.jpeg' },
   
    { nombre: 'Tienda Online • Mod. 2', imagen: '/tienda web tarjeta.jpeg' },
    { nombre: 'Wi-Fi • Mod. 1', imagen: '/wifi tarjeta 1.jpeg' },
    { nombre: 'Wi-Fi • Mod. 2', imagen: '/wifi tarjeta 2.jpeg' },
    { nombre: 'Menú Digital', imagen: '/WhatsApp Image placa menu 2026-11-16 at 10.44.52.jpeg' },
  ];

  const modelosMenu = [
    { nombre: 'Menú Mesa • Mod. 1', imagen: '/6x9 tarjeta menu 1.jpeg' },
    { nombre: 'Menú Mesa • Mod. 2', imagen: '/6x9 tarjeta menu 2.jpeg' },
    { nombre: 'Menú Mesa • Mod. 3', imagen: '/6x9 tarjeta menu 3.jpeg' },
    { nombre: 'Menú Mesa • Mod. 4', imagen: '/6x9 tarjeta menu 4.jpeg' },
    { nombre: 'Menú Mesa • Mod. 5', imagen: '/6x9 tarjeta menu 5.jpeg' },
  ];
  const listaFotos = catalogoActivo === 'calco' ? modelosCalco : catalogoActivo === 'placa' ? modelosPlaca : modelosMenu;
  const faqs = [
    {
      pregunta: '¿Tengo que pagar algún abono mensual obligatorio?',
      respuesta: 'No. Tu placa o calco TapPlus funciona de por vida con un único pago, permitiéndote editar tu enlace con tu PIN todas las veces que quieras. Además, si querés estadísticas de escaneos, multi-enlaces o garantía de reposición, podés sumar de forma 100% opcional los planes TapPlus Pro o Full Care.'
    },
    {
      pregunta: '¿Funciona con cualquier celular sin descargar aplicaciones?',
      respuesta: 'Sí. Es compatible con iPhone y Android. Los teléfonos con NFC abren tu enlace con solo acercar la placa, y cualquier otro celular puede escanear el código QR impreso con su cámara, sin instalar apps.'
    },
    {
      pregunta: '¿Puedo cambiar el enlace de destino más adelante?',
      respuesta: 'Sí, las veces que necesites. Ingresás el código de tu placa en nuestra web, ponés tu PIN personal de 4 dígitos y actualizás el link al instante (por ejemplo, pasar de Reseñas de Google a Instagram o a tu Menú Digital).'
    },
    {
      pregunta: '¿Hacen diseños personalizados con el logo de mi negocio?',
      respuesta: 'Sí. Podés elegir nuestros modelos listos para entregar o pedir tus calcos, placas expositoras y mini acrílicos de mesa personalizados con el logo y los colores de tu marca.'
    },
    {
      pregunta: '¿Hacen envíos a todo el país?',
      respuesta: 'Sí, despachamos a toda la Argentina por correo y transporte con seguimiento online.'
    },
    {
      pregunta: '¿Qué incluye la membresía opcional TapPlus Pro y Full Care?',
      respuesta: 'El plan Pro suma pantalla multi-enlace (Mini Bio con botones a Google, Instagram, WhatsApp, Menú y Wi-Fi), contador de toques/escaneos y filtro inteligente de reseñas. El plan Full Care agrega cobertura ante roturas o extravío con reposición física y envío gratis.'
    },
    {
      pregunta: '¿Qué beneficios tengo si compro packs mayoristas para revender?',
      respuesta: 'Además de ganar más del 100% revendiendo las placas y calcos, accedés al Programa de Socios TapPlus: cobrás un 20% de comisión mensual por cada comercio tuyo que active TapPlus Pro ($2.500/mes) y un 30% mensual por cada comercio en Full Care ($6.000/mes), o un 25% directo si contratan el plan anual.'
    }
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.pregunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.respuesta
      }
    }))
  };
return (
    <div style={{ minHeight: '100vh', backgroundColor: '#090d16', color: '#ffffff', fontFamily: 'system-ui, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

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
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a href="#packs" style={{ backgroundColor: '#38bdf8', color: '#090d16', padding: '8px 14px', borderRadius: '20px', fontWeight: '800', fontSize: '13px', textDecoration: 'none' }}>
            Packs
          </a>
          <a href="#membresias" style={{ backgroundColor: '#1e293b', color: '#38bdf8', border: '1px solid #38bdf8', padding: '8px 14px', borderRadius: '20px', fontWeight: '800', fontSize: '13px', textDecoration: 'none' }}>
            Membresías
          </a>
          <a href="#configurar" style={{ backgroundColor: '#1e293b', color: '#ffffff', border: '1px solid #334155', padding: '8px 14px', borderRadius: '20px', fontWeight: '700', fontSize: '13px', textDecoration: 'none' }}>
            Configurar
          </a>
        </div>
      </header>

      <main style={{ maxWidth: '1040px', margin: '0 auto', padding: '44px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ display: 'inline-block', backgroundColor: '#0f172a', border: '1px solid #38bdf8', color: '#38bdf8', fontSize: '12px', fontWeight: '800', padding: '6px 14px', borderRadius: '20px', marginBottom: '18px' }}>
            PLACAS Y TARJETAS NFC + QR PARA RESEÑAS DE GOOGLE • ARGENTINA
          </span>
          <h1 style={{ fontSize: '40px', fontWeight: '900', lineHeight: '1.15', marginBottom: '18px', color: '#ffffff' }}>
            Más reseñas y seguidores <br />
            <span style={{ color: '#38bdf8' }}>con un simple toque.</span>
          </h1>
          <p style={{ fontSize: '17px', color: '#cbd5e1', maxWidth: '660px', margin: '0 auto 30px', lineHeight: '1.5' }}>
            Apoyan el celular y califican en Google, siguen tu Instagram, abren tu WhatsApp, TikTok o Menú Digital. Pago único editable con PIN de por vida o planes Pro opcionales.
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
            <a href="https://instagram.com/tapplusar" target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: '#ffffff', padding: '14px 22px', borderRadius: '12px', fontWeight: '800', textDecoration: 'none' }}>
              @tapplusar
            </a>
          </div>
        </div>

        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', textAlign: 'center', marginBottom: '24px', color: '#ffffff' }}>
            Nuestros Formatos y Diseños
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginBottom: '20px' }}>
           <div onClick={() => setCatalogoActivo(catalogoActivo === 'calco' ? null : 'calco')} style={{ backgroundColor: '#111827', border: '2px solid #38bdf8', borderRadius: '18px', padding: '24px', cursor: 'pointer' }}>
            <div style={{ color: '#38bdf8', fontSize: '12px', fontWeight: '800', marginBottom: '8px' }}>
              10 × 10 CM • ADHESIVO ({catalogoActivo === 'calco' ? 'OCULTAR FOTOS' : 'VER FOTOS'})
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px', color: '#ffffff' }}>Calco NFC + QR</h3>
            <p style={{ color: '#cbd5e1', fontSize: '14px' }}>
              Vinilo laminado para vidrieras y mostradores. Desde $10.000 c/u o $3.500 en pack mayorista.
            </p>
          </div>

          <div onClick={() => setCatalogoActivo(catalogoActivo === 'placa' ? null : 'placa')} style={{ backgroundColor: '#111827', border: '2px solid #10b981', borderRadius: '18px', padding: '24px', cursor: 'pointer' }}>
            <div style={{ color: '#10b981', fontSize: '12px', fontWeight: '800', marginBottom: '8px' }}>
              10 × 15 CM • CON PIE ({catalogoActivo === 'placa' ? 'OCULTAR FOTOS' : 'VER FOTOS'})
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px', color: '#ffffff' }}>Placa Expositora Mostrador</h3>
            <p style={{ color: '#cbd5e1', fontSize: '14px' }}>
              Expositor vertical con pie de apoyo. Desde $25.000 c/u o $8.500 en pack mayorista.
            </p>
          </div>

          <div onClick={() => setCatalogoActivo(catalogoActivo === 'menu' ? null : 'menu')} style={{ backgroundColor: '#111827', border: '2px solid #f59e0b', borderRadius: '18px', padding: '24px', cursor: 'pointer' }}>
            <div style={{ color: '#f59e0b', fontSize: '12px', fontWeight: '800', marginBottom: '8px' }}>
              6 × 9 CM • ACRÍLICO MESA ({catalogoActivo === 'menu' ? 'OCULTAR FOTOS' : 'VER FOTOS'})
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
                {catalogoActivo === 'calco' ? 'Modelos Calcos 10 × 10 cm' : catalogoActivo === 'placa' ? 'Modelos Placas 10 × 15 cm' : 'Modelos Menú Mesa 6 × 9 cm'}
                </h4>
                <button onClick={() => setCatalogoActivo(null)} style={{ backgroundColor: '#1e293b', color: '#ffffff', border: 'none', padding: '8px 14px', borderRadius: '8px', cursor: 'pointer' }}>
                  Cerrar
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
                {listaFotos.map((item) => (
                  <div key={item.nombre} style={{ backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '14px', padding: '14px' }}>
                    <img src={encodeURI(item.imagen)} alt={item.nombre} style={{ width: '100%', height: '210px', objectFit: 'contain', backgroundColor: '#ffffff', borderRadius: '10px', marginBottom: '10px' }} />
                    <div style={{ fontWeight: '800', fontSize: '14px', marginBottom: '10px', color: '#ffffff' }}>
                      {item.nombre}
                    </div>
                    <a href="https://wa.me/5492954535676" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', backgroundColor: '#38bdf8', color: '#090d16', padding: '9px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none', fontSize: '13px' }}>
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
              <button key={tab.id} onClick={() => setFiltroPack(tab.id)} style={{ backgroundColor: filtroPack === tab.id ? '#38bdf8' : '#111827', color: filtroPack === tab.id ? '#090d16' : '#ffffff', border: '1px solid #334155', padding: '10px 18px', borderRadius: '24px', fontWeight: '800', cursor: 'pointer', fontSize: '14px' }}>
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '20px' }}>
            {packsFiltrados.map((p) => (
              <div key={p.titulo} style={{ backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
              <div style={{ padding: '0 22px 22px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {p.botones.map((btn) => (
                    <a
                      key={btn.url}
                      href={btn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        backgroundColor: btn.secundario ? '#1e293b' : '#38bdf8',
                        color: btn.secundario ? '#38bdf8' : '#090d16',
                        border: btn.secundario ? '1px solid #38bdf8' : 'none',
                        padding: '12px',
                        borderRadius: '12px',
                        fontWeight: '800',
                        textDecoration: 'none',
                        fontSize: '14px'
                      }}
                    >
                      {btn.texto}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="membresias" style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '900', textAlign: 'center', marginBottom: '8px', color: '#ffffff' }}>
            Planes y Membresías Opcionales
          </h2>
          <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '22px', fontSize: '15px' }}>
            Tu placa funciona de por vida sin abonos. Si querés estadísticas, multi-enlaces o seguro contra roturas, elegí un plan opcional.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '28px' }}>
            <button onClick={() => setCicloPlan('mensual')} style={{ backgroundColor: cicloPlan === 'mensual' ? '#38bdf8' : '#111827', color: cicloPlan === 'mensual' ? '#090d16' : '#ffffff', border: '1px solid #334155', padding: '10px 20px', borderRadius: '24px', fontWeight: '800', cursor: 'pointer', fontSize: '14px' }}>
              Pago Mensual
            </button>
            <button onClick={() => setCicloPlan('anual')} style={{ backgroundColor: cicloPlan === 'anual' ? '#38bdf8' : '#111827', color: cicloPlan === 'anual' ? '#090d16' : '#ffffff', border: '1px solid #38bdf8', padding: '10px 20px', borderRadius: '24px', fontWeight: '800', cursor: 'pointer', fontSize: '14px' }}>
              Pago Anual (2 meses gratis)
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '20px', padding: '26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase' }}>Incluido de serie</span>
                <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#ffffff', margin: '6px 0' }}>TapPlus Free</h3>
                <div style={{ fontSize: '34px', fontWeight: '900', color: '#ffffff', marginBottom: '16px' }}>
                  $0 <span style={{ fontSize: '14px', color: '#94a3b8', fontWeight: '600' }}>/ de por vida</span>
                </div>
                <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '10px' }}>✓ 1 enlace directo editable con PIN</p>
                <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '10px' }}>✓ Cambios ilimitados sin vencimiento</p>
                <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '20px' }}>✓ Compatible con NFC y código QR</p>
              </div>
              <a href="#packs" style={{ display: 'block', textAlign: 'center', backgroundColor: '#1e293b', color: '#ffffff', padding: '12px', borderRadius: '12px', fontWeight: '800', textDecoration: 'none', fontSize: '14px' }}>
                Incluido con tu placa
              </a>
            </div>

            <div style={{ backgroundColor: '#111827', border: '2px solid #38bdf8', borderRadius: '20px', padding: '26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#38bdf8', textTransform: 'uppercase' }}>Más elegido • 1er mes gratis</span>
                <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#ffffff', margin: '6px 0' }}>TapPlus Pro</h3>
                <div style={{ fontSize: '34px', fontWeight: '900', color: '#38bdf8', marginBottom: '16px' }}>
                  {cicloPlan === 'mensual' ? '$2.500' : '$25.000'} <span style={{ fontSize: '14px', color: '#cbd5e1', fontWeight: '600' }}>{cicloPlan === 'mensual' ? '/ mes' : '/ año'}</span>
                </div>
                <p style={{ fontSize: '14px', color: '#ffffff', marginBottom: '10px' }}>✓ Pantalla Multi-enlace (Google, IG, WhatsApp, Menú, Wi-Fi)</p>
                <p style={{ fontSize: '14px', color: '#ffffff', marginBottom: '10px' }}>✓ Estadísticas de toques NFC y escaneos QR</p>
                <p style={{ fontSize: '14px', color: '#ffffff', marginBottom: '10px' }}>✓ Filtro inteligente de reseñas (4-5★ a Google)</p>
                <p style={{ fontSize: '14px', color: '#ffffff', marginBottom: '20px' }}>✓ 30% OFF en reposición de placas</p>
              </div>
              <a href="https://wa.me/5492954535676" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', backgroundColor: '#38bdf8', color: '#090d16', padding: '12px', borderRadius: '12px', fontWeight: '800', textDecoration: 'none', fontSize: '14px' }}>
                Activar Plan Pro
              </a>
            </div>

            <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '20px', padding: '26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#4ade80', textTransform: 'uppercase' }}>Protección Total</span>
                <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#ffffff', margin: '6px 0' }}>TapPlus Full Care</h3>
                <div style={{ fontSize: '34px', fontWeight: '900', color: '#ffffff', marginBottom: '16px' }}>
                  {cicloPlan === 'mensual' ? '$6.000' : '$60.000'} <span style={{ fontSize: '14px', color: '#94a3b8', fontWeight: '600' }}>{cicloPlan === 'mensual' ? '/ mes' : '/ año'}</span>
                </div>
                <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '10px' }}>✓ Todo lo incluido en TapPlus Pro</p>
                <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '10px' }}>✓ Seguro contra rotura o extravío (hasta 2 reposiciones/año)</p>
                <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '10px' }}>✓ Envío gratis a todo el país (desde 3er mes o día 1 en plan anual)</p>
                <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '20px' }}>✓ Soporte prioritario por WhatsApp</p>
              </div>
<a href="https://wa.me/5492954535676" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', backgroundColor: '#1e293b', border: '1px solid #38bdf8', color: '#ffffff', padding: '12px', borderRadius: '12px', fontWeight: '800', textDecoration: 'none', fontSize: '14px' }}>
                Activar Full Care
              </a>
            </div>
          </div>
        </section>

        <section id="faq" style={{ marginBottom: '64px', maxWidth: '800px', margin: '0 auto 64px' }}>
          <h2 style={{ fontSize: '30px', fontWeight: '900', textAlign: 'center', marginBottom: '24px', color: '#ffffff' }}>
            Preguntas Frecuentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((item, idx) => (
              <div key={item.pregunta} onClick={() => setFaqAbierta(faqAbierta === idx ? -1 : idx)} style={{ backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '14px', padding: '18px 22px', cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '800', fontSize: '16px', color: '#ffffff' }}>
                  <span>{item.pregunta}</span>
                  <span style={{ color: '#38bdf8', fontSize: '20px' }}>{faqAbierta === idx ? '−' : '+'}</span>
                </div>
                {faqAbierta === idx && (
                  <p style={{ marginTop: '12px', color: '#cbd5e1', fontSize: '14px', lineHeight: '1.5' }}>
                    {item.respuesta}
                  </p>
                )}
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
            <input type="text" placeholder="Ej: 0001" value={codigo} onChange={(e) => setCodigo(e.target.value)} style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid #334155', backgroundColor: '#090d16', color: '#ffffff', fontSize: '16px', width: '160px', textAlign: 'center', fontWeight: '700' }} />
            <button type="submit" style={{ backgroundColor: '#38bdf8', color: '#090d16', padding: '12px 22px', borderRadius: '10px', fontWeight: '800', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
              Configurar
            </button>
          </form>
        </section>
      </main>

      <a href="https://wa.me/5492954535676" target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#25d366', color: '#090d16', padding: '12px 18px', borderRadius: '30px', fontWeight: '900', textDecoration: 'none', boxShadow: '0 6px 20px rgba(0,0,0,0.4)', zIndex: 60, fontSize: '14px' }}>
        💬 WhatsApp
      </a>

      
     <footer style={{ textAlign: 'center', padding: '32px 20px', color: '#94a3b8', fontSize: '13px', borderTop: '1px solid #1e293b', marginTop: '48px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', marginBottom: '16px' }}>
          <a href="https://wa.me/5492954535676" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', textDecoration: 'underline', fontWeight: '700' }}>
            Botón de Arrepentimiento
          </a>
          <span>•</span>
          <a href="https://wa.me/5492954535676" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', textDecoration: 'underline', fontWeight: '700' }}>
            Botón de Baja de Servicio
          </a>
          <span>•</span>
          <a href="#faq" style={{ color: '#cbd5e1', textDecoration: 'underline', fontWeight: '700' }}>
            Condiciones de Uso y Garantía
          </a>
        </div>
        <p style={{ marginBottom: '6px', color: '#cbd5e1', fontWeight: '600' }}>
          © 2026 TapPlus • ://tapplus.com.ar • Envíos a toda la Argentina y Latinoamérica
        </p>
        <p style={{ fontSize: '11px', color: '#64748b', maxWidth: '720px', margin: '0 auto' }}>
          Las placas y calcos personalizados con logo a medida no admiten devolución por arrepentimiento una vez aprobada su producción (Art. 1116 CCyC). Las membresías mensuales o anuales pueden cancelarse en cualquier momento sin penalidad.
        </p>
      </footer>
    </div>
  );
}
  
