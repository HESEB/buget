(() => {
  const fieldScreen = document.getElementById('fieldScreen');
  const radarBtn = document.getElementById('radarBtn');
  const areaName = document.getElementById('areaName');
  const pointText = document.getElementById('pointText');

  let points = 0;
  let signal = 0;
  let areaIndex = 0;
  const areas = ['숲', '초원', '강가', '도시'];
  const marks = ['○○○○', '●○○○', '●●○○', '●●●○', '●●●●'];

  const notice = document.createElement('div');
  notice.className = 'radarNotice';
  notice.textContent = '📡 레이더 준비';
  fieldScreen.appendChild(notice);

  function refresh() {
    signal = (signal + 1) % marks.length;
    if (signal === 0) areaIndex = (areaIndex + 1) % areas.length;
    areaName.textContent = areas[areaIndex];
    radarBtn.textContent = `📡 ${marks[signal]}`;
    if (signal === 4) {
      notice.textContent = '❗ 곤충 신호 발견! 화면을 탭하세요';
      notice.classList.add('show');
    } else {
      notice.textContent = '📡 신호 탐색 중 ' + marks[signal];
      notice.classList.add('show');
    }
    window.clearTimeout(refresh.timer);
    refresh.timer = window.setTimeout(() => notice.classList.remove('show'), 1200);
  }

  radarBtn.addEventListener('click', refresh);
  fieldScreen.addEventListener('click', () => {
    if (signal === 4) {
      points += 10;
      pointText.textContent = String(points);
      notice.textContent = '🦋 채집 성공! +10P';
      notice.classList.add('show');
      signal = 0;
      radarBtn.textContent = `📡 ${marks[signal]}`;
    }
  });
})();
