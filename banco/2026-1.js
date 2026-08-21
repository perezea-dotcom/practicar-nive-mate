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
},

/* ===========================  PC2  ======================================
   Temas del examen: preguntas cortas · logaritmos y productos notables ·
   ley de exponentes y logaritmos · cardinalidad
   ====================================================================== */

{
  tema: "Cardinalidad",
  fuente: "PC2 2026-1",
  examen: "PC2",
  ciclo: "2026-1",
  enunciado: "Sean $A = \\{0, 1, 2\\}$ y $B = \\{-3, -2, 0, 1\\}$. Los valores de $n(A \\cap B)$ y $n(A - B)$ son, respectivamente:",
  opciones: ["$3$ y $2$", "$2$ y $1$", "$1$ y $2$", "$2$ y $3$"],
  dos: true,
  correcta: 1,
  solucion: "$A \\cap B = \\{0, 1\\}$, los elementos que están en los dos, así que $n(A \\cap B) = 2$. Y $A - B = \\{2\\}$, lo que está en $A$ y no en $B$, así que $n(A - B) = 1$.",
  ojo: "Ojo con el orden de la diferencia: $B - A = \\{-3, -2\\}$ tiene <b>dos</b> elementos, no uno. Es el mismo par de conjuntos y da distinto según cuál va primero."
},
{
  tema: "Logaritmos y exponentes",
  fuente: "PC2 2026-1",
  examen: "PC2",
  ciclo: "2026-1",
  enunciado: "Sean $a, b \\in \\mathbb{N}$. Si $\\log(2^{7}) + \\log(7^{4}) = a\\log(2) + b\\log(7)$, entonces:",
  opciones: ["$a = 7$ y $b = 4$", "$a = 2$ y $b = 7$", "$a = 14$ y $b = 28$", "$a = 128$ y $b = 2401$"],
  correcta: 0,
  solucion: "La propiedad clave es que el exponente <b>baja multiplicando</b>: $\\log(x^{n}) = n\\log(x)$. Entonces $\\log(2^{7}) = 7\\log(2)$ y $\\log(7^{4}) = 4\\log(7)$.",
  ojo: "La última alternativa es la trampa de calcular $2^{7} = 128$ y $7^{4} = 2401$ antes de aplicar la propiedad. Se puede, pero entonces ya no queda de la forma $a\\log(2) + b\\log(7)$."
},
{
  tema: "Productos notables",
  fuente: "PC2 2026-1",
  examen: "PC2",
  ciclo: "2026-1",
  enunciado: "Sean $a, b \\in \\mathbb{R}$. El producto $(a - b)(a^{2} + ab + b^{2})$ es igual a:",
  opciones: ["$a^{3} + b^{3}$", "$(a-b)^{3}$", "$a^{3} - b^{3}$", "$a^{3} - 3a^{2}b + 3ab^{2} - b^{3}$"],
  dos: true,
  correcta: 2,
  solucion: "Es la <b>diferencia de cubos</b>: $a^{3} - b^{3} = (a - b)(a^{2} + ab + b^{2})$. Al desarrollar, todos los términos cruzados se cancelan y solo sobreviven $a^{3}$ y $-b^{3}$.",
  ojo: "Fíjate en el signo del paréntesis corto, que es el que manda: con $(a - b)$ delante sale la <b>resta</b> de cubos, y con $(a + b)(a^{2} - ab + b^{2})$ sale la suma. La última alternativa es $(a-b)^{3}$ desarrollado, que es otra cosa."
},
{
  tema: "Cardinalidad",
  fuente: "PC2 2026-1",
  examen: "PC2",
  ciclo: "2026-1",
  enunciado: "¿Por qué es <b>falsa</b> la proposición $\\forall A, B \\subset U, [\\, n(A) = n(B) \\rightarrow A = B \\,]$?",
  opciones: [
    "Porque $A = \\{1\\}$ y $B = \\{-1\\}$ tienen un elemento cada uno y son distintos",
    "Porque dos conjuntos siempre tienen distinta cantidad de elementos",
    "Porque el conjunto vacío no tiene cardinal",
    "Porque $n(A) = n(B)$ nunca puede ocurrir si $A \\neq B$"
  ],
  correcta: 0,
  solucion: "Contar cuántos elementos hay no dice <b>cuáles</b> son. $\\{1\\}$ y $\\{-1\\}$ tienen ambos un elemento, pero no son el mismo conjunto. Basta ese contraejemplo.",
  ojo: "La implicación sí funciona al revés: si $A = B$, entonces por supuesto $n(A) = n(B)$. Es un caso más de que voltear una condicional cambia lo que afirma."
},
{
  tema: "Logaritmos y exponentes",
  fuente: "PC2 2026-1",
  examen: "PC2",
  ciclo: "2026-1",
  enunciado: "¿Por qué es <b>falsa</b> la proposición $\\forall x, y \\in \\mathbb{R}, \\forall a \\in \\mathbb{R}^{+}, [\\, a^{x} = a^{y} \\rightarrow x = y \\,]$?",
  opciones: [
    "Porque con $a = 0$ ambos lados valen cero",
    "Porque con $a = 1$ se tiene $1^{10} = 1^{15}$ y sin embargo $10 \\neq 15$",
    "Porque los exponentes negativos no están permitidos",
    "Porque $a^{x} = a^{y}$ nunca se cumple si $x \\neq y$"
  ],
  correcta: 1,
  solucion: "El $1$ rompe la regla: elevado a lo que sea da siempre $1$, así que la igualdad de potencias no obliga a que los exponentes coincidan. La propiedad vale para $a > 0$ <b>con $a \\neq 1$</b>, y el enunciado se olvidó de excluirlo.",
  ojo: "$a = 0$ no sirve de contraejemplo porque el enunciado pide $a \\in \\mathbb{R}^{+}$, y el cero no es positivo. Un contraejemplo tiene que respetar las hipótesis: si te sales del universo, no refutas nada."
},
{
  tema: "Logaritmos y exponentes",
  fuente: "PC2 2026-1",
  examen: "PC2",
  ciclo: "2026-1",
  enunciado: "La ganancia acumulada de una empresa es $G = a\\log_{9}(2t + 1) + b$ mil soles, con $t$ en meses. Si a los <b>4 meses</b> la ganancia fue de $5a$ mil soles, entonces:",
  opciones: ["$b = a$", "$b = 5a$", "$b = 4a$", "$b = 9a$"],
  dos: true,
  correcta: 2,
  solucion: "Se reemplaza $t = 4$: el argumento queda $2(4) + 1 = 9$, y $\\log_{9}(9) = 1$. Entonces $5a = a \\cdot 1 + b$, de donde $b = 4a$.",
  ojo: "El examen elige el $4$ a propósito para que el argumento caiga justo en $9$, la base del logaritmo. Cuando los números salen así de redondos, suele ser señal de que vas por el camino correcto."
},
{
  tema: "Logaritmos y exponentes",
  fuente: "PC2 2026-1",
  examen: "PC2",
  ciclo: "2026-1",
  enunciado: "Con $G = a\\log_{9}(2t + 1) + 4a$, ¿después de cuántos meses la ganancia acumulada será de $6a$ mil soles?",
  opciones: ["$t = 9$", "$t = 40$", "$t = 41$", "$t = 80$"],
  dos: true,
  correcta: 1,
  solucion: "Se plantea $6a = a\\log_{9}(2t+1) + 4a$, se cancela la $a$ y queda $\\log_{9}(2t+1) = 2$. Pasando a forma exponencial: $2t + 1 = 9^{2} = 81$, luego $t = 40$.",
  ojo: "El $41$ sale de olvidar dividir entre dos al final, y el $9$ de confundir $\\log_{9}(2t+1) = 2$ con $2t+1 = 9$. El paso que hay que hacer con cuidado es convertir el logaritmo en potencia."
},
{
  tema: "Productos notables",
  fuente: "PC2 2026-1",
  examen: "PC2",
  ciclo: "2026-1",
  enunciado: "Sean $a = (\\sqrt{2}+\\sqrt{3}+\\sqrt{5})^{2}$, $b = (\\sqrt{2}+\\sqrt{3}-\\sqrt{5})^{2}$, $c = (\\sqrt{2}-\\sqrt{3}+\\sqrt{5})^{2}$ y $d = (\\sqrt{2}-\\sqrt{3}-\\sqrt{5})^{2}$. El valor de $E = a+b+c+d$ es:",
  opciones: ["$20$", "$30$", "$40$", "$10\\sqrt{6}$"],
  dos: true,
  correcta: 2,
  solucion: "Se agrupan de a dos usando la <b>identidad de Legendre</b>, $(m+n)^{2} + (m-n)^{2} = 2(m^{2}+n^{2})$. Con $m = \\sqrt{2}+\\sqrt{3}$ y $n = \\sqrt{5}$: $a + b = 2(\\sqrt{2}+\\sqrt{3})^{2} + 10$. Con $m = \\sqrt{2}-\\sqrt{3}$: $c + d = 2(\\sqrt{2}-\\sqrt{3})^{2} + 10$.<br><br>Sumando y aplicando Legendre otra vez: $E = 2\\big(2 \\cdot 2 + 2 \\cdot 3\\big) + 20 = 40$.",
  ojo: "La gracia del ejercicio es que <b>no hay que desarrollar nada</b>. Si te lanzas a expandir los cuatro cuadrados con raíces, el ejercicio se vuelve interminable y aparecen errores de signo. Agrupar primero es la diferencia entre dos minutos y quince."
},
{
  tema: "Logaritmos y exponentes",
  fuente: "PC2 2026-1",
  examen: "PC2",
  ciclo: "2026-1",
  enunciado: "Sean $a, b, x, y \\in \\mathbb{R}$ con $a > b$, $x > 0$, $y > 0$. Si $x^{a}y^{b} = 3^{a}$ y $x^{b}y^{a} = 3^{b}$, los valores de $xy$ y $\\dfrac{x}{y}$ son:",
  opciones: ["$xy = 3$ y $\\dfrac{x}{y} = 3$", "$xy = 9$ y $\\dfrac{x}{y} = 1$", "$xy = 3$ y $\\dfrac{x}{y} = 1$", "$xy = 1$ y $\\dfrac{x}{y} = 3$"],
  correcta: 0,
  solucion: "Dos movimientos simétricos. <b>Multiplicando</b> las dos ecuaciones: $x^{a+b}y^{a+b} = 3^{a+b}$, o sea $(xy)^{a+b} = 3^{a+b}$, de donde $xy = 3$. <b>Dividiendo</b>: $x^{a-b}y^{b-a} = 3^{a-b}$, o sea $\\left(\\frac{x}{y}\\right)^{a-b} = 3^{a-b}$, de donde $\\frac{x}{y} = 3$.",
  ojo: "La condición $a > b$ está puesta justamente para que $a - b \\neq 0$ y se pueda concluir de la división. Las hipótesis que parecen decorativas casi nunca lo son."
},
{
  tema: "Logaritmos y exponentes",
  fuente: "PC2 2026-1",
  examen: "PC2",
  ciclo: "2026-1",
  enunciado: "Determine el valor simplificado de $E = \\sqrt[5]{\\dfrac{7 \\cdot x^{\\log_{5} y} + 5^{2} \\cdot x^{\\log_{5} y}}{x^{\\log_{5} y}}}$.",
  opciones: ["$32$", "$2$", "$5$", "Depende de $x$ e $y$"],
  dos: true,
  correcta: 1,
  solucion: "El numerador tiene <b>factor común</b> $x^{\\log_{5} y}$: sale $(7 + 25)\\,x^{\\log_{5} y} = 32\\,x^{\\log_{5} y}$. Ese factor se cancela con el denominador y queda $E = \\sqrt[5]{32} = 2$.",
  ojo: "El $x^{\\log_{5} y}$ está ahí para intimidar. No hay que saber cuánto vale: basta ver que es el mismo arriba y abajo. Reconocer el factor común antes de intentar calcularlo es todo el ejercicio."
},
{
  tema: "Cardinalidad",
  fuente: "PC2 2026-1",
  examen: "PC2",
  ciclo: "2026-1",
  enunciado: "En un diagrama de Venn de cuatro carreras, las regiones exclusivas resultaron: solo Finanzas 13, solo Economía 7, solo Marketing 17 y solo Derecho 19. ¿Cuántos estudiantes prefieren <b>solo una</b> de las carreras?",
  opciones: ["$36$", "$56$", "$19$", "No se puede saber sin los datos de las intersecciones"],
  dos: true,
  correcta: 1,
  solucion: "«Solo una carrera» son exactamente las regiones que no se solapan con ninguna otra. Se suman las cuatro: $13 + 7 + 17 + 19 = 56$.",
  ojo: "No hacen falta las intersecciones: ya están excluidas por definición de «solo». El trabajo difícil del ejercicio es <b>llegar</b> a esos cuatro números rellenando el diagrama de adentro hacia afuera; una vez que los tienes, esta parte es una suma."
}

]);
