// ── Translations ──────────────────────────────────────────────────────────────
const translations = {
  es: {
    'nav-features':       'Características',
    'nav-install':        'Instalación',
    'hero-h1':            'Quiz de <span class="bitcoin">Bitcoin</span><br/>para tu meetup',
    'hero-desc':          'Multijugador en tiempo real estilo Kahoot. Los participantes se unen desde su celular, responden preguntas sobre Bitcoin y el ganador recibe sats por Lightning Network.',
    'btn-github':         'Ver en GitHub',
    'btn-install':        'Cómo instalarlo',
    'demo-host-title':    'Presentador',
    'demo-host-desc':     'Crea la sala, muestra el QR y observa las respuestas en vivo',
    'demo-players-title': 'Jugadores',
    'demo-players-desc':  'Escanean el QR, ingresan su apodo y responden desde su celular',
    'demo-realtime-title':'Tiempo real',
    'demo-realtime-desc': 'Temporizador por pregunta · marcador live · avance automático',
    'demo-reward-title':  'Recompensa',
    'demo-reward-desc':   'El ganador recibe sats vía Lightning Network.',
    'section-features':   'Características',
    'feat-h2':            'Todo lo que necesitas para un meetup',
    'feat-subtitle':      'Funciona en cualquier red WiFi local. Sin servidores externos, sin cuentas, sin complicaciones.',
    'feat-1-title':       '~100 preguntas de Bitcoin',
    'feat-1-desc':        'Cubren blockchain, minería, Lightning Network, claves privadas, autocustodia y más — diseñadas para principiantes.',
    'feat-2-title':       'Puntuación por velocidad',
    'feat-2-desc':        'Respuesta correcta al instante = 100 pts. Al último segundo = 50 pts. Respuesta incorrecta = 0. La rapidez importa.',
    'feat-3-title':       'Flujo automático',
    'feat-3-desc':        'La pregunta termina cuando alguien acierta o todos respondieron. El siguiente turno inicia solo.',
    'feat-4-title':       'Marcador en vivo',
    'feat-4-desc':        'El presentador y la audiencia ven la clasificación actualizada después de cada pregunta.',
    'feat-5-title':       'Respuesta correcta en pantalla',
    'feat-5-desc':        'Al terminar cada pregunta, la respuesta correcta y su explicación se muestran en grande — ideal para proyector.',
    'feat-6-title':       'Pago Lightning',
    'feat-6-desc':        'Conecta tu wallet vía NWC o tu nodo LND. El ganador recibe sats directamente.',
    'feat-7-desc':        'Botones grandes, tipografía legible, optimizado para pantallas pequeñas. Funciona en cualquier navegador.',
    'feat-8-desc':        'GPL v3. Sin tracking, sin telemetría, sin servicios externos obligatorios. Tuyo para siempre.',
    'section-install':    'Instalación',
    'install-h2':         'Listo en 2 minutos',
    'install-subtitle':   'Node.js es el único requisito. Funciona en cualquier sistema operativo.',
    'step-1-h3':          'Clona el repositorio',
    'step-2-h3':          'Instala las dependencias',
    'step-3-h3':          'Configura el entorno',
    'step-3-code':        'cp .env.example .env\n# edita .env si quieres conectar Lightning',
    'step-4-h3':          'Inicia el servidor',
    'step-4-desc':        'Presentador: <code>http://localhost:3000/host.html</code> · Jugadores: <code>http://&lt;tu-IP-local&gt;:3000</code>',
    'lightning-h2':       'Paga al ganador en sats',
    'lightning-subtitle': 'Dos formas de conectar Lightning. Si no configuras ninguna, el servidor calcula el monto y el presentador paga manualmente.',
    'ln-badge':           'Recomendado',
    'nwc-desc':           'La opción más fácil. Solo necesitas una URL de conexión desde tu wallet. Sin certificados, sin puertos.',
    'nwc-li-4':           'Cualquier wallet con soporte NWC',
    'lnd-desc':           'Para quienes operan su propio nodo Bitcoin/Lightning. Requiere acceso al REST API de LND.',
    'lnd-li-3':           'LND_CERT (base64, opcional)',
    'modal-hint':         'clic en cualquier lugar para cerrar · esc',
  },
  en: {
    'nav-features':       'Features',
    'nav-install':        'Installation',
    'hero-h1':            '<span class="bitcoin">Bitcoin</span> Quiz<br/>for your meetup',
    'hero-desc':          'Real-time multiplayer, Kahoot-style. Players join from their phones, answer Bitcoin questions, and the winner gets sats via Lightning Network.',
    'btn-github':         'View on GitHub',
    'btn-install':        'How to install',
    'demo-host-title':    'Host',
    'demo-host-desc':     'Create the room, show the QR code and watch answers live',
    'demo-players-title': 'Players',
    'demo-players-desc':  'Scan the QR, enter their nickname and answer from their phone',
    'demo-realtime-title':'Real-time',
    'demo-realtime-desc': 'Timer per question · live scoreboard · auto-advance',
    'demo-reward-title':  'Reward',
    'demo-reward-desc':   'The winner gets sats via Lightning Network.',
    'section-features':   'Features',
    'feat-h2':            'Everything you need for a meetup',
    'feat-subtitle':      'Works on any local WiFi network. No external servers, no accounts, no hassle.',
    'feat-1-title':       '~100 Bitcoin questions',
    'feat-1-desc':        'Covering blockchain, mining, Lightning Network, private keys, self-custody and more — designed for beginners.',
    'feat-2-title':       'Speed scoring',
    'feat-2-desc':        'Instant correct answer = 100 pts. Last second = 50 pts. Wrong answer = 0. Speed matters.',
    'feat-3-title':       'Automatic flow',
    'feat-3-desc':        'The question ends when someone gets it right or everyone has answered. The next round starts on its own.',
    'feat-4-title':       'Live leaderboard',
    'feat-4-desc':        'The host and audience see the updated ranking after every question.',
    'feat-5-title':       'Correct answer on screen',
    'feat-5-desc':        'After each question, the correct answer and its explanation are shown large — perfect for a projector.',
    'feat-6-title':       'Lightning payment',
    'feat-6-desc':        'Connect your wallet via NWC or your LND node. The winner gets sats directly.',
    'feat-7-desc':        'Large buttons, legible typography, optimized for small screens. Works in any browser.',
    'feat-8-desc':        'GPL v3. No tracking, no telemetry, no mandatory external services. Yours forever.',
    'section-install':    'Installation',
    'install-h2':         'Ready in 2 minutes',
    'install-subtitle':   'Node.js is the only requirement. Works on any operating system.',
    'step-1-h3':          'Clone the repository',
    'step-2-h3':          'Install dependencies',
    'step-3-h3':          'Set up the environment',
    'step-3-code':        'cp .env.example .env\n# edit .env to connect Lightning',
    'step-4-h3':          'Start the server',
    'step-4-desc':        'Host: <code>http://localhost:3000/host.html</code> · Players: <code>http://&lt;local-IP&gt;:3000</code>',
    'lightning-h2':       'Pay the winner in sats',
    'lightning-subtitle': 'Two ways to connect Lightning. If neither is configured, the server calculates the amount and the host pays manually.',
    'ln-badge':           'Recommended',
    'nwc-desc':           'The easiest option. You just need a connection URL from your wallet. No certificates, no port forwarding.',
    'nwc-li-4':           'Any wallet with NWC support',
    'lnd-desc':           'For those running their own Bitcoin/Lightning node. Requires access to the LND REST API.',
    'lnd-li-3':           'LND_CERT (base64, optional)',
    'modal-hint':         'click anywhere to close · esc',
  }
};

