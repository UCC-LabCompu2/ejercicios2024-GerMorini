/**
 * Convierte las unidades ingresadas por el usuario en el formulario
 * @method convertirUnidades
 * @param {string} nombre - ID del elemento en el HTML
 * @param {number} valor - valor ingresado por el usuario
 */

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
            valMetro = valor * 0.0254
            valPulgada = valor
            valPie = valor * 0.08333
            valYarda = valor * 0.02777
        } else if (nombre === "pie") {
            valMetro = valor * 0.3048
            valPulgada = valor * 12
            valPie = valor
            valYarda = valor * 0.33333
        } else if (nombre === "yarda") {
            valMetro = valor * 0.9144
            valPulgada = valor * 36
            valPie = valor * 3
            valYarda = valor
        }
    }

    document.getElementById('metro').value = Math.round(valMetro*100)/100
    document.getElementById('pulgada').value = Math.round(valPulgada*100)/100
    document.getElementById('pie').value = Math.round(valPie*100)/100
    document.getElementById('yarda').value = Math.round(valYarda*100)/100
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

/**
 * toma los valores de distancia y unidad, los almacena en el local storage y redirige
 * hacia la segunda web
 */
let guardarLS = () => {
    const distancia = document.getElementById("distancia").value
    const unidad = document.getElementById("unidades").value

    localStorage.setItem("distanciaLS", distancia)
    localStorage.setItem("unidadLS", unidad)

    window.open("segundaWeb_copia.html")
}

/**
 * carga los valores de distancia y unidad almacenados en el local storage
 */
let cargarLS = () => {
    const distancia = localStorage.getItem("distanciaLS")
    const unidad = localStorage.getItem("unidadLS")

    document.getElementById("dist").value = `${distancia} ${unidad}`
}

/**
 * dibuja un círculo y un cuadrado en el canvas
 */
let dibujar = () => {
    const canvas = document.getElementById("myCanvas")
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = "#333899"

    const xmax = canvas.width
    const ymax = canvas.height
    const lado = 100
    const margen = 10

    ctx.fillRect(margen, ymax - lado - margen, lado, lado)
    ctx.arc(xmax / 2, ymax / 2, 20, 0, 2*Math.PI)
    ctx.fill()
}

/**
 * asigna un listener al canvas para poder dibujar
 */
let cargarListener = () => {
    const canvas = document.getElementById("lienzo")
    const ctx = canvas.getContext("2d")
    var bandera

    canvas.onmousedown = () => {bandera = true}
    canvas.onmouseup = () => {bandera = false}

    document.getElementById("lienzo").addEventListener("mousemove", (ev) => {
        if (bandera) {
            let pos_x = ev.clientX
            let pos_y = ev.clientY

            ctx.fillStyle = "#f33333"
            ctx.fillRect(pos_x, pos_y, 3, 3)
        }
    })
}

/**
 * limpia lo dibujado en el canvas
 */
let limpiarCanvas = () => {
    const canvas = document.getElementById("lienzo")
    canvas.width = canvas.width
}

/**
 * dibuja un cuadriculado dentro del canvas
 */
let dibujarCuadriculado = () => {
    const canvas = document.getElementById("myCanvas")
    const ctx = canvas.getContext("2d")

    const xmax = canvas.width
    const ymax = canvas.height
    const paso = 40

    ctx.strokeStyle = "#bbb9b9"
    // dibujo de lineas horizontales
    for (let i = paso; i < ymax; i += paso) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(xmax, i)
        ctx.stroke()
        ctx.closePath()
    }

    // dibujo de líneas verticales
    for (let i = paso; i < xmax; i += paso) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, xmax)
        ctx.stroke()
    }

    // dibujar eje X
    ctx.beginPath()
    ctx.moveTo(0, ymax/2)
    ctx.lineTo(xmax, ymax/2)
    ctx.strokeStyle = "#000000"
    ctx.stroke()
    ctx.closePath()

    // dibujar eje Y
    ctx.beginPath()
    ctx.moveTo(xmax/2, 0)
    ctx.lineTo(xmax/2, ymax)
    ctx.strokeStyle = "#000000"
    ctx.stroke()
    ctx.closePath()

}
