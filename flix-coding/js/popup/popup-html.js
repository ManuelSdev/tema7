export function popupHtml(elem) {
  return `
    <!-- Contenido HTML -->
    <div class="wrapper">
      <div class="overlay"></div>
      <div class="dialog">
        <button class="close">&times;</button>
        <h1 id="title"><slot name="title"></slot></h1>
        <div class="content" id="content">
          <slot part="contenido"></slot>
          <span part="resaltado">Gracias!</span>
        </div>
      </div>
    </div>
  `;
}
