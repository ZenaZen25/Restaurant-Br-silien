fetch('data.json')
    .then(response => response.json())
    .then(data => {
       
        afficherRestaurant(data.plats);
       afficherServices (data.services)
      afficherTemoignages(data.temoignages)
    });

// Rôle : afficher les cartes sur la page.
// Paramètre : un tableau contenant les plats restaurant 
// Return : rien


function afficherRestaurant(tableauRecette) {
    tableauRecette.forEach(recette => {

        let titre = recette.nom;
        let description = recette.desc;
        let srcImg = recette.imageurl;
    
        document.getElementById("cardContainer").innerHTML +=`
  <div class="plate">
                    <img src="${srcImg}" alt="Feijoada" />
                    <div class="plate-description">
                        <h3 class="S">${titre}</h3>
                        <p>${description}</p>
                    </div>
                </div>`})};



// Rôle : afficher les cartes services.
// Paramètre : un tableau des services
// Return : rien

function afficherServices(tableauServices) {
    tableauServices.forEach(service => {
        let title = service.nom;
        let description = service.desc;

        document.getElementById("serviceContainer").innerHTML += `
        <div class="service-card">
                      
                        <h3>${title}</h3>
                        <p>${description}!</p>
                    </div>`;
    });
}


// Rôle : afficher les cartes de témoignages.
// Paramètre : un tableau des témoignages
// Return : rien

function afficherTemoignages(tableauTemoignages) {
    tableauTemoignages.forEach(temoin => {
        let prenom = temoin.prenom;
        let typeExperience = temoin.typeExperience;
        let commentaire = temoin.commentaire;
        let note = "★".repeat(temoin.note); // Affichage visuel des étoiles

        document.getElementById("temoignageContainer").innerHTML += `
        <div class="temoignage">
                    <div class="testCard">
                        <h3>${prenom}</h3>
                        <h4>${typeExperience}</h4>
                        <p>${commentaire}</p>
                          <div class="rating">${note}</div>
                    </div> `;
    });
}
