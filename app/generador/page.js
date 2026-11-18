'use client';
import { useState } from 'react';

export default function GeneradorQR() {
  const [codigo, setCodigo] = useState('0001');
  const [logoTipo, setLogoTipo] = useState('wifi');
  const [colorQR, setColorQR] = useState('#000000');

  const urlCompleta = 'https:' + '//://tapplus.com.ar/p/' + (codigo.trim() || '0001');
  const qrVistaPrevia = 'https:' + '//://qrserver.com' + colorQR.replace('#', '') + '&data=' + encodeURIComponent(urlCompleta);

  const descargarQR = async () => {
    try {
      const size = 2000;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');

     const qrUrl = 'https:' + '//://qrserver.com' + colorQR.replace('#', '') + '&data=' + encodeURIComponent(urlCompleta);
      const img = new Image();
      img.crossOrigin = 'anonymous';
      await new Promise((res, rej) => {
        img.onload = res;
        img.onerror = rej;
        img.src = qrUrl;
      });

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);

      const c = size / 2;
      ctx.beginPath();
      ctx.arc(c, c, 260, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.lineWidth = 14;
      ctx.strokeStyle = '#e2e8f0';
      ctx.stroke();

      if (logoTipo === 'wifi') {
        ctx.strokeStyle = '#0284c7';
        ctx.fillStyle = '#0284c7';
        ctx.lineCap = 'round';
        ctx.lineWidth = 28;
        ctx.beginPath(); ctx.arc(c, c + 85, 65, Math.PI * 1.22, Math.PI * 1.78); ctx.stroke();
        ctx.beginPath(); ctx.arc(c, c + 85, 110, Math.PI * 1.22, Math.PI * 1.78); ctx.stroke();
        ctx.beginPath(); ctx.arc(c, c + 85, 155, Math.PI * 1.22, Math.PI * 1.78); ctx.stroke();
        ctx.beginPath(); ctx.arc(c, c + 85, 22, 0, Math.PI * 2); ctx.fill();
      } else if (logoTipo === 'google') {
        ctx.font = '900 260px Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#4285F4';
        ctx.fillText('G', c, c + 14);
      } else if (logoTipo === 'instagram') {
        const b = 250;
        const x = c - b / 2;
        const y = c - b / 2;
        const g = ctx.createLinearGradient(x, y + b, x + b, y);
        g.addColorStop(0, '#f09433');
        g.addColorStop(0.5, '#dc2743');
        g.addColorStop(1, '#bc1888');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.roundRect(x, y, b, b, 60);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 20;
        ctx.beginPath(); ctx.arc(c, c, 62, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath(); ctx.arc(c + 78, c - 78, 16, 0, Math.PI * 2); ctx.fill();
      } else if (logoTipo === 'whatsapp') {
        ctx.beginPath(); ctx.arc(c, c, 130, 0, Math.PI * 2); ctx.fillStyle = '#25d366'; ctx.fill();
        ctx.font = '900 130px Arial, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('WA', c, c + 6);
      }

      const a = document.createElement('a');
      a.download = 'QR-' + codigo.trim() + '-' + logoTipo.toUpperCase() + '-TapPlus.png';
      a.href = canvas.toDataURL('image/png');
      a.click();
    } catch (e) {
      alert('No se pudo descargar el QR. Revisá tu conexión.');
    }
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
          <img src={qrVistaPrevia} alt="Vista previa QR" style={{ width: '180px', height: '180px', margin: '0 auto' }} />
          <div style={{ color: '#090d16', fontSize: '12px', fontWeight: '700', marginTop: '8px' }}>{urlCompleta}</div>
        </div>
        <button onClick={descargarQR} style={{ width: '100%', padding: '15px', backgroundColor: '#38bdf8', color: '#090d16', fontWeight: '900', fontSize: '16px', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
          Descargar QR con Logo (2000x2000 px)
        </button>
      </div>
    </div>
  );
}
