/* ===========================================================================
   BANCO DE PREGUNTAS — LÓGICA PROPOSICIONAL
   Nivelación en Matemáticas · Universidad del Pacífico

   CÓMO AGREGAR UNA PREGUNTA
   -------------------------
   Copia un bloque completo (desde la llave { hasta la llave },) y edítalo.
   Campos:

     tema       Texto exacto. Las preguntas con el mismo tema se agrupan solas
                en el selector; si escribes un tema nuevo, aparece nuevo.
     fuente     De dónde salió (aparece en los resultados). Ej: "PC1 2014-0".
     enunciado  La pregunta. Fórmulas entre signos de dólar: $p \rightarrow q$
     opciones   Exactamente 4 alternativas.
     correcta   Índice de la alternativa correcta: 0 = la primera, 3 = la cuarta.
                (El sitio baraja las alternativas, así que no importa el orden.)
     solucion   La explicación que verá el alumno al final.

   OJO CON LAS BARRAS INVERTIDAS: dentro de estas comillas, LaTeX se escribe
   con DOBLE barra. Se escribe "\\rightarrow", no "\rightarrow".

   SÍMBOLOS ÚTILES
     \\neg  ¬     \\wedge  ∧     \\vee  ∨     \\veebar  ⊻
     \\rightarrow  →     \\leftrightarrow  ↔     \\equiv  ≡
=========================================================================== */

