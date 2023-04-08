function animateOars(push) {
    const leftOar = document.getElementById("oar-left");
    const rightOar = document.getElementById("oar-right");
  
    if (push) {
      // Rotation des rames en poussant
      leftOar.setAttribute("rotation", "0 60 0");
      rightOar.setAttribute("rotation", "0 -60 0");
    } else {
      // Rotation des rames en relâchant
      leftOar.setAttribute("rotation", "0 -35 0");
      rightOar.setAttribute("rotation", "0 35 0");
    }
  }
  
  function addErgometerListener() {
    // Ajoute un listener pour les données de l'ergomètre et anime les rames
    // en fonction de la poussée (exemple simplifié)
    ergometer.on('data', (data) => {
      if (data.pushing) {
        animateOars(true);
      } else {
        animateOars(false);
      }
    });
  }
  
  // Simule la récupération des données de l'ergomètre
  // Vous devrez implémenter cette fonction pour récupérer les données réelles de votre ergomètre
  function getErgometerData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ pushing: Math.random() > 0.5 });
      }, 1000);
    });
  }
  
  (async () => {
    addErgometerListener();
  
    while (true) {
      const data = await getErgometerData();
      if (data.pushing) {
        animateOars(true);
      } else {
        animateOars(false);
      }
    }
  })();