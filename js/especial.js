// Script para alterar o estilo do header ao rolar a página
window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    if (header) { // Verifica se o header existe
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Script para ativar/desativar o menu responsivo com o ícone
let menuIcon = document.querySelector(".menu-icon");
if (menuIcon) { // Verifica se o ícone do menu existe
    menuIcon.addEventListener("click", function() {
        let navMenu = document.querySelector(".navmenu");
        if (navMenu) {
            navMenu.classList.toggle("active");
        }
    });
}

let scrollTop = document.querySelector('.scroll-top');

function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);
