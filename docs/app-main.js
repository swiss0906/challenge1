const recommendedApps = [
  {
    name: "포식이",
    desc: "학식 메뉴 확인 & QR 체크인",
    context: ["library", "life"],
    ios: "https://apps.apple.com/kr/app/%ED%8F%AC%EC%8B%9D%EC%9D%B4/id1548629051",
    android: "https://play.google.com/store/apps/details?id=com.poapper.posikyi",
    web: null,
  },
  {
    name: "POPO",
    desc: "공간·장비 예약, 동아리 정보",
    context: ["library", "fitness", "benefits"],
    ios: null,
    android: null,
    web: "https://popo.poapper.club",
  },
  {
    name: "잇츠미",
    desc: "캠퍼스페이 결제 & 학식 이용",
    context: ["printing", "benefits", "life"],
    ios: "https://apps.apple.com/kr/app/%EC%9E%87%EC%B8%A0%EB%AF%B8-itsme/id1512735891",
    android: "https://play.google.com/store/apps/details?id=id.itsme.mobile",
    web: null,
  },
  {
    name: "체인지업 그라운드",
    desc: "그라운드 멤버십 & 시설 예약",
    context: ["library"],
    ios: "https://apps.apple.com/kr/app/%EC%B2%B4%EC%9D%B8%EC%A7%80%EC%97%85-%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C-%ED%8F%AC%EC%8A%A4%EC%BD%94-%EA%B1%B0%EC%A0%90%EC%98%A4%ED%94%BC%EC%8A%A4/id1572769028",
    android: "https://play.google.com/store/apps/details?id=com.posco.changeupground",
    web: null,
  },
];

