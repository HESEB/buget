// 곤충 데이터: id, 이름, 희귀도, 설명
const insects = [
  {
    id: 'j_rhinobeetle',
    name: '장수풍뎅이',
    rarity: 'rare',
    desc: '커다란 뿔과 강한 힘을 가진 곤충으로 숲 속에서 주로 발견되며, 어린이들이 좋아합니다.'
  },
  {
    id: 'longhorn_beetle',
    name: '장수하늘소',
    rarity: 'rare',
    desc: '긴 더듬이가 특징인 딱정벌레로서, 검은 몸에 광택이 있으며 나무에서 서식합니다.'
  },
  {
    id: 'stag_beetle',
    name: '사슴벌레',
    rarity: 'rare',
    desc: '사슴뿔 같은 큰 턱을 가진 곤충으로, 나무 밑둥이나 숲에서 흔히 볼 수 있습니다.'
  },
  {
    id: 'jewel_beetle',
    name: '비단벌레',
    rarity: 'rare',
    desc: '금속성의 화려한 색을 띠는 곤충으로, 주로 나무 껍질 사이에서 생활합니다.'
  },
  {
    id: 'firefly',
    name: '반딧불이',
    rarity: 'rare',
    desc: '밤에 빛을 내는 곤충으로, 습지나 물가 근처에서 빛을 발하며 여름의 상징입니다.'
  },
  {
    id: 'praying_mantis',
    name: '사마귀',
    rarity: 'uncommon',
    desc: '초록빛 몸과 삼각형 머리를 가진 포식성 곤충으로, 앞발로 먹이를 잡습니다.'
  },
  {
    id: 'dragonfly',
    name: '잠자리',
    rarity: 'uncommon',
    desc: '긴 몸과 큰 날개를 가진 곤충으로 민첩하게 날아다니며 모기 등을 잡아먹습니다.'
  },
  {
    id: 'swallowtail_butterfly',
    name: '호랑나비',
    rarity: 'uncommon',
    desc: '노란색과 검은색 무늬의 큰 나비로, 호랑이의 무늬를 닮아 이름이 붙었습니다.'
  },
  {
    id: 'dung_beetle',
    name: '소똥구리',
    rarity: 'uncommon',
    desc: '동그란 배설물을 굴려 이동하는 것으로 유명한 곤충으로, 자연을 청소하는 역할을 합니다.'
  },
  {
    id: 'stink_bug',
    name: '노린재',
    rarity: 'uncommon',
    desc: '삼각형 모양의 몸을 가진 곤충으로, 위협을 받으면 불쾌한 냄새를 내뿜습니다.'
  },
  {
    id: 'cricket',
    name: '귀뚜라미',
    rarity: 'uncommon',
    desc: '검은 색의 작은 곤충으로, 뒤다리를 비벼서 독특한 울음소리를 냅니다.'
  },
  {
    id: 'katydid',
    name: '방아깨비',
    rarity: 'uncommon',
    desc: '초록색 몸과 긴 뒷다리를 가진 곤충으로, 뛰는 힘이 매우 강합니다.'
  },
  {
    id: 'honeybee',
    name: '꿀벌',
    rarity: 'common',
    desc: '꽃의 꿀을 모아 벌집을 만드는 사회성 곤충으로, 식물의 수정에 큰 역할을 합니다.'
  },
  {
    id: 'butterfly',
    name: '나비',
    rarity: 'common',
    desc: '다양한 색과 무늬를 가진 날개를 가진 곤충으로, 꽃 주위를 날아다닙니다.'
  },
  {
    id: 'cicada',
    name: '매미',
    rarity: 'common',
    desc: '여름에 크게 울어대는 곤충으로, 애벌레 시절을 땅속에서 오랫동안 보냅니다.'
  },
  {
    id: 'grasshopper',
    name: '메뚜기',
    rarity: 'common',
    desc: '긴 뒷다리로 멀리 뛰어오르는 곤충으로, 주로 풀을 먹습니다.'
  },
  {
    id: 'ant',
    name: '개미',
    rarity: 'common',
    desc: '작은 몸과 강한 협동력으로 잘 알려진 사회성 곤충으로, 무리를 지어 살아갑니다.'
  },
  {
    id: 'ladybug',
    name: '무당벌레',
    rarity: 'common',
    desc: '빨간색 배경에 검은 점이 있는 곤충으로, 해충을 잡아먹어 농사에 도움이 됩니다.'
  },
  {
    id: 'fly',
    name: '파리',
    rarity: 'common',
    desc: '집 주변에서 흔히 볼 수 있는 곤충으로, 음식물 위에 앉는 것을 좋아합니다.'
  },
  {
    id: 'mosquito',
    name: '모기',
    rarity: 'common',
    desc: '피를 빨아먹는 곤충으로, 여름철 습한 곳에서 많이 발생합니다.'
  }
];

