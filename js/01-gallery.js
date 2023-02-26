import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// 6. Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.
const galleryContainer = document.querySelector('.gallery');

const createGalleryMarcUp = () => galleryItems.map((image) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
            />
        </a>
    </div>`
).join("");
    
// console.log(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', createGalleryMarcUp());

galleryContainer.addEventListener('click', onImage);

function onImage(evt) {
    evt.preventDefault();
    console.log(evt.target.nodeName)
    if (evt.target.nodeName !== "IMG") {
        return;
    };
    const imageSelected = evt.target.getAttribute("data-source");
    if (!imageSelected){return;}
    console.log(imageSelected);




    const openModulWindow = basicLightbox.create(
            `<img src="${imageSelected}" width="800" height="600">`,
        {
        
            onShow: () => {document.addEventListener("keydown", closeModal);},
        
            onClose: () => {document.removeEventListener("keydown", closeModal);},
        }
        );
      
    openModulWindow.show();
        
    function closeModal(evt) {
        if (evt.key === "Escape") {
            openModulWindow.close();
        }
    };
};