const detailContent = {
  library: {
    category: "공간 이용",
    title: "도서관",
    summary:
      "처음 오는 러너가 가장 자주 쓰게 되는 공간이에요. 좌석 규칙과 프린트 위치만 알아도 훨씬 덜 헤맬 수 있어요.",
    location:
      "건물 위치가 바로 떠오르지 않아도 괜찮아요. 학교 공식 캠퍼스맵에서 도서관 위치를 바로 열 수 있어요.",
    mapUrl:
      "https://www.postech.ac.kr/kor/university-introduction/campus_map.do?id=72&lat=36.01281262037587&lng=129.32512678407213",
    guideUrl:
      "https://library.postech.ac.kr/about/library-use-guide/byuser-guide/undergraduate-student/",
    guideLabel: "학부생 공식 안내 보기",
    audience: [
      "혼자 오래 집중하고 싶은 사람",
      "프린트와 복사를 자주 해야 하는 사람",
      "조용한 곳과 가벼운 협업 공간을 둘 다 알고 싶은 사람",
    ],
    checklist: [
      "3~5층 출입 시 학생증 태그 또는 POSTECH ID App QR 준비하기",
      "좌석·시설은 좌석예약 시스템에서 예약 후 이용하는 흐름 먼저 익히기",
      "5층 프린트실과 PC존 위치를 먼저 익혀두기",
    ],
    tools: [
      "도서관 좌석예약 시스템(zzim): 좌석과 시설을 예약할 때 쓰는 웹 서비스",
      "POSTECH ID App: 도서관 구성원 전용 공간 출입 시 QR로 사용할 수 있음",
      "학생증: 3~5층 출입 시 태그가 필요할 수 있어 함께 준비해두면 좋음",
    ],
    official: [
      "2층 08:00-22:00 / 3층 08:00-00:00 / 4층 24시간 / 5층 08:00-02:00",
      "시험기간 3주 동안은 2층과 5층도 02:00까지, 3층과 4층은 24시간 운영",
      "3~5층은 구성원 전용 공간이라 학생증 태그가 필요하고 POSTECH ID App QR로도 출입 가능",
      "좌석·시설은 도서관 좌석예약 시스템을 통해 예약 후 이용",
      "프린트실은 도서관 5층, 흑백 50원 / 컬러 300원",
      "단행본은 10책 30일 대출 가능",
    ],
    field: [
      "3, 4층 책 있는 곳 안 좌석은 그냥 쓸 수 있는 구역이 있다",
      "플러그는 바닥 쪽이라 처음엔 놓치기 쉽다",
      "릴렉스존과 얼음정수기가 있어 오래 머무르기 좋다",
    ],
    photos: [
      { src: "library-free-seat", caption: "예약 안 해도 되는 좌석", group: "도서관" },
      { src: "library-free-seat-plug", caption: "자유석 플러그", group: "도서관" },
      { src: "library-reserved-seat", caption: "예약 좌석", group: "도서관" },
      { src: "library-relax-zone", caption: "릴렉스존", group: "도서관" },
      { src: "library-ice-water", caption: "얼음 정수기", group: "도서관" },
      { src: "library-pc-zone", caption: "PC존", group: "도서관" },
      { src: "library-pc-zone-info", caption: "PC존 이용 안내", group: "도서관" },
      { src: "ground-private-seat", caption: "프라이빗 좌석", group: "그라운드" },
      { src: "ground-private-seat-2", caption: "프라이빗 좌석", group: "그라운드" },
      { src: "ground-work-cube", caption: "워크큐브", group: "그라운드" },
      { src: "ground-work-cube-2", caption: "워크큐브", group: "그라운드" },
      { src: "ground-seat-tutoring", caption: "좌석에서 과외", group: "그라운드" },
      { src: "ground-seat-rules", caption: "좌석 이용 수칙", group: "그라운드" },
      { src: "ground-wireless-charger", caption: "무선 충전기", group: "그라운드" },
      { src: "ground-massage-chair", caption: "안마의자", group: "그라운드" },
      { src: "ground-air-fryer", caption: "에어프라이어", group: "그라운드" },
      { src: "ground-ice-maker", caption: "제빙기", group: "그라운드" },
    ],
  },
  printing: {
    category: "인쇄",
    title: "인쇄와 복사",
    summary:
      "급할수록 어디서 바로 할 수 있는지가 중요해요. 처음엔 가장 안정적인 인쇄 동선부터 알고 있으면 훨씬 편합니다.",
    location:
      "복사실처럼 자주 쓰는 위치는 이 화면에서 먼저 이해하고, 상세 위치는 공식 캠퍼스맵으로 바로 열어볼 수 있어요.",
    mapUrl:
      "https://www.postech.ac.kr/kor/university-introduction/campus_map.do?id=82&lat=36.01279423952061&lng=129.3250683574527",
    guideUrl: "",
    guideLabel: "",
    audience: [
      "과제 제출 직전에 급하게 출력해야 하는 사람",
      "건물마다 인쇄 가능 여부가 헷갈리는 사람",
      "카드 결제 조건 같은 실사용 정보를 미리 알고 싶은 사람",
    ],
    checklist: [
      "도서관 5층 프린트실을 기본값으로 기억하기",
      "현금이 아닌 카드나 교통카드 결제인지 확인하기",
      "제본이 필요하면 다른 대안 동선도 함께 보기",
    ],
    tools: [],
    official: [
      "도서관 5층 프린트&복사실 이용 가능",
      "흑백 50원 / 컬러 300원",
      "결제는 카드·교통카드 가능, 현금 불가",
    ],
    field: [
      "처음에는 프린트실 위치가 잘 안 보일 수 있다",
      "C5에서 바로 출력이 안 되는 상황을 대비한 대안 동선이 필요하다",
      "어디서 인쇄할지보다 어디가 가장 확실한지 먼저 알려주는 방식이 유용하다",
    ],
    photos: [
      { src: "library-pc-zone", caption: "PC존", group: "프린트실" },
      { src: "library-pc-zone-info", caption: "PC존 이용 안내", group: "프린트실" },
    ],
  },
  fitness: {
    category: "운동",
    title: "운동 시설 시작 가이드",
    summary:
      "처음 운동하려는 러너는 무료로 쓸 수 있는 곳과 예약이 필요한 곳만 구분해도 시작하기가 훨씬 쉬워져요.",
    location:
      "체육관 위치는 공식 캠퍼스맵으로 바로 열 수 있고, 이 화면에서는 어떤 시설을 왜 써야 하는지 먼저 이해할 수 있어요.",
    mapUrl:
      "https://www.postech.ac.kr/kor/university-introduction/campus_map.do?id=84&lat=36.01885118904603&lng=129.32309475622765",
    guideUrl: "",
    guideLabel: "",
    audience: [
      "돈 들이지 않고 먼저 운동 시작해보고 싶은 사람",
      "풋살장이나 체육관 규칙이 헷갈리는 사람",
      "POSPLEX를 써야 할지 고민하는 사람",
    ],
    checklist: [
      "대학체육관 무료 이용 가능 여부 먼저 확인하기",
      "풋살장은 POVIS 예약과 입장 방식 확인하기",
      "유료 시설은 운영시간과 패키지 구성을 함께 보기",
    ],
    tools: [],
    official: [
      "대학체육관은 POSTECH 구성원 무료 이용 가능",
      "풋살장은 사용일 기준 15일 안에 예약, 1회 2시간",
      "POSPLEX 운영시간과 문의처는 공식 정보로 확인 가능",
    ],
    field: [
      "체력단련실은 특정 수업 시간대에 이용이 제한될 수 있다",
      "풋살장 입장 방식은 당일 재확인이 안전하다",
      "장비 상태나 체감 만족도는 현장 정보가 더 유용하다",
    ],
  },
  benefits: {
    category: "혜택",
    title: "학생 혜택과 툴 모음",
    summary:
      "학생 신분으로 쓸 수 있는 툴, 플랫폼, 혜택을 한곳에 모아 ‘아는 사람만 아는 정보’를 줄여주는 화면이에요.",
    location:
      "이 화면은 건물 위치보다 바로 쓸 수 있는 학생 혜택을 먼저 정리해 주는 역할이에요. 관련 건물은 학생회관 위치를 기준으로 바로 볼 수 있어요.",
    mapUrl:
      "https://www.postech.ac.kr/kor/university-introduction/campus_map.do?id=88&lat=36.012960118126685&lng=129.320692713",
    guideUrl: "",
    guideLabel: "",
    audience: [
      "학생 계정으로 쓸 수 있는 툴을 놓치고 싶지 않은 사람",
      "혜택 정보를 단톡에서 흘려보내지 않고 모아보고 싶은 사람",
      "처음 학교 생활 적응에 필요한 디지털 자원을 찾는 사람",
    ],
    checklist: [
      "학교 계정으로 접근 가능한 서비스부터 모으기",
      "무료 / 할인 / 신청 필요 여부를 구분해서 보여주기",
      "정보 출처와 마지막 확인 날짜를 함께 표기하기",
    ],
    tools: [],
    official: [
      "학생 신분으로 접근 가능한 플랫폼과 학교 계정 기반 서비스를 우선 정리",
      "링크, 신청 방식, 필요 계정 정보를 함께 제공",
      "공식 안내 페이지로 바로 이동할 수 있는 구조 권장",
    ],
    field: [
      "단톡에 올라와도 나중에 다시 찾기 어려운 정보가 많다",
      "혜택은 ‘무엇이 있나’보다 ‘어떻게 바로 쓰나’가 더 중요하다",
      "처음 주에 한 번에 정리해주는 페이지가 장벽을 낮춘다",
    ],
  },
  life: {
    category: "생활 팁",
    title: "생활과 이동 팁",
    summary:
      "시설 사용법만이 아니라 이동 동선, 자주 놓치는 규칙, 안전 메모까지 같이 봐야 실제 생활에 더 도움이 돼요.",
    location:
      "건물 자체 위치는 캠퍼스맵이 더 정확하고, 이 화면은 ‘어떻게 가면 덜 헤매는지’ 같은 생활 맥락을 보완해 주는 데 집중해요.",
    mapUrl:
      "https://www.postech.ac.kr/kor/university-introduction/campus_map.do",
    guideUrl: "",
    guideLabel: "",
    audience: [
      "기숙사와 주요 시설을 오가는 동선을 빨리 익히고 싶은 사람",
      "사소하지만 체감 큰 팁을 미리 알고 싶은 사람",
      "검색으로는 잘 안 나오는 현장성 정보를 원하는 사람",
    ],
    checklist: [
      "언덕 회피 동선처럼 체감이 큰 이동 팁 넣기",
      "현장 메모와 공식 정보 구분하기",
      "안전성 관련 메모는 별도로 보이게 하기",
    ],
    tools: [],
    official: [
      "공식 사이트에 없는 정보는 현장 팁으로 명확히 구분",
      "문의가 필요한 정보는 문의 권장으로 분리",
      "건물 사용 규칙과 생활 팁을 섞지 않고 구조화",
    ],
    field: [
      "기숙사 오는 우회 길은 직접 가본 사람이 알려줘야 체감이 온다",
      "시설 상태나 불편 포인트는 공식 정보보다 현장 정보 가치가 크다",
      "처음 온 사람은 ‘지도’보다 ‘이렇게 가면 덜 힘들다’가 더 필요하다",
    ],
    photos: [
      { src: "life-dorm-shortcut", caption: "기숙사 오는 지름길", group: "이동 팁" },
    ],
  },
};

