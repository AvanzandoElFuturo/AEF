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





  // Toggle menu en responsive
  const toggleBtn = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');
  const menuIcon = document.getElementById('menu-icon');
  let menuAbierto = false;

  console.log(menuIcon)
  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuAbierto = !menuAbierto;
  
    // Animar la imagen con clase temporal
    menuIcon.classList.add('animate');
  
    setTimeout(() => {
      menuIcon.src = menuAbierto ? '../Img/Menu_Abierto.png' : '../Img/Menu_Cerrado.png';
      toggleBtn.setAttribute('aria-label', menuAbierto ? 'Cerrar menú' : 'Abrir menú');
  
      // Quitar la animación después de que se cambie la imagen
      menuIcon.classList.remove('animate');
    }, 300); // Coincide con la duración del CSS (0.3s)
  });
  


