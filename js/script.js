let estudiantes = [
  {
    nombre: "Diana",
    calificaciones: [80, 90, 78, 92],
  },
  {
    nombre: "Thomas",
    calificaciones: [85, 96, 87, 98],
  },
  {
    nombre: "Martha",
    calificaciones: [95, 90, 85, 90],
  },
  {
    nombre: "Jacobo",
    calificaciones: [98, 95, 85, 92],
  },
  {
    nombre: "Camila",
    calificaciones: [98, 65, 80, 80],
  },
];

//Mostrar estudiantes
function mostrarEstudiantes() {
  estudiantes.forEach(function (estudiante) {
    console.log(
      `Soy el estudiante: ${estudiante.nombre} y mis notas son: ${estudiante.calificaciones}`
    );
  });
}

mostrarEstudiantes();

// Calcular promedio
function calcularPromedio(arrayCal) {
  const suma = arrayCal.reduce(
    (total, calificacion) => total + calificacion,
    0
  ); //total = acumulador, el 0 es donde inicia
  return suma / arrayCal.length;
}
const promedio = calcularPromedio(estudiantes[1].calificaciones);
console.log(`Promedio es : ${promedio}`);

// Mejor Calificaciion

function obtenerMejorCalificacion(arrayCal) {
  return Math.max(...arrayCal);
}
console.log(obtenerMejorCalificacion(estudiantes[4].calificaciones));

// // Peor calificacion
function obtenerPeorCalificacion(arrayCal) {
  return Math.min(...arrayCal);
}
console.log(obtenerPeorCalificacion(estudiantes[0].calificaciones));

//Agregar Calificacion
function nuevaCalificacion(nomEstudiante, nvaCalificacion) {
  let buscarEstudiante = estudiantes.find(
    (estudiante) => estudiante.nombre === nomEstudiante
  );
  if (buscarEstudiante) {
    buscarEstudiante.calificaciones.push(nvaCalificacion);
    console.log("Se agrego una nueva nota al estudiante:", nomEstudiante);
    console.log(buscarEstudiante);
  } else {
    console.log("El estudiante no existe");
  }
}
nuevaCalificacion("Diana", 99);

function eliminarUltimaCalificacion(nombreEstudiante) {
  let estudiante = estudiantes.find(
    (estudiante) => estudiante.nombre === nombreEstudiante
  );

  if (estudiante) {
    let calificacionEliminada = estudiante.calificaciones.pop();
    console.log(
      `Se eliminó la última calificación (${calificacionEliminada}) de ${nombreEstudiante}.`
    );
    console.log(estudiante);
  } else {
    console.log(
      `El estudiante ${nombreEstudiante} no existe o no tiene calificaciones.`
    );
  }
}
eliminarUltimaCalificacion ("Jacobo")

//Estudiantes aprobados
function filtrarEstudiantesAprobados(promedioMinimo) {
  return estudiantes.filter(
    (estudiante) =>
      calcularPromedio(estudiante.calificaciones) >= promedioMinimo
  );
}

//probar la funcion filtrarEstudiantesAprobados
const promedioMinimo = 90;
const aprobados = filtrarEstudiantesAprobados(promedioMinimo);
if (aprobados.length > 0) {
    console.log(`Estudiantes aprobados con promedio mayor o igual a ${promedioMinimo}:`);
    aprobados.forEach(e=> {
        console.log(`- ${e.nombre} con promedio de ${calcularPromedio(e.calificaciones)}`);
    });
} else {
    console.log(`Ningún estudiante tiene un promedio mayor o igual a ${promedioMinimo}.`);
}

// // Ordenar estudiantes por nombre
function ordernarEstudiantesPorNombre() {
  estudiantes.sort((a, b) => a.nombre.localeCompare(b.nombre)); //localeCompare = compara dos string
  console.log("Estudiantes ordenados por nombre:", estudiantes);
}

ordernarEstudiantesPorNombre();

// // Reporte
function generarReporteIndividual(nombreEstudiante) {
  const est = estudiantes.find(
    (estudiante) => estudiante.nombre === nombreEstudiante
  );

  if (est) {
    const promedio = calcularPromedio(est.calificaciones);
    const mejor = obtenerMejorCalificacion(est.calificaciones);
    const peor = obtenerPeorCalificacion(est.calificaciones);

    console.log(`Reporte del estudiante ${nombreEstudiante}\n`);
    console.log(`- Calificaciones: ${est.calificaciones}\n`);
    console.log(`- Promedio: ${promedio}\n`);
    console.log(`- Mejor calificación: ${mejor}\n`);
    console.log(`- Peor calificación: ${peor}\n`);
  } else {
    console.log(`Estudiante ${nombreEstudiante} no encontrado.`);
  }
}

generarReporteIndividual("Jacobo");

function inciarGestionCalificaciones() {
  let opcion;

  while (opcion !== "4") {
    opcion = prompt(
      "Elige una opción:\n1. Mostrar estudiantes\n2. Agregar calificación\n3. Generar reporte individual\n4. Salir"
    );

    switch (opcion) {
      case "1":
        // Opción 1: Mostrar todos los estudiantes
        mostrarEstudiantes();
        break;

      case "2":
        // Opción 2: Agregar calificación
        const nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
        const nuevaNota = parseFloat(prompt("Ingrese la nueva calificación:"));

        nuevaCalificacion(nombreEstudiante, nuevaNota);
        break;

      case "3":
        // Opción 3: Generar reporte individual
        const nombre = prompt(
          "Ingrese el nombre del estudiante para generar el reporte:"
        );

        generarReporteIndividual(nombre);
        break;

      case "4":
        console.log("Saliendo del menú. ¡Hasta luego!");
        break;

      default:
        console.log("Opción no válida.");
    }
  }
}
inciarGestionCalificaciones();

