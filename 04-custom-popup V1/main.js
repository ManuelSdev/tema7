class KcPopup extends HTMLElement {
    static get observedAttributes() {
      return ['open'];
    }
  
    constructor() {
      super();
      this.close = this.close.bind(this);
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
  
      this.querySelector('button').addEventListener('click', this.close);
      this.querySelector('.overlay').addEventListener('click', this.close);
    }
  
    get open() {
      return this.hasAttribute('open');
    }
  
    set open(isOpen) {
      this.querySelector('.wrapper').classList.toggle('open', isOpen);
      if (isOpen) {
        this.setAttribute('open', true);
      } else {
        this.removeAttribute('open');
      }
    }
  
    close() {
      if (this.open !== false) {
        this.open = false;
      }
    }
  }
  
  if (!customElements.get('kc-popup')) {
    customElements.define('kc-popup', KcPopup);
  }
  