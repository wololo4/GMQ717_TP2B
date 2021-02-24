function creationLegende(){
    //	Création d'une légende avec, encore une fois, la méthode "control" de Leaflet
    legende = L.control({position: 'bottomright'})

    // Créons deux listes, une pour les diférentes classes et l'autres pour les couleurs correspondantes
    classes = [0, 40000, 60000, 80000, 100000, 120000, 200000, 300000]
    palette = ["rgb(202, 0, 32)", "rgb(230, 110, 97)", "rgb(245, 193, 169)", "rgb(247, 247, 247)", "rgb(180, 214, 231)", "rgb(99, 169, 207)", "rgb(5, 113, 176)"]

    // Lorsque la légende est ajoutée à la carte, cette fonction est activée
    legende.onAdd = function (map) {
        // création d'un élément <div> dans le DOM
        div = L.DomUtil.create('div', 'info legende')		
        labels = []
        // itération à travers les classes et création des icones sous forme de code HTML
        for (i = 0; i < classes.length - 1; i++) {
            labels.push('<i style="background:' + palette[i] + '"></i>' + classes[i] + ' $ à ' + classes[i + 1] + " $<br>")
        }
        // injection du code HTML dans la page
        div.innerHTML = '<h4>Valeur en dollars par année</h4><hr>' + labels.join('<br>') + '</br><i style="background:grey"></i> Pas de données disponible'
        return div
    }
    return legende
}