// GPS coordinates storage
let gpsCoords = null;
// origin coordinates to map player's relative movement
let originCoords = null;

// 현재 선택된 곤충 정보 (포획 모달용)
let currentInsect = null;
let currentElement = null;

// 스폰 인터벌 관리
let spawnIntervalId = null;

// 원하는 곤충 스폰 개수 (한 번에 나타날 최대 수)
const SPAWN_COUNT = 8;

// 야간/계절별 가중치 설정
// 특정 곤충은 야간에 출현 빈도를 높이거나 낮출 수 있도록 설정
const nightBoost = {
  firefly: 3,     // 반딧불이는 야간에 3배 확률
  mosquito: 2,    // 모기는 야간에 2배
  cicada: 0.5     // 매미는 야간에 적게
};

// 계절별 가중치 (spring, summer, autumn, winter)
// 계절별 출현률을 곤충별로 조정한다. 기본값은 1
const seasonBoost = {
  spring: { butterfly: 2, ladybug: 1.5 },
  summer: { cicada: 2, firefly: 2, dragonfly: 1.5 },
  autumn: { stink_bug: 2, grasshopper: 1.5 },
  winter: { mosquito: 0.2, firefly: 0.1 }
};

/**
 * 현재 날짜를 기준으로 계절을 반환한다.
 * 3~5월: spring, 6~8월: summer, 9~11월: autumn, 12~2월: winter
 */
function getSeason() {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'autumn';
  return 'winter';
}

/**
 * 곤충의 기본 희귀도 가중치 반환
 */
function getBaseWeight(insect) {
  switch (insect.rarity) {
    case 'common': return 1;
    case 'uncommon': return 0.5;
    case 'rare': return 0.2;
    default: return 1;
  }
}

/**
 * 곤충의 전체 가중치 계산 (희귀도, 야간/주간, 계절 반영)
 */
function computeInsectWeight(insect) {
  let weight = getBaseWeight(insect);
  // 시간 가중치 (야간일 때 특정 곤충 가중치 조정)
  if (isNightTime() && nightBoost[insect.id]) {
    weight *= nightBoost[insect.id];
  }
  // 주간일 때 야간 부스트를 반영하지 않지만 일부는 낮출 수 있음
  if (!isNightTime() && nightBoost[insect.id] && nightBoost[insect.id] < 1) {
    weight *= nightBoost[insect.id];
  }
  // 계절 가중치
  const season = getSeason();
  if (seasonBoost[season] && seasonBoost[season][insect.id]) {
    weight *= seasonBoost[season][insect.id];
  }
  return weight;
}

/**
 * 주어진 가중치 배열을 이용해 하나의 인덱스를 랜덤 선택한다.
 * @param {Array<number>} weights
 */
function weightedRandomIndex(weights) {
  const total = weights.reduce((sum, w) => sum + w, 0);
  let r = Math.random() * total;
  for (let i = 0; i < weights.length; i++) {
    if (r < weights[i]) return i;
    r -= weights[i];
  }
  return weights.length - 1;
}

