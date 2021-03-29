import { popupHtml } from './popup-html.js';
import { popupStyles } from './popup-styles.js';
import { BaseElement } from '../base-element.js';

class KcPopup extends BaseElement {
  static get observedAttributes() {
    return ['open'];
  }

  get html() {
    return `${popupStyles}${popupHtml(this)}`;
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
      // si es necesario repintar (variables)
      // this.shadowRoot.innerHTML = this.html;
      switch (attrName) {
        case 'open':
          this.openDialog(newValue);
          break;

        default:
          break;
      }
    }
  }

  connectedCallback() {
    console.log('connectedCallback');

    this.shadowRoot.innerHTML = this.html;

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

  openDialog(isOpen) {
    this.shadowRoot.querySelector('.wrapper').classList.toggle('open', isOpen);
    if (isOpen) {
      document.addEventListener('keydown', this._watchEscape);
    } else {
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
