var inputGithub = document.querySelector("#cantidadGithub")
var inputSlack = document.querySelector("#cantidadSlack")
var inputGit = document.querySelector("#cantidadGit")

var spanCantidadTotal = document.querySelector("#cantidadTotal")

function calcularTotalStickers(){
    var cantidadGithub = Number(inputGithub.value)
    var cantidadSlack = Number(inputSlack.value)
    var cantidadGit = Number(inputGit.value)

    

    var cantidadTotal = cantidadGithub + cantidadGit + cantidadSlack

    


    if (cantidadTotal <= 10) {
        spanCantidadTotal.innerHTML = cantidadTotal
    } else {
        spanCantidadTotal.innerHTML = "demasiados"
        
    }

}

