const track = document.querySelector('.carousel-track');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.arrow.left');
    const nextBtn = document.querySelector('.arrow.right');
    const cards = document.querySelectorAll('.card');

    let index = 0;

    function updateCarousel() {
      const cardWidth = cards[0].offsetWidth + 20; 
      track.style.transform = `translateX(-${index * cardWidth}px)`;

      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
      index++;
      if (index >= cards.length) index = 0;
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      index--;
      if (index < 0) index = cards.length - 1;
      updateCarousel();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        index = i;
        updateCarousel();
      });
    });