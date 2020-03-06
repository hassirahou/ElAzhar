// <!-- El Azhar -->

// <!-- JS1.1 - Date du Jour
// Enoncé
// Afficher dynamiquement la date du jour en HTML sous la forme “Nous
// sommes le Mardi 11 Février 2014”.
// Détails
// • Il va falloir se servir de tableaux pour afficher en français les noms des
// jours de la semaine et des mois...
// Rappels
// • La classe Date possède une méthode pour extraire chaque partie de la
// date et de l'heure
// • Attention aux valeurs renvoyées par chaque méthode, bien lire la
// documentation
// Modifié le: mercredi 4 octobre 2017, 12:20 -->


let dayNames   = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
let monthNames = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
let today = new Date();

document.write('Nous sommes le ' + dayNames[today.getDay()] + ' ');
document.write(today.getDate() + ' ');
document.write(monthNames[today.getMonth()] + ' ');
document.write(today.getFullYear() + '.');
document.open();
