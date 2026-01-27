// 곤충 데이터: id, 이름, 희귀도, 설명
const insects = [
  { id: 'saw_stag_beetle', name: '톱사슴벌레', rarity: 'rare', desc: '큰 톱니처럼 생긴 턱이 특징인 사슴벌레다. 숲속 썩은 나무 근처에서 주로 발견된다. 수컷은 영역 다툼 시 턱을 사용한다.' },
  { id: 'small_stag_beetle', name: '애사슴벌레', rarity: 'rare', desc: '사슴벌레류 중 비교적 작은 종이다. 온순한 성격으로 나무 수액을 먹는다. 밤에 활동하는 야행성 곤충이다.' },
  { id: 'flat_stag_beetle', name: '넙적사슴벌레', rarity: 'rare', desc: '몸이 넓고 납작한 형태의 사슴벌레다. 나무껍질 아래에 숨어 생활한다. 환경 변화에 비교적 강하다.' },
  { id: 'j_rhinobeetle', name: '장수풍뎅이', rarity: 'rare', desc: '강한 힘을 가진 대표적인 풍뎅이다. 참나무 수액을 좋아한다. 유충은 부엽토에서 자란다.' },
  { id: 'jewel_beetle', name: '비단벌레', rarity: 'rare', desc: '금속처럼 반짝이는 몸이 특징이다. 여름철 산림 지역에서 드물게 보인다. 보호가 필요한 희귀 곤충이다.' },
  { id: 'dung_beetle', name: '쇠똥구리', rarity: 'uncommon', desc: '동물의 배설물을 굴려 이용한다. 토양을 비옥하게 만든다. 생태계에 중요한 역할을 한다.' },
  { id: 'green_flower_beetle', name: '풀색꽃무지', rarity: 'rare', desc: '초록빛 광택이 있는 꽃무지다. 꽃가루나 수액을 먹는다. 낮에 자주 활동한다.' },
  { id: 'spotted_flower_beetle', name: '점박이꽃무지', rarity: 'rare', desc: '검은 몸에 흰 점이 있는 꽃무지다. 정원이나 숲 가장자리에서 볼 수 있다. 비교적 관찰이 쉬운 종이다.' },
  { id: 'tiger_beetle', name: '길앞잡이', rarity: 'rare', desc: '빠르게 달리는 포식성 딱정벌레다. 땅 위를 활발히 이동한다. 곤충 사냥에 특화되어 있다.' },
  { id: 'diving_beetle', name: '물방개', rarity: 'rare', desc: '물속에서 생활하는 딱정벌레다. 공기를 저장해 잠수한다. 수서 곤충을 잡아먹는다.' },
  { id: 'longhorn_beetle', name: '장수하늘소', rarity: 'rare', desc: '긴 더듬이가 특징인 하늘소다. 주로 밤에 활동한다. 나무와 깊은 관련이 있다.' },
  { id: 'willow_longhorn', name: '버들하늘소', rarity: 'rare', desc: '버드나무 근처에서 서식한다. 몸이 가늘고 길다. 유충은 나무 속에서 자란다.' },
  { id: 'mulberry_longhorn', name: '뽕나무하늘소', rarity: 'rare', desc: '뽕나무에 피해를 주는 종이다. 농업 해충으로 분류된다. 활동력이 매우 뛰어나다.' },
  { id: 'striped_longhorn', name: '줄하늘소', rarity: 'rare', desc: '몸에 선명한 줄무늬가 있다. 꽃과 나무를 오가며 산다. 낮에도 활동한다.' },
  { id: 'giraffe_weevil', name: '거위벌레', rarity: 'rare', desc: '목이 길게 돌출된 독특한 벌레다. 잎을 말아 알을 낳는다. 특이한 생김새로 인기가 많다.' },
  { id: 'leaf_beetle', name: '잎벌레', rarity: 'uncommon', desc: '잎을 갉아먹는 딱정벌레다. 다양한 식물에 서식한다. 개체 수가 많다.' },
  { id: 'black_yellow_butterfly', name: '검은데노랑나비', rarity: 'rare', desc: '검고 노란 무늬가 강렬하다. 꽃 주변에서 흔히 볼 수 있다. 날개 비행이 부드럽다.' },
  { id: 'cabbage_butterfly', name: '배추흰나비', rarity: 'common', desc: '하얀 날개가 특징이다. 배추와 같은 채소 잎을 먹는다. 도심에서도 흔하다.' },
  { id: 'swallowtail_butterfly', name: '호랑나비', rarity: 'common', desc: '노란 바탕에 검은 줄무늬가 있다. 크고 화려한 나비다. 완전변태를 거친다.' },
  { id: 'blue_band_butterfly', name: '청띠신선나비', rarity: 'rare', desc: '푸른 띠 무늬가 있다. 숲속 그늘에서 활동한다. 비교적 희귀하다.' },
  { id: 'longtail_swallowtail', name: '긴꼬리제비나비', rarity: 'rare', desc: '꼬리가 길게 늘어진 날개가 특징이다. 날아다니는 모습이 우아하다. 꽃이 많은 곳에 산다.' },
  { id: 'hawk_moth', name: '박각시나비', rarity: 'rare', desc: '날개짓이 매우 빠르다. 벌처럼 공중에서 정지 비행을 한다. 주로 해질 무렵 활동한다.' },
  { id: 'spotted_lanternfly', name: '꽃매미', rarity: 'rare', desc: '화려한 날개색을 가지고 있다. 나무 수액을 흡즙한다. 외래 해충으로 알려져 있다.' },
  { id: 'large_cicada', name: '말매미', rarity: 'uncommon', desc: '몸집이 큰 매미다. 여름에 큰 소리를 낸다. 나무가 많은 곳에서 산다.' },
  { id: 'hairy_cicada', name: '털매미', rarity: 'uncommon', desc: '몸에 잔털이 많은 매미다. 숲속에서 주로 발견된다. 울음소리가 비교적 낮다.' },
  { id: 'true_cicada', name: '참매미', rarity: 'uncommon', desc: '여름을 대표하는 매미다. 도심에서도 쉽게 볼 수 있다. 수컷만 소리를 낸다.' },
  { id: 'scarlet_dragonfly', name: '고추잠자리', rarity: 'uncommon', desc: '붉은색 몸이 특징이다. 연못 주변에서 흔하다. 가을에 특히 많다.' },
  { id: 'giant_dragonfly', name: '장수잠자리', rarity: 'rare', desc: '몸집이 큰 잠자리다. 비행력이 뛰어나다. 수서 환경과 밀접하다.' },
  { id: 'damselfly', name: '실잠자리', rarity: 'common', desc: '가늘고 작은 잠자리다. 날개를 접고 쉰다. 청정 수역에 산다.' },
  { id: 'water_dragonfly', name: '물잠자리', rarity: 'uncommon', desc: '물가에 특화된 잠자리다. 수면 가까이를 날아다닌다. 수서 곤충을 잡아먹는다.' },
  { id: 'brown_dragonfly', name: '된장잠자리', rarity: 'uncommon', desc: '갈색 계열 몸색이다. 가을철에 많이 보인다. 도심 적응력이 높다.' },
  { id: 'honeybee', name: '꿀벌', rarity: 'common', desc: '집단생활을 하는 곤충이다. 수분에 큰 역할을 한다. 춤으로 정보를 전달한다.' },
  { id: 'giant_hornet', name: '장수말벌', rarity: 'rare', desc: '매우 공격적인 말벌이다. 독성이 강하다. 접근 시 주의가 필요하다.' },
  { id: 'bumblebee', name: '호박벌', rarity: 'common', desc: '몸이 둥글고 털이 많다. 온순한 편이다. 저온에서도 활동 가능하다.' },
  { id: 'fly', name: '파리', rarity: 'common', desc: '번식력이 매우 강하다. 유기물을 분해한다. 위생 문제를 일으키기도 한다.' },
  { id: 'mosquito', name: '모기', rarity: 'common', desc: '암컷이 피를 빠는 곤충이다. 여름철에 많다. 질병을 옮길 수 있다.' },
  { id: 'hoverfly', name: '꽃등에', rarity: 'uncommon', desc: '벌처럼 보이나 침이 없다. 공중에서 정지 비행을 한다. 익충으로 분류된다.' },
  { id: 'cricket', name: '귀뚜라미', rarity: 'common', desc: '밤에 우는 곤충이다. 수컷만 소리를 낸다. 풀밭에서 산다.' },
  { id: 'katydid', name: '방아깨비', rarity: 'common', desc: '잎처럼 생긴 날개를 가졌다. 뛰는 힘이 강하다. 위장 능력이 뛰어나다.' },
  { id: 'grasshopper', name: '메뚜기', rarity: 'common', desc: '긴 다리로 멀리 뛴다. 들판에 많이 산다. 초식성 곤충이다.' },
  { id: 'katydid_large', name: '여치', rarity: 'uncommon', desc: '방아깨비와 비슷한 곤충이다. 큰 울음소리를 낸다. 숲과 풀숲에 산다.' },
  { id: 'small_mantis', name: '좀사마귀', rarity: 'uncommon', desc: '체구가 작은 사마귀다. 포식성 곤충이다. 위장 능력이 뛰어나다.' },
  { id: 'orchid_mantis', name: '난초사마귀', rarity: 'rare', desc: '꽃처럼 생긴 사마귀다. 위장 사냥에 특화됐다. 관상 가치가 높다.' },
  { id: 'leaf_insect', name: '잎사귀벌레', rarity: 'rare', desc: '잎과 매우 닮아 있다. 정지해 있으면 구분이 어렵다. 천적 회피에 특화됐다.' },
  { id: 'stick_insect', name: '대벌레', rarity: 'rare', desc: '나뭇가지처럼 생겼다. 움직임이 느리다. 위장이 뛰어나다.' },
  { id: 'pill_bug', name: '공벌레', rarity: 'common', desc: '위험 시 몸을 둥글게 말린다. 습한 곳을 좋아한다. 낙엽을 분해한다.' },
  { id: 'centipede', name: '지네', rarity: 'rare', desc: '다리가 많고 빠르다. 포식성 절지동물이다. 독을 가진 종도 있다.' },
  { id: 'house_centipede', name: '돈벌레', rarity: 'common', desc: '집 안에서 종종 발견된다. 해충을 잡아먹는다. 익충으로 분류된다.' },
  { id: 'beetle_grub', name: '풍이', rarity: 'uncommon', desc: '곤충 유충을 통칭한다. 흙속에서 생활한다. 성충으로 변태한다.' },
  { id: 'giant_water_bug', name: '물장군', rarity: 'rare', desc: '물속 최상위 포식자다. 강한 앞다리를 가졌다. 물속 곤충을 잡는다.' },
  { id: 'water_strider', name: '소금쟁이', rarity: 'common', desc: '물 위를 걸어다닌다. 수면 장력을 이용한다. 작은 곤충을 사냥한다.' },
  { id: 'mole_cricket', name: '땅강아지', rarity: 'common', desc: '땅을 파고 산다. 울음소리가 특징이다. 농작물에 피해를 주기도 한다.' },
  { id: 'isopod', name: '겟강구', rarity: 'common', desc: '습한 곳에 사는 갑각류다. 분해자 역할을 한다. 공벌레와 유사하다.' }
];

