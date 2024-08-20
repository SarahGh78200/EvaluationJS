
//créartion d'un fonction avec un tableau vide
let listeDeTaches = [];

//Fonction qui ajoute la tache au tableau
function ajouterTache(tache) {
    listeDeTaches.push(tache);
    //  console.log("Tâche ajoutée :", tache);
}
// variable bouton ajouter
let boutonAjouter = document.getElementById("AddTaskButton");

//boutonAjouter.addEventListener("click", () => { 
document.getElementById('AddTaskButton').addEventListener("click", () => {
   
    document.getElementById("Taskinput").value;
    ajouterTache(listeDeTaches);
    //retrouver par l'id
    document.getElementById("Taskinput").value = "";
});
//console.log (boutonAjouter)

// fonction qui permet d'afficher la tache dans le ul de l'html
function afficherLesTaches() {
    listeDeTaches.forEach('listeDeTache').innerHTML.ul;
    //[].forEach('liste de tache').innerHTML.ul (ne sais pas si cela fonctionne )

}

// création du bouton 
let boutonSupprimer = document.createElement('button');
//Ajout du text au bouton supprimer
boutonSupprimer.textContent = "Supprimer";
//lorsque que l'on click cela supprime 
boutonSupprimer.click = () => supprimer(tache)

// fonction qui me permet su supprimer les taches 
function supprimerTache(index) {
    listeDeTaches = listeDeTaches.filter((i) => i !== index);
    afficherLesTaches();
}