// 가방 아이템 목록
const bagItems = [
  { id: 'glove', name: '포획 장갑', desc: '포획 성공률을 약간 향상시켜주는 아이템입니다.' },
  { id: 'bait', name: '먹이', desc: '곤충을 유인할 수 있는 먹이입니다.' },
  { id: 'flash', name: '플래시', desc: '밤에도 곤충을 발견할 수 있게 해주는 손전등입니다.' },
  { id: 'lure', name: '루어', desc: '주변에 곤충이 더 많이 나타나도록 합니다.' }
];

// 가방 아이템 개수 및 장갑 사용 수
let bagCounts = {};
let gloveUses = 0;

// 마지막 자동 회복 날짜 (YYYY-MM-DD)
let lastRecoveryDate = null;

// 아이템 효과 상태
let baitEffect = false;
let lureEffectExpire = 0;
let flashEffectExpire = 0;

// 설정 값
let settings = { sound: true, nightMode: false };

/**
 * 데이터 로드 및 저장 함수
 */
function loadBag() {
  try {
    const data = JSON.parse(localStorage.getItem('bag')) || {};
    bagCounts = data.counts || { glove: 2, bait: 2, flash: 1, lure: 1 };
    gloveUses = data.gloveUses != null ? data.gloveUses : 3;
    lastRecoveryDate = data.lastRecoveryDate || null;
  } catch (e) {
    bagCounts = { glove: 2, bait: 2, flash: 1, lure: 1 };
    gloveUses = 3;
    lastRecoveryDate = null;
  }
  // 일일 자동 회복 처리
  maybeRecoverDailyItems();
}

function saveBag() {
  const data = { counts: bagCounts, gloveUses: gloveUses, lastRecoveryDate: lastRecoveryDate };
  localStorage.setItem('bag', JSON.stringify(data));
}

/**
 * 일일 아이템 자동 회복을 수행한다. 하루에 한 번 실행되며 장갑과 아이템을 소량 회복한다.
 */
function maybeRecoverDailyItems() {
  const today = new Date().toISOString().split('T')[0];
  if (lastRecoveryDate !== today) {
    // 하루에 한 번 기본 아이템을 회복
    bagCounts.glove = (bagCounts.glove || 0) + 1;
    bagCounts.bait = (bagCounts.bait || 0) + 1;
    bagCounts.flash = (bagCounts.flash || 0) + 0; // 플래시는 드물게 회복
    bagCounts.lure = (bagCounts.lure || 0) + 1;
    // 장갑 사용 가능 수 소폭 회복
    gloveUses += 2;
    // 업데이트 날짜 저장
    lastRecoveryDate = today;
    saveBag();
    // 가방 모달이 열려 있는 경우 갱신
    populateBag();
    alert('아이템이 자동으로 회복되었습니다. 가방을 확인하세요!');
  }
}

function loadSettings() {
  try {
    const data = JSON.parse(localStorage.getItem('settings')) || {};
    settings.sound = data.sound != null ? data.sound : true;
    settings.nightMode = data.nightMode != null ? data.nightMode : false;
  } catch (e) {
    settings = { sound: true, nightMode: false };
  }
}

function saveSettings() {
  localStorage.setItem('settings', JSON.stringify(settings));
}

/**
 * 설정 적용 (야간 모드)
 */
function applySettings() {
  const mapEl = document.getElementById('map');
  const nightToggle = document.getElementById('nightModeToggle');
  const soundToggle = document.getElementById('soundToggle');
  if (mapEl) {
    if (settings.nightMode) {
      mapEl.classList.add('night-mode');
    } else {
      mapEl.classList.remove('night-mode');
    }
  }
  if (nightToggle) nightToggle.checked = settings.nightMode;
  if (soundToggle) soundToggle.checked = settings.sound;
}