// -----------------------------
// 환경 및 맵 처리

// 환경 목록과 각 환경별 한글 이름, 배경 이미지 파일, 출현 가능한 곤충 목록을 정의합니다.
const environments = [
  { id: 'mountain', name: '산', image: 'map_mountain.png' },
  { id: 'field',    name: '들', image: 'map_field.png' },
  { id: 'city',     name: '도시', image: 'map_city.png' },
  { id: 'river',    name: '강', image: 'map_river.png' },
  { id: 'sea',      name: '바다', image: 'map_sea.png' },
  { id: 'park',     name: '공원', image: 'map_park.png' }
];

// 환경별 출현 가능한 곤충 ID 목록을 지정합니다. 중복 환경이나 여러 환경에 등장 가능한 곤충은 여러 배열에 넣을 수 있습니다.
const environmentMapping = {
  mountain: [
    'saw_stag_beetle','small_stag_beetle','flat_stag_beetle','j_rhinobeetle','jewel_beetle','dung_beetle','green_flower_beetle','spotted_flower_beetle','tiger_beetle','longhorn_beetle','willow_longhorn','mulberry_longhorn','striped_longhorn','giraffe_weevil','leaf_beetle','black_yellow_butterfly','blue_band_butterfly','longtail_swallowtail','hawk_moth','spotted_lanternfly','giant_dragonfly','large_cicada','hairy_cicada','true_cicada','giant_hornet','bumblebee','hoverfly','small_mantis','orchid_mantis','leaf_insect','stick_insect','centipede','beetle_grub'
  ],
  field: [
    'cabbage_butterfly','swallowtail_butterfly','grasshopper','katydid','katydid_large','cricket','leaf_insect','stick_insect','pill_bug','mole_cricket','isopod','small_mantis','honeybee','bumblebee'
  ],
  city: [
    'fly','mosquito','hoverfly','pill_bug','house_centipede','isopod','cabbage_butterfly','damselfly','brown_dragonfly'
  ],
  river: [
    'diving_beetle','giant_water_bug','water_strider','damselfly','giant_dragonfly','brown_dragonfly','scarlet_dragonfly'
  ],
  sea: [
    'isopod','pill_bug'
  ],
  park: [
    'black_yellow_butterfly','cabbage_butterfly','swallowtail_butterfly','blue_band_butterfly','longtail_swallowtail','hawk_moth','spotted_lanternfly','damselfly','brown_dragonfly','scarlet_dragonfly','grasshopper','katydid','katydid_large','cricket','honeybee','bumblebee','leaf_beetle','spotted_flower_beetle','hoverfly','pill_bug','leaf_insect','stick_insect'
  ]
};

