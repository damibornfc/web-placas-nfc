'use client';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { supabase } from '../../../lib/supabase';

export default function PlacaPage() {
  const { codigo } = useParams();
  const searchParams = useSearchParams();
  const modoEdicionForzado = searchParams.get('editar') === 'true';

  const [placa, setPlaca] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [autenticado, setAutenticado] = useState(false);
  const [pinIngresado, setPinIngresado] = useState('');

  const [tipoDestino, setTipoDestino] = useState('url');
  const [urlDestino, setUrlDestino] = useState('');
  const [wifiSsid, setWifiSsid] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');
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

      setPlaca(data);
      setTipoDestino(data.tipo_destino || 'url');
      setUrlDestino(data.url_destino || '');
      setWifiSsid(data.wifi_ssid || '');
      setWifiPassword(data.wifi_password || '');

      if (data.activada && !modoEdicionForzado) {
        if (data.tipo_destino === 'url' && data.url_destino) {
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
    if (pinIngresado === placa.pin) {
      setAutenticado(true);
      setMensaje('');
    } else {
      setMensaje('PIN incorrecto. Intenta nuevamente.');
    }
  };

  const guardarConfiguracion = async (e) => {
    e.preventDefault();
    const pinFinal = placa.activada ? placa.pin : nuevoPin;

    if (!pinFinal || pinFinal.length < 4) {
      setMensaje('Por favor crea un PIN de al menos 4 números para proteger tu placa.');
      return;
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
      })
      .eq('codigo', codigo);

    if (error) {
      setMensaje('Error al guardar. Revisa los datos.');
    } else {
      alert('¡Placa configurada con éxito!');
      window.location.href = /p/${codigo};
    }
  };

  if (cargando) {
    return <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>Cargando...</div>;
  }

  if (!placa) {
    return <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>Placa no encontrada. Verifica el código.</div>;
  }

  if (placa.activada && !modoEdicionForzado && placa.tipo_destino === 'wifi') {
    return (
      <main style={{ fontFamily: 'sans-serif', maxWidth: '420px', margin: '40px auto', padding: '24px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '12px' }}>
        <h2>Conéctate a nuestro WiFi</h2>
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
          <a href={/p/${codigo}?editar=true} style={{ fontSize: '0.85rem', color: '#888' }}>Soy el dueño (Editar)</a>
        </div>
      </main>
    );
  }

  if (placa.activada && !autenticado) {
    return (
      <main style={{ fontFamily: 'sans-serif', maxWidth: '400px', margin: '40px auto', padding: '24px', textAlign: 'center' }}>
        <h2>Editar placa #{codigo}</h2>
        <p>Ingresa el PIN de seguridad que creaste al activar esta placa:</p>
        <form onSubmit={verificarPin}>
          <input
            type="password"
            placeholder="PIN de 4 dígitos"
            value={pinIngresado}
            onChange={(e) => setPinIngresado(e.target.value)}
            style={{ padding: '12px', fontSize: '1.1rem', width: '100%', marginBottom: '12px', borderRadius: '8px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem' }}>
            Desbloquear
          </button>
        </form>
        {mensaje && <p style={{ color: 'red', marginTop: '10px' }}>{mensaje}</p>}
      </main>
    );
  }

  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: '450px', margin: '30px auto', padding: '24px' }}>
      <h2 style={{ textAlign: 'center' }}>
        {placa.activada ? Configurar placa #${codigo} : ¡Activa tu nueva placa #${codigo}!}
      </h2>
      <p style={{ color: '#555', textAlign: 'center', marginBottom: '20px' }}>
        Elige a dónde quieres llevar a tus clientes cuando acerquen su celular o escaneen el QR.
      </p>

      <form onSubmit={guardarConfiguracion} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <label>
          <strong>¿Qué quieres compartir?</strong>
          <select
            value={tipoDestino}
            onChange={(e) => setTipoDestino(e.target.value)}
            style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #ccc' }}
          >
            <option value="url">Enlace web (Google Reseñas, Instagram, WhatsApp, YouTube)</option>
            <option value="wifi">Red WiFi del local</option>
          </select>
        </label>

        {tipoDestino === 'url' ? (
          <label>
            <strong>Pega el enlace aquí:</strong>
            <input
              type="text"
              required
              placeholder="Ej: https://g.page"
              value={urlDestino}
              onChange={(e) => setUrlDestino(e.target.value)}
              style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #ccc' }}
            />
          </label>
        ) : (
          <>
            <label>
              <strong>Nombre de tu red WiFi:</strong>
              <input
                type="text"
                required
                placeholder="Ej: Cafe_Clientes"
                value={wifiSsid}
                onChange={(e) => setWifiSsid(e.target.value)}
                style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #ccc' }}
              />
            </label>
            <label>
              <strong>Contraseña del WiFi:</strong>
              <input
                type="text"
                required
                placeholder="Clave del WiFi"
                value={wifiPassword}
                onChange={(e) => setWifiPassword(e.target.value)}
                style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #ccc' }}
              />
            </label>
          </>
        )}

        {!placa.activada && (
          <label>
            <strong>Crea un PIN de seguridad (4 números):</strong>
            <input
              type="text"
              required
              maxLength={6}
              placeholder="Ej: 1234"
              value={nuevoPin}
              onChange={(e) => setNuevoPin(e.target.value)}
              style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #ccc' }}
            />
            <small style={{ color: '#666' }}>Guárdalo bien: te servirá si más adelante quieres cambiar el enlace.</small>
          </label>
        )}

        <button type="submit" style={{ padding: '14px', backgroundColor: '#2563eb', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer', marginTop: '10px' }}>
          Guardar y Activar Placa
        </button>
      </form>
      {mensaje && <p style={{ color: 'red', textAlign: 'center', marginTop: '12px' }}>{mensaje}</p>}
    </main>
  );
}
