var info

//	Ajout d'un espace pour afficher des informations (une espèce de "boite") qui restera fixe sur la page. Dans Leaflet.js, cet espace est un objet auquel on peut attribuer des méthodes https://leafletjs.com/reference-1.6.0.html#control
info = L.control({position: 'topleft'});
info.onAdd = function (maCarte) {
    this._div = L.DomUtil.create('div', 'info');
    this.miseAJour();
    return this._div;
}
//	Ajout d'une méthode pour mettre à jour le texte de la boite d'information
info.miseAJour = function (polygoneSurvole) {
    if (typeof polygoneSurvole !== 'undefined') {
        information = 'Aire de diffusion ' + polygoneSurvole.da_number + ' : <b>' + polygoneSurvole.revenu + '$</b>'
    }
    else {
        information = '<em>Pointez une aire de diffusion</em>'
    }
    this._div.innerHTML = '<h4>Revenu après impôt médian des ménages en 2015</h4><hr>' + information
};
