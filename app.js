function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Show button when scrolled down 100px from top
  window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
          scrollToTopBtn.style.display = 'block';
      } else {
          scrollToTopBtn.style.display = 'none';
      }
  });

  // Smooth scroll to top on button click
  scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });



const points = document.querySelectorAll('.point');
    const overlay = document.getElementById('overlay');

    points.forEach(point => {
        point.addEventListener('click', () => {
            // Remove zoomed class from any other point
            points.forEach(p => p.classList.remove('zoomed'));
            
            // Add zoomed class to clicked point and show overlay
            point.classList.add('zoomed');
            overlay.style.display = 'block';
        });
    });

    // Click overlay to close zoom effect
    overlay.addEventListener('click', () => {
        points.forEach(point => point.classList.remove('zoomed'));
        overlay.style.display = 'none';
    });

    function toggleLiftUp(cardsss) {
      // Toggle the 'active' class to lift and zoom the clicked card
      card.classList.toggle('active');
      
      // Optionally, remove the 'active' class from other cards when one is clicked
      const allCardss = document.querySelectorAll('.cardsss');
      allCardss.forEach(item => {
          if (item !== card) {
              item.classList.remove('active');
          }
      });
  }