// WhatsApp Button
const whatsappBtn = document.getElementById('whatsappBtn');
whatsappBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const mensaje = encodeURIComponent(
    "Hola, quiero solicitar una cotización con Electrónica PYD para un proyecto."
  );
  window.open(`https://wa.me/50230228637?text=${mensaje}`, '_blank');
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  const nombre = document.getElementById('nombre').value;
  const mensaje = document.getElementById('mensaje').value;
  
  if (nombre.length < 3) {
    alert('Por favor ingresa un nombre válido (mínimo 3 caracteres).');
    e.preventDefault();
    return false;
  }
  
  if (mensaje.length < 10) {
    alert('Por favor describe tu proyecto con más detalle (mínimo 10 caracteres).');
    e.preventDefault();
    return false;
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