const screenTitle = document.querySelector("#screenTitle");
const backButton = document.querySelector("#backButton");
const screens = [...document.querySelectorAll(".screen")];
const navButtons = [...document.querySelectorAll(".nav-btn")];
const detailLocationText = document.querySelector("#detailLocationText");
const detailMapLink = document.querySelector("#detailMapLink");
const detailGuideLink = document.querySelector("#detailGuideLink");
const detailToolCard = document.querySelector("#detailToolCard");

let previousScreen = "home";
let currentScreen = "home";
let currentDetail = "library";

function applySystemTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.body.dataset.theme = prefersDark ? "dark" : "light";
}

function initializeTheme() {
  applySystemTheme();
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applySystemTheme);
}

function setScreen(name) {
  previousScreen = currentScreen;
  currentScreen = name;

  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === name);
  });

  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.openScreen === name);
  });

  const titles = {
    home: "처음엔 다 헷갈릴 수도 있어요",
    guide: "필요한 정보를 차근차근 정리했어요",
    detail: detailContent[currentDetail].title,
  };
  screenTitle.textContent = titles[name];
  backButton.disabled = name === "home";
}

function renderDetail(key) {
  currentDetail = key;
  const data = detailContent[key];

  document.querySelector("#detailCategory").textContent = data.category;
  document.querySelector("#detailTitle").textContent = data.title;
  document.querySelector("#detailSummary").textContent = data.summary;
  detailLocationText.textContent = data.location;
  detailMapLink.href = data.mapUrl;
  if (data.guideUrl) {
    detailGuideLink.href = data.guideUrl;
    detailGuideLink.textContent = data.guideLabel || "공식 안내 보기";
    detailGuideLink.style.display = "inline-flex";
  } else {
    detailGuideLink.style.display = "none";
  }

  const pairs = [
    ["#detailAudience", data.audience],
    ["#detailChecklist", data.checklist],
    ["#detailTools", data.tools || []],
    ["#detailOfficial", data.official],
    ["#detailField", data.field],
  ];

  pairs.forEach(([selector, items]) => {
    const root = document.querySelector(selector);
    root.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
  });

  detailToolCard.style.display = data.tools && data.tools.length ? "block" : "none";
  renderPhotoStrip(data.photos);
  renderAppRecommendations(key);

  if (currentScreen === "detail") {
    screenTitle.textContent = data.title;
  }
}

