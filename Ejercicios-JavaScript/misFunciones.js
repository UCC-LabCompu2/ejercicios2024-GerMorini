/**
 * Convierte las unidades ingresadas por el usuario en el formulario
 * @method convertirUnidades
 * @param {string} nombre - ID del elemento en el HTML
 * @param {number} valor - valor ingresado por el usuario
 */

// TODO: asignar las conversiónes correctas para las demás unidades
convertirUnidades = (nombre, valor) => {
    let valMetro, valPulgada, valPie, valYarda

    if (isNaN(valor)) {
        alert("El valor ingresado no es un número!")
        valMetro = ""
        valPulgada = ""
        valPie = ""
        valYarda = ""
    } else {
        if (nombre === "metro") {
            valMetro = valor
            valPulgada = valor * 39.3701
            valPie = valor * 3.28084
            valYarda = valor * 1.093
        } else if (nombre === "pulgada") {
            valPulgada = valor
            valMetro = valor * 39.3701
            valPie = valor * 3.28084
            valYarda = valor * 1.093
        } else if (nombre === "pie") {
            valPie = valor
            valPulgada = valor * 39.3701
            valMetro = valor * 3.28084
            valYarda = valor * 1.093
        } else if (nombre === "yarda") {
            valYarda = valor
            valPulgada = valor * 39.3701
            valPie = valor * 3.28084
            valMetro = valor * 1.093
        }
    }

    document.getElementById('metro').value = valMetro
    document.getElementById('pulgada').value = valPulgada
    document.getElementById('pie').value = valPie
    document.getElementById('yarda').value = valYarda
}

function convertirGR(id) {
    if (id === "grados") {
        let grad = document.getElementById("grados").value
        let rad = grad*Math.PI/180
        document.getElementById("radianes").value = rad
    } else if (id === "radianes") {
        let rad = document.getElementById("radianes").value
        let grad = rad*180/Math.PI
        document.getElementById("grados").value = grad
    }
}