window.BANCO = (window.BANCO || []).concat([

/* --- Proposiciones y negación ------------------------------------------ */
{
  tema: "Proposiciones y negación",
  fuente: "Clase 01",
  enunciado: "¿Cuál de los siguientes enunciados <b>NO</b> es una proposición?",
  opciones: [
    "7 es un número par.",
    "¡Que te vaya muy bien en el examen!",
    "Lima es la capital del Perú.",
    "El precio del bono bajó ayer."
  ],
  correcta: 1,
  solucion: "Una proposición es un enunciado que <b>puede ser calificado como verdadero o falso</b>. Un deseo, una pregunta o una orden no admiten ese calificativo.<br><br><b>Ojo:</b> «7 es un número par» <i>sí</i> es una proposición. Es falsa, pero ser falsa no la descalifica: lo que importa es que tenga valor de verdad, no cuál sea."
},
{
  tema: "Proposiciones y negación",
  fuente: "Clase 01",
  enunciado: "¿Cuál de los siguientes enunciados <b>SÍ</b> es una proposición?",
  opciones: [
    "¿A qué hora es la clase?",
    "Este enunciado es falso.",
    "$5 > 3$",
    "Cierra la puerta, por favor."
  ],
  correcta: 2,
  solucion: "$5 > 3$ es verdadera, así que es una proposición.<br><br>Una pregunta y una orden no tienen valor de verdad. Y «este enunciado es falso» es la <b>paradoja del mentiroso</b>: si fuera verdadera sería falsa y viceversa, así que no puede recibir ningún valor de verdad — tampoco es proposición."
},
{
  tema: "Proposiciones y negación",
  fuente: "Clase 01",
  enunciado: "La negación de <b>«París es la capital de Francia»</b> es:",
  opciones: [
    "París no es la capital de Francia.",
    "Londres es la capital de Francia.",
    "París es la capital de Italia.",
    "Francia no tiene capital."
  ],
  correcta: 0,
  solucion: "Negar es <b>rechazar el enunciado completo</b>, no cambiarle las piezas. La definición exige que $\\neg p$ tenga <b>siempre</b> el valor opuesto a $p$.<br><br>Las otras alternativas son falsas, pero no son la negación: si París dejara de ser la capital, ellas podrían seguir siendo falsas. La negación tiene que ser verdadera <i>exactamente</i> cuando el original es falso."
},
{
  tema: "Proposiciones y negación",
  fuente: "Clase 01",
  enunciado: "La proposición $\\neg(\\neg p)$ es equivalente a:",
  opciones: ["$\\neg p$", "$p$", "$p \\wedge \\neg p$", "$p \\vee \\neg p$"],
  correcta: 1,
  solucion: "<b>Doble negación:</b> $\\neg(\\neg p) \\equiv p$. Negar dos veces devuelve el valor original — si $p$ es V, $\\neg p$ es F y $\\neg(\\neg p)$ vuelve a ser V.<br><br>Esto se usa todo el tiempo al aplicar De Morgan: cuando aparece $\\neg(\\neg t)$, se simplifica a $t$."
},

/* --- Tablas de verdad y conectores ------------------------------------- */
{
  tema: "Tablas de verdad y conectores",
  fuente: "Clase 01",
  enunciado: "¿Cuántas filas tiene la tabla de verdad de una proposición compuesta con <b>4</b> proposiciones simples $p, q, r, s$?",
  opciones: ["4 filas", "8 filas", "16 filas", "32 filas"],
  correcta: 2,
  solucion: "Cada proposición simple aporta 2 posibilidades, así que con $n$ proposiciones hay $2^n$ combinaciones. Con 4: $2^4 = 16$.<br><br>En clase vimos $n=1$ (2 filas), $n=2$ (4 filas) y $n=3$ (8 filas). Es la misma regla, no tres reglas distintas."
},
{
  tema: "Tablas de verdad y conectores",
  fuente: "Clase 01",
  enunciado: "Si $p$ es <b>verdadera</b> y $q$ es <b>falsa</b>, ¿cuál de las siguientes proposiciones es <b>verdadera</b>?",
  opciones: ["$p \\wedge q$", "$p \\veebar q$", "$p \\leftrightarrow q$", "$\\neg p \\vee q$"],
  correcta: 1,
  solucion: "La <b>disyunción exclusiva</b> $p \\veebar q$ es verdadera exactamente cuando los dos valores son <b>distintos</b>. Aquí V y F son distintos, así que da <b>V</b>.<br><br>Las otras: $p \\wedge q = $ V∧F $=$ F · $p \\leftrightarrow q = $ F (el bicondicional pide valores <i>iguales</i>) · $\\neg p \\vee q = $ F∨F $=$ F."
},
{
  tema: "Tablas de verdad y conectores",
  fuente: "Clase 01",
  enunciado: "Si $p$ es <b>falsa</b>, ¿cuál de las siguientes proposiciones es <b>necesariamente verdadera</b>, sin importar el valor de $q$?",
  opciones: ["$p \\vee q$", "$\\neg p \\wedge q$", "$p \\rightarrow q$", "$p \\leftrightarrow q$"],
  correcta: 2,
  solucion: "Con $p$ falsa, la condicional $p \\rightarrow q$ es <b>verdadera siempre</b>: F→V $=$ V y F→F $=$ V. Es la llamada <i>verdad vacua</i>.<br><br>Las otras tres <b>dependen</b> de $q$: $p \\vee q$ = F∨q = q · $\\neg p \\wedge q$ = V∧q = q · $p \\leftrightarrow q$ = F↔q, que es V solo si $q$ también es falsa."
},
{
  tema: "Tablas de verdad y conectores",
  fuente: "Clase 01",
  enunciado: "En la tabla de verdad de $p \\vee q$, ¿en cuántas de las 4 filas el resultado es <b>V</b>?",
  opciones: ["En 1 fila", "En 2 filas", "En 3 filas", "En las 4 filas"],
  correcta: 2,
  solucion: "La disyunción es falsa <b>solo</b> cuando las dos son falsas. De las 4 filas, únicamente F,F da F; las otras 3 (V,V · V,F · F,V) dan <b>V</b>.<br><br>Truco para memorizar: la $\\vee$ tiene una sola fila falsa y la $\\wedge$ tiene una sola fila verdadera. Son espejos."
},

/* --- La condicional ----------------------------------------------------- */
{
  tema: "La condicional",
  fuente: "Clase 01",
  enunciado: "La proposición $p \\rightarrow q$ es <b>falsa</b> únicamente cuando:",
  opciones: [
    "$p$ es falsa y $q$ es verdadera",
    "$p$ es verdadera y $q$ es falsa",
    "ambas son falsas",
    "ambas son verdaderas"
  ],
  correcta: 1,
  solucion: "Pensar la condicional como una <b>promesa</b>: «si hago la tarea, voy a la playa». La promesa solo se <b>incumple</b> si hice la tarea y <i>no</i> fui a la playa. Ese es el único caso <b>F</b>.<br><br><b>Ojo:</b> si $p$ es falsa (no hice la tarea), la promesa no se rompió, pase lo que pase con $q$. F→V y F→F son ambas <b>V</b>. Este es el punto que más confunde de todo el capítulo."
},
{
  tema: "La condicional",
  fuente: "Clase 01",
  enunciado: "Sea $p = $ «hago la tarea» y $q = $ «voy a la playa». La frase <b>«Voy a la playa siempre que haga la tarea»</b> se simboliza:",
  opciones: ["$q \\rightarrow p$", "$p \\rightarrow q$", "$p \\leftrightarrow q$", "$p \\wedge q$"],
  correcta: 1,
  solucion: "«Siempre que», «si», «siempre y cuando» y «cuando» introducen la <b>condición</b>, es decir el <b>antecedente</b>. La condición es hacer la tarea, así que la fórmula es $p \\rightarrow q$.<br><br><b>Ojo:</b> el antecedente no es lo que se dice primero en la oración. «Voy a la playa <u>si</u> hago la tarea» y «<u>Si</u> hago la tarea, voy a la playa» son <b>la misma</b> proposición."
},
{
  tema: "La condicional",
  fuente: "Clase 01",
  enunciado: "Con $p = $ «hago la tarea» y $q = $ «voy a la playa», la frase <b>«Voy a la playa solo si hago la tarea»</b> se simboliza:",
  opciones: ["$p \\rightarrow q$", "$q \\rightarrow p$", "$p \\wedge q$", "$\\neg p \\rightarrow \\neg q$"],
  correcta: 1,
  solucion: "Cuidado, «<b>solo si</b>» funciona al revés que «siempre que». La regla es: «$A$ <b>solo si</b> $B$» se traduce como $A \\rightarrow B$.<br><br>Aquí $A$ es «voy a la playa» ($q$) y $B$ es «hago la tarea» ($p$), así que queda $q \\rightarrow p$. Tiene sentido: hacer la tarea es <i>necesario</i> para ir a la playa, pero la frase no promete que si hago la tarea iré.<br><br>Compárala con «voy a la playa <b>siempre que</b> haga la tarea», que sí es $p \\rightarrow q$."
},
{
  tema: "La condicional",
  fuente: "Tipo PC",
  enunciado: "Si $p \\rightarrow q$ es <b>verdadera</b> y $q$ es <b>falsa</b>, entonces necesariamente:",
  opciones: ["$p$ es verdadera", "$p$ es falsa", "$p$ puede ser V o F", "no hay información suficiente"],
  correcta: 1,
  solucion: "Si $p$ fuera verdadera, tendríamos V→F, que es el <b>único</b> caso en que la condicional es falsa. Como nos dicen que es verdadera, $p$ tiene que ser <b>falsa</b>.<br><br>Este razonamiento se llama <b>modus tollens</b> y es el motor de casi todos los ejercicios tipo PC: el dato «es verdadera» o «es falsa» <i>fija</i> valores, y de ahí se deduce el resto."
},
{
  tema: "La condicional",
  fuente: "Tipo PC",
  enunciado: "Si la proposición $p \\rightarrow q$ es <b>falsa</b>, ¿cuál es el valor de verdad de $q \\rightarrow p$?",
  opciones: ["Verdadera", "Falsa", "Depende del valor de $p$", "No se puede determinar"],
  correcta: 0,
  solucion: "Que $p \\rightarrow q$ sea falsa <b>fija</b> los valores: eso solo ocurre con $p = $ V y $q = $ F. Entonces $q \\rightarrow p$ es F→V $= $ <b>V</b>.<br><br>De paso queda demostrado que la recíproca <b>no es equivalente</b> a la condicional: aquí una es falsa y la otra verdadera."
},

/* --- Contrapositiva y recíproca ----------------------------------------- */
{
  tema: "Contrapositiva y recíproca",
  fuente: "Clase 01",
  enunciado: "La <b>contrapositiva</b> de «Si sube la tasa de interés, entonces el precio del bono baja» es:",
  opciones: [
    "Si el precio del bono baja, entonces sube la tasa de interés.",
    "Si no sube la tasa de interés, entonces el precio del bono no baja.",
    "Si el precio del bono no baja, entonces no sube la tasa de interés.",
    "Si sube la tasa de interés, entonces el precio del bono no baja."
  ],
  correcta: 2,
  solucion: "Contrapositiva $= \\neg q \\rightarrow \\neg p$: se <b>voltea</b> el orden <b>y</b> se <b>niega</b> cada parte. Hay que hacer las dos cosas, no una sola.<br><br>La primera alternativa es la <b>recíproca</b> ($q \\rightarrow p$) y la segunda es la <b>inversa</b> ($\\neg p \\rightarrow \\neg q$): <b>ninguna de las dos equivale</b> al original. La contrapositiva es la única con la misma tabla de verdad: $p \\rightarrow q \\equiv \\neg q \\rightarrow \\neg p$."
},
{
  tema: "Contrapositiva y recíproca",
  fuente: "Clase 01",
  enunciado: "La <b>recíproca</b> de «Si llueve, entonces la pista se moja» es:",
  opciones: [
    "Si la pista se moja, entonces llueve.",
    "Si no llueve, entonces la pista no se moja.",
    "Si la pista no se moja, entonces no llueve.",
    "Llueve y la pista no se moja."
  ],
  correcta: 0,
  solucion: "La recíproca de $p \\rightarrow q$ es $q \\rightarrow p$: solo se <b>voltea</b>, no se niega nada.<br><br>Este ejemplo muestra por qué la recíproca <b>no</b> equivale al original: que llueva moja la pista, pero que la pista esté mojada no prueba que llovió — pudo pasar el camión del agua. La tercera alternativa es la contrapositiva, y esa sí equivale."
},

/* --- Equivalencias y De Morgan ------------------------------------------ */
{
  tema: "Equivalencias y De Morgan",
  fuente: "Clase 01",
  enunciado: "¿Cuál de las siguientes proposiciones es <b>equivalente</b> a $p \\rightarrow q$?",
  opciones: ["$\\neg p \\wedge q$", "$\\neg p \\vee q$", "$p \\vee \\neg q$", "$p \\wedge \\neg q$"],
  correcta: 1,
  solucion: "Dos proposiciones son equivalentes si tienen <b>la misma tabla de verdad</b>. $p \\rightarrow q$ solo es falsa con V,F; y $\\neg p \\vee q$ solo es falsa cuando $\\neg p$ y $q$ son ambas falsas, o sea cuando $p = $ V y $q = $ F. <b>Mismo único caso falso</b>, luego son equivalentes.<br><br><b>Ojo:</b> $p \\wedge \\neg q$ es justamente la <b>negación</b> de $p \\rightarrow q$ — verdadera exactamente donde la condicional falla."
},
{
  tema: "Equivalencias y De Morgan",
  fuente: "Clase 01",
  enunciado: "¿Cuál es la <b>negación</b> de $p \\rightarrow q$?",
  opciones: ["$\\neg p \\rightarrow \\neg q$", "$q \\rightarrow p$", "$p \\wedge \\neg q$", "$\\neg p \\vee q$"],
  correcta: 2,
  solucion: "Negar la promesa es afirmar que <b>se incumplió</b>: ocurrió $p$ y <b>no</b> ocurrió $q$, es decir $p \\wedge \\neg q$.<br><br>También sale con De Morgan partiendo de la equivalencia anterior: $\\neg(p \\rightarrow q) \\equiv \\neg(\\neg p \\vee q) \\equiv p \\wedge \\neg q$. La última alternativa es la <i>equivalente</i>, no la negación."
},
{
  tema: "Equivalencias y De Morgan",
  fuente: "Clase 01 · ejercicio 2b",
  enunciado: "<b>«Es falso que hablamos y no trabajamos»</b> equivale a:",
  opciones: [
    "No hablamos y trabajamos.",
    "No hablamos o trabajamos.",
    "Hablamos o no trabajamos.",
    "No hablamos y no trabajamos."
  ],
  correcta: 1,
  solucion: "Con $h = $ «hablamos» y $t = $ «trabajamos», el enunciado es $\\neg(h \\wedge \\neg t)$. Por De Morgan: $\\neg h \\vee \\neg(\\neg t) \\equiv \\neg h \\vee t$, o sea «no hablamos <b>o</b> trabajamos».<br><br>Al negar una conjunción, la <b>«y» se convierte en «o»</b> y se niega cada parte. Y ojo con la doble negación: $\\neg(\\neg t) \\equiv t$."
},
{
  tema: "Equivalencias y De Morgan",
  fuente: "Clase 01",
  enunciado: "La proposición $\\neg(p \\vee q)$ es equivalente a:",
  opciones: ["$\\neg p \\vee \\neg q$", "$\\neg p \\wedge \\neg q$", "$p \\wedge \\neg q$", "$\\neg p \\rightarrow q$"],
  correcta: 1,
  solucion: "Es la otra <b>ley de De Morgan</b>: $\\neg(p \\vee q) \\equiv \\neg p \\wedge \\neg q$. Al negar una disyunción, la «o» se convierte en «y».<br><br>Tiene sentido en castellano: negar «viene Ana o viene Beto» es decir «no viene Ana <b>y</b> no viene Beto». Para que la «o» sea falsa, tienen que fallar las dos."
},
{
  tema: "Equivalencias y De Morgan",
  fuente: "Tipo PC",
  enunciado: "La negación de <b>«Alonso sale temprano o tiene asesoría de Mate»</b> es:",
  opciones: [
    "Alonso no sale temprano o no tiene asesoría de Mate.",
    "Alonso no sale temprano y no tiene asesoría de Mate.",
    "Alonso sale temprano y no tiene asesoría de Mate.",
    "Si Alonso no sale temprano, tiene asesoría de Mate."
  ],
  correcta: 1,
  solucion: "Es De Morgan aplicado al castellano: $\\neg(s \\vee a) \\equiv \\neg s \\wedge \\neg a$.<br><br>La «o» se vuelve «y», y se niegan las dos partes. El error clásico es la primera alternativa: dejar la «o» intacta y solo negar cada parte."
},

/* --- Tautologías -------------------------------------------------------- */
{
  tema: "Tautologías",
  fuente: "Clase 01",
  enunciado: "¿Cuál de las siguientes proposiciones es una <b>tautología</b>?",
  opciones: ["$p \\wedge \\neg p$", "$p \\vee \\neg p$", "$p \\rightarrow \\neg p$", "$p \\leftrightarrow \\neg p$"],
  correcta: 1,
  solucion: "Tautología $=$ la tabla de verdad da <b>V en todas las filas</b>, sin importar el valor de las proposiciones simples. En $p \\vee \\neg p$: si $p$ es V da V; si $p$ es F, entonces $\\neg p$ es V y también da V.<br><br>$p \\wedge \\neg p$ y $p \\leftrightarrow \\neg p$ son lo contrario, siempre falsas (<b>contradicciones</b>); y $p \\rightarrow \\neg p$ es falsa cuando $p$ es V."
},
{
  tema: "Tautologías",
  fuente: "Clase 01",
  enunciado: "¿Cuál de las siguientes proposiciones es una <b>contradicción</b>, es decir, falsa en todas las filas de su tabla?",
  opciones: ["$p \\vee \\neg p$", "$p \\rightarrow p$", "$p \\wedge \\neg p$", "$p \\vee q$"],
  correcta: 2,
  solucion: "$p \\wedge \\neg p$ pide que $p$ sea verdadera <b>y</b> falsa a la vez, cosa imposible: la tabla da F en todas las filas.<br><br>Las dos primeras son tautologías ($p \\rightarrow p$ siempre es V), y $p \\vee q$ depende de los valores: a veces V, a veces F. A esas últimas se les llama <b>contingencias</b>."
},
{
  tema: "Tautologías",
  fuente: "Tipo PC",
  enunciado: "La proposición $[(p \\rightarrow q) \\wedge p] \\rightarrow q$ es:",
  opciones: [
    "una tautología",
    "una contradicción",
    "verdadera solo si $p$ es verdadera",
    "equivalente a $p \\wedge q$"
  ],
  correcta: 0,
  solucion: "Es una <b>tautología</b>, y además es la regla de inferencia más usada de todas: el <b>modus ponens</b>. Dice que si se cumple «$p$ implica $q$» y además ocurre $p$, entonces necesariamente ocurre $q$.<br><br>Para verificarlo: el antecedente $[(p \\rightarrow q) \\wedge p]$ solo es verdadero cuando $p$ es V y $p \\rightarrow q$ es V, lo que obliga a que $q$ sea V. Entonces nunca se da el caso V→F, y la tabla completa sale verdadera."
},
{
  tema: "Tautologías",
  fuente: "Clase 01 · ejercicio 4c",
  enunciado: "La proposición $(p \\rightarrow q) \\leftrightarrow (\\neg q \\rightarrow \\neg p)$ es:",
  opciones: [
    "una contradicción",
    "una tautología",
    "verdadera solo cuando $p$ y $q$ son verdaderas",
    "equivalente a $p \\veebar q$"
  ],
  correcta: 1,
  solucion: "Es una <b>tautología</b>, y expresa el teorema visto en clase: dos proposiciones son equivalentes <b>si y solo si</b> su bicondicional es una tautología.<br><br>Como $p \\rightarrow q \\equiv \\neg q \\rightarrow \\neg p$ (la contrapositiva), sus tablas coinciden fila por fila; y un bicondicional entre dos columnas idénticas da <b>V</b> en todas las filas."
}

]);
