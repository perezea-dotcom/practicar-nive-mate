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
},
/* ===========================  PC3  ======================================
   Temas del examen: preguntas cortas · inecuaciones lineales y fracciones
   parciales · aplicación de sistemas de ecuaciones lineales · inecuaciones
   cuadráticas
   ====================================================================== */

{
  tema: "Fracciones parciales",
  fuente: "PC3 2026-1",
  examen: "PC3",
  ciclo: "2026-1",
  enunciado: "Sean $A,B \\in \\mathbb{R}$ tales que $\\dfrac{x-20}{x^{2}-5x-6} = \\dfrac{A}{x-6} + \\dfrac{B}{x+1}$. ¿Cuánto valen $A$ y $B$?",
  opciones: [
    "$A = -2$ y $B = 3$",
    "$A = 3$ y $B = -2$",
    "$A = 2$ y $B = -3$",
    "$A = -3$ y $B = 2$"
  ],
  correcta: 0,
  solucion: "Como $x^{2}-5x-6 = (x-6)(x+1)$, al multiplicar todo por ese producto queda $x - 20 = A(x+1) + B(x-6)$.<br><br>Conviene evaluar en las raíces:<br>• $x = 6$: $\\;-14 = 7A \\Rightarrow A = -2$.<br>• $x = -1$: $\\;-21 = -7B \\Rightarrow B = 3$.",
  ojo: "El orden importa: $A$ es el numerador que va sobre $x-6$, no sobre $x+1$. La alternativa que intercambia los dos valores es el error más común."
},
{
  tema: "Sistemas de ecuaciones lineales",
  fuente: "PC3 2026-1",
  examen: "PC3",
  ciclo: "2026-1",
  enunciado: "Si $a + 2b = 17$ y $2a + b = 46$, entonces $a$ y $b$ valen:",
  opciones: [
    "$a = 9$ y $b = 4$",
    "$a = -4$ y $b = 25$",
    "$a = 25$ y $b = -4$",
    "$a = 21$ y $b = -2$"
  ],
  correcta: 2,
  solucion: "Multiplicando la primera por $2$: $2a + 4b = 34$. Restándole la segunda, $3b = -12$, es decir $b = -4$. Reemplazando: $a = 17 - 2(-4) = 25$.<br><br>Comprobación: $25 + 2(-4) = 17$ y $2(25) + (-4) = 46$.",
  ojo: "Que $b$ salga negativo no es señal de error. Siempre conviene reemplazar los dos valores en <b>ambas</b> ecuaciones antes de responder."
},
{
  tema: "Inecuaciones cuadráticas",
  fuente: "PC3 2026-1",
  examen: "PC3",
  ciclo: "2026-1",
  enunciado: "El conjunto solución de $6x^{2} - 17x - 14 \\leq 0$ es un intervalo $[c,d]$. ¿Cuáles son $c$ y $d$?",
  opciones: [
    "$c = -\\dfrac{3}{2}$ y $d = \\dfrac{7}{3}$",
    "$c = -\\dfrac{2}{3}$ y $d = \\dfrac{7}{2}$",
    "$c = \\dfrac{2}{3}$ y $d = \\dfrac{7}{2}$",
    "$c = -7$ y $d = 2$"
  ],
  correcta: 1,
  solucion: "Las raíces salen de la fórmula: $x = \\dfrac{17 \\pm \\sqrt{289 + 336}}{12} = \\dfrac{17 \\pm 25}{12}$, o sea $x = -\\dfrac{2}{3}$ y $x = \\dfrac{7}{2}$.<br><br>Como el coeficiente de $x^{2}$ es positivo, la parábola abre hacia arriba y es $\\leq 0$ <b>entre</b> las raíces: $\\text{C.S.} = \\left[-\\dfrac{2}{3},\\, \\dfrac{7}{2}\\right]$.",
  ojo: "Con $6x^{2}$ adelante, el $6$ va al denominador de las dos raíces. Invertir las fracciones ($-3/2$ en lugar de $-2/3$) es el resbalón típico."
},
{
  tema: "Sistemas de ecuaciones lineales",
  fuente: "PC3 2026-1",
  examen: "PC3",
  ciclo: "2026-1",
  enunciado: "Considere el sistema $\\begin{cases} 2x + 3y = 8 \\\\ x + by = 4 \\end{cases}$ en las variables $x$ e $y$. ¿Para qué valor de $b$ <b>deja</b> de tener solución única?",
  opciones: [
    "$b = \\dfrac{3}{2}$",
    "$b = \\dfrac{2}{3}$",
    "$b = 3$",
    "Para ningún valor de $b$: siempre tiene solución única"
  ],
  correcta: 0,
  solucion: "Hay solución única exactamente cuando el determinante no se anula: $2b - 3 \\neq 0$. Entonces el caso problemático es $b = \\dfrac{3}{2}$.<br><br>Con ese valor la segunda ecuación es $x + \\tfrac{3}{2}y = 4$, que multiplicada por $2$ da $2x + 3y = 8$: la misma recta. El sistema pasa a tener infinitas soluciones.",
  ojo: "La afirmación «$\\forall b \\in \\mathbb{R}$ el sistema tiene solución única» es <b>falsa</b>, y para justificarlo basta exhibir un $b$. Un solo contraejemplo tumba un «para todo»."
},
{
  tema: "Inecuaciones cuadráticas",
  fuente: "PC3 2026-1",
  examen: "PC3",
  ciclo: "2026-1",
  enunciado: "¿Cuál de estos valores sirve como <b>contraejemplo</b> de la proposición $\\forall x \\in \\mathbb{R},\\; (x-5)^{2} > 4(x-6)$?",
  opciones: ["$x = 0$", "$x = 5$", "$x = 6$", "$x = 7$"],
  correcta: 3,
  solucion: "Con $x = 7$: el lado izquierdo es $(7-5)^{2} = 4$ y el derecho es $4(7-6) = 4$. Como $4 > 4$ es falso, la proposición no se cumple para todo $x$.<br><br>De hecho $(x-5)^{2} - 4(x-6) = x^{2} - 14x + 49 = (x-7)^{2}$, que es $\\geq 0$ y vale $0$ solo en $x = 7$: ese es el <b>único</b> contraejemplo.",
  ojo: "Los otros tres valores sí cumplen la desigualdad. Cuando un «para todo» falla apenas en un punto, hay que buscar dónde las dos expresiones se igualan, no probar números al azar."
},
{
  tema: "Inecuaciones lineales",
  fuente: "PC3 2026-1",
  examen: "PC3",
  ciclo: "2026-1",
  enunciado: "Sean $a,b \\in \\mathbb{R}$ constantes <b>negativas</b>. El conjunto solución de $\\dfrac{x-a}{b} + \\dfrac{x-b}{a} \\geq 2$ (incógnita $x$) es:",
  opciones: [
    "$\\left[\\,a+b,\\; +\\infty\\right[$",
    "$\\left]-\\infty,\\; a+b\\right]$",
    "$\\left]-\\infty,\\; ab\\right]$",
    "$\\left[\\,ab,\\; +\\infty\\right[$"
  ],
  correcta: 1,
  solucion: "Como $a<0$ y $b<0$, el producto $ab$ es <b>positivo</b>, así que multiplicar por $ab$ no cambia el sentido:<br>$a(x-a) + b(x-b) \\geq 2ab \\;\\Longleftrightarrow\\; (a+b)x \\geq a^{2} + 2ab + b^{2} = (a+b)^{2}$.<br><br>Ahora sí: $a+b$ es negativo, y al dividir entre él la desigualdad <b>se invierte</b>: $x \\leq a+b$. Por lo tanto $\\text{C.S.} = \\left]-\\infty,\\, a+b\\right]$.",
  ojo: "Dos pasos con signos y cada uno se comporta distinto: por $ab>0$ el sentido se mantiene, entre $a+b<0$ se invierte. La alternativa con $[a+b, +\\infty[$ es exactamente el resultado de olvidar el segundo cambio."
},
{
  tema: "Fracciones parciales",
  fuente: "PC3 2026-1",
  examen: "PC3",
  ciclo: "2026-1",
  enunciado: "Sean $A,B,C \\in \\mathbb{R}$ tales que $\\dfrac{5x^{2}-8x}{x^{3}+8} = \\dfrac{A}{x+2} + \\dfrac{Bx+C}{x^{2}-2x+4}$. Entonces $A$, $B$ y $C$ son:",
  opciones: [
    "$A = 3,\\; B = 2,\\; C = -6$",
    "$A = 3,\\; B = 2,\\; C = 6$",
    "$A = -3,\\; B = 8,\\; C = -6$",
    "$A = 5,\\; B = 0,\\; C = -8$"
  ],
  correcta: 0,
  solucion: "Se usa $x^{3}+8 = (x+2)(x^{2}-2x+4)$. Igualando numeradores:<br>$5x^{2}-8x = A(x^{2}-2x+4) + (x+2)(Bx+C)$.<br><br>• $x = -2$: $\\;36 = 12A \\Rightarrow A = 3$.<br>• $x = 0$: $\\;0 = 4A + 2C = 12 + 2C \\Rightarrow C = -6$.<br>• $x = 1$: $\\;-3 = 3A + 3(B+C) = 9 + 3B - 18 \\Rightarrow B = 2$.",
  ojo: "Cuando el factor es cuadrático irreducible, arriba va $Bx+C$, no una sola constante. Empezar evaluando en la raíz real ($x=-2$) simplifica: mata de golpe el término con $B$ y $C$."
},
{
  tema: "Sistemas de ecuaciones lineales",
  fuente: "PC3 2026-1",
  examen: "PC3",
  ciclo: "2026-1",
  enunciado: "Una empresa fabrica productos de tipo A y de tipo B con dos insumos, P y Q. Cada unidad de A usa 2 de P y 3 de Q; cada unidad de B usa 3 de P y 4 de Q. Se dispone de 690 unidades de P y 960 de Q. Con $x$ = unidades de A e $y$ = unidades de B, ¿cuál es el sistema que hay que resolver para no desperdiciar ningún insumo?",
  opciones: [
    "$\\begin{cases} 2x + 3y = 690 \\\\ 3x + 4y = 960 \\end{cases}$",
    "$\\begin{cases} 2x + 3y = 960 \\\\ 3x + 4y = 690 \\end{cases}$",
    "$\\begin{cases} 2x + 3y = 690 \\\\ 3x + 4y = 690 \\end{cases}$",
    "$\\begin{cases} 5x + 7y = 690 \\\\ 5x + 7y = 960 \\end{cases}$"
  ],
  correcta: 0,
  solucion: "Cada ecuación es un <b>insumo</b>, no un producto. El insumo P se gasta a razón de 2 por unidad de A y 3 por unidad de B, y hay 690: $2x + 3y = 690$. El insumo Q se gasta 3 y 4 respectivamente, y hay 960: $3x + 4y = 960$.<br><br>«Sin desperdiciar» es lo que justifica el signo $=$ y no $\\leq$.",
  ojo: "El error clásico es armar una ecuación por producto en vez de una por insumo. Truco para no equivocarse: los coeficientes de una misma <b>fila</b> deben leerse todos en la misma unidad."
},
{
  tema: "Sistemas de ecuaciones lineales",
  fuente: "PC3 2026-1",
  examen: "PC3",
  ciclo: "2026-1",
  enunciado: "Resolviendo $\\begin{cases} 2x + 3y = 690 \\\\ 3x + 4y = 960 \\end{cases}$, ¿cuántas unidades de tipo A y de tipo B se pueden elaborar sin desperdiciar insumos?",
  opciones: [
    "150 de tipo A y 120 de tipo B",
    "120 de tipo A y 150 de tipo B",
    "138 de tipo A y 138 de tipo B",
    "240 de tipo A y 70 de tipo B"
  ],
  correcta: 1,
  solucion: "Multiplicando la primera por $3$ y la segunda por $-2$:<br>$6x + 9y = 2070$ y $-6x - 8y = -1920$. Sumando, $y = 150$.<br><br>Reemplazando en la primera: $2x + 450 = 690 \\Rightarrow x = 120$. Es decir, $\\text{C.S.} = \\{(120, 150)\\}$: 120 unidades de A y 150 de B.",
  ojo: "$x$ es A e $y$ es B: si se intercambian al final, la aritmética estuvo bien pero la respuesta está mal. Vale la pena verificar: $2(120)+3(150)=690$ y $3(120)+4(150)=960$."
},
{
  tema: "Inecuaciones cuadráticas",
  fuente: "PC3 2026-1",
  examen: "PC3",
  ciclo: "2026-1",
  enunciado: "Con 75 árboles de palta, cada árbol produce 400 paltas al año. Por cada árbol adicional plantado en el mismo terreno, la producción de <b>cada</b> árbol baja en 4 paltas. Si $k$ es el número de árboles adicionales, la producción anual total $P(k)$ es:",
  opciones: [
    "$P(k) = 75 \\cdot 400 - 4k$",
    "$P(k) = (75+k)(400-4k)$",
    "$P(k) = (75-k)(400+4k)$",
    "$P(k) = 75(400-4k) + k$"
  ],
  correcta: 1,
  solucion: "Con $k$ árboles adicionales hay $75+k$ árboles, y cada uno produce $400-4k$ paltas. La producción total es el producto:<br>$P(k) = (75+k)(400-4k)$.",
  ojo: "La caída de 4 paltas afecta a <b>todos</b> los árboles, no solo a los nuevos. Ese detalle es lo que hace que el modelo sea cuadrático y no lineal."
},
{
  tema: "Inecuaciones cuadráticas",
  fuente: "PC3 2026-1",
  examen: "PC3",
  ciclo: "2026-1",
  enunciado: "Con $P(k) = (75+k)(400-4k)$, ¿en qué intervalo debe estar $k$ para que la producción anual sea de <b>al menos</b> $30\\,616$ paltas?",
  opciones: [
    "$k \\in \\left]-\\infty, 11\\right] \\cup \\left[14, +\\infty\\right[$",
    "$k \\in \\left]11, 14\\right[$",
    "$k \\in [11, 14]$",
    "$k \\in [0, 11]$"
  ],
  correcta: 2,
  solucion: "$(75+k)(400-4k) \\geq 30\\,616 \\;\\Longleftrightarrow\\; 30\\,000 + 100k - 4k^{2} \\geq 30\\,616$.<br><br>Pasando todo a un lado: $0 \\geq 4k^{2} - 100k + 616$, y dividiendo entre $4$: $0 \\geq k^{2} - 25k + 154 = (k-11)(k-14)$.<br><br>Un producto es $\\leq 0$ entre las raíces, así que $k \\in [11,14]$.",
  ojo: "Al pasar el $4k^{2}$ al otro lado la desigualdad queda «al revés» ($0 \\geq \\ldots$), y de ahí sale el intervalo <b>cerrado entre</b> raíces. Quedarse con la unión de los extremos es el error de leer mal ese giro; en la práctica, además, $k$ solo tiene sentido entero: 11, 12, 13 o 14 árboles adicionales."
},