function renderAppRecommendations(detailKey) {
  var container = document.getElementById("appRecommendations");
  var apps = recommendedApps.filter(function (app) {
    return app.context.indexOf(detailKey) !== -1;
  });

  if (apps.length === 0) {
    container.style.display = "none";
    return;
  }

  container.style.display = "block";
  document.getElementById("appCount").textContent = apps.length + "개";

  document.getElementById("appList").innerHTML = apps
    .map(function (app) {
      var links = "";
      if (app.ios) {
        links += '<a href="' + app.ios + '" target="_blank" rel="noreferrer" class="app-link">iOS</a>';
      }
      if (app.android) {
        links += '<a href="' + app.android + '" target="_blank" rel="noreferrer" class="app-link">Android</a>';
      }
      if (app.web) {
        links += '<a href="' + app.web + '" target="_blank" rel="noreferrer" class="app-link">웹사이트</a>';
      }
      return (
        '<div class="app-card">' +
        '<div class="app-info"><strong>' + app.name + "</strong><p>" + app.desc + "</p></div>" +
        '<div class="app-links">' + links + "</div>" +
        "</div>"
      );
    })
    .join("");
}

document.querySelectorAll("[data-open-screen]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.openScreen;
    setScreen(target);
  });
});

document.querySelectorAll("[data-detail]").forEach((button) => {
  button.addEventListener("click", () => {
    renderDetail(button.dataset.detail);
    setScreen("detail");
  });
});

backButton.addEventListener("click", () => {
  const target = currentScreen === "detail" ? "guide" : "home";
  setScreen(target);
});

/* --- Photo Strip & Lightbox --- */
let lightboxPhotos = [];
let lightboxIndex = 0;

function renderPhotoStrip(photos) {
  const section = document.getElementById("photoStripSection");
  const strip = document.getElementById("photoStrip");
  const count = document.getElementById("photoCount");

  if (!photos || photos.length === 0) {
    section.style.display = "none";
    return;
  }

  section.style.display = "block";
  count.textContent = photos.length + "장";

  let currentGroup = null;
  strip.innerHTML = photos
    .map((photo, i) => {
      let groupLabel = "";
      if (photo.group && photo.group !== currentGroup) {
        currentGroup = photo.group;
        groupLabel = '<span class="photo-group-label">' + photo.group + "</span>";
      }
      return (
        groupLabel +
        '<button class="photo-thumb" data-photo-index="' + i + '" aria-label="' + photo.caption + '">' +
        '<img src="./photos/thumb/' + photo.src + '.jpg" alt="' + photo.caption + '" loading="lazy" />' +
        "</button>"
      );
    })
    .join("");
}

