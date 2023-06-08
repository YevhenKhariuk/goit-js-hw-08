import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
    })
    .join('');
}

const addImgMark = createGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', addImgMark);

const addGallarySimpleLightBox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.9,
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 500,
});