/* ===========================  PC4  ======================================
   Temas del examen: preguntas cortas · aplicaciones de la recta · magnitudes
   e inecuaciones con radicales · parábola
   ====================================================================== */

{
  tema: "Inecuaciones racionales y con radicales",
  fuente: "PC4 2026-1",
  examen: "PC4",
  ciclo: "2026-1",
  enunciado: "El conjunto solución de $\\dfrac{(x+3)(x-5)}{x-1} \\leq 0$ es:",
  opciones: [
    "$\\left]-\\infty, -3\\right] \\cup \\left]1, 5\\right]$",
    "$\\left[-3, 1\\right[ \\cup \\left[5, +\\infty\\right[$",
    "$\\left]-\\infty, -3\\right] \\cup \\left[1, 5\\right]$",
    "$\\left[-3, 5\\right]$"
  ],
  correcta: 0,
  solucion: "Puntos críticos: $-3$, $1$ y $5$. Con el diagrama de signos (el factor de mayor grado es positivo, así que a la derecha de $5$ la expresión es $+$ y va alternando):<br><br>$+\\!-\\!+\\!-$ de derecha a izquierda da negativo en $\\left]-\\infty,-3\\right[$ y en $\\left]1,5\\right[$.<br><br>Se incluyen $-3$ y $5$ porque anulan el numerador, pero <b>no</b> el $1$: ahí el denominador se hace cero y la expresión no existe.",
  ojo: "La regla es simple pero se olvida bajo presión: las raíces del numerador entran con corchete, las del denominador siempre salen con paréntesis."
},
{
  tema: "Inecuaciones racionales y con radicales",
  fuente: "PC4 2026-1",
  examen: "PC4",
  ciclo: "2026-1",
  enunciado: "El conjunto solución de $\\dfrac{(x+3)^{2}(x-5)}{x-1} \\leq 0$ es:",
  opciones: [
    "$\\left]-\\infty, -3\\right] \\cup \\left]1, 5\\right]$",
    "$\\left]1, 5\\right]$",
    "$\\{-3\\} \\cup \\left]1, 5\\right]$",
    "$\\left[-3, 5\\right]$"
  ],
  correcta: 2,
  solucion: "El exponente par cambia todo: $(x+3)^{2} \\geq 0$ siempre, así que ese factor <b>no</b> altera el signo. El signo lo deciden solo $x-5$ y $x-1$, que dan negativo en $\\left]1,5\\right[$.<br><br>Aparte, $x = -3$ anula el numerador, así que satisface el $\\leq$ y hay que agregarlo suelto:<br>$\\text{C.S.} = \\{-3\\} \\cup \\left]1, 5\\right]$.",
  ojo: "Comparar esta pregunta con la anterior es el punto del ejercicio: elevar un factor al cuadrado convierte todo un intervalo en un solo punto aislado. Un factor con exponente par nunca aporta cambio de signo, pero sí aporta su raíz al conjunto solución cuando la desigualdad no es estricta."
},
{
  tema: "La recta",
  fuente: "PC4 2026-1",
  examen: "PC4",
  ciclo: "2026-1",
  enunciado: "La recta $L_{1}: 3x + 5y - 3 = 0$ es paralela a $L_{2}: (2a-1)x + 5y + 1 = 0$, y $L_{3}: (3b+2)x - 3y + 4 = 0$ es perpendicular a $L_{1}$. Entonces:",
  opciones: [
    "$a = 2$ y $b = 1$",
    "$a = 1$ y $b = 2$",
    "$a = 2$ y $b = -1$",
    "$a = -2$ y $b = 1$"
  ],
  correcta: 0,
  solucion: "La pendiente de $L_{1}$ es $-\\dfrac{3}{5}$.<br><br>• <b>Paralela</b>: $-\\dfrac{2a-1}{5} = -\\dfrac{3}{5} \\Rightarrow 2a-1 = 3 \\Rightarrow a = 2$.<br>• <b>Perpendicular</b>: la pendiente de $L_{3}$ es $\\dfrac{3b+2}{3}$ y debe valer $\\dfrac{5}{3}$ (la inversa con signo cambiado de $-\\tfrac{3}{5}$). Entonces $3b+2 = 5 \\Rightarrow b = 1$.",
  ojo: "En la forma $Ax+By+C=0$ la pendiente es $-A/B$, con el signo menos incluido. Perpendicular no es «cambiar de signo»: es <b>invertir y</b> cambiar de signo, $m_{1}m_{2} = -1$."
},
{
  tema: "Magnitudes proporcionales",
  fuente: "PC4 2026-1",
  examen: "PC4",
  ciclo: "2026-1",
  enunciado: "Las magnitudes $M$ y $N$ cumplen $M^{2}\\;\\text{DP}\\;N$ (es decir, $M^{2}$ es directamente proporcional a $N$). Si a $N = 9$ le corresponde $M = 6$, ¿qué valor de $M$ corresponde a $N = 25$?",
  opciones: ["$M = 15$", "$M = \\dfrac{50}{3}$", "$M = 10$", "$M = 100$"],
  correcta: 2,
  solucion: "«DP» significa cociente constante: $\\dfrac{M^{2}}{N} = k$. Con el primer par, $k = \\dfrac{36}{9} = 4$.<br><br>Entonces $\\dfrac{M^{2}}{25} = 4 \\Rightarrow M^{2} = 100 \\Rightarrow M = 10$.",
  ojo: "Lo proporcional es $M^{2}$, no $M$. Quien arma la regla de tres directamente con $M$ obtiene $M = \\tfrac{6 \\cdot 25}{9}$, que es la alternativa $\\tfrac{50}{3}$: la trampa está puesta ahí."
},
{
  tema: "Geometría analítica",
  fuente: "PC4 2026-1",
  examen: "PC4",
  ciclo: "2026-1",
  enunciado: "Considere: $\\forall P,Q \\in \\mathbb{R}^{2}$, si $P$ está en el II cuadrante y $Q$ en el III, entonces la razón de cambio (pendiente) $r.c(P,Q)$ es positiva. ¿Qué par de puntos muestra que <b>es falsa</b>?",
  opciones: [
    "$P = (-5,5)$ y $Q = (-3,-1)$",
    "$P = (-1,4)$ y $Q = (-6,-2)$",
    "$P = (2,3)$ y $Q = (-4,-5)$",
    "$P = (-2,1)$ y $Q = (-2,-7)$"
  ],
  correcta: 0,
  solucion: "Con $P = (-5,5)$ (II cuadrante: $x<0$, $y>0$) y $Q = (-3,-1)$ (III cuadrante: $x<0$, $y<0$):<br>$r.c = \\dfrac{-1-5}{-3-(-5)} = \\dfrac{-6}{2} = -3 < 0$. Cumple las hipótesis y falla la conclusión: es contraejemplo.",
  ojo: "Un contraejemplo tiene que cumplir <b>todo</b> el antecedente. La segunda opción da pendiente positiva (no sirve), en la tercera $P$ está en el I cuadrante y en la cuarta la pendiente ni siquiera existe porque los puntos comparten abscisa."
},
{
  tema: "Geometría analítica",
  fuente: "PC4 2026-1",
  examen: "PC4",
  ciclo: "2026-1",
  enunciado: "Considere: $\\forall M,P,Q \\in \\mathbb{R}^{2}$, si $d(P,M) = d(M,Q)$ entonces $M = \\dfrac{P+Q}{2}$. ¿Qué terna muestra que <b>es falsa</b>?",
  opciones: [
    "$P = (0,0),\\; M = (1,0),\\; Q = (2,0)$",
    "$P = (-4,0),\\; M = (0,3),\\; Q = (4,0)$",
    "$P = (1,1),\\; M = (2,2),\\; Q = (3,3)$",
    "$P = (0,0),\\; M = (0,5),\\; Q = (0,10)$"
  ],
  correcta: 1,
  solucion: "Con $P = (-4,0)$, $M = (0,3)$ y $Q = (4,0)$:<br>$d(P,M) = \\sqrt{16+9} = 5$ y $d(M,Q) = \\sqrt{16+9} = 5$, así que $M$ es equidistante.<br><br>Pero el punto medio de $P$ y $Q$ es $\\dfrac{P+Q}{2} = (0,0)$, que no es $M$. La implicación falla.",
  ojo: "Equidistante y punto medio solo coinciden si $M$ está <b>sobre</b> el segmento. Los puntos equidistantes de $P$ y $Q$ forman toda la mediatriz; el punto medio es uno solo de ellos. En las otras tres alternativas $M$ sí es el punto medio, así que no sirven como contraejemplo."
},
{
  tema: "La recta",
  fuente: "PC4 2026-1",
  examen: "PC4",
  ciclo: "2026-1",
  enunciado: "En un mercado con oferta y demanda lineales, el equilibrio es $q = 48$ unidades y $p = 24$ soles. El precio máximo del consumidor (el precio cuando la cantidad demandada es cero) es el doble del precio mínimo del productor (el precio cuando la cantidad ofrecida es cero), y la diferencia entre el excedente del consumidor y el del productor es 144 soles. ¿Cuáles son esos dos precios?",
  opciones: [
    "Máximo del consumidor 48 y mínimo del productor 24",
    "Máximo del consumidor 30 y mínimo del productor 15",
    "Máximo del consumidor 36 y mínimo del productor 18",
    "Máximo del consumidor 27 y mínimo del productor 13.5"
  ],
  correcta: 2,
  solucion: "Sean $b_{1}$ el intercepto de la oferta (precio mínimo del productor) y $b_{2}$ el de la demanda (precio máximo del consumidor). Los excedentes son los dos triángulos de base 48:<br>$EC = \\dfrac{(b_{2}-24)\\cdot 48}{2} = 24(b_{2}-24)$ y $EP = \\dfrac{(24-b_{1})\\cdot 48}{2} = 24(24-b_{1})$.<br><br>De $EC - EP = 144$: $\\;24b_{2} - 576 - 576 + 24b_{1} = 144 \\Rightarrow b_{1} + b_{2} = 54$.<br><br>Con $b_{2} = 2b_{1}$: $3b_{1} = 54 \\Rightarrow b_{1} = 18$ y $b_{2} = 36$.",
  ojo: "Los dos excedentes son triángulos con la <b>misma</b> base horizontal (la cantidad de equilibrio, 48) y alturas distintas medidas desde el precio de equilibrio. Reconocer eso reduce el problema a un sistema de dos ecuaciones."
},
{
  tema: "La recta",
  fuente: "PC4 2026-1",
  examen: "PC4",
  ciclo: "2026-1",
  enunciado: "Con equilibrio en $(q,p) = (48,24)$, intercepto de la oferta $18$ e intercepto de la demanda $36$, las ecuaciones son:",
  opciones: [
    "$O:\\, p = \\dfrac{1}{8}q + 18\\;$ y $\\;D:\\, p = -\\dfrac{1}{4}q + 36$",
    "$O:\\, p = \\dfrac{1}{4}q + 18\\;$ y $\\;D:\\, p = -\\dfrac{1}{8}q + 36$",
    "$O:\\, p = 8q + 18\\;$ y $\\;D:\\, p = -4q + 36$",
    "$O:\\, p = \\dfrac{1}{8}q + 36\\;$ y $\\;D:\\, p = -\\dfrac{1}{4}q + 18$"
  ],
  correcta: 0,
  solucion: "Cada recta pasa por su intercepto y por el equilibrio, así que la pendiente sale de dos puntos:<br>• Oferta: $m_{o} = \\dfrac{24-18}{48-0} = \\dfrac{6}{48} = \\dfrac{1}{8}$.<br>• Demanda: $m_{d} = \\dfrac{24-36}{48-0} = \\dfrac{-12}{48} = -\\dfrac{1}{4}$.",
  ojo: "Control de sentido económico antes de responder: la oferta sube con la cantidad (pendiente positiva) y la demanda baja (pendiente negativa). La alternativa que intercambia los interceptos rompe esa lógica."
},
{
  tema: "Magnitudes proporcionales",
  fuente: "PC4 2026-1",
  examen: "PC4",
  ciclo: "2026-1",
  enunciado: "Las ganancias mensuales $G$ de un negocio son directamente proporcionales al cuadrado del capital $C$ e inversamente proporcionales al riesgo $R$. Un mes las ganancias fueron S/ 8000. Al mes siguiente el capital se <b>triplica</b> y el riesgo se <b>cuadruplica</b>. ¿Cuáles son las nuevas ganancias?",
  opciones: ["S/ 6000", "S/ 24 000", "S/ 54 000", "S/ 18 000"],
  correcta: 3,
  solucion: "La relación es $\\dfrac{G\\,R}{C^{2}} = k$, constante. Entonces:<br>$\\dfrac{8000 \\cdot R}{C^{2}} = \\dfrac{G_{2} \\cdot 4R}{(3C)^{2}} = \\dfrac{G_{2}\\cdot 4R}{9C^{2}}$.<br><br>Simplificando $R$ y $C^{2}$: $8000 = \\dfrac{4G_{2}}{9} \\Rightarrow G_{2} = 18\\,000$.",
  ojo: "El capital entra <b>al cuadrado</b>: triplicarlo multiplica por $9$, no por $3$. El factor total es $9/4 = 2.25$. Quien usa solo $3$ obtiene S/ 6000."
},
{
  tema: "Inecuaciones racionales y con radicales",
  fuente: "PC4 2026-1",
  examen: "PC4",
  ciclo: "2026-1",
  enunciado: "El conjunto solución de $\\sqrt{x^{2}-5x+4} < \\sqrt{x^{2}-7x+6}$ es:",
  opciones: [
    "$\\left]-\\infty, 1\\right[$",
    "$\\left]-\\infty, 1\\right] \\cup \\left[4, +\\infty\\right[$",
    "$\\left]-\\infty, 1\\right[ \\cup \\left]4, +\\infty\\right[$",
    "$\\emptyset$"
  ],
  correcta: 0,
  solucion: "Hay que pedir dos cosas a la vez. Primero que el radicando <b>menor</b> exista: $x^{2}-5x+4 \\geq 0$, es decir $(x-1)(x-4) \\geq 0$, o sea $x \\in \\left]-\\infty,1\\right] \\cup \\left[4,+\\infty\\right[$. (El otro radicando es mayor, así que existe automáticamente.)<br><br>Segundo, elevando al cuadrado: $x^{2}-5x+4 < x^{2}-7x+6 \\Longleftrightarrow 2x < 2 \\Longleftrightarrow x < 1$.<br><br>Intersectando: $\\text{C.S.} = \\left]-\\infty, 1\\right[$.",
  ojo: "Con radicales, la condición de existencia no es un trámite: aquí es la que elimina toda la rama $[4,+\\infty[$. Y el $1$ queda fuera porque la desigualdad es estricta, aunque el radicando sí exista ahí."
},
{
  tema: "Parábola y circunferencia",
  fuente: "PC4 2026-1",
  examen: "PC4",
  ciclo: "2026-1",
  enunciado: "Sea la parábola $\\mathcal{P}: y = x^{2}+2$ y la circunferencia $\\mathcal{C}$ con centro en el vértice de $\\mathcal{P}$ y radio $r>0$. La ordenada de los puntos de intersección, en términos de $r$, es:",
  opciones: [
    "$y = \\dfrac{3 - \\sqrt{1+4r^{2}}}{2}$",
    "$y = \\dfrac{3 + \\sqrt{1+4r^{2}}}{2}$",
    "$y = \\dfrac{3 \\pm \\sqrt{9-4r^{2}}}{2}$",
    "$y = 2 + r$"
  ],
  correcta: 1,
  solucion: "El vértice es $V = (0,2)$, así que $\\mathcal{C}: x^{2} + (y-2)^{2} = r^{2}$. De la parábola, $x^{2} = y-2$, y reemplazando:<br>$(y-2) + (y-2)^{2} = r^{2} \\Longleftrightarrow y^{2} - 3y + 2 - r^{2} = 0$,<br>de donde $y = \\dfrac{3 \\pm \\sqrt{1+4r^{2}}}{2}$.<br><br>Se descarta la raíz con signo $-$: como $x^{2} = y-2 \\geq 0$, hace falta $y \\geq 2$, y solo la raíz con $+$ lo cumple.",
  ojo: "La ecuación cuadrática da dos valores, pero el problema geométrico solo admite uno. Descartar la solución que no cumple la restricción $y \\geq 2$ es parte del ejercicio, no un detalle."
},
{
  tema: "Parábola y circunferencia",
  fuente: "PC4 2026-1",
  examen: "PC4",
  ciclo: "2026-1",
  enunciado: "Para $\\mathcal{P}: y = x^{2}+2$ y $\\mathcal{C}$ con centro en el vértice y radio $r = \\sqrt{2}$, los puntos de intersección son:",
  opciones: [
    "$(-1,3)$ y $(1,3)$",
    "$(0,2)$ y $(0,4)$",
    "$(-\\sqrt{2},4)$ y $(\\sqrt{2},4)$",
    "No se cortan"
  ],
  correcta: 0,
  solucion: "Con $r = \\sqrt{2}$: $\\;y = \\dfrac{3+\\sqrt{1+4(2)}}{2} = \\dfrac{3+3}{2} = 3$.<br><br>Reemplazando en la parábola: $3 = x^{2}+2 \\Rightarrow x^{2} = 1 \\Rightarrow x = \\pm 1$. Los puntos son $(-1,3)$ y $(1,3)$.",
  ojo: "La circunferencia tiene radio $\\sqrt{2}$ y centro $(0,2)$: la distancia de $(0,2)$ a $(1,3)$ es $\\sqrt{1+1} = \\sqrt{2}$. Verificar así, con la fórmula de distancia, toma diez segundos y confirma la respuesta."
},

