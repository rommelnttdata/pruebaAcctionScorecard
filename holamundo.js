document.write("Hola Mundo<br>");
alert("Hola mundo");
console.log("Hola mundo");

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    const resultado = `
        <h2>Datos ingresados:</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Contraseña:</strong> ${contrasena}</p>
    `;

    document.getElementById("resultado").innerHTML = resultado;
});