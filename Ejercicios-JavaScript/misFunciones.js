/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function convertirUnidades(nombre, valor) {
    if (isNaN(valor)) {
        alert("El valor ingresado no es un número!")
        document.getElementById('metro').value = 0
        document.getElementById('pulgada').value = 0
        document.getElementById('pie').value = 0
        document.getElementById('yarda').value = 0
    } else {
        if (nombre === "metro") {
            document.getElementById('pulgada').value = valor * 39.3701
            document.getElementById('pie').value = valor * 3.28084
            document.getElementById('yarda').value = valor * 1.093
        } else if (nombre === "pulgada") {
            document.getElementById('metro').value = valor * 39.3701
            document.getElementById('pie').value = valor * 3.28084
            document.getElementById('yarda').value = valor * 1.093
        } else if (nombre === "pie") {
            document.getElementById('pulgada').value = valor * 39.3701
            document.getElementById('metro').value = valor * 3.28084
            document.getElementById('yarda').value = valor * 1.093
        } else if (nombre === "yarda") {
            document.getElementById('pulgada').value = valor * 39.3701
            document.getElementById('pie').value = valor * 3.28084
            document.getElementById('metro').value = valor * 1.093
        }
    }
}