function openLightbox(photos, index) {
  lightboxPhotos = photos;
  lightboxIndex = index;
  showLightboxImage();
  document.getElementById("lightbox").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").hidden = true;
  document.body.style.overflow = "";
}

function showLightboxImage() {
  var photo = lightboxPhotos[lightboxIndex];
  var img = document.getElementById("lightboxImg");
  img.src = "./photos/full/" + photo.src + ".jpg";
  img.alt = photo.caption;
  document.getElementById("lightboxCaption").textContent = photo.caption;
  document.getElementById("lightboxCounter").textContent =
    lightboxIndex + 1 + " / " + lightboxPhotos.length;
  document.getElementById("lightboxPrev").style.visibility =
    lightboxIndex > 0 ? "visible" : "hidden";
  document.getElementById("lightboxNext").style.visibility =
    lightboxIndex < lightboxPhotos.length - 1 ? "visible" : "hidden";
}

document.addEventListener("click", function (e) {
  var thumb = e.target.closest(".photo-thumb");
  if (thumb) {
    var idx = parseInt(thumb.dataset.photoIndex, 10);
    var data = detailContent[currentDetail];
    openLightbox(data.photos, idx);
  }
});

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", function () {
  if (lightboxIndex > 0) { lightboxIndex--; showLightboxImage(); }
});
document.getElementById("lightboxNext").addEventListener("click", function () {
  if (lightboxIndex < lightboxPhotos.length - 1) { lightboxIndex++; showLightboxImage(); }
});
document.getElementById("lightbox").addEventListener("click", function (e) {
  if (e.target === this) closeLightbox();
});
document.addEventListener("keydown", function (e) {
  if (document.getElementById("lightbox").hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft" && lightboxIndex > 0) { lightboxIndex--; showLightboxImage(); }
  if (e.key === "ArrowRight" && lightboxIndex < lightboxPhotos.length - 1) { lightboxIndex++; showLightboxImage(); }
});

/* --- Search --- */
function buildSearchIndex() {
  var items = [];
  Object.keys(detailContent).forEach(function (key) {
    var d = detailContent[key];
    var text = [d.title, d.category, d.summary]
      .concat(d.audience || [])
      .concat(d.checklist || [])
      .concat(d.tools || [])
      .concat(d.official || [])
      .concat(d.field || [])
      .join(" ");
    items.push({ key: key, title: d.title, category: d.category, summary: d.summary, text: text.toLowerCase() });
  });
  // Also index recommended apps
  recommendedApps.forEach(function (app) {
    items.push({
      key: app.context[0],
      title: app.name,
      category: "추천 앱",
      summary: app.desc,
      text: (app.name + " " + app.desc).toLowerCase(),
      isApp: true,
    });
  });
  return items;
}

var searchIndex = buildSearchIndex();

var searchInput = document.getElementById("searchInput");
var searchResults = document.getElementById("searchResults");
var searchClear = document.getElementById("searchClear");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    var q = this.value.trim().toLowerCase();
    searchClear.style.display = q ? "block" : "none";

    if (!q) {
      searchResults.style.display = "none";
      return;
    }

    var matches = searchIndex.filter(function (item) {
      return item.text.indexOf(q) !== -1;
    });

    // Deduplicate by key for non-app items
    var seen = {};
    var unique = [];
    matches.forEach(function (m) {
      var id = m.isApp ? "app-" + m.title : m.key;
      if (!seen[id]) {
        seen[id] = true;
        unique.push(m);
      }
    });

    if (unique.length === 0) {
      searchResults.innerHTML = '<div class="search-empty">검색 결과가 없습니다</div>';
    } else {
      searchResults.innerHTML = unique
        .map(function (m) {
          return (
            '<button class="search-result-item" data-detail="' + m.key + '">' +
            '<span class="search-cat">' + m.category + "</span>" +
            "<strong>" + m.title + "</strong>" +
            "<p>" + m.summary + "</p>" +
            "</button>"
          );
        })
        .join("");
    }
    searchResults.style.display = "block";
  });

  searchClear.addEventListener("click", function () {
    searchInput.value = "";
    searchResults.style.display = "none";
    searchClear.style.display = "none";
  });

  searchResults.addEventListener("click", function (e) {
    var item = e.target.closest("[data-detail]");
    if (item) {
      renderDetail(item.dataset.detail);
      setScreen("detail");
      searchInput.value = "";
      searchResults.style.display = "none";
      searchClear.style.display = "none";
    }
  });
}

initializeTheme();
renderDetail(currentDetail);
setScreen("home");
