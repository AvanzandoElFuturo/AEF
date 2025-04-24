function filtrarHerramientas() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const herramientas = document.querySelectorAll(".tool-gallery a");
    let coincidencias = 0;
  
    herramientas.forEach((tool) => {
      const texto = tool.innerText.toLowerCase();
      const visible = texto.includes(input);
      tool.style.display = visible ? "block" : "none";
      if (visible) coincidencias++;
    });
  
    document.getElementById("noResults").style.display =
      coincidencias === 0 ? "block" : "none";
  }
  