/**
 * 현재 시간이 야간인지 여부 (06~18시 사이만 주간으로 간주)
 */
function isNightTime() {
  const hour = new Date().getHours();
  return hour < 6 || hour >= 18;
}

// 도감 데이터 (localStorage 저장용)
let dex = {};

function loadDex() {
  const data = localStorage.getItem('dex');
  dex = data ? JSON.parse(data) : {};
}

function saveDex() {
  localStorage.setItem('dex', JSON.stringify(dex));
}

function spawnInsects() {
  const map = document.getElementById('map');
  // clear existing insects
  map.querySelectorAll('.insect').forEach(el => el.remove());
  const mapRect = map.getBoundingClientRect();
  // lure 효과 지속 중이면 스폰 개수 증가
  const multiplier = Date.now() < lureEffectExpire ? 2 : 1;
  const totalToSpawn = SPAWN_COUNT * multiplier;
  // 사전에 가중치 배열 계산
  const weights = insects.map(computeInsectWeight);
  for (let i = 0; i < totalToSpawn; i++) {
    const idx = weightedRandomIndex(weights);
    const insect = insects[idx];
    const img = document.createElement('img');
    img.src = `assets/insects/${insect.id}.png`;
    img.alt = insect.name;
    img.className = 'insect';
    // random position within map area (subtract icon size)
    const x = Math.random() * (mapRect.width - 40);
    const y = Math.random() * (mapRect.height - 40);
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.addEventListener('click', () => openCaptureModal(img, insect));
    map.appendChild(img);
  }
  // 아이템 박스 스폰
  spawnItems();
}

/**
 * 맵에 랜덤 아이템 박스를 스폰한다. 기존 박스를 제거하고 일정 확률로 새로 생성한다.
 */
function spawnItems() {
  const map = document.getElementById('map');
  // 기존 아이템 제거
  map.querySelectorAll('.item').forEach(el => el.remove());
  // 30% 확률로 아이템 박스 생성
  if (Math.random() < 0.3) {
    const mapRect = map.getBoundingClientRect();
    const item = document.createElement('img');
    item.src = 'assets/chest.png';
    item.alt = '아이템 박스';
    item.className = 'item';
    item.style.width = '40px';
    item.style.height = '40px';
    const x = Math.random() * (mapRect.width - 40);
    const y = Math.random() * (mapRect.height - 40);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    item.style.position = 'absolute';
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => openItemBox(item));
    map.appendChild(item);
  }
}

/**
 * 아이템 박스를 열어서 랜덤 아이템을 획득한다.
 * 아이템 획득 후 박스를 제거하고 가방을 갱신한다.
 * @param {HTMLElement} itemElement 아이템 박스 요소
 */
function openItemBox(itemElement) {
  // 획득 가능한 아이템 목록 (glove 제외하고 잡을 수 있는 장갑 포함)
  const options = ['glove', 'bait', 'flash', 'lure'];
  const selected = options[Math.floor(Math.random() * options.length)];
  // 가방에 아이템 추가
  bagCounts[selected] = (bagCounts[selected] || 0) + 1;
  saveBag();
  populateBag();
  itemElement.remove();
  alert(`${bagItems.find(i => i.id === selected).name}을(를) 획득했습니다!`);
}

/**
 * 캡처 모달을 열어 가위바위보 선택을 진행한다
 * @param {HTMLElement} element 클릭한 곤충 이미지 요소
 * @param {Object} insect 곤충 데이터
 */
