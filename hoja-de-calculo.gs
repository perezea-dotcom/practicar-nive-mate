/* ===========================================================================
   RECEPTOR DE RESULTADOS — Google Apps Script
   Nivelación en Matemáticas · Universidad del Pacífico

   Este archivo NO va al sitio web. Su contenido se pega dentro de Google
   Sheets. Instrucciones paso a paso en el README, sección 5.

   Resumen:
     1. Creas una hoja de cálculo nueva en Google Sheets.
     2. Extensiones → Apps Script.
     3. Borras lo que haya y pegas todo este archivo.
     4. Implementar → Nueva implementación → Aplicación web.
        - Ejecutar como: Yo
        - Quién tiene acceso: Cualquier usuario
     5. Copias la URL que te da y la pegas en assets/config.js
=========================================================================== */

// Nombre de la pestaña donde se guardan los intentos. Se crea sola.
var HOJA = "Resultados";

var CABECERAS = [
  "Fecha y hora",
  "ID intento",
  "Curso",
  "N° de pregunta",
  "Tema",
  "Fuente",
  "Pregunta",
  "Respuesta correcta",
  "Respuesta del alumno",
  "Acierto",
  "Preguntas del intento",
  "Puntaje del intento",
  "Segundos empleados",
  "Segundos disponibles"
];

function doPost(e) {
  // El bloqueo evita que dos alumnos que terminan a la vez se pisen las filas.
  var bloqueo = LockService.getScriptLock();
  try {
    bloqueo.waitLock(30000);

    var datos = JSON.parse(e.postData.contents);
    var filas = datos.filas || [];
    if (!filas.length) return respuesta({ ok: false, error: "sin filas" });

    var hoja = obtenerHoja();
    hoja.getRange(hoja.getLastRow() + 1, 1, filas.length, CABECERAS.length)
        .setValues(filas);

    return respuesta({ ok: true, guardadas: filas.length });

  } catch (error) {
    return respuesta({ ok: false, error: String(error) });
  } finally {
    bloqueo.releaseLock();
  }
}

// Permite abrir la URL en el navegador para comprobar que está publicada.
function doGet() {
  return respuesta({ ok: true, mensaje: "El receptor está funcionando." });
}

function obtenerHoja() {
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName(HOJA);

  if (!hoja) {
    hoja = libro.insertSheet(HOJA);
  }
  if (hoja.getLastRow() === 0) {
    hoja.getRange(1, 1, 1, CABECERAS.length)
        .setValues([CABECERAS])
        .setFontWeight("bold")
        .setBackground("#325D3D")
        .setFontColor("#FFFFFF");
    hoja.setFrozenRows(1);
    hoja.setColumnWidth(7, 320);   // columna "Pregunta", más ancha
    hoja.setColumnWidth(8, 220);
    hoja.setColumnWidth(9, 220);
  }
  return hoja;
}

function respuesta(objeto) {
  return ContentService
    .createTextOutput(JSON.stringify(objeto))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ---------------------------------------------------------------------------
   PRUEBA MANUAL (opcional)
   Selecciona "probar" en el menú de funciones y pulsa Ejecutar. Debe aparecer
   una fila de ejemplo en la hoja. Bórrala después.
--------------------------------------------------------------------------- */
function probar() {
  doPost({
    postData: {
      contents: JSON.stringify({
        filas: [[
          new Date().toISOString(), "prueba", "Curso de prueba", 1,
          "La condicional", "Clase 01", "Pregunta de prueba",
          "Alternativa correcta", "Alternativa elegida", 0, 10, 6, 300, 900
        ]]
      })
    }
  });
}
