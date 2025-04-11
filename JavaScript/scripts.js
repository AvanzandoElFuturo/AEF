document.addEventListener("DOMContentLoaded", () => {
  // Obtener el elemento de video por su ID
  const video = document.getElementById("hero-video");
  
  // Verifica si el video existe en el DOM
  if (!video) {
    console.error("No se encontró el elemento de video");
    return;
  }

  console.log("Video cargado correctamente:", video);

  // Lista de videos en el orden que deben reproducirse
  const videos = [
    "Video/AEF/1.mp4",
    "Video/AEF/4.mp4",
    "Video/AEF/5.mp4",
    "Video/AEF/7.mp4"
      ];

  // Índice del video actual
  let currentVideoIndex = 0;

  // Función para cambiar de video automáticamente
  function changeVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    video.src = videos[currentVideoIndex];
    
    console.log("Cambiando video a:", video.src);

    // Forzar la recarga y reproducción del video
    video.load();
    video
      .play()
      .then(() => console.log("Video reproduciéndose:", video.src))
      .catch((error) => console.error("Error al reproducir el video:", error));
  }
  // Detectar cuando el video termina para cambiar al siguiente
  video.addEventListener("ended", () => {
    console.log("El video terminó, cambiando al siguiente.");
    changeVideo();
  });

  // Intentar reproducir el primer video automáticamente
  video
    .play()
    .then(() => console.log("Reproducción automática iniciada."))
    .catch((error) => {
      console.warn("El navegador bloqueó la reproducción automática:", error);
      video.muted = true; // Silenciar el video para permitir reproducción automática
      video.play();
    });
});
