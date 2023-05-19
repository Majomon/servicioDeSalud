// Funciones para validar ingresos en el formulario

function validarNombre() {
    var nombre = document.getElementById("nombre").value;
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        document.getElementById("nombre-error").innerHTML = "X Por favor solo letras y espacios.";
    } else {
        document.getElementById("nombre-error").innerHTML = "";
    }
}

function validarEmail() {
    var email = document.getElementById("email").value;
    if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("email-error").innerHTML = "X Por favor ingrese un correo electrónico válido.";
    } else {
        document.getElementById("email-error").innerHTML = "";
    }
}

function validarTelefono() {
    var telefono = document.getElementById("telefono").value;
    if (!/^\d{10}$/.test(telefono)) {
        document.getElementById("telefono-error").innerHTML = "X Por favor ingrese un número de teléfono válido sin el 0 y sin el 15.";
    } else {
        document.getElementById("telefono-error").innerHTML = "";
    }
}

function validarConsulta() {
    var consulta = document.getElementById("consulta").value;
    if (consulta.length < 10) {
        document.getElementById("consulta-error").innerHTML = " X Por favor ingrese una consulta con al menos 10 caracteres.";
    } else {
        document.getElementById("consulta-error").innerHTML = "";
    }
}
/* abrir una ventana de alerta con los datos ingresados */
const formulario = document.getElementById('Formulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  const opciones = document.getElementById('opciones').value;
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const email = document.getElementById('email').value;
  const consulta = document.getElementById('consulta').value;

  const mensajeAdvertencia = ` Opcion elegida: ${opciones}\nNombre: ${nombre}\nEmail: ${email}\nTelefono: ${telefono}\nconsulta: ${consulta}`;

  window.alert(mensajeAdvertencia);
});