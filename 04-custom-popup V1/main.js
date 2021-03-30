class KcPopup extends HTMLElement {
    static get observedAttributes() {
      return ['open'];
    }
  
    constructor() {
      console.log('constructor');
      super();
  
      this.attachShadow({ mode: 'open' });
  
      this.close = this.close.bind(this);
      this._watchEscape = this._watchEscape.bind(this);
    }
  
    attributeChangedCallback(attrName, oldValue, newValue) {
      console.log('attributeChangedCallback');
      if (newValue !== oldValue) {
        // this['value']
        // this.value
        this[attrName] = this.hasAttribute(attrName);
      }
    }
  
    connectedCallback() {
      console.log('connectedCallback');
      const template = document.getElementById('plantilla');
      const node = document.importNode(template.content, true);
      // this.appendChild(node);
      this.shadowRoot.appendChild(node);
  
      this.shadowRoot
        .querySelector('button')
        .addEventListener('click', this.close);
      this.shadowRoot
        .querySelector('.overlay')
        .addEventListener('click', this.close);
    }
  
    disconnectedCallback() {
      this.shadowRoot
        .querySelector('button')
        .removeEventListener('click', this.close);
      this.shadowRoot
        .querySelector('.overlay')
        .removeEventListener('click', this.close);
    }
  
    get open() {
      return this.hasAttribute('open');
    }
  
    set open(isOpen) {
      this.shadowRoot.querySelector('.wrapper').classList.toggle('open', isOpen);
      if (isOpen) {
        this.setAttribute('open', true);
        document.addEventListener('keydown', this._watchEscape);
      } else {
        this.removeAttribute('open');
        document.removeEventListener('keydown', this._watchEscape);
      }
    }
  
    close() {
      if (this.open !== false) {
        this.open = false;
      }
  
      const closeEvent = new CustomEvent('popup-closed');
      this.dispatchEvent(closeEvent);
    }
  
    _watchEscape(event) {
      console.log(event);
      if (event.key === 'Escape') {
        this.close();
      }
    }
  }
  
  if (!customElements.get('kc-popup')) {
    customElements.define('kc-popup', KcPopup);
  }
  