// 현재 환경과 해당 날짜를 저장할 변수
let currentEnvironment = null;
let environmentDate = null;

/**
 * 오늘 날짜에 따라 환경을 로드하거나 새로 선택한다.
 * 로컬 스토리지에 저장하여 하루에 한 번만 랜덤 환경을 선택한다.
 */
function loadEnvironment() {
  try {
    const data = JSON.parse(localStorage.getItem('environment')) || {};
    const today = new Date().toISOString().split('T')[0];
    if (data.date !== today) {
      // 새로운 날짜면 랜덤 환경 선택
      const idx = Math.floor(Math.random() * environments.length);
      currentEnvironment = environments[idx].id;
      environmentDate = today;
      localStorage.setItem('environment', JSON.stringify({ env: currentEnvironment, date: today }));
    } else {
      // 기존 저장된 환경 사용
      currentEnvironment = data.env || environments[0].id;
      environmentDate = data.date;
    }
  } catch (e) {
    // 에러 발생 시 기본 환경 선택
    currentEnvironment = environments[0].id;
    environmentDate = new Date().toISOString().split('T')[0];
    localStorage.setItem('environment', JSON.stringify({ env: currentEnvironment, date: environmentDate }));
  }
  // 환경 UI 갱신
  updateEnvironmentDisplay();
}

/**
 * 현재 환경에 맞게 맵 배경과 환경 텍스트를 업데이트한다.
 */
function updateEnvironmentDisplay() {
  const envObj = environments.find(e => e.id === currentEnvironment) || environments[0];
  // 배경 이미지는 월드 렌더링 시 world_map으로 설정되므로 여기서는 변경하지 않음
  const envInfo = document.getElementById('env-info');
  if (envInfo) {
    envInfo.textContent = `환경: ${envObj.name}`;
  }
}

// -----------------------------
// GPS coordinates storage
let gpsCoords = null;
// origin coordinates to map player's relative movement (deprecated in torus world)
let originCoords = null;

// -----------------------------
// 월드 좌표 및 토러스 월드 구현
// 월드 크기 (약 5km를 5000 단위로 정규화)
const WORLD_SIZE = 5000;
// 하루마다 결정되는 시작 월드 위치
let startWorldPos = { x: 0, y: 0 };
// 플레이어의 현재 월드 위치
let playerWorldPos = { x: 0, y: 0 };
// 이전 GPS 좌표 (월드 좌표 계산용)
let prevGPSCoords = null;
// 현재 화면에 표시되고 있는 곤충과 아이템 목록
let activeInsects = [];
let activeItems = [];