/* ========================  EXAMEN PARCIAL  ==============================
   Temas del examen: preguntas cortas · racionalización · ecuaciones y valor
   absoluto · división de polinomios
   ====================================================================== */

{
  tema: "Valor absoluto",
  fuente: "Examen parcial 2026-1",
  examen: "Examen parcial",
  ciclo: "2026-1",
  enunciado: "El conjunto solución de la ecuación $|x| = 2 - x$ es:",
  opciones: ["$\\{-1, 1\\}$", "$\\{2\\}$", "$\\{1\\}$", "$\\{1, -2\\}$"],
  correcta: 2,
  solucion: "La propiedad dice $|x| = a \\iff (x = a \\;\\vee\\; x = -a)$, pero <b>solo si</b> $a \\geq 0$. Aquí $a = 2-x$, así que hay que verificar cada candidato.<br><br>• $x = 2-x \\Rightarrow x = 1$. Comprobación: $|1| = 1$ y $2-1 = 1$. ✓<br>• $x = -(2-x) \\Rightarrow x = x-2 \\Rightarrow 0 = -2$, imposible.<br><br>Por lo tanto $\\text{C.S.} = \\{1\\}$.",
  ojo: "Cuando el lado derecho tiene la incógnita, las soluciones se <b>verifican</b> siempre. Aplicar la propiedad mecánicamente y quedarse con las dos ramas produce respuestas de más."
},
{
  tema: "Productos notables",
  fuente: "Examen parcial 2026-1",
  examen: "Examen parcial",
  ciclo: "2026-1",
  enunciado: "Para el polinomio $P(x) = (2x+3)^{3} - 8x^{3} + 1$, el coeficiente principal (C.P.) y el término independiente (T.I.) son:",
  opciones: [
    "C.P. $= 8$ y T.I. $= 27$",
    "C.P. $= 36$ y T.I. $= 28$",
    "C.P. $= 36$ y T.I. $= 27$",
    "C.P. $= 54$ y T.I. $= 28$"
  ],
  correcta: 1,
  solucion: "Desarrollando el cubo: $(2x+3)^{3} = 8x^{3} + 36x^{2} + 54x + 27$. Entonces<br>$P(x) = 8x^{3} + 36x^{2} + 54x + 27 - 8x^{3} + 1 = 36x^{2} + 54x + 28$.<br><br>El $8x^{3}$ se cancela, así que el grado <b>baja a 2</b>: C.P. $= 36$ y T.I. $= 28$.",
  ojo: "Responder C.P. $= 8$ es asumir que el grado es 3 sin desarrollar. Y el T.I. es $27+1 = 28$: el $+1$ del final también cuenta. Atajo para el T.I.: es $P(0) = 27 - 0 + 1$."
},
{
  tema: "División de polinomios",
  fuente: "Examen parcial 2026-1",
  examen: "Examen parcial",
  ciclo: "2026-1",
  enunciado: "Al dividir $D(x)$ entre $d(x) = x-3$ se obtiene cociente $q(x) = 3x-1$ y residuo $r(x) = 1$. Entonces $D(4)$ y la suma de coeficientes de $D$ son:",
  opciones: [
    "$D(4) = 11$ y suma $= -3$",
    "$D(4) = 12$ y suma $= 12$",
    "$D(4) = 12$ y suma $= -3$",
    "$D(4) = 13$ y suma $= -2$"
  ],
  correcta: 2,
  solucion: "El algoritmo de la división da $D(x) = (x-3)(3x-1) + 1$. No hace falta desarrollarlo:<br>• $D(4) = (1)(11) + 1 = 12$.<br>• La suma de coeficientes de cualquier polinomio es su valor en $1$: $D(1) = (-2)(2)+1 = -3$.",
  ojo: "«Suma de coeficientes» $= P(1)$ es de los trucos que más tiempo ahorran en un examen. Evaluar directo en la identidad, sin expandir $D(x) = 3x^{2}-10x+4$, evita errores de signo."
},
{
  tema: "División de polinomios",
  fuente: "Examen parcial 2026-1",
  examen: "Examen parcial",
  ciclo: "2026-1",
  enunciado: "¿Cuál es el cociente de dividir $x^{4}+x^{3}+1$ entre $x+1$?",
  opciones: ["$x^{3}-1$", "$x^{3}+1$", "$x^{3}$", "$x^{3}+x^{2}$"],
  correcta: 2,
  solucion: "Se factoriza directo: $x^{4}+x^{3}+1 = x^{3}(x+1) + 1$.<br><br>Ese es exactamente el algoritmo de la división: cociente $q(x) = x^{3}$ y residuo $1$.",
  ojo: "Verificación en un paso, sin dividir: por el teorema del resto, el residuo es $P(-1) = 1-1+1 = 1$. Si alguien propone $x^{3}-1$ como cociente, $(x+1)(x^{3}-1)+1 = x^{4}+x^{3}-x$, que no es el polinomio original."
},
{
  tema: "Productos notables",
  fuente: "Examen parcial 2026-1",
  examen: "Examen parcial",
  ciclo: "2026-1",
  enunciado: "¿Cuál es un contraejemplo de $\\forall x,y \\in \\mathbb{R},\\; (x+y)^{4} = x^{4}+y^{4}$?",
  opciones: [
    "$x = 1,\\; y = 1$",
    "$x = 0,\\; y = 5$",
    "$x = 2,\\; y = 0$",
    "$x = -1,\\; y = 0$"
  ],
  correcta: 0,
  solucion: "Con $x = y = 1$: $(1+1)^{4} = 2^{4} = 16$, mientras que $1^{4}+1^{4} = 2$. Como $16 \\neq 2$, la igualdad es falsa.",
  ojo: "Las otras tres opciones tienen una variable igual a $0$, y ahí la igualdad <b>sí</b> se cumple: $(x+0)^{4} = x^{4}+0^{4}$. Al buscar un contraejemplo conviene huir de los valores especiales ($0$, y también $y = -x$, donde el lado izquierdo se anula) y probar primero con $x = y = 1$."
},
{
  tema: "Racionalización",
  fuente: "Examen parcial 2026-1",
  examen: "Examen parcial",
  ciclo: "2026-1",
  enunciado: "Sea $n \\in \\mathbb{N}$. Al racionalizar, $\\dfrac{1}{\\sqrt{n}+\\sqrt{n+1}} = \\sqrt{a} - \\sqrt{b}$ con $a,b \\in \\mathbb{N}$. Entonces:",
  opciones: [
    "$a = n$ y $b = n+1$",
    "$a = n+1$ y $b = n$",
    "$a = 1$ y $b = n$",
    "$a = n^{2}$ y $b = (n+1)^{2}$"
  ],
  correcta: 1,
  solucion: "Multiplicando por la conjugada:<br>$\\dfrac{1}{\\sqrt{n}+\\sqrt{n+1}} \\cdot \\dfrac{\\sqrt{n}-\\sqrt{n+1}}{\\sqrt{n}-\\sqrt{n+1}} = \\dfrac{\\sqrt{n}-\\sqrt{n+1}}{n - (n+1)} = \\dfrac{\\sqrt{n}-\\sqrt{n+1}}{-1} = \\sqrt{n+1}-\\sqrt{n}$.<br><br>Así que $a = n+1$ y $b = n$.",
  ojo: "El denominador queda $-1$, y ese signo <b>invierte</b> el orden de los radicales. Quien se salta ese paso responde $a=n$, $b=n+1$, que además daría un resultado negativo: imposible, porque la fracción original es positiva."
},
{
  tema: "Logaritmos y exponentes",
  fuente: "Examen parcial 2026-1",
  examen: "Examen parcial",
  ciclo: "2026-1",
  enunciado: "Sean $a,b \\in \\mathbb{R}^{+}$ tales que $\\left(\\dfrac{a}{b}\\right)^{n} + 4\\left(\\dfrac{b}{a}\\right)^{n} = 725$. El valor reducido de $E = \\sqrt[3]{\\dfrac{a^{n}+2b^{n}}{\\sqrt{a^{n}b^{n}}}}$ es:",
  opciones: ["$27$", "$9$", "$3$", "$\\sqrt[3]{725}$"],
  correcta: 2,
  solucion: "Del dato, poniendo denominador común: $\\dfrac{a^{2n}+4b^{2n}}{a^{n}b^{n}} = 725$, es decir $a^{2n}+4b^{2n} = 725\\,a^{n}b^{n}$.<br><br>El truco es <b>completar el binomio</b>: $(a^{n}+2b^{n})^{2} = a^{2n} + 4a^{n}b^{n} + 4b^{2n} = 725\\,a^{n}b^{n} + 4\\,a^{n}b^{n} = 729\\,a^{n}b^{n}$.<br><br>Como $a,b > 0$, se toma la raíz positiva: $a^{n}+2b^{n} = 27\\sqrt{a^{n}b^{n}}$. Reemplazando,<br>$E = \\sqrt[3]{\\dfrac{27\\sqrt{a^{n}b^{n}}}{\\sqrt{a^{n}b^{n}}}} = \\sqrt[3]{27} = 3$.",
  ojo: "El $725$ del dato y el $729$ del cuadrado se diferencian justo en el doble producto $4a^{n}b^{n}$. Ver que $729 = 27^{2}$ es lo que abre el ejercicio; sin eso no hay por dónde entrar."
},
{
  tema: "Valor absoluto",
  fuente: "Examen parcial 2026-1",
  examen: "Examen parcial",
  ciclo: "2026-1",
  enunciado: "Una empresa modela su beneficio mensual por $B(x) = |x^{2}-6x+8| - 3$, con $x \\geq 0$ el precio de venta. El conjunto solución de $B(x) = 0$ es:",
  opciones: ["$\\{2, 4\\}$", "$\\{1, 5\\}$", "$\\{1, 2, 4, 5\\}$", "$\\{3\\}$"],
  correcta: 1,
  solucion: "$|x^{2}-6x+8| = 3$ se abre en dos casos:<br>• $x^{2}-6x+8 = 3 \\Rightarrow x^{2}-6x+5 = 0 \\Rightarrow (x-1)(x-5) = 0 \\Rightarrow x = 1$ o $x = 5$.<br>• $x^{2}-6x+8 = -3 \\Rightarrow x^{2}-6x+11 = 0$, con discriminante $36-44 = -8 < 0$: sin soluciones reales.<br><br>Por lo tanto $\\text{C.S.} = \\{1, 5\\}$.",
  ojo: "Hay que abrir las dos ramas aunque una termine descartada: mostrar que el discriminante es negativo es parte de la respuesta. Y $\\{2,4\\}$ son las raíces de $x^{2}-6x+8$, o sea la respuesta a $B(x) = -3$, no a $B(x) = 0$."
},
{
  tema: "Valor absoluto",
  fuente: "Examen parcial 2026-1",
  examen: "Examen parcial",
  ciclo: "2026-1",
  enunciado: "Con $B(x) = |x^{2}-6x+8|-3$ y el precio restringido a $x \\in [5,8]$, el beneficio máximo y el precio donde se alcanza son:",
  opciones: [
    "Máximo $24$ en $x = 8$",
    "Máximo $3$ en $x = 5$",
    "Máximo $21$ en $x = 5$",
    "Máximo $21$ en $x = 8$"
  ],
  correcta: 3,
  solucion: "Completando cuadrados: $B(x) = |(x-3)^{2}-1| - 3$. Se acota paso a paso:<br>$5 \\leq x \\leq 8 \\Rightarrow 2 \\leq x-3 \\leq 5 \\Rightarrow 4 \\leq (x-3)^{2} \\leq 25 \\Rightarrow 3 \\leq (x-3)^{2}-1 \\leq 24$.<br><br>Como esa cantidad ya es positiva, el valor absoluto no hace nada, y restando $3$: $\\;0 \\leq B(x) \\leq 21$.<br><br>El máximo es $21$ y se alcanza en $x = 8$.",
  ojo: "Elevar al cuadrado conserva el orden solo porque en este intervalo $x-3$ es positivo. Y el $-3$ del final va restado al resultado: quedarse en $24$ es olvidar ese último paso."
},
{
  tema: "División de polinomios",
  fuente: "Examen parcial 2026-1",
  examen: "Examen parcial",
  ciclo: "2026-1",
  enunciado: "Sean $D(x) = 2(x+1)^{4} - 10(x+1)^{2} + 1$ y $d(x) = x^{2}+2x-3$. ¿Cuál es el resto de dividir $D$ entre $d$?",
  opciones: ["$r(x) = -7$", "$r(x) = 0$", "$r(x) = -7x$", "$r(x) = x-7$"],
  correcta: 0,
  solucion: "Se factoriza $d(x) = (x+3)(x-1)$. El resto tiene grado menor que 2, así que $r(x) = ax+b$ y<br>$D(x) = (x+3)(x-1)q(x) + ax + b$.<br><br>• $x = -3$: $\\;D(-3) = 2(16)-10(4)+1 = -7 = -3a+b$.<br>• $x = 1$: $\\;D(1) = 2(16)-10(4)+1 = -7 = a+b$.<br><br>Restando: $-4a = 0 \\Rightarrow a = 0$, y $b = -7$. El resto es la constante $-7$.",
  ojo: "Que el divisor tenga grado 2 no obliga a que el resto tenga grado 1: puede salir constante, como aquí. Evaluar en las raíces del divisor evita hacer la división larga con un polinomio de grado 4."
},
{
  tema: "División de polinomios",
  fuente: "Examen parcial 2026-1",
  examen: "Examen parcial",
  ciclo: "2026-1",
  enunciado: "Si la división de $D(x) = -ax^{5}+bx^{4}+(c-1)x^{3}-x^{2}+4$ entre $d(x) = -4x^{3}+2x^{2}-3x+2$ tiene resto nulo, ¿cuánto vale $\\dfrac{a-b}{c-1}$?",
  opciones: ["$-2$", "$2$", "$-\\dfrac{1}{2}$", "$0$"],
  correcta: 0,
  solucion: "Con el esquema de Horner (completando $D$ con $0x$) y llamando $p,q,r$ a los coeficientes del cociente, el resto nulo obliga a que las tres últimas columnas den cero:<br>• $0 = 4-2r \\Rightarrow r = 2$.<br>• $0 = -2q+3r \\Rightarrow q = 3$.<br>• $0 = -1-2p+3q-2r \\Rightarrow p = 2$.<br><br>Y de las tres primeras columnas: $a = 8$, $b = -8$, $c = -7$.<br><br>Entonces $\\dfrac{a-b}{c-1} = \\dfrac{8-(-8)}{-7-1} = \\dfrac{16}{-8} = -2$.",
  ojo: "Dos detalles hunden este ejercicio: hay que <b>completar</b> el término $0x$ que falta, y el divisor tiene coeficiente principal $-4$, así que en Horner se divide entre $-4$ en cada columna. Es de los más largos del parcial: en un examen conviene dejarlo para el final."
},