function openCaptureModal(element, insect) {
  // 포획 전 체크: 장갑 여부
  if (gloveUses <= 0) {
    alert('장갑이 없어 곤충을 잡을 수 없습니다. 가방에서 장갑을 사용하세요.');
    return;
  }
  // 야간 체크: 야간이지만 플래시 효과가 없으면 포획 불가
  if (isNightTime() && Date.now() > flashEffectExpire) {
    alert('야간에는 손전등이 필요합니다. 가방에서 플래시를 사용하세요.');
    return;
  }
  currentInsect = insect;
  currentElement = element;
  const modal = document.getElementById('capture-modal');
  const infoDiv = document.getElementById('capture-insect-info');
  infoDiv.innerHTML = '';
  // 곤충 이미지와 이름 표시
  const img = document.createElement('img');
  img.src = `assets/insects/${insect.id}.png`;
  img.alt = insect.name;
  const nameSpan = document.createElement('span');
  nameSpan.textContent = insect.name;
  infoDiv.appendChild(img);
  infoDiv.appendChild(nameSpan);
  // 결과 초기화
  document.getElementById('capture-result').textContent = '';
  modal.classList.remove('hidden');
}

/**
 * 가위바위보 결과 처리
 * @param {string} choice 사용자 선택 (rock/paper/scissors)
 */
function handleRps(choice) {
  if (!currentInsect || !currentElement) return;
  // 장갑 한 벌 소모
  if (gloveUses <= 0) {
    alert('장갑이 부족합니다. 가방에서 장갑을 사용하세요.');
    return;
  }
  gloveUses--;
  saveBag();
  populateBag(); // bag modal 갱신
  // 성공 확률 계산
  let chance = 0.3;
  if (baitEffect) {
    chance += 0.2;
    baitEffect = false;
  }
  const success = Math.random() < chance;
  const resultEl = document.getElementById('capture-result');
  if (success) {
    // 곤충 제거
    currentElement.remove();
    // 도감 업데이트
    dex[currentInsect.id] = (dex[currentInsect.id] || 0) + 1;
    saveDex();
    resultEl.textContent = `${currentInsect.name} 포획 성공!`;
    resultEl.style.color = '#28a745';
  } else {
    resultEl.textContent = `${currentInsect.name}을(를) 놓쳤습니다.`;
    resultEl.style.color = '#dc3545';
    // 실패해도 곤충은 잠시 사라지도록 제거
    currentElement.remove();
  }
  // 현재 선택 초기화
  currentInsect = null;
  currentElement = null;
  // 짧은 시간 후 모달 자동 종료
  setTimeout(() => {
    document.getElementById('capture-modal').classList.add('hidden');
  }, 1500);
}

// 도감 페이지 네비게이션용 변수
let dexKeys = [];
let dexCurrentIndex = 0;

/**
 * 도감 페이지를 갱신하여 한 곤충씩 보여준다
 */
function updateDexView() {
  // 모든 곤충을 페이지로 표시
  dexKeys = insects.map(i => i.id);
  if (dexKeys.length === 0) return;
  // 인덱스 범위 조정
  if (dexCurrentIndex < 0) dexCurrentIndex = dexKeys.length - 1;
  if (dexCurrentIndex >= dexKeys.length) dexCurrentIndex = 0;
  const id = dexKeys[dexCurrentIndex];
  const insect = insects.find(i => i.id === id);
  const count = dex[id] || 0;
  // 이미지 및 정보 업데이트
  const imgEl = document.getElementById('dex-image');
  imgEl.src = `assets/insects/${insect.id}.png`;
  imgEl.alt = insect.name;
  document.getElementById('dex-name').textContent = insect.name;
  document.getElementById('dex-desc').textContent = insect.desc;
  document.getElementById('dex-count').textContent = `잡은 마릿수: ${count}`;
  document.getElementById('dex-page').textContent = `${dexCurrentIndex + 1} / ${dexKeys.length}`;
}

function showDex() {
  dexCurrentIndex = 0;
  updateDexView();
  document.getElementById('dex-modal').classList.remove('hidden');
}

function hideDex() {
  document.getElementById('dex-modal').classList.add('hidden');
}

