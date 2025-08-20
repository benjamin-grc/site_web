// Fonction pour montrer/cacher la solution liée au bouton
document.querySelectorAll('.btn-solution').forEach((btn) => {
  btn.addEventListener('click', () => {
      // Trouver la solution juste après le bouton
      const solution = btn.closest('.exo').querySelector('.solution');

      // Toggle l'affichage
      if (solution.style.display === "none" || solution.style.display === "") {
          solution.style.display = "block";
          btn.textContent = "Cacher la solution";  // change le texte
      } else {
          solution.style.display = "none";
          btn.textContent = "Afficher la solution";
      }
  });
});