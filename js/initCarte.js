var maCarte;
var baseMaps, couches

function creationCarte(){

    // Création de l'objet cartographique nque l'on nomme 'map' et à qui l'on passe nos trois fonds de carte
    var maCarte = L.map('Carte', {
        center: [45.5534,-73.6657],
        zoom: 11,
        layers: [sat, light, dark, streets]
    })
    	
    //Regroupement des fonds de carte
    var baseMaps = {
        "Rues": streets,
        "Satellite": sat,
        "Lite": light,
        "Dark": dark
    }	

    //////////////
    //Couche des revenus
    couchePoly().addTo(maCarte)

    /////////////////
    //Section menu de sélection des couches
    var couches = {
        "<b>Revenu après impôt médian des ménages en 2015</b>": couchePoly()
    }

    L.control.layers(baseMaps, couches).addTo(maCarte)

    /////////////////
    //Section information
    //Ajout de la boite à notre carte
    info.addTo(maCarte)

    //////////////////
    //Section Légende
    // Ajout de la légende à la carte
    creationLegende().addTo(maCarte)

    /////////////////
    //Section crédits
    //Ajout de la référence pour les données
    maCarte.attributionControl.addAttribution('Fond de plan OSM & MapBox. Données &copy; <a href="http://statisticscanada.ca/">Statistiques Canada</a>');

}