// -----------------------------------
// 게임 상태 및 줌 레벨 관리
// 게임이 시작되었는지 여부 (타이틀 화면 클릭 후 true)
let gameStarted = false;
// 현재 줌 레벨: 화면 너비에 표시될 월드 단위 거리(미터).
// 값이 작을수록 더 확대되어 플레이어 주변의 좁은 영역(1~2m)을 보여준다.
// 초기에 너무 멀리 보이는 문제를 개선하기 위해 기본값을 10으로 설정한다.
let zoomLevel = 10;
// 최소/최대 줌 레벨을 정의한다. 최소는 1m까지 줄일 수 있고,
// 최대는 월드 전체를 한 화면에 표시할 수 있도록 WORLD_SIZE로 설정한다.
const MIN_ZOOM_LEVEL = 1;
const MAX_ZOOM_LEVEL = WORLD_SIZE;
// 핀치 줌 계산용 변수 (초기 두 손가락 거리와 줌 레벨)
let pinchStartDist = null;
let pinchStartZoom = null;

/**
 * 줌 레벨을 한계 내로 클램프한다.
 * @param {number} z 후보 줌 레벨
 * @returns {number} 클램프된 줌 레벨
 */
function clampZoom(z) {
  if (z < MIN_ZOOM_LEVEL) return MIN_ZOOM_LEVEL;
  if (z > MAX_ZOOM_LEVEL) return MAX_ZOOM_LEVEL;
  return z;
}

/**
 * 마우스 휠 줌 핸들러. deltaY 값에 따라 줌 인/아웃을 수행한다.
 * @param {WheelEvent} e 
 */
function handleWheelZoom(e) {
  // 마우스 스크롤 시 페이지 스크롤을 방지
  e.preventDefault();
  // deltaY 양수면 줌 아웃, 음수면 줌 인. 비율에 따라 조정
  const factor = 1 + (e.deltaY * 0.001);
  zoomLevel = clampZoom(zoomLevel * factor);
  renderWorld();
}

/**
 * 핀치 시작 시 초기 거리와 줌 레벨 저장
 * @param {TouchEvent} e 
 */
function handlePinchStart(e) {
  if (e.touches && e.touches.length === 2) {
    pinchStartDist = Math.hypot(
      e.touches[0].pageX - e.touches[1].pageX,
      e.touches[0].pageY - e.touches[1].pageY
    );
    pinchStartZoom = zoomLevel;
  }
}

/**
 * 핀치 중일 때 줌 레벨을 업데이트
 * @param {TouchEvent} e 
 */
function handlePinchMove(e) {
  if (pinchStartDist && e.touches && e.touches.length === 2) {
    // 기본 스크롤 동작을 막아 페이지가 움직이지 않도록 한다
    e.preventDefault();
    const currentDist = Math.hypot(
      e.touches[0].pageX - e.touches[1].pageX,
      e.touches[0].pageY - e.touches[1].pageY
    );
    // 핀치 시작 거리 대비 현재 거리 비율로 줌 레벨 조정
    const ratio = pinchStartDist / currentDist;
    zoomLevel = clampZoom(pinchStartZoom * ratio);
    renderWorld();
  }
}

/**
 * 핀치 종료 시 상태 초기화
 * @param {TouchEvent} e 
 */
function handlePinchEnd(e) {
  // 손가락이 두 개 이하로 줄어들면 핀치가 끝난 것으로 처리
  if (!e.touches || e.touches.length < 2) {
    pinchStartDist = null;
    pinchStartZoom = null;
  }
}

/**
 * 타이틀 화면 클릭 후 게임을 시작하는 함수.
 * 데이터를 로드하고 지도 및 UI를 초기화한다.
 */
function startGame() {
  if (gameStarted) return;
  // 이미 게임이 시작되지 않았다면 상태 플래그를 설정한다.
  gameStarted = true;
  try {
    // 타이틀 화면 숨김
    const titleEl = document.getElementById('title-screen');
    if (titleEl) {
      titleEl.classList.add('hidden');
    }
    // 데이터 로드
    loadDex();
    loadBag();
    loadSettings();
    loadPoints();
    // 월드 시작 위치 로드
    loadWorldStart();
    // 시작 위치의 바이옴을 기반으로 현재 환경 설정 및 표시
    currentEnvironment = getBiomeFromWorld(playerWorldPos.x, playerWorldPos.y);
    updateEnvironmentDisplay();
    // 설정 적용
    applySettings();
    // GPS 위치 추적 시작
    getLocation();
    // 곤충 스폰 주기적으로 실행
    startSpawning();
    // 초기 월드 렌더링
    renderWorld();
    // 화면 크기 변경 시 재렌더링
    window.addEventListener('resize', () => {
      renderWorld();
    });
    // 줌 이벤트 바인딩 (휠, 핀치)
    const mapEl = document.getElementById('map');
    if (mapEl) {
      mapEl.addEventListener('wheel', handleWheelZoom, { passive: false });
      mapEl.addEventListener('touchstart', handlePinchStart, { passive: false });
      mapEl.addEventListener('touchmove', handlePinchMove, { passive: false });
      mapEl.addEventListener('touchend', handlePinchEnd);
    }
  } catch (err) {
    // 오류 발생 시 메시지를 표시하여 디버그한다.
    alert('게임 초기화 오류: ' + err.message);
    console.error(err);
  }
}

