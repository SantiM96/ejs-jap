// function 1
function ingreso_jap() {
    let name = prompt("Ingrese su nombre: "),
        surname = prompt("Ingrese su apellido: "),
        fullname = name + ' ' + surname,
        city = prompt("Ingrese su departamento: "),
        age = prompt("Ingrese su edad: ")
    
    if (age >= 16 && age <= 32 && city.toLowerCase() != "montevideo" || 
        age >= 18 && age <= 30 && city.toLowerCase() == "montevideo" ||
        fullname.toLowerCase() == "daniel blanc" || fullname.toLowerCase() == "ylva lucena") {
        
        alert("Puede cursar JaP")
        document.querySelector("body").innerHTML = `
            <h1>Felicitaciones</h1>
        `
    }
    else {
        alert("No puede cursar JaP")
        document.querySelector("body").innerHTML = `
            <h1>Lo sentimos</h1>
        `
    } 
}

// function 2
function lista_cumpleaños() {
    let nGuests = prompt("Ingrese el número de invitados: "),
        nameGuests = [],
        cost = 0
    
    for (let i = 1; nGuests >= i; i++) {
        nameGuests.push(prompt("Ingrese el nombre de un invitado: "))
        cost += 500
    }
    alert(`La fiesta incluirá a ${nGuests} personas y tendrá un coste de ${cost}`)



    document.querySelector("body").innerHTML = '<h1 class="text-center">Fiesta</h1>'

    document.querySelector("body").innerHTML += '<h3>Invitados:</h3>'
    for (let i = 0; nGuests > i; i++) {
        document.querySelector("body").innerHTML += `<p class="ml-5">${nameGuests[i]}</p>`
    }

    document.querySelector("body").innerHTML += `<h3 class="mt-5">La fiesta tendrá un coste de: ${cost}</h3>`
}


lista_cumpleaños()