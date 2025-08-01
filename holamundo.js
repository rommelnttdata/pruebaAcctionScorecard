// Uso inseguro de document.write
document.write("Hola Mundo<br>");

// Mostrar alertas intrusivas
alert("Hola mundo");

// Loggear información sensible (la contraseña)
console.log("Hola mundo");

// No sanitizar las entradas al mostrarlas, vulnerabilidad XSS
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    // Se inyecta directamente sin escape: ¡vulnerabilidad XSS!
    const resultado = `
    <h2>Datos ingresados:</h2>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Correo:</strong> ${correo}</p>
    <p><strong>Contraseña:</strong> ${contrasena}</p>
    `;
    document.getElementById("resultado").innerHTML = resultado;
});