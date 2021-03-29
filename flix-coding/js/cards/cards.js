import { cardHtml } from './cards-html.js';
import { cardsStyles } from './cards-styles.js';
import { BaseElement } from '../base-element.js';

class KcCard extends BaseElement {
  static get observedAttributes() {
    return ['age', 'cover', 'pubdate', 'rating', 'title'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  get html() {
    return `${cardsStyles}${cardHtml(this)}`;
  }

  render() {
    this.shadowRoot.innerHTML = this.html;
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[attribute] = newValue;
      this.render();
    }
  }
}

if (!customElements.get('kc-card')) {
  customElements.define('kc-card', KcCard);
}
