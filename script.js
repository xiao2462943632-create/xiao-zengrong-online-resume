const timelineData = [
  {
    id: "electronic-design-2026",
    date: "2026年8月",
    title: "全国大学生电子设计竞赛",
    award: "辽宁省三等奖",
    description: "参加 2026 TI 杯全国大学生电子设计竞赛，在方案设计、硬件调试和团队协作中积累电子系统实践经验。",
    category: "竞赛",
    categoryClass: "competition",
    images: [
      {
        src: "assets/images/achievements/electronic-team.jpg",
        alt: "全国大学生电子设计竞赛参赛团队合影",
        caption: "参赛团队合影"
      },
      {
        src: "assets/images/achievements/electronic-award-list.jpg",
        alt: "全国大学生电子设计竞赛辽宁省三等奖获奖名单截图",
        caption: "辽宁省三等奖获奖名单"
      }
    ]
  },
  {
    id: "challenge-cup-2026",
    date: "2026年6月",
    title: "“挑战杯”大学生创业计划大赛",
    award: "辽宁省一等奖",
    description: "参与 2026 年“挑战杯”辽宁省大学生创业计划竞赛，项目获得省级一等奖，完成从项目打磨到现场展示的完整实践。",
    category: "竞赛",
    categoryClass: "competition",
    images: [
      {
        src: "assets/images/achievements/challenge-proof.png",
        alt: "挑战杯辽宁省一等奖证明材料",
        caption: "辽宁省一等奖证明"
      },
      {
        src: "assets/images/achievements/challenge-onsite.jpg",
        alt: "挑战杯辽宁省大学生创业计划竞赛现场照片",
        caption: "竞赛现场"
      },
      {
        src: "assets/images/achievements/challenge-team.jpg",
        alt: "挑战杯辽宁省大学生创业计划竞赛团队合影",
        caption: "团队合影"
      }
    ]
  },
  {
    id: "cet6-2026",
    date: "2026年6月",
    title: "全国大学英语六级考试",
    award: "CET-6 452分",
    description: "通过全国大学英语六级考试，笔试总分 452 分，为后续专业资料阅读、项目文档写作和技术交流打下基础。",
    category: "其他",
    categoryClass: "other",
    images: [
      {
        src: "assets/images/achievements/cet6-redacted.jpg",
        alt: "大学英语六级成绩报告单脱敏版",
        caption: "CET-6 成绩报告单（已脱敏）"
      }
    ]
  },
  {
    id: "eagle-cup-2026",
    date: "2026年5月",
    title: "校级竞赛“雄鹰杯”",
    award: "校级金奖",
    description: "参加第十五届“雄鹰杯”大学生创业大赛，项目获得校级金奖，提升了项目呈现、竞赛答辩和材料组织能力。",
    category: "竞赛",
    categoryClass: "competition",
    images: [
      {
        src: "assets/images/achievements/eagle-cup-gold.jpg",
        alt: "第十五届雄鹰杯大学生创业大赛校级金奖名单截图",
        caption: "校级金奖名单"
      }
    ]
  },
  {
    id: "cet4-2025",
    date: "2025年12月",
    title: "全国大学英语四级考试",
    award: "CET-4 459分",
    description: "通过全国大学英语四级考试，笔试总分 459 分，完成大学英语能力的阶段性认证。",
    category: "其他",
    categoryClass: "other",
    images: [
      {
        src: "assets/images/achievements/cet4-redacted.jpg",
        alt: "大学英语四级成绩报告单脱敏版",
        caption: "CET-4 成绩报告单（已脱敏）"
      }
    ]
  }
];

const timeline = document.querySelector("#timeline");
const filterButtons = document.querySelectorAll(".filter-button");
const filterStatus = document.querySelector("#filterStatus");
const galleryDialog = document.querySelector("#galleryDialog");
const galleryTitle = document.querySelector("#galleryTitle");
const galleryMeta = document.querySelector("#galleryMeta");
const galleryImages = document.querySelector("#galleryImages");
const galleryClose = document.querySelector("#galleryClose");

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

