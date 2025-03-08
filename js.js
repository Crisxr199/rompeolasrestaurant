
//ONCLIKS
function click1() {
    window.open('https://web.whatsapp.com/send/?phone=584129205451', '_blank');
}

//SCROLL

function checkVisibility() {
    const sections = document.querySelectorAll('section'); // O el selector que uses
  
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  
      if (isVisible) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }
  
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility); // Para manejar cambios de tamaño de ventana
  checkVisibility(); // Para verificar la visibilidad inicial

//LUPA
function buscarEnMenu() {
    const input = document.getElementById('searchInput');
    const filtro = input.value.toUpperCase();
    const platos = document.querySelectorAll('.plato, .platoo, .platooo'); // Selecciona todos los platos
    let primerEncontrado = null; // Variable para almacenar el primer elemento encontrado
  
    // Elimina la clase 'resaltado' de todos los platos antes de la nueva búsqueda
    platos.forEach(plato => plato.classList.remove('resaltado'));
  
    platos.forEach(plato => {
      const texto = plato.textContent.toUpperCase();
      if (texto.indexOf(filtro) > -1) {
        plato.classList.add('resaltado'); // Agrega la clase 'resaltado' para subrayar
  
        if (!primerEncontrado) {
          primerEncontrado = plato; // Almacena el primer elemento encontrado
        }
      }
    });
  
    // Si se encontró al menos un elemento, realiza el scroll al primer elemento
    if (primerEncontrado) {
      primerEncontrado.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  
    // Elimina la clase 'resaltado' después de 5 segundos
    setTimeout(() => {
      platos.forEach(plato => plato.classList.remove('resaltado'));
    }, 5000); // 5000 milisegundos = 5 segundos
  }