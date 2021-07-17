document.addEventListener('DOMContentLoaded', function () {

    // Numero de enlaces de la pagina
    let aWeb = document.querySelectorAll('a');

    // Direccion del penultimo enlace
    let aPenultimate = aWeb[aWeb.length - 2].href;

    // Numero de enlaces que apuntan a http://prueba
    let aPrueba = [];
    for (element of aWeb) if (element.href == 'http://prueba/') aPrueba.push(element);

    // Numero de enlaces del tercer párrafo
    let nAPThree = document.querySelectorAll('p')[2].querySelectorAll('a').length;


    document.querySelector('body').innerHTML += `
        <h2>Contador</h2>
        <ul id="informacion">
            <li>Número de enlaces de la página: ${aWeb.length}</li>
            <li>Dirección a la que enlaza el penúltimo enlace: <a href="${aPenultimate}">${aPenultimate}</a></li>
            <li>Número de enlaces que enlazan a http://prueba: ${aPrueba.length}</li>
            <li>Número de enlaces del tercer párrafo: ${nAPThree}</li>
        </ul>
    `;

})