let currentLang = 'es';

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.getElementById('btn-lang').textContent = lang === 'es' ? 'EN' : 'ES';
  attachCopyHandlers();
}

document.getElementById('btn-lang').addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

// ── Card zoom modal ───────────────────────────────────────────────────────────
function openCardModal(card) {
  const isLn      = card.classList.contains('ln-card');
  const isFeature = card.classList.contains('feature');
  const glowRgb   = isLn ? '255,119,0' : isFeature ? '76,201,240' : '57,255,20';
  const textColor = isFeature ? 'rgba(76,201,240,.85)' : isLn ? 'var(--text)' : 'rgba(57,255,20,.7)';
  const titleColor = isFeature ? 'var(--purple)' : isLn ? 'var(--orange)' : 'var(--text)';

  const icon  = card.querySelector('.icon')?.innerText || '';
  const badge = card.querySelector('.ln-badge')?.innerText || '';
  const title = card.querySelector('strong, h3')?.innerText || '';
  const desc  = card.querySelector('p')?.innerText || '';
  const items = [...card.querySelectorAll('ul li')].map(li => `<li>${li.innerText}</li>`).join('');
  const code  = card.querySelector('pre')?.innerText || '';
  const hint  = translations[currentLang]['modal-hint'];

  const overlay = document.createElement('div');
  overlay.className = 'card-modal-overlay';
  overlay.innerHTML = `
    <div class="card-modal-box" style="border-color:rgba(${glowRgb},.55);box-shadow:0 0 60px rgba(${glowRgb},${isLn ? '.45' : '.18'}),0 0 120px rgba(${glowRgb},${isLn ? '.2' : '.07'})">
      ${icon  ? `<div class="modal-icon">${icon}</div>` : ''}
      ${badge ? `<div class="modal-badge">${badge}</div>` : ''}
      ${title ? `<div class="modal-title" style="color:${titleColor}">${title}</div>` : ''}
      ${desc  ? `<div class="modal-desc" style="color:${textColor}">${desc}</div>` : ''}
      ${items ? `<ul class="modal-list" style="color:${textColor}">${items}</ul>` : ''}
      ${code  ? `<div class="modal-code">${code}</div>` : ''}
      <div class="card-modal-hint">${hint}</div>
    </div>`;

  function close() { overlay.remove(); document.removeEventListener('keydown', onKey); }
  function onKey(e) { if (e.key === 'Escape') close(); }
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', onKey);
  document.body.appendChild(overlay);

  overlay.querySelectorAll('.modal-code').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      navigator.clipboard.writeText(el.innerText).then(() => {
        el.classList.add('copied');
        setTimeout(() => el.classList.remove('copied'), 1000);
      });
    });
  });
}

document.querySelectorAll('.demo-card, .feature, .ln-card').forEach(card => {
  card.addEventListener('click', () => openCardModal(card));
});

// ── Copy on click ─────────────────────────────────────────────────────────────
function attachCopyHandlers() {
  document.querySelectorAll('pre, code').forEach(el => {
    if (el.dataset.copyBound) return;
    el.dataset.copyBound = '1';
    el.addEventListener('click', e => {
      e.stopPropagation();
      navigator.clipboard.writeText(el.innerText).then(() => {
        el.classList.add('copied');
        setTimeout(() => el.classList.remove('copied'), 1000);
      });
    });
  });
}

attachCopyHandlers();
