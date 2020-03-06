

//  HAKIM
let dayNames   = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
let monthNames = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet',
                  'Août','Septembre','Octobre','Novembre','Décembre'];
let today = new Date();

document.write('Nous sommes le ' + dayNames[today.getDay()] + ' ');
document.write(today.getDate() + ' ');
document.write(monthNames[today.getMonth()] + ' ');
document.write(today.getFullYear() + '.');

document.open();
// le deuxieme !!!
// tu copie ca dans des dosssier js un dans chaque exo et tu fais un feuille 
// html normal avec