function eventTemplate(event, index) {
  const cover = event.images[0];
  const imageCountLabel = event.images.length > 1 ? `${event.images.length} 张照片` : "查看照片";

  return `
    <article class="timeline-item timeline-${escapeHtml(event.categoryClass)}" style="--item-index: ${index}">
      <div class="timeline-dot" aria-hidden="true"></div>
      <div class="timeline-date">${escapeHtml(event.date)}</div>
      <div class="timeline-card">
        <button class="event-image-wrap" type="button" data-gallery="${escapeHtml(event.id)}" aria-label="查看${escapeHtml(event.title)}照片">
          <img class="event-image" src="${escapeHtml(cover.src)}" alt="${escapeHtml(cover.alt)}">
          <span class="photo-count">${escapeHtml(imageCountLabel)}</span>
        </button>
        <div class="timeline-card-body">
          <div class="event-meta">
            <span class="category-tag ${escapeHtml(event.categoryClass)}">${escapeHtml(event.category)}</span>
            <span class="event-award">${escapeHtml(event.award)}</span>
          </div>
          <h3>${escapeHtml(event.title)}</h3>
          <p>${escapeHtml(event.description)}</p>
          <button class="detail-link" type="button" data-gallery="${escapeHtml(event.id)}" aria-label="查看${escapeHtml(event.title)}的照片与佐证材料">
            查看照片 <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>`;
}

function bindImageFallbacks() {
  document.querySelectorAll(".event-image").forEach((image) => {
    image.addEventListener("error", () => {
      image.hidden = true;
      image.parentElement.classList.add("image-unavailable");
      image.parentElement.setAttribute("aria-label", "图片暂未上传");
    }, { once: true });
  });
}

function openGallery(eventId) {
  const event = timelineData.find((item) => item.id === eventId);
  if (!event) return;

  galleryTitle.textContent = event.title;
  galleryMeta.textContent = `${event.date} · ${event.category} · ${event.award}`;
  galleryImages.innerHTML = event.images.map((image) => `
    <figure class="gallery-figure">
      <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}">
      <figcaption>${escapeHtml(image.caption)}</figcaption>
    </figure>
  `).join("");

  if (typeof galleryDialog.showModal === "function") {
    galleryDialog.showModal();
  } else {
    galleryDialog.setAttribute("open", "");
  }
}

function bindGalleryButtons() {
  document.querySelectorAll("[data-gallery]").forEach((button) => {
    button.addEventListener("click", () => openGallery(button.dataset.gallery));
  });
}

function closeGallery() {
  if (typeof galleryDialog.close === "function") galleryDialog.close();
  else galleryDialog.removeAttribute("open");
}

function renderTimeline(filter = "all") {
  const visibleEvents = filter === "all"
    ? timelineData
    : timelineData.filter((event) => event.categoryClass === filter);

  if (visibleEvents.length === 0) {
    timeline.innerHTML = `
      <div class="empty-state">
        <span aria-hidden="true">○</span>
        <h3>暂无相关内容</h3>
        <p>这一分类的经历还在整理中，后续会持续更新。</p>
      </div>`;
  } else {
    timeline.innerHTML = visibleEvents.map(eventTemplate).join("");
    bindImageFallbacks();
    bindGalleryButtons();
  }

  filterStatus.textContent = `当前显示 ${visibleEvents.length} 条记录`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderTimeline(button.dataset.filter);
  });
});

galleryClose.addEventListener("click", closeGallery);
galleryDialog.addEventListener("click", (event) => {
  if (event.target === galleryDialog) closeGallery();
});

const avatar = document.querySelector(".avatar-image");
avatar.addEventListener("error", () => {
  avatar.hidden = true;
  document.querySelector(".avatar-fallback").setAttribute("aria-label", "肖增荣头像占位符");
}, { once: true });

const backToTop = document.querySelector("#backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 500);
}, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

document.querySelectorAll(".reveal").forEach((element) => {
  if (revealObserver) revealObserver.observe(element);
  else element.classList.add("is-revealed");
});

renderTimeline();
