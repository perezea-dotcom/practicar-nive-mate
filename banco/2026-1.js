/* ===========================================================================
   BANCO — CICLO 2026-1
   Nivelación en Matemáticas · Universidad del Pacífico

   Preguntas derivadas de las evaluaciones del ciclo. Un archivo por ciclo:
   para agregar 2025-2, se copia este archivo y se reemplaza el contenido.

   Los criterios de corrección de los exámenes NO están aquí ni en ninguna
   parte del sitio: se descartan al extraer, antes de redactar las preguntas.

   El formato de cada bloque está explicado en banco/logica.js.
=========================================================================== */

window.BANCO = (window.BANCO || []).concat([

/* ===========================  PC1  ======================================
   Temas del examen: preguntas cortas · tablas de verdad · equivalencias
   lógicas · cuantificadores
   ====================================================================== */

{
  tema: "Equivalencias y De Morgan",
  fuente: "PC1 2026-1",
  examen: "PC1",
  ciclo: "2026-1",
  enunciado: "Indique una <b>condicional</b> equivalente a la proposición $p \\vee \\neg q$.",
  opciones: ["$p \\rightarrow q$", "$q \\rightarrow p$", "$\\neg p \\rightarrow q$", "$q \\rightarrow \\neg p$"],
  correcta: 1,
  solucion: "Toda condicional se puede escribir como disyunción: $a \\rightarrow b \\equiv \\neg a \\vee b$. Hay que leer la regla <b>al revés</b>: en $p \\vee \\neg q$, el término negado es $\\neg q$, así que ese hace de antecedente y queda $q \\rightarrow p$.<br><br>Comprobación rápida: $q \\rightarrow p \\equiv \\neg q \\vee p$, que es lo mismo que $p \\vee \\neg q$ porque la disyunción es conmutativa."
},
{
  tema: "Cuantificadores",
  fuente: "PC1 2026-1",
  examen: "PC1",
  ciclo: "2026-1",
  enunciado: "Complete: $\\neg\\big(\\exists x \\in U, [\\, p(x) \\wedge q(x) \\,]\\big) \\equiv \\;$ ?",
  opciones: [
    "$\\forall x \\in U, [\\, \\neg p(x) \\vee \\neg q(x) \\,]$",
    "$\\forall x \\in U, [\\, \\neg p(x) \\wedge \\neg q(x) \\,]$",
    "$\\exists x \\in U, [\\, \\neg p(x) \\vee \\neg q(x) \\,]$",
    "$\\forall x \\in U, [\\, p(x) \\vee q(x) \\,]$"
  ],
  correcta: 0,
  solucion: "Son <b>dos negaciones encadenadas</b>. Primero el cuantificador: $\\neg \\exists$ se convierte en $\\forall$ con el interior negado. Después, dentro, De Morgan: $\\neg(p \\wedge q) \\equiv \\neg p \\vee \\neg q$.<br><br>Resultado: $\\forall x \\in U, [\\neg p(x) \\vee \\neg q(x)]$.",
},
{
  tema: "Tablas de verdad y conectores",
  fuente: "PC1 2026-1",
  examen: "PC1",
  ciclo: "2026-1",
  enunciado: "Si la proposición $p \\vee (p \\wedge q)$ es <b>falsa</b> y la proposición $p \\vee q$ es <b>verdadera</b>, entonces:",
  opciones: [
    "$p$ es verdadera y $q$ es falsa",
    "las dos son falsas",
    "$p$ es falsa y $q$ es verdadera",
    "no se puede determinar"
  ],
  correcta: 2,
  solucion: "Una disyunción es falsa solo si <b>los dos lados</b> lo son. De $p \\vee (p \\wedge q)$ falsa sale directamente que $p$ es <b>falsa</b>.<br><br>Con ese dato, $p \\vee q$ se reduce a $\\text{F} \\vee q$, y para que sea verdadera hace falta que $q$ sea <b>verdadera</b>. Los dos datos juntos fijan un único caso.",
},
{
  tema: "Cuantificadores",
  fuente: "PC1 2026-1",
  examen: "PC1",
  ciclo: "2026-1",
  enunciado: "La proposición $\\forall x \\in \\mathbb{N}, [\\, x \\neq 1 \\rightarrow x = 0 \\,]$ es falsa. ¿Qué valor sirve de <b>contraejemplo</b>?",
  opciones: ["$x = 1$", "$x = 0$", "$x = 2$", "Ninguno: la proposición es verdadera"],
  correcta: 2,
  solucion: "El contraejemplo debe estar en el universo y hacer <b>falsa</b> la condicional, o sea cumplir el antecedente y no el consecuente. Con $x = 2$: es cierto que $2 \\neq 1$, y es falso que $2 = 0$. La condicional falla.",
  ojo: "$x = 1$ no sirve porque su antecedente es falso, y una condicional con antecedente falso es verdadera. Y $x = 0$ ni siquiera está en el universo: en este curso $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ empieza en 1."
},
{
  tema: "Conjuntos",
  fuente: "PC1 2026-1",
  examen: "PC1",
  ciclo: "2026-1",
  enunciado: "¿Por qué es <b>falso</b> que el conjunto $A = \\{\\, x \\in \\mathbb{Z} : x^2 = x \\;\\wedge\\; x \\neq 1 \\,\\}$ sea vacío?",
  opciones: [
    "Porque $1 \\in A$",
    "Porque $0 \\in A$",
    "Porque $-1 \\in A$",
    "Porque $x^2 = x$ no tiene soluciones enteras"
  ],
  correcta: 1,
  solucion: "Basta exhibir un elemento. El $0$ cumple las dos condiciones: $0^2 = 0$, y además $0 \\neq 1$. Con eso $A$ no es vacío — de hecho $A = \\{0\\}$.",
  ojo: "El $1$ cumple $1^2 = 1$ pero lo excluye la segunda condición, y $(-1)^2 = 1 \\neq -1$. La ecuación $x^2 = x$ solo tiene dos soluciones enteras, $0$ y $1$, y una de las dos está prohibida."
},
{
  tema: "Simbolización",
  fuente: "PC1 2026-1",
  examen: "PC1",
  ciclo: "2026-1",
  enunciado: "Con $p$: «se implementará la reforma tributaria», $q$: «se aumentará el gasto en educación», $r$: «se reducirá la inseguridad ciudadana». Beatriz declara: «<b>Se implementará la reforma tributaria y, además, no se aumentará el gasto en educación o no se reducirá la inseguridad ciudadana</b>». Su declaración es:",
  opciones: [
    "$p \\wedge (\\neg q \\vee \\neg r)$",
    "$p \\wedge \\neg q \\wedge \\neg r$",
    "$(p \\wedge \\neg q) \\vee \\neg r$",
    "$p \\vee (\\neg q \\wedge \\neg r)$"
  ],
  correcta: 0,
  solucion: "La frase tiene dos partes unidas por «y»: la reforma ($p$) y un bloque con «o». Ese bloque agrupa «no se aumentará el gasto» ($\\neg q$) con «no se reducirá la inseguridad» ($\\neg r$): $\\neg q \\vee \\neg r$.",
  ojo: "El «además» marca dónde va la conjunción principal, y la «o» queda <b>dentro</b> del segundo bloque. Cambiar ese agrupamiento cambia la afirmación: la tercera alternativa dice algo distinto y mucho más débil."
},
{
  tema: "Simbolización",
  fuente: "PC1 2026-1",
  examen: "PC1",
  ciclo: "2026-1",
  enunciado: "Con las declaraciones de Ana ($\\neg p$), Beatriz ($p \\wedge (\\neg q \\vee \\neg r)$) y César ($p \\wedge q \\wedge \\neg r$), y sabiendo que <b>exactamente dos propuestas se implementarán</b> y que <b>solo uno de los voceros miente</b>, ¿quién miente?",
  opciones: ["Ana", "Beatriz", "César", "Faltan datos para decidirlo"],
  correcta: 0,
  solucion: "Hay que recorrer los casos con exactamente dos propuestas verdaderas y quedarse con el que deja exactamente una declaración falsa. El único que cumple ambas condiciones es $p$ verdadera, $q$ verdadera, $r$ falsa: se implementan la reforma tributaria y el gasto en educación, pero no se reduce la inseguridad.<br><br>Con esos valores, Beatriz y César dicen la verdad, y <b>Ana miente</b>, porque afirmó $\\neg p$.",
  ojo: "La estrategia es no probar las ocho combinaciones a ciegas: la condición «exactamente dos» ya deja solo tres casos, y sobre esos tres se evalúan las declaraciones."
},
{
  tema: "Equivalencias y De Morgan",
  fuente: "PC1 2026-1",
  examen: "PC1",
  ciclo: "2026-1",
  enunciado: "El manual dice: «<b>Es falso que, si la presión es alta, entonces el tanque no esté lleno</b>». Con $p$: «la presión es alta» y $t$: «el tanque está lleno», la instrucción simplificada, sin condicionales ni negaciones, es:",
  opciones: ["$\\neg p \\wedge \\neg t$", "$p \\vee t$", "$\\neg p \\vee t$", "$p \\wedge t$"],
  correcta: 3,
  solucion: "En símbolos el manual dice $\\neg(p \\rightarrow \\neg t)$. Se desarma en dos pasos: la condicional se vuelve disyunción, $p \\rightarrow \\neg t \\equiv \\neg p \\vee \\neg t$; y al negar esa disyunción, De Morgan la convierte en conjunción: $\\neg(\\neg p \\vee \\neg t) \\equiv p \\wedge t$.<br><br>En coloquial: la válvula solo debe abrirse cuando <b>la presión sea alta y el tanque esté lleno</b>.",
  ojo: "Una instrucción con doble negación es exactamente lo que no quieres leer en una emergencia. Ese es el sentido práctico de simplificar: el enunciado original y el simplificado dicen lo mismo, pero solo uno es accionable."
},
{
  tema: "Conjuntos",
  fuente: "PC1 2026-1",
  examen: "PC1",
  ciclo: "2026-1",
  enunciado: "Determine por extensión el conjunto $U = \\{\\, x \\in \\mathbb{Z} : -3 < x \\leq 2 \\,\\}$.",
  opciones: [
    "$\\{-3, -2, -1, 0, 1, 2\\}$",
    "$\\{-2, -1, 0, 1, 2\\}$",
    "$\\{-2, -1, 0, 1\\}$",
    "$\\{-3, -2, -1, 0, 1\\}$"
  ],
  correcta: 1,
  solucion: "Los dos signos son distintos y hay que respetarlos. El $<$ de la izquierda <b>excluye</b> al $-3$; el $\\leq$ de la derecha <b>incluye</b> al $2$. Quedan cinco enteros.",
  ojo: "Es el error más barato de cometer y el más fácil de evitar: leer el signo antes de listar. En un examen, un extremo mal incluido arrastra el error a todas las partes siguientes del ejercicio."
},
{
  tema: "Cuantificadores",
  fuente: "PC1 2026-1",
  examen: "PC1",
  ciclo: "2026-1",
  enunciado: "Sea $p: \\forall x \\in U, [\\, x + 1 > 0 \\rightarrow x^2 > 0 \\,]$. Su negación, <b>simplificando la condicional</b>, es:",
  opciones: [
    "$\\exists x \\in U, [\\, x + 1 > 0 \\wedge x^2 \\leq 0 \\,]$",
    "$\\forall x \\in U, [\\, x + 1 \\leq 0 \\wedge x^2 \\leq 0 \\,]$",
    "$\\exists x \\in U, [\\, x + 1 \\leq 0 \\rightarrow x^2 \\leq 0 \\,]$",
    "$\\exists x \\in U, [\\, x + 1 > 0 \\vee x^2 \\leq 0 \\,]$"
  ],
  correcta: 0,
  solucion: "Dos pasos otra vez. El cuantificador: $\\neg \\forall$ pasa a $\\exists$. Y adentro, la negación de una condicional: $\\neg(a \\rightarrow b) \\equiv a \\wedge \\neg b$, así que $x + 1 > 0$ se conserva tal cual y $x^2 > 0$ se niega, quedando $x^2 \\leq 0$.",
  ojo: "Al negar una condicional, el antecedente <b>no</b> se niega. Es el error más frecuente en este tipo de ejercicio: se niegan las dos partes por simetría, cuando la regla dice otra cosa."
},
{
  tema: "Cuantificadores",
  fuente: "PC1 2026-1",
  examen: "PC1",
  ciclo: "2026-1",
  enunciado: "Con $U = \\{-2, -1, 0, 1, 2\\}$ y $p: \\forall x \\in U, [\\, x + 1 > 0 \\rightarrow x^2 > 0 \\,]$, el valor de verdad de $\\neg p$ es:",
  opciones: [
    "Falso, porque todos los elementos cumplen la propiedad",
    "Verdadero, tomando $x = 0$",
    "Verdadero, tomando $x = -2$",
    "No se puede determinar sin más información"
  ],
  correcta: 1,
  solucion: "$\\neg p$ afirma que <b>existe</b> un $x$ con $x + 1 > 0$ y $x^2 \\leq 0$. El $0$ cumple las dos: $0 + 1 = 1 > 0$, y $0^2 = 0$, que sí es $\\leq 0$. Basta ese testigo, así que $\\neg p$ es verdadera — y por lo tanto $p$ es falsa.",
  ojo: "$x = -2$ no sirve: $-2 + 1 = -1$, que no es mayor que cero, así que no cumple la primera condición. El $0$ es el único elemento de $U$ que funciona, y es fácil pasarlo por alto porque uno tiende a pensar que $x^2 > 0$ «siempre»."
}

]);
