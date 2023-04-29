//FONCTION POUR FLIP LES CARDS

// Récupération de toutes les images 
const pics = document.querySelectorAll('.pic');

// Ajout d'un écouteur d'évènement sur chaque image
pics.forEach(pic => {
  pic.addEventListener('click', () => {
    //Récupération du texte et du lien associé à l'image
    const cardContent = pic.nextElementSibling;

    // Affichage de la div qui contient le texte
    cardContent.style.display = 'block';

    // Récupération du lien 
    const link = cardContent.querySelector('a').getAttribute('href');

    // Ajout d'un écouteur d'évènement sur le texte pour rediriger vers le lien
    cardContent.addEventListener('click', () => {
      window.location.href = link;
    });
  });
});