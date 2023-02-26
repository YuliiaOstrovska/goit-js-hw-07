import { galleryItems } from './gallery-items.js';
// Change code below this line


// 1. Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox, яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.
// 2. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
// 3. Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
// 4. Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// 5. Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createGalleryMarcUp = () => galleryItems.map((image) =>
    `<a class="gallery__item" href="${image.original}">
  <img 
  class="gallery__image" 
  src="${image.preview}"
  alt="${image.description}"
  title="${image.description}" />
</a>`
).join("");
    
// console.log(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', createGalleryMarcUp());




galleryContainer.addEventListener("click", onImage);

function onImage(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return;
    }

};

new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionDelay: 250,
});