/**
 * 하루 기준으로 월드의 시작 위치를 로드하거나 생성한다.
 * 날짜가 바뀌면 랜덤하게 새로운 위치를 부여하고 로컬 스토리지에 저장한다.
 */
function loadWorldStart() {
  try {
    const data = JSON.parse(localStorage.getItem('worldStart')) || {};
    const today = new Date().toISOString().split('T')[0];
    if (data.date !== today || data.x == null || data.y == null) {
      // 새 날짜이면 월드 내 무작위 시작 위치 선택
      startWorldPos.x = Math.random() * WORLD_SIZE;
      startWorldPos.y = Math.random() * WORLD_SIZE;
      localStorage.setItem('worldStart', JSON.stringify({ x: startWorldPos.x, y: startWorldPos.y, date: today }));
    } else {
      startWorldPos.x = data.x;
      startWorldPos.y = data.y;
    }
    // 플레이어 월드 위치 초기화
    playerWorldPos.x = startWorldPos.x;
    playerWorldPos.y = startWorldPos.y;
  } catch (e) {
    startWorldPos.x = Math.random() * WORLD_SIZE;
    startWorldPos.y = Math.random() * WORLD_SIZE;
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('worldStart', JSON.stringify({ x: startWorldPos.x, y: startWorldPos.y, date: today }));
    playerWorldPos.x = startWorldPos.x;
    playerWorldPos.y = startWorldPos.y;
  }
}

/**
 * GPS 좌표 변화를 월드 좌표 변화로 변환하여 플레이어 위치를 갱신한다.
 * 적당한 스케일을 이용해 실제 이동량을 월드 크기로 정규화한다.
 * 월드는 토러스 구조이므로 경계를 넘어가면 반대편으로 이어진다.
 */
function updateWorldPosition() {
  if (!gpsCoords) return;
  if (!prevGPSCoords) {
    prevGPSCoords = { ...gpsCoords };
    return;
  }
  // 위도/경도 차이를 미터 단위로 변환
  const latDiff = gpsCoords.lat - prevGPSCoords.lat;
  const lngDiff = gpsCoords.lng - prevGPSCoords.lng;
  // 위도 1도는 약 111km
  const metersPerDegLat = 111000;
  // 경도 1도는 위도에 따라 달라짐
  const metersPerDegLng = 111000 * Math.cos(((gpsCoords.lat + prevGPSCoords.lat) / 2) * Math.PI / 180);
  const deltaX = lngDiff * metersPerDegLng;
  const deltaY = latDiff * metersPerDegLat;
  // 월드 크기에 맞게 단위 변환 (5km 범위)
  // 5000 world units = 5000 meters (5km), 따라서 1m = 1 world unit
  const worldDx = deltaX;
  const worldDy = deltaY;
  playerWorldPos.x = (playerWorldPos.x + worldDx + WORLD_SIZE) % WORLD_SIZE;
  playerWorldPos.y = (playerWorldPos.y + worldDy + WORLD_SIZE) % WORLD_SIZE;
  prevGPSCoords = { ...gpsCoords };
  // 현재 바이옴 업데이트
  const newEnv = getBiomeFromWorld(playerWorldPos.x, playerWorldPos.y);
  if (currentEnvironment !== newEnv) {
    currentEnvironment = newEnv;
    updateEnvironmentDisplay();
  }
  // 월드 렌더링
  renderWorld();
}

/**
 * 간단한 사인 함수를 이용해 월드 좌표에서 바이옴을 결정한다.
 * 반환값은 environments 배열의 id와 일치한다.
 * 다양한 패턴을 생성하기 위해 주기와 오프셋을 조정한다.
 */
function getBiomeFromWorld(x, y) {
  // 노이즈 값 계산 (0~1 범위)
  const val = (Math.sin(x / 400) + Math.cos(y / 500) + 2) / 4;
  if (val < 0.16) return 'mountain';
  if (val < 0.33) return 'field';
  if (val < 0.50) return 'river';
  if (val < 0.66) return 'sea';
  if (val < 0.83) return 'park';
  return 'city';
}

/**
 * 월드 좌표를 화면에 렌더링한다.
 * 모든 곤충 및 아이템 DOM 요소를 플레이어 기준으로 이동시킨다.
 * 플레이어는 지도 하단 중앙에 고정된다.
 */
