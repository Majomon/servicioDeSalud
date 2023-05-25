const carouselImages = document.querySelectorAll('.carousel .imgInicial');
let currentImageIndex = 0;

function showNextImage() {
  carouselImages[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  carouselImages[currentImageIndex].classList.add('active');
}

// Mostrar la primera imagen inicialmente
carouselImages[currentImageIndex].classList.add('active');

// Cambiar de imagen cada 2 segundos
setInterval(showNextImage, 2000);