 // Mostrar u ocultar la sección de barrio según el municipio seleccionado
 document.querySelectorAll('input[name="municipio"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    var municipio = this.value;
    var barrioContainer = document.getElementById("barrio-container");
    var municipioHeader = document.getElementById("municipio-header");

    // Mostrar la pregunta sobre barrio solo si se selecciona "Cartagena rural"
    if (municipio === "Cartagena rural" || municipio=== "Cartagena urbana") {
      municipioHeader.textContent = "Cartagena";
      barrioContainer.style.display = "block";
    }else if (municipio === "Arjona") {
      municipioHeader.textContent = "Arjona";
      barrioContainer.style.display = "block";
    } 
    
    
    else {
      barrioContainer.style.display = "none";
    }
  });
});

// Función para mostrar u ocultar el formulario dependiendo del consentimiento
function toggleFormulario(mostrar) {
  document.getElementById("preguntas-formulario").style.display = mostrar
    ? "block"
    : "none";
}