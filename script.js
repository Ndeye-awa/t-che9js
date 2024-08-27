// Creation de deux tableau
let tab1 = [1, -3, 5, -7, 9];
let tab2 = [-2, 4, -6, 8, -10];

// les elements positifs de tab1 dans tab3
let tab3 = tab1.filter(num => num > 0);

// Remplacer tous les elements de tab2 par des 0 
let modifierTab2 = tab2.map(() => 0);

// affichage 
document.getElementById('resultat').innerHTML = `
<p>Tableau tab3 avec éléments positifs de tab1 : [${tab3.join(', ')}]</p>
    <p>Tableau tab2 remplacé par des zéros : [${modifierTab2.join(', ')}]</p>
`;