function renderWorld() {
  const mapEl = document.getElementById('map');
  const marker = document.getElementById('player-marker');
  if (!mapEl || !marker) return;
  const rect = mapEl.getBoundingClientRect();
  // 화면에서 월드 단위당 픽셀 비율 설정
  // 화면에 표시될 월드 범위는 zoomLevel에 따라 결정된다.
  // zoomLevel 값이 작을수록 더 확대되어 근처 작은 영역을 보게 된다.
  const pxPerWorldX = rect.width / zoomLevel;
  const pxPerWorldY = rect.height / zoomLevel;
  // 플레이어를 지도 하단 중앙에 고정
  const markerX = rect.width / 2 - marker.offsetWidth / 2;
  const markerY = rect.height - marker.offsetHeight - 10; // 메뉴 위 약간의 여백
  marker.style.left = `${markerX}px`;
  marker.style.top = `${markerY}px`;
  // 게임이 시작된 경우 월드 배경 위치와 크기를 계산한다.
  if (gameStarted) {
    // 월드 배경 이미지를 world_map.png로 설정
    mapEl.style.backgroundImage = "url('assets/world_map.png')";
    // 전체 월드 크기를 현재 줌 비율에 맞춰 픽셀 단위로 지정
    const bgWidth = WORLD_SIZE * pxPerWorldX;
    const bgHeight = WORLD_SIZE * pxPerWorldY;
    mapEl.style.backgroundSize = `${bgWidth}px ${bgHeight}px`;
    // 플레이어의 월드 좌표가 마커 위치에 오도록 배경 위치를 조정
    const bgPosX = -playerWorldPos.x * pxPerWorldX + markerX + marker.offsetWidth / 2;
    const bgPosY = -playerWorldPos.y * pxPerWorldY + markerY + marker.offsetHeight / 2;
    mapEl.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
  }
  // 곤충 위치 업데이트
  activeInsects.forEach(obj => {
    const el = obj.el;
    let dx = obj.worldX - playerWorldPos.x;
    let dy = obj.worldY - playerWorldPos.y;
    if (dx > WORLD_SIZE / 2) dx -= WORLD_SIZE;
    if (dx < -WORLD_SIZE / 2) dx += WORLD_SIZE;
    if (dy > WORLD_SIZE / 2) dy -= WORLD_SIZE;
    if (dy < -WORLD_SIZE / 2) dy += WORLD_SIZE;
    const xPos = rect.width / 2 + dx * pxPerWorldX - el.offsetWidth / 2;
    const yPos = markerY - dy * pxPerWorldY - el.offsetHeight / 2;
    el.style.left = `${xPos}px`;
    el.style.top = `${yPos}px`;
  });
  // 아이템 위치 업데이트
  activeItems.forEach(obj => {
    const el = obj.el;
    let dx = obj.worldX - playerWorldPos.x;
    let dy = obj.worldY - playerWorldPos.y;
    if (dx > WORLD_SIZE / 2) dx -= WORLD_SIZE;
    if (dx < -WORLD_SIZE / 2) dx += WORLD_SIZE;
    if (dy > WORLD_SIZE / 2) dy -= WORLD_SIZE;
    if (dy < -WORLD_SIZE / 2) dy += WORLD_SIZE;
    const xPos = rect.width / 2 + dx * pxPerWorldX - el.offsetWidth / 2;
    const yPos = markerY - dy * pxPerWorldY - el.offsetHeight / 2;
    el.style.left = `${xPos}px`;
    el.style.top = `${yPos}px`;
  });
}

// 현재 선택된 곤충 정보 (포획 모달용)
let currentInsect = null;
let currentElement = null;

// 스폰 인터벌 관리
let spawnIntervalId = null;

// 원하는 곤충 스폰 개수 (한 번에 나타날 최대 수)
const SPAWN_COUNT = 8;

// 야간/계절별 가중치 설정
// 특정 곤충은 야간에 출현 빈도를 높이거나 낮출 수 있도록 설정
// 야간 가중치 설정: 특정 곤충은 야간에 출현 확률이 증가하거나 감소한다.
// 값 >1 은 증가, <1 은 감소.
const nightBoost = {
  mosquito: 2,
  giant_hornet: 1.5,
  hawk_moth: 2,
  large_cicada: 0.5,
  hairy_cicada: 0.5,
  true_cicada: 0.5
};

// 계절별 가중치 (spring, summer, autumn, winter)
// 계절에 따라 일부 곤충의 출현률을 조정한다. 기본값은 1.
const seasonBoost = {
  spring: {
    cabbage_butterfly: 2,
    swallowtail_butterfly: 2,
    black_yellow_butterfly: 1.5,
    blue_band_butterfly: 1.5,
    longtail_swallowtail: 1.5
  },
  summer: {
    large_cicada: 2,
    hairy_cicada: 2,
    true_cicada: 2,
    j_rhinobeetle: 1.5,
    jewel_beetle: 1.5,
    mosquito: 1.5,
    giant_hornet: 1.5
  },
  autumn: {
    grasshopper: 1.5,
    brown_dragonfly: 1.5,
    scarlet_dragonfly: 1.5,
    cricket: 1.5,
    katydid: 1.5,
    katydid_large: 1.5
  },
  winter: {
    mosquito: 0.2,
    damselfly: 0.2,
    leaf_beetle: 0.3
  }
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

// 상점 아이템 목록과 가격 설정 (10~50 사이)
const shopItems = [
  { id: 'glove', name: '포획 장갑', price: 10, desc: '포획 성공률을 약간 향상시켜주는 아이템입니다.' },
  { id: 'bait',  name: '먹이',     price: 15, desc: '곤충을 유인할 수 있는 먹이입니다.' },
  { id: 'lure',  name: '루어',     price: 30, desc: '주변에 곤충이 더 많이 나타나도록 합니다.' },
  { id: 'flash', name: '플래시',   price: 50, desc: '밤에도 곤충을 발견할 수 있게 해주는 손전등입니다.' }
];

// 플레이어 포인트
let points = 0;

/**
 * 포인트 데이터 로드
 */
function loadPoints() {
  try {
    const value = parseInt(localStorage.getItem('points'), 10);
    points = isNaN(value) ? 0 : value;
  } catch (e) {
    points = 0;
  }
  updatePointsDisplay();
}

/**
 * 포인트 데이터 저장
 */
function savePoints() {
  localStorage.setItem('points', points);
}

/**
 * 포인트 표시 업데이트
 */
function updatePointsDisplay() {
  const pointsInfo = document.getElementById('points-info');
  if (pointsInfo) {
    pointsInfo.textContent = `포인트: ${points}`;
  }
}

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
  if (!map) return;
  // 기존 곤충 DOM 제거
  activeInsects.forEach(obj => {
    if (obj.el && obj.el.parentElement) obj.el.remove();
  });
  activeInsects = [];
  // lure 효과 지속 중이면 스폰 개수 증가
  const multiplier = Date.now() < lureEffectExpire ? 2 : 1;
  const totalToSpawn = SPAWN_COUNT * multiplier;
  // 현재 바이옴에 맞는 곤충 선택
  let available = insects;
  if (currentEnvironment && environmentMapping[currentEnvironment]) {
    const allowedIds = environmentMapping[currentEnvironment];
    available = insects.filter(ins => allowedIds.includes(ins.id));
    if (available.length === 0) available = insects;
  }
  const weights = available.map(computeInsectWeight);
  // 월드 근처에 곤충 스폰: 플레이어 주변 일정 범위 내에서 랜덤 배치
  const spawnRange = 1000; // world units (약 1km)
  for (let i = 0; i < totalToSpawn; i++) {
    const idx = weightedRandomIndex(weights);
    const insect = available[idx];
    // 스폰 위치 계산 (토러스 wrap)
    const offsetX = (Math.random() - 0.5) * spawnRange;
    const offsetY = (Math.random() - 0.5) * spawnRange;
    let worldX = playerWorldPos.x + offsetX;
    let worldY = playerWorldPos.y + offsetY;
    worldX = (worldX + WORLD_SIZE) % WORLD_SIZE;
    worldY = (worldY + WORLD_SIZE) % WORLD_SIZE;
    const img = document.createElement('img');
    img.src = `assets/insects/${insect.id}.png`;
    img.alt = insect.name;
    img.className = 'insect';
    img.dataset.worldX = worldX;
    img.dataset.worldY = worldY;
    img.addEventListener('click', () => openCaptureModal(img, insect));
    map.appendChild(img);
    activeInsects.push({ el: img, worldX: worldX, worldY: worldY, insect: insect });
  }
  // 아이템 박스 스폰
  spawnItems();
  // 화면 위치 갱신
  renderWorld();
}

