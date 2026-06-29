(() => {
  const titleScreen = document.getElementById('titleScreen');
  const fieldScreen = document.getElementById('fieldScreen');
  const startBtn = document.getElementById('startBtn');
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const pointText = document.getElementById('pointText');

  const state = {
    running: false,
    points: 0,
    player: { x: 0, y: 0 },
    camera: { x: 0, y: 0, angle: 0 },
    input: { active: false, x: 0, y: 0, vx: 0, vy: 0 },
  };

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function showField() {
    titleScreen.classList.remove('active');
    fieldScreen.classList.add('active');
    state.running = true;
    resize();
  }

  function drawWorld(width, height) {
    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.rotate(-state.camera.angle);
    ctx.translate(-width / 2 - state.camera.x, -height / 2 - state.camera.y);

    ctx.fillStyle = '#72c978';
    ctx.fillRect(-2000, -2000, 4000, 4000);

    ctx.strokeStyle = 'rgba(255,255,255,.16)';
    ctx.lineWidth = 2;
    for (let x = -2000; x < 2000; x += 90) {
      ctx.beginPath();
      ctx.moveTo(x, -2000);
      ctx.lineTo(x, 2000);
      ctx.stroke();
    }
    for (let y = -2000; y < 2000; y += 90) {
      ctx.beginPath();
      ctx.moveTo(-2000, y);
      ctx.lineTo(2000, y);
      ctx.stroke();
    }

    ctx.font = '36px system-ui';
    for (let i = -12; i <= 12; i += 3) {
      for (let j = -12; j <= 12; j += 3) {
        ctx.fillText('🌳', i * 80, j * 80);
      }
    }
    ctx.restore();
  }

  function drawPlayer(width, height) {
    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.font = '68px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🧢', 0, 0);
    ctx.restore();
  }

  function tick() {
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    if (state.running) {
      state.camera.x += state.input.vx;
      state.camera.y += state.input.vy;
      state.camera.angle += state.input.vx * 0.002;
      state.input.vx *= 0.88;
      state.input.vy *= 0.88;
    }

    ctx.clearRect(0, 0, width, height);
    drawWorld(width, height);
    drawPlayer(width, height);
    pointText.textContent = String(state.points);
    requestAnimationFrame(tick);
  }

  canvas.addEventListener('pointerdown', (event) => {
    state.input.active = true;
    state.input.x = event.clientX;
    state.input.y = event.clientY;
    canvas.setPointerCapture(event.pointerId);
  });

  canvas.addEventListener('pointermove', (event) => {
    if (!state.input.active) return;
    const dx = event.clientX - state.input.x;
    const dy = event.clientY - state.input.y;
    state.input.x = event.clientX;
    state.input.y = event.clientY;
    state.input.vx = -dx * 0.75;
    state.input.vy = -dy * 0.75;
  });

  canvas.addEventListener('pointerup', () => { state.input.active = false; });
  canvas.addEventListener('pointercancel', () => { state.input.active = false; });
  window.addEventListener('resize', resize);
  startBtn.addEventListener('click', showField);
  startBtn.addEventListener('touchend', (event) => { event.preventDefault(); showField(); }, { passive: false });

  resize();
  tick();
})();
