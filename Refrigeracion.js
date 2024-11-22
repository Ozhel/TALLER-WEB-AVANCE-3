document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("refri").addEventListener("click", function() {
      crearRectangulo("Refri 1");
  });

  // Crear un rectángulo al hacer clic en el botón refri2
  document.getElementById("refri2").addEventListener("click", function() {
      crearRectangulo("Refri 2");

  });
  document.getElementById("refri3").addEventListener("click", function() {
    crearRectangulo("Refri 2");

});
document.getElementById("refri4").addEventListener("click", function() {
  crearRectangulo("Refri 2");
});
document.getElementById("refri5").addEventListener("click", function() {
  crearRectangulo("Refri 2");

});
document.getElementById("refri6").addEventListener("click", function() {
  crearRectangulo("Refri 2");

});
document.getElementById("refri7").addEventListener("click", function() {
  crearRectangulo("Refri 2");

});
document.getElementById("refri8").addEventListener("click", function() {
  crearRectangulo("Refri 2");

});
});

// Función para crear el rectángulo
function crearRectangulo(nombre) {
  // Crear un nuevo rectángulo como objeto
  var rectangulo = {
      nombre: nombre, // Nombre para identificar el rectángulo
      width: "100px",
      height: "60px",
      backgroundColor: "#ffffff"
  };

  // Obtener los rectángulos guardados en localStorage
  var rectangulos = JSON.parse(localStorage.getItem("rectangulos")) || [];

  // Agregar el nuevo rectángulo al array
  rectangulos.push(rectangulo);

  // Guardar el array de rectángulos de nuevo en localStorage
  localStorage.setItem("rectangulos", JSON.stringify(rectangulos));

  console.log("Rectángulo creado: " + nombre);
}
