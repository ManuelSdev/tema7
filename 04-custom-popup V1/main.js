class KcPopup extends HTMLElement {
    static get observedAttributes() {
      return ['open'];
    }
  
    constructor() {
      super();
    }
  
    attributeChangedCallback(attrName, oldValue, newValue) {
      if (newValue !== oldValue) {
        // this['value']
        // this.value
        this[attrName] = this.hasAttribute(attrName);
      }
    }
  
    connectedCallback() {
      const template = document.getElementById('plantilla');
      const node = document.importNode(template.content, true);
      this.appendChild(node);
    }
  
    get open() {
      return this.hasAttribute('open');
    }
  
    set open(isOpen) {
      if (isOpen) {
        this.setAttribute('open', true);
      } else {
        this.removeAttribute('open');
      }
    }
  }
  
  if (!customElements.get('kc-popup')) {
    customElements.define('kc-popup', KcPopup);
  }
  