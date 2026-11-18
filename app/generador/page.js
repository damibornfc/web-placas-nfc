'use client';
import { useState, useRef } from 'react';

export default function GeneradorQR() {
  const [codigo, setCodigo] = useState('0001');
  const [logoTipo, setLogoTipo] = useState('wifi');
  const [colorQR, setColorQR] = useState('#000000');
  const [generando, setGenerando] = useState(false);
  const canvasRef = useRef(null);

const urlCompleta = 'https://tapplus.com.ar' + '/p/' + (codigo.trim() || '0001');
  const generarYDescargar = async () => {
    setGenerando(true);
    try {
      const size = 2000;
      const canvas = canvasRef.current;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');

    const qrApiUrl = 'https://api.' + '://qrserver.com' + size + 'x' + size + '&ecc=H&margin=2&color=' + colorQR.replace('#', '') + '&data=' + encodeURIComponent(urlCompleta);
      const qrImg = new Image();
      qrImg.crossOrigin = 'anonymous';
      await new Promise((resolve, reject) => {
        qrImg.onload = resolve;
        qrImg.onerror = reject;
        qrImg.src = qrApiUrl;
      });

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(qrImg, 0, 0, size, size);

      const centro = size / 2;
      const radioFondo = size * 0.135;

      ctx.save();
      ctx.beginPath();
      ctx.arc(centro, centro, radioFondo, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.lineWidth = 14;
      ctx.strokeStyle = '#e2e8f0';
      ctx.stroke();
      ctx.restore();

      if (logoTipo === 'wifi') {
        ctx.save();
        ctx.strokeStyle = '#0284c7';
        ctx.fillStyle = '#0284c7';
        ctx.lineCap = 'round';
        ctx.lineWidth = 28;
       ctx.beginPath(); ctx.arc(centro, centro + 85, 65, Math.PI * 1.22, Math.PI * 1.78); ctx.stroke();
        ctx.beginPath(); ctx.arc(centro, centro + 85, 110, Math.PI * 1.22, Math.PI * 1.78); ctx.stroke();
        ctx.beginPath(); ctx.arc(centro, centro + 85, 155, Math.PI * 1.22, Math.PI * 1.78); ctx.stroke();
        ctx.beginPath();
        ctx.arc(centro, centro + 85, 22, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      } else if (logoTipo === 'google') {
        ctx.save();
        ctx.font = '900 260px Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#4285F4';
        ctx.fillText('G', centro, centro + 14);
        ctx.restore();
      } else if (logoTipo === 'instagram') {
        ctx.save();
        const box = 250;
        const x = centro - box / 2;
        const y = centro - box / 2;
        const grad = ctx.createLinearGradient(x, y + box, x + box, y);
        grad.addColorStop(0, '#f09433');
        grad.addColorStop(0.5, '#dc2743');
        grad.addColorStop(1, '#bc1888');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, box, box, 60);
        ctx.fill();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.arc(centro, centro, 62, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(centro + 78, centro - 78, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      } else if (logoTipo === 'whatsapp') {
        ctx.save();
        ctx.beginPath();
        ctx.arc(centro, centro, 130, 0, Math.PI * 2);
        ctx.fillStyle = '#25d366';
        ctx.fill();
        ctx.font = '900 130px Arial, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('WA', centro, centro + 6);
        ctx.restore();
      }

      const enlaceDescarga = document.createElement('a');
enlaceDescarga.download = 'QR-' + codigo.trim() + '-' + logoTipo.toUpperCase() + '-TapPlus.png';
      enlaceDescarga.href = canvas.toDataURL('image/png');
      enlaceDescarga.click();
    } catch (err) {
      alert('Error al generar el QR. Verificá tu conexión.');
   
    setGenerando(false);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090d16', color: '#ffffff', fontFamily: 'system-ui, sans-serif', padding: '40px 20px' }}>
      <div style={{ maxWidth: '480px', margin: '0 auto', backgroundColor: '#111827', border: '1px solid #38bdf8', borderRadius: '20px', padding: '28px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '900', textAlign: 'center', marginBottom: '6px' }}>
          Generador QR <span style={{ color: '#38bdf8' }}>TapPlus</span>
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '13px', textAlign: 'center', marginBottom: '22px' }}>
          Descargá tus códigos en alta calidad (2000×2000 px) listos para imprimir o plottear.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <label style={{ fontSize: '14px', fontWeight: '700' }}>
            1. Número de placa / chip (ej: 0001):
            <input
              type="text"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '10px', border: '1px solid #334155', backgroundColor: '#090d16', color: '#ffffff', fontSize: '18px', fontWeight: '800', textAlign: 'center' }}
            />
          </label>

          <label style={{ fontSize: '14px', fontWeight: '700' }}>
            2. Ícono central del QR:
            <select
              value={logoTipo}
              onChange={(e) => setLogoTipo(e.target.value)}
              style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '10px', border: '1px solid #334155', backgroundColor: '#090d16', color: '#ffffff', fontSize: '15px', fontWeight: '700' }}
            >
              <option value="wifi">📶 Wi-Fi (Placa #0001)</option>
              <option value="google">⭐ Google Reseñas (Placa #0002)</option>
              <option value="instagram">📸 Instagram (Calco 40×40 #0003)</option>
              <option value="whatsapp">💬 WhatsApp</option>
            </select>
          </label>

          <label style={{ fontSize: '14px', fontWeight: '700' }}>
            3. Color de los puntos del QR:
            <input
              type="color"
              value={colorQR}
              onChange={(e) => setColorQR(e.target.value)}
              style={{ width: '100%', height: '44px', marginTop: '6px', borderRadius: '10px', border: '1px solid #334155', backgroundColor: '#090d16', cursor: 'pointer' }}
            />
          </label>

          <div style={{ backgroundColor: '#0f172a', padding: '12px', borderRadius: '10px', fontSize: '12px', color: '#38bdf8', textAlign: 'center', wordBreak: 'break-all' }}>
            URL grabada: <strong>{urlCompleta}</strong>
          </div>

          <button
            onClick={generarYDescargar}
            disabled={generando}
            style={{ padding: '15px', backgroundColor: '#38bdf8', color: '#090d16', fontWeight: '900', fontSize: '16px', border: 'none', borderRadius: '12px', cursor: 'pointer' }}
          >
            {generando ? 'Generando alta calidad...' : '⬇️ Descargar QR en Alta Calidad (PNG)'}
          </button>
        </div>

        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    </main>
  );
}
}
