document.addEventListener("DOMContentLoaded", function() {
    
    // GESTION DES BOUTONS "VOIR PLUS"
    // Ce code permet d'afficher ou masquer les détails de tes expériences
    const buttons = document.querySelectorAll(".toggle-btn");
    
    buttons.forEach(btn => {
        btn.addEventListener("click", function() {
            // On cible l'élément juste après le bouton (le div content-detail)
            const detail = this.nextElementSibling;
            
            if (detail.style.display === "block") {
                // Si c'est déjà ouvert, on ferme
                detail.style.display = "none";
                this.textContent = "Voir plus";
            } else {
                // Sinon, on affiche
                detail.style.display = "block";
                this.textContent = "Voir moins";
            }
        });
    });

});