/* =========================  EXAMEN FINAL  ===============================
   Temas del examen: preguntas cortas · geometría analítica · interés simple
   y compuesto · progresiones
   ====================================================================== */

{
  tema: "Progresiones",
  fuente: "Examen final 2026-1",
  examen: "Examen final",
  ciclo: "2026-1",
  enunciado: "Sea la sucesión $(a_{n})_{n \\in \\mathbb{N}}$ con $a_{n} = \\dfrac{1}{n} - \\dfrac{1}{n+1}$. Entonces $a_{1}$ y $a_{1}+a_{2}$ valen:",
  opciones: [
    "$a_{1} = \\dfrac{1}{2}\\;$ y $\\;a_{1}+a_{2} = \\dfrac{2}{3}$",
    "$a_{1} = \\dfrac{1}{2}\\;$ y $\\;a_{1}+a_{2} = \\dfrac{5}{6}$",
    "$a_{1} = 1\\;$ y $\\;a_{1}+a_{2} = \\dfrac{3}{2}$",
    "$a_{1} = \\dfrac{1}{2}\\;$ y $\\;a_{1}+a_{2} = \\dfrac{1}{3}$"
  ],
  correcta: 0,
  solucion: "$a_{1} = \\dfrac{1}{1}-\\dfrac{1}{2} = \\dfrac{1}{2}$ y $a_{2} = \\dfrac{1}{2}-\\dfrac{1}{3} = \\dfrac{1}{6}$, así que $a_{1}+a_{2} = \\dfrac{1}{2}+\\dfrac{1}{6} = \\dfrac{2}{3}$.<br><br>Es una suma <b>telescópica</b>: los términos intermedios se cancelan y $a_{1}+\\cdots+a_{n} = 1 - \\dfrac{1}{n+1}$. Con $n = 2$: $1 - \\dfrac{1}{3} = \\dfrac{2}{3}$.",
  ojo: "Ver el telescopio ahorra todo el cálculo y es lo que se necesita si la pregunta pide $a_{1}+\\cdots+a_{100}$."
},
{
  tema: "Sistemas de ecuaciones lineales",
  fuente: "Examen final 2026-1",
  examen: "Examen final",
  ciclo: "2026-1",
  enunciado: "La solución del sistema $\\begin{cases} 2x+5y = 1 \\\\ 3x+2y = 4 \\end{cases}$ es:",
  opciones: [
    "$x = \\dfrac{18}{11},\\; y = \\dfrac{5}{11}$",
    "$x = -\\dfrac{5}{11},\\; y = \\dfrac{18}{11}$",
    "$x = \\dfrac{18}{11},\\; y = -\\dfrac{5}{11}$",
    "$x = 2,\\; y = -1$"
  ],
  correcta: 2,
  solucion: "Multiplicando la primera por $2$ y la segunda por $-5$: $4x+10y = 2$ y $-15x-10y = -20$. Sumando, $-11x = -18 \\Rightarrow x = \\dfrac{18}{11}$.<br><br>Reemplazando: $5y = 1 - \\dfrac{36}{11} = -\\dfrac{25}{11} \\Rightarrow y = -\\dfrac{5}{11}$.",
  ojo: "Comprobación rápida: $2\\left(\\tfrac{18}{11}\\right)+5\\left(-\\tfrac{5}{11}\\right) = \\tfrac{36-25}{11} = 1$. ✓ Vale la pena, porque con fracciones el signo de $y$ se pierde con facilidad."
},
{
  tema: "Inecuaciones cuadráticas",
  fuente: "Examen final 2026-1",
  examen: "Examen final",
  ciclo: "2026-1",
  enunciado: "Los conjuntos solución de $x-3 \\leq 0$ y de $x^{2}-5x+6 \\leq 0$ son, respectivamente:",
  opciones: [
    "$\\left]-\\infty,3\\right]$ y $\\left]-\\infty,2\\right] \\cup \\left[3,+\\infty\\right[$",
    "$\\left[3,+\\infty\\right[$ y $[2,3]$",
    "$\\left]-\\infty,3\\right]$ y $[2,3]$",
    "$\\left]-\\infty,3\\right]$ y $[-3,-2]$"
  ],
  correcta: 2,
  solucion: "La primera es directa: $x \\leq 3$, o sea $\\left]-\\infty,3\\right]$.<br><br>La segunda factoriza como $(x-2)(x-3) \\leq 0$. La parábola abre hacia arriba, así que es negativa <b>entre</b> las raíces: $[2,3]$.",
  ojo: "El signo de las raíces sale de la factorización, no del signo que aparece en la ecuación: $x^{2}-5x+6$ tiene raíces $+2$ y $+3$, no $-2$ y $-3$."
},
{
  tema: "Parábola y circunferencia",
  fuente: "Examen final 2026-1",
  examen: "Examen final",
  ciclo: "2026-1",
  enunciado: "¿Qué valor de $b$ muestra que es <b>falsa</b> la proposición «para todo $b \\in \\mathbb{R}$, la parábola $y = -x^{2}+b$ corta al eje $x$ en dos puntos»?",
  opciones: ["$b = 1$", "$b = 4$", "$b = 0$", "Ninguno: la proposición es verdadera"],
  correcta: 2,
  solucion: "Con $b = 0$ queda $y = -x^{2}$, que se anula únicamente en $x = 0$: corta al eje $x$ en <b>un</b> punto, no en dos.<br><br>(Cualquier $b < 0$ también sirve: ahí la parábola no corta al eje en ningún punto.)",
  ojo: "Con $b = 1$ o $b = 4$ sí hay dos cortes, así que no sirven. Para tumbar un «para todo» hay que ir a los casos frontera o a los que cambian el signo del discriminante."
},
{
  tema: "Inecuaciones cuadráticas",
  fuente: "Examen final 2026-1",
  examen: "Examen final",
  ciclo: "2026-1",
  enunciado: "¿Qué valor de $a$ muestra que es <b>falsa</b> la proposición «para todo $a \\in \\mathbb{R}$, la inecuación $x^{2}+ax+1 \\leq 0$ tiene infinitas soluciones»?",
  opciones: ["$a = 3$", "$a = 0$", "$a = -5$", "$a = -3$"],
  correcta: 1,
  solucion: "Con $a = 0$ la inecuación es $x^{2}+1 \\leq 0$, y $x^{2}+1 \\geq 1 > 0$ para todo $x$: no tiene <b>ninguna</b> solución.<br><br>El criterio general es el discriminante $a^{2}-4$: la inecuación tiene soluciones solo si $|a| \\geq 2$. Con $a = 0$ el discriminante es $-4 < 0$, y la parábola queda entera por encima del eje.",
  ojo: "Los otros tres valores cumplen $|a| \\geq 2$, así que ahí sí hay todo un intervalo de soluciones y no sirven como contraejemplo. Ojo con el caso frontera $a = 2$: da $(x+1)^{2} \\leq 0$, con <b>una</b> sola solución, así que también tumbaría el «infinitas»; $a = 0$ es más limpio de justificar."
},
{
  tema: "Parábola y circunferencia",
  fuente: "Examen final 2026-1",
  examen: "Examen final",
  ciclo: "2026-1",
  enunciado: "Un jardín parabólico tiene vértice $(0,3)$ y pasa por el punto $(5,-2)$. Su ecuación es:",
  opciones: [
    "$y = -\\dfrac{1}{5}x^{2}+3$",
    "$y = -5x^{2}+3$",
    "$y = \\dfrac{1}{5}x^{2}+3$",
    "$y = -\\dfrac{1}{5}(x-3)^{2}$"
  ],
  correcta: 0,
  solucion: "Con vértice $(h,k) = (0,3)$, la forma canónica es $y = a(x-0)^{2}+3 = ax^{2}+3$.<br><br>Usando el punto $(5,-2)$: $-2 = 25a+3 \\Rightarrow 25a = -5 \\Rightarrow a = -\\dfrac{1}{5}$.<br><br>La ecuación es $y = -\\dfrac{1}{5}x^{2}+3$.",
  ojo: "$a$ negativo era previsible: el punto dado está <b>debajo</b> del vértice, así que la parábola abre hacia abajo. Y $a = -1/5$, no $-5$: el $25$ divide, no multiplica."
},
{
  tema: "Geometría analítica",
  fuente: "Examen final 2026-1",
  examen: "Examen final",
  ciclo: "2026-1",
  enunciado: "Un parque circular es $\\mathcal{C}: (x-3)^{2}+(y-3)^{2} = 25$. Un sendero recto pasa por el centro y es paralelo a la recta tangente a $\\mathcal{C}$ en el punto $(0,-1)$. La ecuación del sendero es:",
  opciones: [
    "$y-3 = \\dfrac{4}{3}(x-3)$",
    "$y-3 = -\\dfrac{3}{4}(x-3)$",
    "$y-3 = \\dfrac{3}{4}(x-3)$",
    "$y+1 = -\\dfrac{3}{4}x$"
  ],
  correcta: 1,
  solucion: "El centro es $(3,3)$ y el radio $5$; el punto $(0,-1)$ está en la circunferencia porque $9+16 = 25$.<br><br>El radio hacia el punto de tangencia tiene pendiente $m = \\dfrac{-1-3}{0-3} = \\dfrac{4}{3}$. La tangente es <b>perpendicular</b> al radio, así que su pendiente es $-\\dfrac{3}{4}$.<br><br>El sendero es paralelo a esa tangente y pasa por el centro: $y-3 = -\\dfrac{3}{4}(x-3)$.",
  ojo: "Dos giros seguidos: perpendicular al radio (invertir y cambiar signo), luego paralelo a la tangente (misma pendiente). La última alternativa tiene la pendiente correcta pero pasa por el punto de tangencia, no por el centro."
},
{
  tema: "Interés simple y compuesto",
  fuente: "Examen final 2026-1",
  examen: "Examen final",
  ciclo: "2026-1",
  enunciado: "Un emprendedor pide un préstamo de 10 000 soles con interés <b>simple</b> del 10.5 % anual durante 2 años. ¿Cuánto pagará al final?",
  opciones: ["S/ 12 210", "S/ 11 050", "S/ 12 100", "S/ 10 210"],
  correcta: 2,
  solucion: "Con interés simple el interés se calcula siempre sobre el capital inicial:<br>$I = C \\cdot r \\cdot t = 10\\,000 \\times 0.105 \\times 2 = 2\\,100$.<br><br>El monto es $M = C + I = 10\\,000 + 2\\,100 = 12\\,100$ soles.",
  ojo: "S/ 12 210 es lo que saldría con interés <b>compuesto</b> ($10\\,000(1.105)^{2}$). La diferencia entre las dos alternativas —110 soles— es exactamente el interés que el régimen compuesto cobra sobre los intereses del primer año."
},
{
  tema: "Interés simple y compuesto",
  fuente: "Examen final 2026-1",
  examen: "Examen final",
  ciclo: "2026-1",
  enunciado: "La opción A cuesta S/ 12 100 al cabo de 2 años (préstamo de 10 000). La opción B es interés compuesto del $r\\,\\%$ semestral capitalizable <b>anualmente</b>, durante 2 años. ¿Para qué valores de $r$ conviene más la opción B?",
  opciones: [
    "$r \\in \\left]-5, 5\\right[$",
    "$r \\in \\left[0, 5\\right[$",
    "$r \\in \\left[0, 10\\right[$",
    "$r \\in \\left]5, +\\infty\\right[$"
  ],
  correcta: 1,
  solucion: "Como la tasa es semestral pero capitaliza <b>anualmente</b>, la tasa anual es $2r\\,\\%$ y hay 2 períodos:<br>$M_{B} = 10\\,000\\left(1+\\dfrac{2r}{100}\\right)^{2}$.<br><br>Se pide $M_{B} < M_{A}$:<br>$10\\,000\\left(1+\\tfrac{2r}{100}\\right)^{2} < 12\\,100 \\Rightarrow \\left(1+\\tfrac{2r}{100}\\right)^{2} < 1.21 \\Rightarrow -5 < r < 5$.<br><br>Pero una tasa no puede ser negativa, así que $r \\geq 0$ y la respuesta es $r \\in \\left[0, 5\\right[$.",
  ojo: "Dos cosas que se saltan: convertir la tasa semestral a anual (el $2r$) y descartar la parte negativa del intervalo. La restricción $r \\geq 0$ no viene del álgebra, viene del contexto: es una tasa de interés."
},
{
  tema: "Progresiones",
  fuente: "Examen final 2026-1",
  examen: "Examen final",
  ciclo: "2026-1",
  enunciado: "La producción mensual de huevos sigue una progresión aritmética. En el séptimo mes se producen 18 mil huevos, y la diferencia entre la producción del octavo y la del segundo mes es el doble de la del primer mes. ¿Cuántos huevos se produjeron el primer mes?",
  opciones: ["9 mil", "3 mil", "12 mil", "6 mil"],
  correcta: 3,
  solucion: "Con $a_{n} = a_{1}+(n-1)d$:<br>• $a_{7} = a_{1}+6d = 18$.<br>• $a_{8}-a_{2} = (a_{1}+7d)-(a_{1}+d) = 6d$, y el dato dice que eso es $2a_{1}$, o sea $6d = 2a_{1}$, es decir $a_{1} = 3d$.<br><br>Reemplazando en la primera: $3d + 6d = 18 \\Rightarrow d = 2$, y $a_{1} = 6$.<br><br>El primer mes se produjeron 6 mil huevos.",
  ojo: "La resta $a_{8}-a_{2}$ elimina $a_{1}$ y deja solo $6d$: en general $a_{m}-a_{n} = (m-n)d$. Reconocer eso convierte el dato raro en una ecuación de una sola incógnita."
},
{
  tema: "Progresiones",
  fuente: "Examen final 2026-1",
  examen: "Examen final",
  ciclo: "2026-1",
  enunciado: "En esa misma progresión aritmética ($a_{1} = 6$ mil huevos y razón $d = 2$), ¿cuál es la producción <b>acumulada</b> de los diez primeros meses?",
  opciones: ["150 mil", "240 mil", "24 mil", "120 mil"],
  correcta: 0,
  solucion: "Primero el décimo término: $a_{10} = a_{1}+9d = 6+18 = 24$.<br><br>Luego la suma: $S_{10} = \\dfrac{a_{1}+a_{10}}{2}\\cdot n = \\dfrac{6+24}{2}\\cdot 10 = 150$.<br><br>En los diez primeros meses se producen 150 mil huevos.",
  ojo: "$24$ mil es la producción <b>del</b> décimo mes, no la acumulada: la pregunta pide $S_{10}$, no $a_{10}$. La fórmula de la suma es el promedio de los extremos por la cantidad de términos."
}

]);