/**
 * 맵에 랜덤 아이템 박스를 스폰한다. 기존 박스를 제거하고 일정 확률로 새로 생성한다.
 */
function spawnItems() {
  const map = document.getElementById('map');
  if (!map) return;
  // 기존 아이템 DOM 제거
  activeItems.forEach(obj => {
    if (obj.el && obj.el.parentElement) obj.el.remove();
  });
  activeItems = [];
  // 30% 확률로 아이템 박스 생성
  if (Math.random() < 0.3) {
    // 스폰 위치 계산 (월드 기반)
    const spawnRange = 1000; // world units
    const offsetX = (Math.random() - 0.5) * spawnRange;
    const offsetY = (Math.random() - 0.5) * spawnRange;
    let worldX = playerWorldPos.x + offsetX;
    let worldY = playerWorldPos.y + offsetY;
    worldX = (worldX + WORLD_SIZE) % WORLD_SIZE;
    worldY = (worldY + WORLD_SIZE) % WORLD_SIZE;
    const item = document.createElement('img');
    item.src = 'assets/chest.png';
    item.alt = '아이템 박스';
    item.className = 'item';
    item.style.width = '40px';
    item.style.height = '40px';
    item.dataset.worldX = worldX;
    item.dataset.worldY = worldY;
    item.addEventListener('click', () => openItemBox(item));
    map.appendChild(item);
    activeItems.push({ el: item, worldX: worldX, worldY: worldY });
  }
  // 화면 위치 갱신
  renderWorld();
}

/**
 * 아이템 박스를 열어서 랜덤 아이템을 획득한다.
 * 아이템 획득 후 박스를 제거하고 가방을 갱신한다.
 * @param {HTMLElement} itemElement 아이템 박스 요소
 */
