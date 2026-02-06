const circle = document.getElementById('circleeducationone');
const tooltip = document.getElementById('tooltipone');

circle.addEventListener('mouseenter', (e) => {
  tooltip.style.display = 'block';
  // Расположение подсказки:
  tooltip.style.left = e.pageX + 10 + 'px';
  tooltip.style.top = e.pageY + 10 + 'px';
});

circle.addEventListener('mousemove', (e) => {
  tooltip.style.left = e.pageX + 10 + 'px';
  tooltip.style.top = e.pageY + 10 + 'px';
});

circle.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none';
});

const circletwo = document.getElementById('circleeducationtwo');
const tooltiptwo = document.getElementById('tooltiptwo');

circletwo.addEventListener('mouseenter', (e) => {
  tooltiptwo.style.display = 'block';
  // Расположение подсказки:
  tooltiptwo.style.left = e.pageX + 10 + 'px';
  tooltiptwo.style.top = e.pageY + 10 + 'px';
});

circletwo.addEventListener('mousemove', (e) => {
  tooltiptwo.style.left = e.pageX + 10 + 'px';
  tooltiptwo.style.top = e.pageY + 10 + 'px';
});

circletwo.addEventListener('mouseleave', () => {
  tooltiptwo.style.display = 'none';
});

const circlethree = document.getElementById('circleeducationthree');
const tooltipthree = document.getElementById('tooltipthree');

circlethree.addEventListener('mouseenter', (e) => {
  tooltipthree.style.display = 'block';
  // Расположение подсказки:
  tooltipthree.style.left = e.pageX + 10 + 'px';
  tooltipthree.style.top = e.pageY + 10 + 'px';
});

circlethree.addEventListener('mousemove', (e) => {
  tooltipthree.style.left = e.pageX + 10 + 'px';
  tooltipthree.style.top = e.pageY + 10 + 'px';
});

circlethree.addEventListener('mouseleave', () => {
  tooltipthree.style.display = 'none';
});

const images = ['img1.jpg', 'img2.jpg', 'img3.jpg']; // список картинок
let currentIndex = 0;

function updateImage() {
  document.getElementById('slide-image').src = images[currentIndex];
}

function previousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1; // возвращаемся к последней
  }
  updateImage();
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0; // возвращаемся к первой
  }
  updateImage();
}