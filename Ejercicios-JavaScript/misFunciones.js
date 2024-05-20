/**
 * Convierte las unidades ingresadas por el usuario en el formulario
 * @method convertirUnidades
 * @param {string} nombre - ID del elemento en el HTML
 * @param {number} valor - valor ingresado por el usuario
 */

// TODO: asignar las conversiónes correctas para las demás unidades
let convertirUnidades = (nombre, valor) => {
    let valMetro, valPulgada, valPie, valYarda

    if (valor.includes(",")) {
        valor = valor.replace(",", ".")
    }

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

    document.getElementById('metro').value = Math.round(valMetro*100)/100
    document.getElementById('pulgada').value = Math.round(valPulgada*100)/100
    document.getElementById('pie').value = valPie.toFixed(2)
    document.getElementById('yarda').value = valYarda.toFixed(2)
}

/**
 * Convierte unidades entre grados - radianes
 * @param {string} id - ID del elemento
 */
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

/**
 * muestra - oculta un div
 * @param {string} value - el valor del radio button presionado
 */
let mostrar_ocultar = (value) => {
    if (value === "val_mostrar") {
        document.getElementById("divMO").style.display = 'block'
    } else if (value === "val_ocultar") {
        document.getElementById("divMO").style.display = 'none'
    }
}

/**
 * suma los valores ingresados por el usuario
 */
let sumar = () => {
    let num1, num2
    num1 = Number(document.getElementsByName("sum_num1")[0].value)
    num2 = Number(document.getElementsByName("sum_num2")[0].value)
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2
}

/**
 * resta los valores ingresados por el usuario
 */
let restar = () => {
    let num1, num2
    num1 = Number(document.getElementsByName("res_num1")[0].value)
    num2 = Number(document.getElementsByName("res_num2")[0].value)
    document.getElementsByName("res_total")[0].innerHTML = num1 - num2
}

/**
 * multiplica los valores ingresados por el usuario
 */
let mult = () => {
    let num1, num2
    num1 = Number(document.getElementsByName("mul_num1")[0].value)
    num2 = Number(document.getElementsByName("mul_num2")[0].value)
    document.getElementsByName("mul_total")[0].innerHTML = num1 * num2
}

/**
 * divide los valores ingresados por el usuario
 */
let dividir = () => {
    let num1, num2
    num1 = Number(document.getElementsByName("div_num1")[0].value)
    num2 = Number(document.getElementsByName("div_num2")[0].value)
    document.getElementsByName("div_total")[0].innerHTML = num1 / num2
}

/**
 * carga los datos ingresados por el usuario a la URL y pasa a la otra página
 */
let pasar_pagina = () => {
    let cant, unit, url
    cant = document.getElementById("distancia").value
    unit = document.getElementsByName("unidades")[0].value
    url = `segundaWeb.html#${cant}#${unit}`
    window.open(url)
}

/**
 * carga los valores en la página basándose en los cargados en la URL
 */
let cargar_valores = () => {
    let url, cant, unit
    url = window.location.href.split("#")
    cant = url[1]
    unit = url[2]
    document.getElementById("dist").value = `${cant} ${unit}`
}