export class BaseElement extends HTMLElement {
  constructor() {
    super();

    if (this.constructor.observedAttributes) {
      console.log('tiene atributos observador');
      console.log(
        'this.constructor.observedAttributes',
        this.constructor.observedAttributes
      );
      console.log('this', this.observedAttributes);
      console.log('this.constructor', this.constructor);

      this.constructor.observedAttributes.forEach((attribute) => {
        console.log('generando getter y setter para', attribute);
        Object.defineProperty(this, attribute, {
          get() {
            return this.getAttribute(attribute);
          },
          set(value) {
            if (value) {
              this.setAttribute(attribute, value);
            } else {
              this.removeAttribute(attribute);
            }
          },
        });
      });
    } else {
      console.log('no tiene atributos observados');
    }
  }
}
