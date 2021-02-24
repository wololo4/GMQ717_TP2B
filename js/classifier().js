function classifier(valeur) {
    if (valeur <= 40000) {
        couleur = "rgb(202, 0, 32)"
    } else if (valeur > 40000 && valeur <= 60000) {
        couleur = "rgb(230, 110, 97)"
    } else if (valeur > 60000 && valeur <= 80000) {
        couleur = "rgb(245, 193, 169)"
    } else if (valeur > 80000 && valeur <= 100000) {
        couleur = "rgb(247, 247, 247)"
    } else if (valeur > 100000 && valeur <= 120000) {
        couleur = "rgb(180, 214, 231)"
    } else if (valeur > 120000 && valeur <= 200000){
        couleur = "rgb(99, 169, 207)"
    } else if (valeur > 200000){
        couleur = "rgb(5, 113, 176)"
    } else {
        couleur = "grey"
    }
    return couleur
}