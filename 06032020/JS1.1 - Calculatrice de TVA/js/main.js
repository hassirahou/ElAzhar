// <!-- El Azhar -->


// <!-- JS1.1 - Calculatrice de TVA
// Énoncé
// L'utilisateur saisit un montant HT, le résultat TTC s'affiche en HTML.
// Détails
// • Le taux de TVA utilisé est le taux normal en vigueur en France, il ne
// bouge pas.
// • Il faut réafficher toutes les informations : le montant HT, le montant de
// TVA et le résultat TTC.
// • Le montant HT est un nombre à virgule (on peut saisir des centimes).
// Rappels
// • Attention au type de la donnée renvoyé par window.prompt() !
// Modifié le: jeudi 10 août 2017, 11:21 -->



const TAUX_DE_TVA = 20.0;
let montantHT;
let montantTTC;
let montantTVA;



montantHT = window.prompt('Quel est le montant HT ?');
montantHT = parseFloat(montantHT);
montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;




document.write('<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');