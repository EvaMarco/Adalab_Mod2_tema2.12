'use strict';

// const body = document.querySelector('.page__main');
// const name =  document.querySelector('.name__title');
// const job =  document.querySelector('.job__title');
// Localizamos los input
const inputName =  document.querySelector('.input__name');
const inputJob =  document.querySelector('.input__job');
//la función que cambia los titulos.
function writeMe (event){
  // Miro a ver que input esta siendo activado
  const guilty = event.currentTarget;
  // miro el valor de su atributo data-target.
  const selector = guilty.getAttribute('data-target');
  // Seleccionamos el elemento que contenga la clase q hemos almacenado en selector.
  const target = document.querySelector(selector);
  // Le metemos el valor del input como innerHTML.
  target.innerHTML = guilty.value;
}
// Les añadimos  los listener que llaman a la misma función.
inputName.addEventListener('keyup', writeMe);
inputJob.addEventListener('keyup', writeMe);

function sayHi(){
  // eslint-disable-next-line no-console
  console.log('hi');
}
// Localizamos el container

const box = document.querySelector('.add__box');

//Creamos un titulo
const newTitle = document.createElement('h3');
// Creamos el texto
const newTitleContent = document.createTextNode('Texto');
// Introducimos el texto dentro del titulo.
newTitle.appendChild(newTitleContent);
// Le añadimos un listener.
newTitle.addEventListener('click', sayHi);
//Creamos una lista
const newList = document.createElement('ul');
// Le añadimos una clase.
newList.classList.add('list');
// Creamos tantos list como queramos con un bucle.
for (let i = 0; i < 3 ; i++ ){
  const listItem = document.createElement('li');
  // Creamos contenido para cada li
  const newListItemContent = document.createTextNode(`Elemento nº${i+1}`);
  // Agregamos El contenido al li
  listItem.appendChild(newListItemContent);
  // Le añadimos un atributo especial a cada li
  listItem.setAttribute('data-index', i);
  // Añañdimos los li a la lista
  newList.appendChild(listItem);
}
// Creamos una imagen
const newImg = document.createElement('img');
// Añadimos el src a la imagen
newImg.src='http://placehold.it/200x200';
// Añadimos una clase nueva
newImg.classList.add('box__img');

//Aun no aparece en la página.

//Lo añadimos al DOM
box.appendChild(newTitle);
box.appendChild(newList);
box.appendChild(newImg);