function openItemBox(itemElement) {
  // 획득 가능한 아이템 목록
  const options = ['glove', 'bait', 'flash', 'lure'];
  const selected = options[Math.floor(Math.random() * options.length)];
  // 가방에 아이템 추가
  bagCounts[selected] = (bagCounts[selected] || 0) + 1;
  saveBag();
  populateBag();
  // activeItems 목록에서도 제거
  activeItems = activeItems.filter(obj => obj.el !== itemElement);
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
 * 포획 시도 처리 (가위바위보 대신 단일 버튼)
 * 성공 확률은 기본 30%이며 먹이 사용 시 +20%.
 * 장갑 사용 수를 1 소모하며 포인트를 보상한다.
 */
function attemptCapture() {
  if (!currentInsect || !currentElement) return;
  // 장갑 체크
  if (gloveUses <= 0) {
    alert('장갑이 부족합니다. 가방에서 장갑을 사용하거나 상점에서 구매하세요.');
    return;
  }
  // 야간/플래시 체크는 openCaptureModal에서 이루어짐
  // 장갑 사용
  gloveUses--;
  saveBag();
  populateBag();
  // 넷 애니메이션 표시
  const netEl = document.getElementById('net-animation');
  if (netEl) {
    netEl.classList.remove('hidden');
    netEl.classList.add('animate');
  }
  // 결과를 조금 지연하여 애니메이션 후 보여주기
  setTimeout(() => {
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
      activeInsects = activeInsects.filter(obj => obj.el !== currentElement);
      currentElement.remove();
      // 도감 업데이트
      dex[currentInsect.id] = (dex[currentInsect.id] || 0) + 1;
      saveDex();
      // 포인트 획득
      points += 1;
      savePoints();
      updatePointsDisplay();
      resultEl.textContent = `${currentInsect.name} 포획 성공!`;
      resultEl.style.color = '#28a745';
    } else {
      resultEl.textContent = `${currentInsect.name} 포획 실패!`;
      resultEl.style.color = '#dc3545';
      // 실패해도 곤충 제거
      activeInsects = activeInsects.filter(obj => obj.el !== currentElement);
      currentElement.remove();
    }
    // 애니메이션 클래스 제거 및 숨김
    if (netEl) {
      netEl.classList.remove('animate');
      netEl.classList.add('hidden');
    }
    // 선택 초기화
    currentInsect = null;
    currentElement = null;
    // 모달 유지 시간 후 닫기
    setTimeout(() => {
      document.getElementById('capture-modal').classList.add('hidden');
    }, 1000);
  }, 800);
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
  const nameEl = document.getElementById('dex-name');
  const descEl = document.getElementById('dex-desc');
  const countEl = document.getElementById('dex-count');
  // 포획 여부 판단: count > 0이면 공개, 아니면 ? 표시
  if (count > 0) {
    imgEl.src = `assets/insects/${insect.id}.png`;
    imgEl.alt = insect.name;
    nameEl.textContent = insect.name;
    descEl.textContent = insect.desc;
    countEl.textContent = `잡은 마릿수: ${count}`;
  } else {
    imgEl.src = 'assets/unknown.png';
    imgEl.alt = '미발견 곤충';
    nameEl.textContent = '???';
    descEl.textContent = '???';
    countEl.textContent = '잡은 마릿수: 0';
  }
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
      // 초기 GPS 설정 시 이전 좌표 초기화
      if (!prevGPSCoords) {
        prevGPSCoords = { ...gpsCoords };
      }
      gpsInfo.textContent = `GPS: 위도 ${gpsCoords.lat.toFixed(4)}, 경도 ${gpsCoords.lng.toFixed(4)}`;
      updateWorldPosition();
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
        gpsInfo.textContent = `GPS: 위도 ${gpsCoords.lat.toFixed(4)}, 경도 ${gpsCoords.lng.toFixed(4)}`;
        updateWorldPosition();
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
  // 토러스 월드 구현에서는 플레이어 마커를 bottom-center에 고정하고
  // 월드와 오브젝트 위치를 renderWorld()에서 갱신한다.
  renderWorld();
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
    // 아이템이 없으면 상점을 열어 구매 유도
    hideBag();
    alert('아이템이 없습니다. 상점에서 구매할 수 있습니다.');
    showShop();
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

/**
 * 상점 목록을 채운다.
 */
function populateShop() {
  const list = document.getElementById('shop-list');
  list.innerHTML = '';
  shopItems.forEach(item => {
    const li = document.createElement('li');
    const info = document.createElement('span');
    info.textContent = `${item.name} - ${item.price}P`;
    const buyBtn = document.createElement('button');
    buyBtn.textContent = '구매';
    // 포인트 부족 시 비활성화
    if (points < item.price) {
      buyBtn.disabled = true;
    }
    buyBtn.addEventListener('click', () => {
      buyItem(item.id);
    });
    li.appendChild(info);
    li.appendChild(buyBtn);
    list.appendChild(li);
  });
}

function showShop() {
  populateShop();
  document.getElementById('shop-modal').classList.remove('hidden');
}

function hideShop() {
  document.getElementById('shop-modal').classList.add('hidden');
}

/**
 * 아이템 구매 처리
 * @param {string} id 아이템 ID
 */
function buyItem(id) {
  const item = shopItems.find(i => i.id === id);
  if (!item) return;
  if (points < item.price) {
    alert('포인트가 부족합니다.');
    return;
  }
  // 포인트 차감
  points -= item.price;
  savePoints();
  updatePointsDisplay();
  // 가방에 추가
  bagCounts[id] = (bagCounts[id] || 0) + 1;
  saveBag();
  populateBag();
  populateShop();
  alert(`${item.name}을(를) 구매했습니다!`);
}

window.addEventListener('load', () => {
  // 타이틀 화면 클릭 시 게임 시작
  const titleScreen = document.getElementById('title-screen');
  if (titleScreen) {
    titleScreen.addEventListener('click', startGame);
  }
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
  // 잡기 도전 버튼 이벤트
  const captureBtn = document.getElementById('captureAttemptBtn');
  if (captureBtn) {
    captureBtn.addEventListener('click', () => {
      attemptCapture();
    });
  }
  // 포획 모달 닫기
  document.getElementById('closeCapture').addEventListener('click', () => {
    document.getElementById('capture-modal').classList.add('hidden');
    // 선택한 곤충을 초기화
    currentInsect = null;
    currentElement = null;
  });

  // 상점 모달 닫기
  document.getElementById('closeShop').addEventListener('click', () => {
    hideShop();
  });

  // 클릭 이벤트가 제대로 연결되지 않거나 사용자가 클릭하지 않아도
  // 일정 시간 후 자동으로 게임이 시작되도록 한다.
  // 만약 이미 게임이 시작되었다면 호출되지 않는다.
  setTimeout(() => {
    if (!gameStarted) {
      startGame();
    }
  }, 200);

  // startGame을 전역(window)으로 노출하여 인라인 onclick 속성에서도 호출 가능하게 한다.
  window.startGame = startGame;
});
