

document.addEventListener('DOMContentLoaded', () => {
  
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  hamburger.addEventListener('click', () => {
      navbar.classList.toggle('open');
      hamburger.classList.toggle('open');
  });

  
  const roles = ['Frontend Developer', 'UI/UX Enthusiast', 'Web Designer', 'JavaScript Lover'];
  let idx = 0;
  const changingTextEl = document.getElementById('changing-text');

  function cycleText() {
      changingTextEl.textContent = roles[idx];
      idx = (idx + 1) % roles.length;
  }

  
  cycleText();
  setInterval(cycleText, 2500);

  
  document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
          e.preventDefault();
          const targetID = link.getAttribute('href').slice(1);
          const targetEl = document.getElementById(targetID);
          if (targetEl) {
              window.scrollTo({
                  top: targetEl.offsetTop - 60,  
                  behavior: 'smooth'
              });
          }
          
          if (navbar.classList.contains('open')) {
              navbar.classList.remove('open');
              hamburger.classList.remove('open');
          }
      });
  });
});

