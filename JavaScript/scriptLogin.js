document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const users = {
    "bolivar@aef.com": "bolivar1234",
    "antioquia@aef.com": "antioquia1234",
    "cesar@aef.com": "cesar1234",
    "prueba@aef.com": "1234",
    "meal@aef.com":"1234"
  };

  const redirects = {
    "bolivar@aef.com": "../Html/seleccionarProgramaMEL.html",
    "antioquia@aef.com": "../Html/antioquia.html",
    "cesar@aef.com": "../Html/cesar.html",
    "prueba@aef.com": "../Html/paginaDeUsoExclusivo.html",
    "meal@aef.com":"../Html/mealBolivar.html",
   
  };

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (users[email] && users[email] === password) {
    window.location.href = redirects[email];
  } else {
    errorMessage.textContent = "Usuario o contraseña incorrectos. Por favor, intenta nuevamente.";
    errorMessage.style.display = "block";
  }
});
