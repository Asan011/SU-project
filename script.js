const carousel = document.querySelector('.carousel');
const scrollbarThumb = document.querySelector('.scrollbar-thumb');

let currentIndex = 0;
const itemsToShow = 3; // Количество видимых элементов
const totalItems = document.querySelectorAll('.carousel-item').length;
const itemWidth = 320; // Ширина элемента с учетом отступов
const maxIndex = totalItems - itemsToShow;

document.querySelector('.carousel-wrapper').addEventListener('wheel', (event) => {
    event.preventDefault();

    if (event.deltaY > 0 && currentIndex < maxIndex) {
        currentIndex++;
    } else if (event.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
    }

    // Прокрутка карусели
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    // Прокрутка индикатора
    const scrollbarWidth = document.querySelector('.scrollbar').offsetWidth;
    const thumbWidth = scrollbarThumb.offsetWidth;
    const maxThumbPosition = scrollbarWidth - thumbWidth;
    const thumbPosition = (currentIndex / maxIndex) * maxThumbPosition;
    scrollbarThumb.style.transform = `translateX(${thumbPosition}px)`;
});
