// ====== EFECTO SUAVE AL HACER CLIC EN ENLACES ======
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ====== VALIDACIÓN DEL FORMULARIO ======
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    const nombre = form.querySelector("input[name='nombre']").value;
    const email = form.querySelector("input[name='email']").value;
    const mensaje = form.querySelector("textarea[name='mensaje']").value;

    if (nombre.length < 3) {
      alert("Por favor escribe tu nombre completo.");
      e.preventDefault();
      return;
    }

    if (!email.includes("@")) {
      alert("Correo inválido.");
      e.preventDefault();
      return;
    }

    if (mensaje.length < 10) {
      alert("Describe mejor lo que deseas cotizar.");
      e.preventDefault();
      return;
    }

    alert("Gracias. Tu solicitud ha sido enviada 🚀");
  });
}

// ====== BOTÓN DE WHATSAPP DINÁMICO ======
const whatsappBtn = document.querySelector(".btn");

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    const mensaje = encodeURIComponent(
      "Hola, quiero información y una cotización."
    );
    whatsappBtn.href = `https://wa.me/502XXXXXXXX?text=${mensaje}`;
  });
}
