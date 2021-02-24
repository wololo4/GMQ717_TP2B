var sat, light, dark, streets;

/////////////////////////////// 
//Section fond de carte

// Initialisation d'une carte avec plusieurs fonds de carte
// Nous mettons l'adresse de l'API MapBox dans une variable 'mapboxUrl'. Nottez la variable {id} qui sera attribuée plus tard (ligne 39, 40, 41) pour chaque fond de carte. 'votre_clef' doit être remplacé par la clef que vous trouverez sur account.mapbox.com
mapboxUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid29sb2xvNCIsImEiOiJja2w5dHlhdzAyOW1vMm9ucjIzcTM2bGZjIn0.0e8jV31O_Kkt-U33MFfudQ'
// Création d'une variable dans laquelle nous mettons les informations d'attribution
mapboxAttribution = 'Fond de carte &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'via © <a href="https://www.mapbox.com/">Mapbox</a>'


// Création des trois fond de carte en réutilisant les variables précédemment céées
light = L.tileLayer(mapboxUrl, {id: 'mapbox/light-v10', attribution: mapboxAttribution})
streets = L.tileLayer(mapboxUrl, {id: 'mapbox/streets-v11', attribution: mapboxAttribution})
sat = L.tileLayer(mapboxUrl, {id: 'mapbox/satellite-v9', attribution: mapboxAttribution})
dark = L.tileLayer(mapboxUrl, {id: 'wololo4/ckl9tyipm19o017p5s14b9z5n', attribution: mapboxAttribution})

//////////////
//Couche des revenus
//  Dans <script><script>, importation d'une couche GeoJSON grâce au plugin "leaflet-ajax"
//	En plus du style, on ajoute des fonctions d'intéraction à chaque polygone grâce à https://leafletjs.com/reference-1.6.0.html#geojson-oneachfeature
function couchePoly(){
    poly = new L.GeoJSON.AJAX('data/Montreal_v0743.geojson', {
        style: function(feature) {
            return {
                weight: 1,
                opacity: .5,
                color: 'black',
                dashArray: '3',
                fillOpacity: 0.9,
                fillColor: classifier(feature.properties.revenu)
            }
        },onEachFeature: function(feature, layer) {
            layer.on({
                //	Lorsqu'un "click" est détecté sur un polygone, on adapte la vue (avec https://leafletjs.com/reference-1.6.0.html#map-fitbounds) afin de zoomer sur celui-ci
                click: function(objetClique) {
                    maCarte.fitBounds(objetClique.target.getBounds());
                },
                //	Lorsque "mouseover" est détecté, on change le style du polygone et on met à jour la boite d'information
                mouseover: function(objetSurvole) {
                    objetSurvole.target.setStyle({
                        weight: 2,
                        color: 'white',
                        dashArray: '',
                        fillOpacity: 0.5
                    });
                    info.miseAJour(objetSurvole.target.feature.properties)
                },
                //	Lorsque "mouseout" est détecté, on invoque "resetStyle" sur le polygone (https://leafletjs.com/reference-1.6.0.html#geojson-resetstyle) et on met à jour la boite d'information
                mouseout: function(objetquiEtaitSurvole) {
                    poly.resetStyle(objetquiEtaitSurvole.target)
                    info.miseAJour()
                }
            })
        }
    });
    return poly
}