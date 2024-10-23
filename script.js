document.addEventListener('DOMContentLoaded', () => {
    const bannerButton = document.querySelector('.banner .buy-now');
    bannerButton.addEventListener('mouseover', () => {
      bannerButton.style.transform = 'scale(1.1)';
    });
    bannerButton.addEventListener('mouseout', () => {
      bannerButton.style.transform = 'scale(1)';
    });
  
    // Smooth scrolling for navigation links (optional)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Prevenir o comportamento padrão do link
        e.preventDefault();
  
        // Verificar se o link tem um ID alvo
        const targetId = link.getAttribute('href');
        
        if (targetId && targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
  
          if (targetElement) {
            // Rolar suavemente para o elemento alvo
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  });
  