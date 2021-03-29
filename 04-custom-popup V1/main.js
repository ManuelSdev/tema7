

//Referencio el contenido de la plantilla
const template = document.getElementById('plantilla');
//Importo el clonado del contenido de la plantilla al documento/body directamente 
document.body.appendChild(document.importNode(template.content, true));
