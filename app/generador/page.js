'use client';
import { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';

export default function GeneradorQR() {
  const [codigo, setCodigo] = useState('0001');
  const [logoTipo, setLogoTipo] = useState('wifi');
  const [colorQR, setColorQR] = useState('#000000');
  const previewRef = useRef(null);

  const urlCompleta = 'https:' + '//' + 'www.' + 'tapplus.' + 'com.ar/p/' + (codigo.trim() || '0001');

  const dibujarQR = async (canvas, size) => {
    await QRCode.toCanvas(canvas, urlCompleta, {
      width: size,
      margin: 2,
      errorCorrectionLevel: 'H',
      color: { dark: colorQR, light: '#ffffff' }
    });

    const ctx = canvas.getContext('2d');
    const c = size / 2;
    const esc = size / 2000;

    ctx.beginPath();
    ctx.arc(c, c, 260 * esc, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.lineWidth = 14 * esc;
    ctx.strokeStyle = '#e2e8f0';
    ctx.stroke();

    if (logoTipo === 'wifi') {
      ctx.strokeStyle = '#0284c7';
      ctx.fillStyle = '#0284c7';
      ctx.lineCap = 'round';
      ctx.lineWidth = 28 * esc;
      ctx.beginPath(); ctx.arc(c, c + 85 * esc, 65 * esc, Math.PI * 1.22, Math.PI * 1.78); ctx.stroke();
      ctx.beginPath(); ctx.arc(c, c + 85 * esc, 110 * esc, Math.PI * 1.22, Math.PI * 1.78); ctx.stroke();
      ctx.beginPath(); ctx.arc(c, c + 85 * esc, 155 * esc, Math.PI * 1.22, Math.PI * 1.78); ctx.stroke();
      ctx.beginPath(); ctx.arc(c, c + 85 * esc, 22 * esc, 0, Math.PI * 2); ctx.fill();
    } else if (logoTipo === 'google') {
      const r = 115 * esc;
      ctx.lineWidth = 48 * esc;
      ctx.lineCap = 'butt';
      ctx.strokeStyle = '#EA4335';
      ctx.beginPath(); ctx.arc(c, c, r, Math.PI * 1.15, Math.PI * 1.78); ctx.stroke();
      ctx.strokeStyle = '#FBBC05';
      ctx.beginPath(); ctx.arc(c, c, r, Math.PI * 0.85, Math.PI * 1.15); ctx.stroke();
      ctx.strokeStyle = '#34A853';
      ctx.beginPath(); ctx.arc(c, c, r, Math.PI * 0.22, Math.PI * 0.85); ctx.stroke();
      ctx.strokeStyle = '#4285F4';
      ctx.beginPath(); ctx.arc(c, c, r, 0, Math.PI * 0.22); ctx.stroke();
      ctx.fillStyle = '#4285F4';
      ctx.fillRect(c - 10 * esc, c - 24 * esc, r + 34 * esc, 48 * esc);
    } else if (logoTipo === 'instagram') {
      const b = 250 * esc;
      const x = c - b / 2;
      const y = c - b / 2;
      const g = ctx.createLinearGradient(x, y + b, x + b, y);
      g.addColorStop(0, '#f09433');
      g.addColorStop(0.5, '#dc2743');
      g.addColorStop(1, '#bc1888');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.roundRect(x, y, b, b, 60 * esc);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 20 * esc;
      ctx.beginPath(); ctx.arc(c, c, 62 * esc, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.arc(c + 78 * esc, c - 78 * esc, 16 * esc, 0, Math.PI * 2); ctx.fill();
    } else if (logoTipo === 'whatsapp') {
      ctx.beginPath(); ctx.arc(c, c, 130 * esc, 0, Math.PI * 2); ctx.fillStyle = '#25d366'; ctx.fill();
      ctx.font = '900 ' + Math.round(130 * esc) + 'px Arial, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('WA', c, c + 6 * esc);
    }
  };

  useEffect(() => {
    if (previewRef.current) dibujarQR(previewRef.current, 320);
  }, [codigo, logoTipo, colorQR]);

  const descargarQR = async () => {
    const canvas = document.createElement('canvas');
    await dibujarQR(canvas, 2000);
    const a = document.createElement('a');
    a.download = 'QR-' + (codigo.trim() || '0001') + '-' + logoTipo.toUpperCase() + '-TapPlus.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#090d16', color: '#ffffff', fontFamily: 'sans-serif', padding: '40px 20px' }}>
      <div style={{ maxWidth: '460px', margin: '0 auto', backgroundColor: '#111827', border: '1px solid #38bdf8', borderRadius: '20px', padding: '26px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '900', textAlign: 'center', marginBottom: '16px' }}>
          Generador QR <span style={{ color: '#38bdf8' }}>TapPlus</span>
        </h1>
        <label style={{ display: 'block', marginBottom: '14px', fontWeight: '700' }}>
          Número de placa / chip (ej: 0001):
          <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '10px', border: '1px solid #334155', backgroundColor: '#090d16', color: '#fff', fontSize: '18px', fontWeight: '800', textAlign: 'center' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '14px', fontWeight: '700' }}>
          Logo central del QR:
          <select value={logoTipo} onChange={(e) => setLogoTipo(e.target.value)} style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '10px', border: '1px solid #334155', backgroundColor: '#090d16', color: '#fff', fontSize: '15px', fontWeight: '700' }}>
            <option value="wifi">Wi-Fi (Placa #0001)</option>
            <option value="google">Google Reseñas (Placa #0002)</option>
            <option value="instagram">Instagram (Calco 40x40 #0003)</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </label>
        <label style={{ display: 'block', marginBottom: '16px', fontWeight: '700' }}>
          Color del QR:
          <input type="color" value={colorQR} onChange={(e) => setColorQR(e.target.value)} style={{ width: '100%', height: '42px', marginTop: '6px', borderRadius: '10px', border: '1px solid #334155', backgroundColor: '#090d16' }} />
        </label>
        <div style={{ textAlign: 'center', backgroundColor: '#ffffff', padding: '14px', borderRadius: '12px', marginBottom: '16px' }}>
          <canvas ref={previewRef} style={{ margin: '0 auto', maxWidth: '220px', height: 'auto' }} />
          <div style={{ color: '#090d16', fontSize: '12px', fontWeight: '700', marginTop: '8px' }}>{urlCompleta}</div>
        </div>
        <button onClick={descargarQR} style={{ width: '100%', padding: '15px', backgroundColor: '#38bdf8', color: '#090d16', fontWeight: '900', fontSize: '16px', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
          Descargar QR con Logo (2000x2000 px)
        </button>
      </div>
    </div>
  );
}
