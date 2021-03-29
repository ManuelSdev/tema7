export function cardHtml(elem) {
  return `
    <article class="info-card favorite">
      <a href="detail.html">
        <div class="cover">
          <img
            src="${elem.cover}"
            alt="Portada ${elem.title}"
          />
        </div>
        <div class="card-content">
          <div class="title">${elem.title}</div>
          <div class="meta">
            <span class="rating">${elem.rating}</span>
            <span class="age">${elem.age}</span>
            <span class="pub-date">${elem.pubdate}</span>
          </div>
          <div class="description">
            <slot></slot>
          </div>
        </div>
      </a>
    </article>
  `;
}
