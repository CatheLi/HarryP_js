//Linea roja al clickear
document.addEventListener("DOMContentLoaded", () => {
    const foto = document.getElementById("foto");

    const cambiarEstadoFrame = () => {
        foto.classList.toggle("frame");
    };

    foto.addEventListener("click", cambiarEstadoFrame);
});
//Verificar
function verificar() {
    // Obtengo los valores de los campos de entrada
    let sumaTotal = Number(document.getElementById("numero1").value) +
        Number(document.getElementById("numero2").value) +
        Number(document.getElementById("numero3").value);

    // Verifico si la suma total es menor o igual a 10
    if (sumaTotal <= 10) {
        document.getElementById("mensaje").innerHTML = `Llevas ${sumaTotal} productos`;
    } else {
        // Si la suma total es mayor a 10 que le informe
        document.getElementById("mensaje").innerHTML = `Llevas demasiados productos`;
    }
}
//Password
function ingresar() {
    let accessCode = document.getElementById("dato1").value +
        document.getElementById("dato2").value +
        document.getElementById("dato3").value;

    let mensaje = document.getElementById("ingresaClave");

    if (accessCode === "911") {
        mensaje.innerHTML = `Password 1 correcto`;
        mensaje.style.color = "green";
    } else if (accessCode === "714") {
        mensaje.innerHTML = `Password 2 correcto`;
        mensaje.style.color = "green";
    } else {
        mensaje.innerHTML = `Password incorrecto`;
        mensaje.style.color = "red";
    }
}


