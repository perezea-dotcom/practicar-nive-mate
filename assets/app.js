/* ===========================================================================
   Práctica Nive — lógica de la aplicación
   No hace falta tocar este archivo para agregar preguntas: eso se hace en
   los archivos de la carpeta /banco.
=========================================================================== */
(function(){
"use strict";

var LETRAS = ["A","B","C","D","E","F"];
var $  = function(s){ return document.querySelector(s); };
var $$ = function(s){ return Array.prototype.slice.call(document.querySelectorAll(s)); };

/* ---------- Estado ---------- */
var temas = [];        // [{nombre, total}]
var sesion = null;     // {preguntas:[], indice, segundos, limite, timer}

/* ---------- Utilidades ---------- */
function barajar(a){
  var b = a.slice();
  for(var i = b.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var t = b[i]; b[i] = b[j]; b[j] = t;
  }
  return b;
}
function mmss(s){
  var m = Math.floor(s / 60), r = s % 60;
  return m + ":" + (r < 10 ? "0" : "") + r;
}
// Renderiza el LaTeX ($...$) que haya dentro del elemento, si KaTeX cargó.
function mate(el){
  if(!window.renderMathInElement || !el) return;
  try{
    window.renderMathInElement(el, {
      delimiters:[{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false}],
      throwOnError:false, ignoredTags:["script","noscript","style","textarea","pre","code","option"]
    });
  }catch(e){ /* si falla, el texto se ve tal cual: no rompe la práctica */ }
}
function pantalla(id){
  $$(".pantalla").forEach(function(p){ p.classList.add("oculto"); });
  $("#" + id).classList.remove("oculto");
  window.scrollTo(0,0);
}

/* ---------- Configuración ---------- */
function agruparTemas(){
  var mapa = {};
  (window.BANCO || []).forEach(function(p){
    mapa[p.tema] = (mapa[p.tema] || 0) + 1;
  });
  temas = Object.keys(mapa).sort().map(function(n){ return {nombre:n, total:mapa[n]}; });
}

function pintarConfig(){
  var cont = $("#temas");
  cont.innerHTML = temas.map(function(t,k){
    return '<label class="tema activo" data-tema="' + k + '">' +
             '<input type="checkbox" checked value="' + k + '">' +
             '<span class="nombre">' + t.nombre + '</span>' +
             '<span class="cuenta">' + t.total + '</span>' +
           '</label>';
  }).join("");
  cont.addEventListener("change", function(e){
    if(e.target.tagName !== "INPUT") return;
    e.target.closest(".tema").classList.toggle("activo", e.target.checked);
    actualizarDisponibles();
  });
  $("#todos").onclick   = function(){ marcarTodos(true);  };
  $("#ninguno").onclick = function(){ marcarTodos(false); };
  actualizarDisponibles();
}
function marcarTodos(v){
  $$("#temas input").forEach(function(i){
    i.checked = v;
    i.closest(".tema").classList.toggle("activo", v);
  });
  actualizarDisponibles();
}
function temasElegidos(){
  return $$("#temas input:checked").map(function(i){ return temas[+i.value].nombre; });
}
function preguntasDisponibles(){
  var sel = temasElegidos();
  return (window.BANCO || []).filter(function(p){ return sel.indexOf(p.tema) >= 0; });
}
function actualizarDisponibles(){
  var n = preguntasDisponibles().length;
  var sel = $("#cantidad"), previo = sel.value;
  var opciones = [5,10,15,20,25,30].filter(function(x){ return x < n; });
  sel.innerHTML = opciones.map(function(x){
      return '<option value="' + x + '">' + x + ' preguntas</option>';
    }).join("") +
    '<option value="' + n + '">Todas (' + n + ')</option>';
  if(previo && sel.querySelector('option[value="' + previo + '"]')) sel.value = previo;
  else if(opciones.indexOf(10) >= 0) sel.value = "10";

  $("#disponibles").textContent = n === 0
    ? "Selecciona al menos un tema."
    : n + (n === 1 ? " pregunta disponible" : " preguntas disponibles");
  $("#empezar").disabled = (n === 0);
  $("#aviso").classList.toggle("oculto", n > 0);
}

/* ---------- Arranque de la práctica ---------- */
function empezar(){
  var disponibles = preguntasDisponibles();
  if(!disponibles.length) return;

  var cuantas = Math.min(parseInt($("#cantidad").value, 10), disponibles.length);
  var elegidas = barajar(disponibles).slice(0, cuantas);

  sesion = {
    preguntas: elegidas.map(function(p){
      // Barajamos también las alternativas para que no se memorice "siempre la B".
      var orden = barajar(p.opciones.map(function(_,k){ return k; }));
      return {
        ref: p,
        orden: orden,
        opciones: orden.map(function(k){ return p.opciones[k]; }),
        correcta: orden.indexOf(p.correcta),
        respuesta: null
      };
    }),
    indice: 0,
    segundos: 0,
    limite: 0,
    timer: null
  };

  var porPregunta = parseFloat($("#tiempo").value);
  sesion.limite = porPregunta > 0 ? Math.round(porPregunta * 60 * cuantas) : 0;
  sesion.segundos = sesion.limite > 0 ? sesion.limite : 0;

  $("#estado").classList.remove("oculto");
  arrancarCrono();
  pantalla("practica");
  pintarPregunta();
}

function arrancarCrono(){
  clearInterval(sesion.timer);
  pintarCrono();
  sesion.timer = setInterval(function(){
    if(sesion.limite > 0){
      sesion.segundos--;
      if(sesion.segundos <= 0){ sesion.segundos = 0; pintarCrono(); terminar(true); return; }
    } else {
      sesion.segundos++;
    }
    pintarCrono();
  }, 1000);
}
function pintarCrono(){
  var c = $("#crono");
  c.textContent = mmss(sesion.segundos);
  c.classList.remove("alerta","critico");
  if(sesion.limite > 0){
    var frac = sesion.segundos / sesion.limite;
    if(frac <= 0.1) c.classList.add("critico");
    else if(frac <= 0.25) c.classList.add("alerta");
  }
}

/* ---------- Pantalla de práctica ---------- */
function pintarPregunta(){
  var s = sesion, q = s.preguntas[s.indice];

  $("#puntos").innerHTML = s.preguntas.map(function(p,k){
    var cls = "punto" + (k === s.indice ? " actual" : (p.respuesta !== null ? " respondida" : ""));
    return '<button class="' + cls + '" data-ir="' + k + '">' + (k+1) + '</button>';
  }).join("");

  $("#tarjeta").innerHTML =
    '<div class="meta-pregunta"><span class="chip">' + q.ref.tema + '</span>' +
      (q.ref.fuente ? '<span class="chip fuente">' + q.ref.fuente + '</span>' : '') + '</div>' +
    '<div class="enunciado">' + q.ref.enunciado + '</div>' +
    '<ul class="opciones">' + q.opciones.map(function(o,k){
      return '<li class="opcion' + (q.respuesta === k ? ' elegida' : '') + '" data-op="' + k + '">' +
               '<span class="letra">' + LETRAS[k] + '</span><span>' + o + '</span></li>';
    }).join("") + '</ul>';

  mate($("#tarjeta"));

  $("#contador").textContent = "Pregunta " + (s.indice+1) + " de " + s.preguntas.length;
  $("#progreso").style.width = ((s.indice+1) / s.preguntas.length * 100) + "%";
  $("#anterior").disabled = (s.indice === 0);
  $("#siguiente").disabled = (s.indice === s.preguntas.length - 1);

  var faltan = s.preguntas.filter(function(p){ return p.respuesta === null; }).length;
  $("#terminar").textContent = faltan > 0
    ? "Terminar (faltan " + faltan + ")"
    : "Terminar y ver resultados";
}

function responder(k){
  var q = sesion.preguntas[sesion.indice];
  q.respuesta = (q.respuesta === k) ? null : k;
  pintarPregunta();
  // Avance automático al responder, salvo en la última pregunta.
  if(q.respuesta !== null && sesion.indice < sesion.preguntas.length - 1){
    setTimeout(function(){ irA(sesion.indice + 1); }, 220);
  }
}
function irA(k){
  sesion.indice = Math.max(0, Math.min(sesion.preguntas.length - 1, k));
  pintarPregunta();
}

/* ---------- Resultados ---------- */
function terminar(porTiempo){
  var faltan = sesion.preguntas.filter(function(p){ return p.respuesta === null; }).length;
  if(!porTiempo && faltan > 0){
    if(!confirm("Todavía hay " + faltan + " pregunta(s) sin responder. ¿Terminar de todos modos?")) return;
  }
  clearInterval(sesion.timer);
  $("#estado").classList.add("oculto");
  pintarResultados(porTiempo);
  pantalla("resultados");
}

function pintarResultados(porTiempo){
  var s = sesion;
  var total = s.preguntas.length;
  var buenas = s.preguntas.filter(function(p){ return p.respuesta === p.correcta; }).length;
  var pct = Math.round(buenas / total * 100);
  var usado = s.limite > 0 ? (s.limite - s.segundos) : s.segundos;

  // Desglose por tema
  var porTema = {};
  s.preguntas.forEach(function(p){
    var t = p.ref.tema;
    if(!porTema[t]) porTema[t] = {bien:0, total:0};
    porTema[t].total++;
    if(p.respuesta === p.correcta) porTema[t].bien++;
  });
  var flojos = Object.keys(porTema).filter(function(t){
    return porTema[t].bien / porTema[t].total < 0.6;
  });

  var html =
    '<div class="cabecera-resultado">' +
      '<div class="medalla' + (pct < 60 ? ' floja' : '') + '">' +
        '<b>' + buenas + '/' + total + '</b><span>' + pct + '% CORRECTO</span></div>' +
      '<div><h1>Resultados</h1>' +
        '<p class="bajada" style="margin-bottom:.6rem">' +
          (porTiempo ? '<b>Se acabó el tiempo.</b> ' : '') +
          'Tiempo empleado: <b>' + mmss(usado) + '</b>' +
          (s.limite > 0 ? ' de ' + mmss(s.limite) + ' disponibles' : '') + '.</p>' +
        (flojos.length
          ? '<p class="bajada" style="margin:0"><b>Conviene repasar:</b> ' + flojos.join(" · ") + '.</p>'
          : '<p class="bajada" style="margin:0">Buen dominio en todos los temas practicados.</p>') +
      '</div>' +
    '</div>' +

    '<h2>Desglose por tema</h2><div class="desglose">' +
    Object.keys(porTema).sort().map(function(t){
      var d = porTema[t], p = Math.round(d.bien / d.total * 100);
      var cls = p >= 70 ? "" : (p >= 40 ? " floja" : " mala");
      return '<div class="linea-tema"><span>' + t + '</span>' +
             '<span class="pista"><div class="' + cls + '" style="width:' + p + '%"></div></span>' +
             '<span class="cifra">' + d.bien + '/' + d.total + '</span></div>';
    }).join("") + '</div>' +

    '<h2>Revisión pregunta por pregunta</h2><div class="revision">' +
    s.preguntas.map(function(p,k){
      var bien = p.respuesta === p.correcta;
      var vacia = p.respuesta === null;
      var estado = vacia ? "vacia" : (bien ? "bien" : "mal");
      var rotulo = vacia ? "Sin responder" : (bien ? "Correcta" : "Incorrecta");
      var tuya = vacia
        ? '<div class="sin-marcar">No marcaste ninguna alternativa.</div>'
        : (bien ? '' : '<div class="tuya-mal"><b>Tu respuesta:</b> ' +
              LETRAS[p.respuesta] + ') ' + p.opciones[p.respuesta] + '</div>');
      return '<div class="item ' + estado + '">' +
        '<div class="cabeza"><span class="veredicto ' + estado + '">' + rotulo + '</span>' +
          '<span class="chip">' + p.ref.tema + '</span>' +
          (p.ref.fuente ? '<span class="chip fuente">' + p.ref.fuente + '</span>' : '') + '</div>' +
        '<div class="enun">' + (k+1) + '. ' + p.ref.enunciado + '</div>' +
        '<div class="respuestas-item">' + tuya +
          '<div class="la-buena"><b>Respuesta correcta:</b> ' +
            LETRAS[p.correcta] + ') ' + p.opciones[p.correcta] + '</div></div>' +
        '<div class="solucion">' + p.ref.solucion + '</div>' +
      '</div>';
    }).join("") + '</div>' +

    '<div class="barra-nav" style="margin-top:2rem">' +
      '<button class="btn lleno" id="repetir">Practicar otra vez</button>' +
      '<button class="btn" id="volver">Cambiar temas</button>' +
    '</div>';

  $("#resultados").innerHTML = html;
  mate($("#resultados"));

  $("#repetir").onclick = empezar;
  $("#volver").onclick  = function(){ pantalla("config"); };
}

/* ---------- Enganches ---------- */
document.addEventListener("click", function(e){
  var op = e.target.closest("[data-op]");
  if(op){ responder(+op.dataset.op); return; }
  var ir = e.target.closest("[data-ir]");
  if(ir){ irA(+ir.dataset.ir); return; }
});
document.addEventListener("keydown", function(e){
  if($("#practica").classList.contains("oculto")) return;
  var q = sesion && sesion.preguntas[sesion.indice];
  if(!q) return;
  if(e.key === "ArrowRight"){ e.preventDefault(); irA(sesion.indice + 1); }
  else if(e.key === "ArrowLeft"){ e.preventDefault(); irA(sesion.indice - 1); }
  else {
    var k = LETRAS.indexOf(e.key.toUpperCase());
    if(k < 0) k = parseInt(e.key, 10) - 1;
    if(k >= 0 && k < q.opciones.length){ e.preventDefault(); responder(k); }
  }
});

function iniciar(){
  if(!window.BANCO || !window.BANCO.length){
    $("#config").innerHTML =
      '<h1>No hay preguntas cargadas</h1>' +
      '<p class="bajada">Revisa que los archivos de la carpeta <b>banco/</b> estén enlazados ' +
      'en <b>index.html</b> y que no tengan errores de sintaxis.</p>';
    return;
  }
  agruparTemas();
  pintarConfig();
  $("#empezar").onclick   = empezar;
  $("#anterior").onclick  = function(){ irA(sesion.indice - 1); };
  $("#siguiente").onclick = function(){ irA(sesion.indice + 1); };
  $("#terminar").onclick  = function(){ terminar(false); };
  $("#total-banco").textContent = window.BANCO.length;
}

if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
else iniciar();

})();
