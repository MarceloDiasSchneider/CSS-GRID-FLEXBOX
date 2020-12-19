let main3 = document.getElementById("main3")
let numburOfElemente = 7
let visibility = true
main3.addEventListener('click', function createDiv(){
    if(numburOfElemente <= 11){

        let divCriated = document.createElement('div')
        
        let visibilityToSet = (visibility == true) ? 'visibility1' : 'visibility2'
        divCriated.setAttribute('class',visibilityToSet)
        visibility = (visibility == true ) ? false : true
        divCriated.setAttribute('style',`grid-area: box${numburOfElemente}`)
        let h1 = document.createElement('h1')
        h1.innerHTML = `Box ${numburOfElemente}`
        numburOfElemente ++
        
        divCriated.appendChild(h1)
        main3.appendChild(divCriated)   
    }
})