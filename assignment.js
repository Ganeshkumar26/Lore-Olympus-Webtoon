const track = document.querySelector('.carousel-track');
let index = 0;

function moveCarousel(direction) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  const itemWidth = items[0].getBoundingClientRect().width;

  if (direction === 'next') {
    index = (index + 1) % totalItems;
  } else {
    index = (index - 1 + totalItems) % totalItems;
  }

  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

setInterval(() => moveCarousel('next'), 3000);