function getLocation() {
  const gpsInfo = document.getElementById('gps-info');
  if (!navigator.geolocation) {
    gpsInfo.textContent = 'Geolocation 지원 안 됨';
    return;
  }
  // Single retrieval to set initial position and subsequent updates via watchPosition
  navigator.geolocation.getCurrentPosition(
    position => {
      gpsCoords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // Set origin if not defined
      if (!originCoords) {
        originCoords = { ...gpsCoords };
      }
      gpsInfo.textContent = `GPS: 위도 ${gpsCoords.lat.toFixed(4)}, 경도 ${gpsCoords.lng.toFixed(4)}`;
      updatePlayerMarker();
    },
    error => {
      gpsInfo.textContent = 'GPS 사용 불가';
    }
  );
  // Watch position for continuous updates
  try {
    navigator.geolocation.watchPosition(
      position => {
        gpsCoords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        if (!originCoords) {
          originCoords = { ...gpsCoords };
        }
        gpsInfo.textContent = `GPS: 위도 ${gpsCoords.lat.toFixed(4)}, 경도 ${gpsCoords.lng.toFixed(4)}`;
        updatePlayerMarker();
      },
      err => {
        // do nothing on error
      }
    );
  } catch (e) {
    // watchPosition may fail if not supported
  }
}

/**
 * 일정 간격으로 곤충을 스폰하여 맵을 갱신한다.
 */
function startSpawning() {
  // 최초 스폰
  spawnInsects();
  // 기존 인터벌 제거
  if (spawnIntervalId) clearInterval(spawnIntervalId);
  // 20초 간격으로 재스폰
  spawnIntervalId = setInterval(() => {
    spawnInsects();
  }, 20000);
}

/**
 * 플레이어 마커 위치를 지도에서 GPS 좌표에 따라 업데이트한다.
 * 현재 위치를 기준(originCoords)으로 상대적 이동값을 계산하여 표시한다.
 */
function updatePlayerMarker() {
  if (!gpsCoords || !originCoords) return;
  const mapEl = document.getElementById('map');
  const marker = document.getElementById('player-marker');
  if (!mapEl || !marker) return;
  const rect = mapEl.getBoundingClientRect();
  // 지도 크기를 기준으로 적당한 스케일링 값 설정 (1e5 ~= 0.001도의 변화가 약 100픽셀 이동)
  const scale = 100000;
  const deltaLng = gpsCoords.lng - originCoords.lng;
  const deltaLat = gpsCoords.lat - originCoords.lat;
  const dx = deltaLng * scale;
  const dy = -deltaLat * scale; // 북쪽(위쪽) 방향으로 이동 시 y값 감소
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  let x = centerX + dx - marker.offsetWidth / 2;
  let y = centerY + dy - marker.offsetHeight / 2;
  // 경계 내에서만 표시
  x = Math.max(0, Math.min(rect.width - marker.offsetWidth, x));
  y = Math.max(0, Math.min(rect.height - marker.offsetHeight, y));
  marker.style.left = `${x}px`;
  marker.style.top = `${y}px`;
}

/**
 * 가방 리스트를 채운다
 */
function populateBag() {
  const list = document.getElementById('bag-list');
  list.innerHTML = '';
  // 장갑 사용 남은 수 표시를 위해 항목 이름에 추가
  bagItems.forEach(item => {
    const li = document.createElement('li');
    const infoSpan = document.createElement('span');
    let nameText = item.name;
    if (item.id === 'glove') {
      nameText += ` (소지 장갑: ${bagCounts.glove || 0}, 사용 가능: ${gloveUses})`;
    } else {
      nameText += ` (x${bagCounts[item.id] || 0})`;
    }
    infoSpan.textContent = nameText;
    const useBtn = document.createElement('button');
    useBtn.textContent = '사용';
    if ((bagCounts[item.id] || 0) <= 0) {
      useBtn.disabled = true;
    }
    useBtn.addEventListener('click', () => {
      useItem(item.id);
    });
    li.appendChild(infoSpan);
    li.appendChild(useBtn);
    list.appendChild(li);
  });
}

function showBag() {
  populateBag();
  document.getElementById('bag-modal').classList.remove('hidden');
}

