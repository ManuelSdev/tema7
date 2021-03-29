
/*
comento este paso inicial de consumo de plantilla sin cElement para crear ahora un cElement
//Referencio el contenido de la plantilla
const template = document.getElementById('plantilla');
//Importo el clonado del contenido de la plantilla al documento/body directamente 
document.body.appendChild(document.importNode(template.content, true));
*/
class KcPopup extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const template = document.getElementById('plantilla');
      const node = document.importNode(template.content, true);
      this.appendChild(node);
    }
  }
  
  if (!customElements.get('kc-popup')) {
    customElements.define('kc-popup', KcPopup);
  }
  