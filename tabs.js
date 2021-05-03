(function (){
    let afficherOnglet = function(a){
        let li = a.parentNode
        let div = a.parentNode.parentNode.parentNode
        // Si je clique sur un onglet déjà sélectionné, cela annule l'action
        if(li.classList.contains('active')){
            return false
        }
        
        // Je retire la class active de l'onglet actif
        div.querySelector('.tabs .active').classList.remove('active')
        // J'ajoute la class active à l'onglet sélectionné
        li.classList.add('active')
        // On retire la class active sur le contenu actif
        div.querySelector('.tab-content.active').classList.remove('active')
        // J'ajoute la class active sur le contenu correspondant à mon clic
        div.querySelector(a.getAttribute('href')).classList.add('active')
    
    }
    
    // Ceci est l'écouteur
    let tabs = document.querySelectorAll('.tabs a')
    for(let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener('click', function(e){
            afficherOnglet(this)
            
        })
    }
    
})()