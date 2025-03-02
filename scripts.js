document.addEventListener("DOMContentLoaded", function() {
    
    // Vérification de l'âge avec prompt()
    function verifyAge() {
        let age = prompt("Veuillez entrer votre âge :");

        if (age === null || age.trim() === "" || isNaN(age)) {
            alert("Vous devez entrer un nombre valide !");
            location.reload(); // Recharge la page pour redemander l'âge
        } else if (parseInt(age) < 18) {
            alert("Désolé, vous devez avoir au moins 18 ans pour accéder à ce site.");
            window.location.href = "https://www.google.com"; // Redirection
        }
    }

    verifyAge(); // Appel immédiat après chargement du DOM

    // Scroll smooth pour la navigation
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Afficher/Masquer le bouton "Retour en haut"
    window.onscroll = function() {
        const backToTopButton = document.getElementById('backToTop');
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    // Fonction pour défiler vers le haut
    document.getElementById('backToTop').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
