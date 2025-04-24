const melAef = `
 __  __ _____ _               ______ ______ 
|  \\/  | ____| |         /\\  |  ____|  ____|
| \\  / | |__ | |        /  \\ | |__  | |__   
| |\\/| |  __|| |       / /\\ \\|  __| |  __|  
| |  | | |___| |____  / ____ \\ |___ | |     
|_|  |_|_____|______|/_/    \\_\\_____|_|     

                 M E L   A E F
`;

console.log(melAef);

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("hero-video");

  if (!video) {
    console.error("No se encontró el elemento de video");
    return;
  }

  const videos = [
    "Video/AEF/1.mp4",
    "Video/AEF/2.mp4",
    "Video/AEF/3.mp4",
    "Video/AEF/4.mp4"
  ];

  let currentVideoIndex = 0;

  function changeVideo() {
    // Paso 1: Desvanece el video actual
    video.classList.add("fade-out");
  
    // Paso 2: Espera a que termine el fade-out antes de cambiar el video
    setTimeout(() => {
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
      video.src = videos[currentVideoIndex];
      video.load();
  
      // Espera un poco más antes de volver a hacer fade-in
      setTimeout(() => {
        video.classList.remove("fade-out");
        video.classList.add("fade-in");
  
        video.play().catch((error) => {
          console.error("Error al reproducir el video:", error);
        });
  
        // Quita la clase fade-in después de que termine la transición
        setTimeout(() => {
          video.classList.remove("fade-in");
        }, 1000);
      }, 300); // Espera corta para evitar salto brusco
    }, 700); // Tiempo para fade-out
  }
  
  video.addEventListener("ended", () => {
    changeVideo();
  });

  video.play().catch((error) => {
    video.muted = true;
    video.play();
  });




  // Toggle menu en responsive
  const toggleBtn = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');
  const menuIcon = document.getElementById('menu-icon');
  let menuAbierto = false;

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuAbierto = !menuAbierto;

  // Animar la imagen con clase temporal
  menuIcon.classList.add('animate');

  setTimeout(() => {
    menuIcon.src = menuAbierto ? 'Img/Menu_Abierto.png' : 'Img/Menu_Cerrado.png';
    toggleBtn.setAttribute('aria-label', menuAbierto ? 'Cerrar menú' : 'Abrir menú');

    // Quitar la animación después de que se cambie la imagen
    menuIcon.classList.remove('animate');
  }, 300); // Coincide con la duración del CSS (0.3s)
});
})


document.addEventListener("DOMContentLoaded", () => {
  const departamentos = document.querySelectorAll(".departamento");

  departamentos.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
});
