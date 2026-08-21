/* ===========================================================================
   CONFIGURACIÓN DEL SITIO
   Este es el único archivo que necesitas tocar para activar la recolección
   de datos. Las instrucciones completas están en el README, sección 5.
=========================================================================== */

window.CONFIG = {

  /* Pega aquí la URL que te da Google al publicar el script.
     Tiene esta forma:
       https://script.google.com/macros/s/AKfycb..................../exec

     Mientras esté vacía ("") NO se envía absolutamente nada y el aviso a los
     alumnos tampoco aparece. El sitio funciona igual. */
  urlDatos: "",

  /* Etiqueta que se guarda en cada fila, por si más adelante usas el mismo
     tablero para varios cursos o secciones. Puede quedar vacía. */
  curso: "Nivelación en Matemáticas",

  /* Minutos que dura cada simulacro. Si un tipo de evaluación no está en esta
     lista, se calcula 1 minuto y medio por pregunta. Ajusta según tus tiempos
     reales de examen. */
   duraciones: {
    "PC1": 100, "PC2": 100, "PC3": 100, "PC4": 100,
    "Examen parcial": 120, "Examen final": 120
  },

  /* Texto del aviso que ven los alumnos. Solo se muestra si urlDatos tiene
     algo. Cámbialo con libertad, pero no lo quites: es lo que hace que la
     recolección sea transparente. */
  avisoDatos: "Al terminar se envía de forma anónima qué temas se acertaron y cuáles no, " +
              "para saber qué conviene reforzar en clase. No se envía tu nombre, " +
              "tu código ni ningún dato que permita identificarte."
};
