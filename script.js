let text_question = document.getElementById("question");
let text_propositions= document.querySelectorAll(".proposition_container span");
let texte_fin = document.querySelector("h2");
let bouton = document.getElementById("bouton")

const list_question = [
    {
        question: "Quel est le plus grand océan du monde ?",
        propositions: ["Océan Atlantique", "Océan Indien", "Océan Pacifique", "Océan Arctique"],
        reponseVrai: 2
    },
    {
        question: "Qui a peint La Nuit étoilée ?",
        propositions: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Léonard de Vinci"],
        reponseVrai: 1
    },
    {
        question: "Quelle est la capitale de l’Australie ?",
        propositions: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        reponseVrai: 2
    },
    {
        question: "Quel est le symbole chimique de l’or ?",
        propositions: ["Ag", "Au", "O", "Fe"],
        reponseVrai: 1
    },
    {
        question: "En quelle année l’homme a-t-il marché sur la Lune pour la première fois ?",
        propositions: ["1965", "1969", "1972", "1975"],
        reponseVrai: 1
    },
    {
        question: "Quel est le plus long fleuve du monde ?",
        propositions: ["Amazone", "Mississippi", "Yangtsé", "Nil"],
        reponseVrai: 3
    },
    {
        question: "Quel écrivain a écrit Les Misérables ?",
        propositions: ["Victor Hugo", "Émile Zola", "Gustave Flaubert", "Honoré de Balzac"],
        reponseVrai: 0
    },
    {
        question: "Quel est le pays le plus peuplé d’Afrique ?",
        propositions: ["Égypte", "Nigéria", "Afrique du Sud", "Éthiopie"],
        reponseVrai: 1
    },
    {
        question: "Quelle planète est surnommée la « planète rouge » ?",
        propositions: ["Mars", "Vénus", "Jupiter", "Mercure"],
        reponseVrai: 0
    },
    {
        question: "Quel est l’organe principal du système nerveux central ?",
        propositions: ["Cœur", "Foie", "Cerveau", "Poumon"],
        reponseVrai: 2
    }
];


let i = 0;
let score =0;

function affiche_question() {
    q = list_question[i]['question'];
    pro = list_question[i]['propositions'];
    text_question.textContent = q;
    if(i>=list_question.length-1){
        text_propositions.forEach(function(text_proposition){
            text_proposition.classList.add("sup")
        })
        text_question.textContent="quiz terminé avec succès";
        text_question.style.fontSize="1.4em";
        text_question.style.color ="rgba(221, 255, 0, 1)";
        texte_fin.textContent="quiz terminé votre score est de " + score +" sur 10";
        texte_fin.classList.add('even_h2')
        bouton.classList.add("evenBout")
        console.log(bouton);
        
    }
    
    
    text_propositions.forEach(function(text_proposition,index){
      text_proposition.innerHTML = "<b>" + (index + 1) + "-</b> " + pro[index];
        if(index=== list_question[i]['reponseVrai']){
            text_proposition.dataset.reponse= "vrai"
        }else{
            text_proposition.dataset.reponse="faux";
        }
    });

    
}

affiche_question()
text_propositions.forEach(function(text_proposition){
    text_proposition.addEventListener("click",()=>{
        i++
        if(text_proposition.dataset.reponse==="vrai"){
            score++
        }
        
        affiche_question()
        
    })
})