function hideBag() {
  document.getElementById('bag-modal').classList.add('hidden');
}

/**
 * 설정 모달 보여주기
 */
function showSettings() {
  // 토글 값을 반영
  applySettings();
  document.getElementById('settings-modal').classList.remove('hidden');
}

function hideSettings() {
  document.getElementById('settings-modal').classList.add('hidden');
}

/**
 * 아이템 사용 처리
 */
function useItem(id) {
  if (!bagCounts[id] || bagCounts[id] <= 0) {
    alert('아이템이 없습니다.');
    return;
  }
  switch (id) {
    case 'glove':
      // 장갑 아이템 1개 사용 시 장갑 사용 수 증가
      gloveUses += 5;
      bagCounts[id]--;
      alert('포획 장갑을 착용했습니다. 장갑 사용 가능 수가 5 증가합니다.');
      break;
    case 'bait':
      baitEffect = true;
      bagCounts[id]--;
      alert('먹이를 사용했습니다. 다음 포획 성공률이 증가합니다.');
      break;
    case 'lure':
      lureEffectExpire = Date.now() + 30000; // 30초
      bagCounts[id]--;
      alert('루어를 설치했습니다. 잠시 동안 곤충이 더 많이 나타납니다.');
      // 즉시 재스폰하여 효과를 바로 보여주기
      spawnInsects();
      break;
    case 'flash':
      flashEffectExpire = Date.now() + 300000; // 5분
      bagCounts[id]--;
      alert('플래시를 켰습니다. 야간에도 곤충을 잡을 수 있습니다.');
      break;
    default:
      break;
  }
  saveBag();
  populateBag();
}

window.addEventListener('load', () => {
  // 데이터 로드
  loadDex();
  loadBag();
  loadSettings();
  // 설정 적용
  applySettings();
  // 위치 정보 가져오기
  getLocation();
  // 곤충 스폰 주기적으로 실행
  startSpawning();
  // window resize 시 재배치
  window.addEventListener('resize', spawnInsects);
  // 창 크기 변경 시 플레이어 마커 위치 재조정
  window.addEventListener('resize', updatePlayerMarker);
  // 도감 버튼 및 네비게이션
  document.getElementById('dexBtn').addEventListener('click', showDex);
  document.getElementById('closeDex').addEventListener('click', hideDex);
  const prevBtn = document.getElementById('prevDex');
  const nextBtn = document.getElementById('nextDex');
  if (prevBtn) prevBtn.addEventListener('click', () => { dexCurrentIndex--; updateDexView(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { dexCurrentIndex++; updateDexView(); });
  // 가방 버튼
  document.getElementById('bagBtn').addEventListener('click', showBag);
  document.getElementById('closeBag').addEventListener('click', hideBag);
  // 설정 버튼
  document.getElementById('settingsBtn').addEventListener('click', showSettings);
  document.getElementById('closeSettings').addEventListener('click', hideSettings);
  // 설정 토글
  const soundToggle = document.getElementById('soundToggle');
  const nightToggle = document.getElementById('nightModeToggle');
  if (soundToggle) {
    soundToggle.addEventListener('change', (e) => {
      settings.sound = e.target.checked;
      saveSettings();
      applySettings();
    });
  }
  if (nightToggle) {
    nightToggle.addEventListener('change', (e) => {
      settings.nightMode = e.target.checked;
      saveSettings();
      applySettings();
    });
  }
  // 가위바위보 버튼 이벤트
  document.querySelectorAll('.rps').forEach(btn => {
    btn.addEventListener('click', () => {
      handleRps(btn.dataset.choice);
    });
  });
  // 포획 모달 닫기
  document.getElementById('closeCapture').addEventListener('click', () => {
    document.getElementById('capture-modal').classList.add('hidden');
    // 선택한 곤충을 초기화
    currentInsect = null;
    currentElement = null;
  });
});
