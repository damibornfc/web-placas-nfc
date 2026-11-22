'use client';
import { useEffect, useState, Suspense } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { supabase } from '../../../lib/supabase';

function ContenidoPlaca() {
  const { codigo } = useParams();
  const searchParams = useSearchParams();
  const modoEdicionForzado = searchParams.get('editar') === '1';

  const [placa, setPlaca] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [autenticado, setAutenticado] = useState(false);
  const [pinIngresado, setPinIngresado] = useState('');
  const [tipoDestino, setTipoDestino] = useState('url');
  const [urlDestino, setUrlDestino] = useState('');
  const [wifiSsid, setWifiSsid] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');
  const [linkGoogle, setLinkGoogle] = useState('');
  const [linkInstagram, setLinkInstagram] = useState('');
  const [linkWhatsapp, setLinkWhatsapp] = useState('');
  const [linkMenu, setLinkMenu] = useState('');
  const [nuevoPin, setNuevoPin] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    async function cargarPlaca() {
      const { data, error } = await supabase
        .from('placas')
        .select('*')
        .eq('codigo', codigo)
        .single();

      if (error || !data) {
        setCargando(false);
        return;
      }

      const nuevosClics = (data.clics || 0) + 1;
      if (data.activada && !modoEdicionForzado) {
        await supabase.from('placas').update({ clics: nuevosClics }).eq('codigo', codigo);
        data.clics = nuevosClics;
      }

      setPlaca(data);
      setTipoDestino(data.tipo_destino || 'url');
      setUrlDestino(data.url_destino || '');
      setWifiSsid(data.wifi_ssid || '');
      setWifiPassword(data.wifi_password || '');
      setLinkGoogle(data.link_google || '');
      setLinkInstagram(data.link_instagram || '');
      setLinkWhatsapp(data.link_whatsapp || '');
      setLinkMenu(data.link_menu || '');

      const proVigente = data.pro_hasta && new Date(data.pro_hasta) > new Date();

      if (data.activada && !modoEdicionForzado) {
        if (data.tipo_destino === 'multi' && proVigente) {
          setCargando(false);
          return;
        }
        if (data.tipo_destino === 'wifi') {
          setCargando(false);
          return;
        }
        if (data.url_destino) {
          let link = data.url_destino.trim();
          if (!link.startsWith('http://') && !link.startsWith('https://')) {
            link = 'https://' + link;
          }
          window.location.replace(link);
          return;
        }
      }
      setCargando(false);
    }
    if (codigo) cargarPlaca();
  }, [codigo, modoEdicionForzado]);

  const verificarPin = (e) => {
    e.preventDefault();
    if (placa && pinIngresado.trim() === String(placa.pin).trim()) {
      setAutenticado(true);
      setMensaje('');
    } else {
      setMensaje('PIN incorrecto. Intentá nuevamente.');
    }
  };

  const guardarCambios = async (e) => {
    e.preventDefault();
    const pinFinal = placa.activada ? placa.pin : nuevoPin.trim();
    if (!pinFinal || pinFinal.length < 4) {
      setMensaje('Por favor elegí un PIN de al menos 4 números.');
      return;
    }

    let fechaPro = placa.pro_hasta;
    if (!placa.activada && !fechaPro) {
      const en30Dias = new Date();
      en30Dias.setDate(en30Dias.getDate() + 30);
      fechaPro = en30Dias.toISOString();
    }

    const { error } = await supabase
      .from('placas')
      .update({
        activada: true,
        pin: pinFinal,
        tipo_destino: tipoDestino,
        url_destino: urlDestino,
        wifi_ssid: wifiSsid,
        wifi_password: wifiPassword,
        link_google: linkGoogle,
        link_instagram: linkInstagram,
        link_whatsapp: linkWhatsapp,
        link_menu: linkMenu,
        pro_hasta: fechaPro
      })
      .eq('codigo', codigo);

    if (error) {
      setMensaje('Error al guardar. Revisá los datos.');
    } else {
      alert('¡Placa configurada con éxito!');
      window.location.href = '/p/' + codigo;
    }
  };

  if (cargando) {
    return <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>Cargando...</div>;
  }

  if (!placa) {
    return <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>Placa no encontrada. Verificá el código.</div>;
  }

  const hoy = new Date();
  const fechaVencimiento = placa.pro_hasta ? new Date(placa.pro_hasta) : null;
  const proVigente = fechaVencimiento && fechaVencimiento > hoy;
  const diasRestantes = proVigente ? Math.ceil((fechaVencimiento - hoy) / (1000 * 60 * 60 * 24)) : 0;

  if (placa.activada && !modoEdicionForzado && placa.tipo_destino === 'wifi') {
    return (
      <main style={{ fontFamily: 'sans-serif', maxWidth: '420px', margin: '40px auto', padding: '24px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '16px' }}>
        <h2>Conectate a nuestro Wi-Fi</h2>
        <p style={{ fontSize: '1.1rem' }}><strong>Red:</strong> {placa.wifi_ssid}</p>
        <p style={{ fontSize: '1.2rem', backgroundColor: '#f1f5f9', padding: '12px', borderRadius: '8px' }}>
          <strong>Contraseña:</strong> {placa.wifi_password}
        </p>
        <button
          onClick={() => navigator.clipboard.writeText(placa.wifi_password)}
          style={{ marginTop: '12px', padding: '12px 24px', backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          Copiar contraseña
        </button>
        <div style={{ marginTop: '30px' }}>
          <a href={'/p/' + codigo + '?editar=1'} style={{ fontSize: '0.85rem', color: '#888' }}>Soy el dueño (Editar)</a>
        </div>
      </main>
    );
  }

  const formatearUrl = (u) => {
    if (!u) return '';
    const limpio = u.trim();
    return limpio.startsWith('http://') || limpio.startsWith('https://') ? limpio : 'https://' + limpio;
  };

  if (placa.activada && !modoEdicionForzado && placa.tipo_destino === 'multi' && proVigente) {
    return (
      <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '420px', margin: '40px auto', padding: '26px', textAlign: 'center', backgroundColor: '#0f172a', color: '#ffffff', borderRadius: '20px', border: '1px solid #38bdf8' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '900', marginBottom: '6px' }}>¡Gracias por visitarnos!</h2>
        <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '22px' }}>Elegí cómo querés conectar con nosotros</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {placa.link_google && (
            <a href={formatearUrl(placa.link_google)} style={{ display: 'block', padding: '14px', backgroundColor: '#38bdf8', color: '#090d16', fontWeight: '800', borderRadius: '12px', textDecoration: 'none' }}>
              ⭐ Dejanos tu Reseña en Google
            </a>
          )}
          {placa.link_instagram && (
            <a href={formatearUrl(placa.link_instagram)} style={{ display: 'block', padding: '14px', background: 'linear-gradient(45deg, #f09433, #dc2743, #bc1888)', color: '#ffffff', fontWeight: '800', borderRadius: '12px', textDecoration: 'none' }}>
              📸 Seguinos en Instagram
            </a>
          )}
          {placa.link_whatsapp && (
            <a href={formatearUrl(placa.link_whatsapp)} style={{ display: 'block', padding: '14px', backgroundColor: '#25d366', color: '#090d16', fontWeight: '800', borderRadius: '12px', textDecoration: 'none' }}>
              💬 Escribinos por WhatsApp
            </a>
          )}
          {placa.link_menu && (
            <a href={formatearUrl(placa.link_menu)} style={{ display: 'block', padding: '14px', backgroundColor: '#1e293b', color: '#ffffff', border: '1px solid #38bdf8', fontWeight: '800', borderRadius: '12px', textDecoration: 'none' }}>
              📋 Ver Menú / Catálogo
            </a>
          )}
        </div>
        <div style={{ marginTop: '28px' }}>
          <a href={'/p/' + codigo + '?editar=1'} style={{ fontSize: '12px', color: '#64748b', textDecoration: 'none' }}>Soy el dueño (Editar)</a>
        </div>
      </main>
    );
  }

  if (placa.activada && !autenticado) {
    return (
      <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '400px', margin: '60px auto', padding: '28px', border: '1px solid #e2e8f0', borderRadius: '16px', textAlign: 'center' }}>
        <div style={{ fontSize: '32px', marginBottom: '8px' }}>🔒</div>
        <h2 style={{ marginBottom: '6px' }}>Placa #{codigo} Protegida</h2>
        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>
          Ingresá el PIN secreto para ver las estadísticas o cambiar el enlace de esta placa.
        </p>
        <form onSubmit={verificarPin} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input
            type="password"
            inputMode="numeric"
            required
            maxLength={6}
            placeholder="Ingresá tu PIN"
            value={pinIngresado}
            onChange={(e) => setPinIngresado(e.target.value)}
            style={{ padding: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '18px', fontWeight: '700', textAlign: 'center', letterSpacing: '4px' }}
          />
          <button
            type="submit"
            style={{ padding: '14px', backgroundColor: '#0f172a', color: '#38bdf8', fontWeight: '800', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' }}
          >
            Desbloquear Placa
          </button>
        </form>
        {mensaje && <p style={{ color: '#ef4444', fontWeight: '600', marginTop: '14px', fontSize: '14px' }}>{mensaje}</p>}
      </main>
    );
  }

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '480px', margin: '30px auto', padding: '24px', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
