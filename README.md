# Práctica · Nivelación en Matemáticas

Sitio de práctica con banco de preguntas por temas, selección aleatoria,
cronómetro y soluciones al final. Funciona sin servidor y sin base de datos:
todo corre en el navegador del alumno.

---

## 1. Probarlo ahora mismo

Abre `index.html` con doble clic. Eso es todo — no hay que instalar nada.
Funciona igual sin internet, porque KaTeX (el motor de fórmulas) va incluido
en la carpeta.

---

## 2. Publicarlo para los alumnos

**Hace falta una cuenta de Vercel.** Es gratuita (plan Hobby), se crea con
correo o con una cuenta de GitHub y no pide tarjeta. El sitio no cuesta nada
por alumno, entren los que entren.

### Ruta rápida — para probar

1. Entra a **https://vercel.com/drop**
2. Arrastra la carpeta `practica-nive` **o directamente el archivo .zip**.
3. Elige un nombre de proyecto y pulsa **Deploy**.
4. Te devuelve una URL pública.

Sirve perfecto para enseñárselo a un colega o probarlo tú. Pero ojo con la
limitación de abajo antes de repartir el link a toda la clase.

### ⚠️ Cada drop crea un proyecto NUEVO

Vercel Drop no vuelve a desplegar sobre un proyecto que ya existe. Consecuencia
práctica: **cada vez que agregues preguntas y arrastres la carpeta otra vez,
obtienes una URL distinta**, y el link que ya repartiste se queda congelado con
la versión vieja.

### Ruta estable — para repartir a los alumnos (recomendada)

Si el link va a circular entre alumnos y piensas actualizarlo cada ciclo,
conéctalo a un repositorio de GitHub. Todo se hace desde el navegador, sin
terminal y sin instalar nada.

**Paso 1 — Crear el repositorio**

1. Crea una cuenta gratuita en **https://github.com**
2. Pulsa el botón **+** (arriba a la derecha) → **New repository**.
3. Nombre: `practica-nive`. Deja **Public**.
   (Ponerlo privado no esconde nada: ver la nota de seguridad más abajo.)
4. **Create repository**.

**Paso 2 — Subir los archivos**

1. En el repositorio recién creado, pulsa el enlace **uploading an existing
   file**.
2. **Abre la carpeta `practica-nive` y arrastra lo que hay DENTRO**, no la
   carpeta entera: `index.html`, `README.md`, y las carpetas `assets` y
   `banco`.

   > Esto importa. Si arrastras la carpeta completa, `index.html` queda un
   > nivel más abajo y Vercel no encuentra la página de inicio.
3. Abajo, pulsa **Commit changes**.

**Paso 3 — Conectar Vercel**

1. En Vercel: **Add New → Project**.
2. **Continue with GitHub** y autoriza el acceso.
3. Busca `practica-nive` en la lista y pulsa **Import**.
4. No cambies nada de la configuración (Framework Preset: *Other* está bien) y
   pulsa **Deploy**.

Listo. Esa URL **ya no cambia nunca**.

**Cómo actualizar de ahora en adelante**

1. En GitHub, entra a `banco/logica.js`.
2. Pulsa el ícono del lápiz (*Edit this file*), haz tus cambios.
3. **Commit changes**.

En unos 30 segundos el sitio se actualiza solo, en la misma dirección de
siempre. Para subir un archivo de preguntas nuevo: **Add file → Upload files**.

> Alternativas equivalentes si prefieres: Netlify, GitHub Pages o Cloudflare
> Pages. El sitio es HTML estático, así que funciona en cualquiera de ellas.

---

## ⚠️ Nota de seguridad — leer antes de usarlo para algo con nota

Todo corre en el navegador del alumno, así que **las respuestas correctas
viajan al navegador y un alumno con algo de curiosidad puede leerlas** (con
`F12` → *Sources*, o viendo el archivo `banco/logica.js` directamente).

Poner el repositorio en privado **no** cambia esto: el archivo se sirve igual
al navegador para que el sitio funcione.

Conclusión práctica:

- ✅ Perfecto para **práctica y repaso**, que es para lo que está hecho.
- ❌ **No lo uses para evaluaciones con nota.** Para eso hace falta un sistema
  con servidor que guarde las respuestas fuera del alcance del alumno —
  Blackboard, Moodle o similares.

---

## 3. Agregar preguntas

Todas las preguntas viven en la carpeta `banco/`. Abre `banco/logica.js` con
cualquier editor de texto, copia un bloque completo y edítalo:

```js
{
  tema: "La condicional",
  fuente: "PC1 2019-1",
  enunciado: "Si $p \\rightarrow q$ es falsa, entonces $q \\rightarrow p$ es:",
  opciones: ["Verdadera", "Falsa", "Depende de $p$", "Indeterminada"],
  correcta: 0,
  solucion: "Que sea falsa fija $p =$ V y $q =$ F, luego F→V $=$ V."
},
```

| Campo | Qué va |
|---|---|
| `tema` | Texto exacto. Los temas iguales se agrupan solos; uno nuevo aparece nuevo en el selector. |
| `fuente` | De dónde salió. Se muestra en los resultados. Opcional. |
| `enunciado` | La pregunta. Fórmulas entre signos de dólar. |
| `opciones` | Exactamente 4 alternativas. |
| `correcta` | Índice de la correcta: `0` es la primera, `3` la cuarta. |
| `solucion` | La explicación que verá el alumno al terminar. |

**Dos reglas que evitan el 95% de los errores:**

1. **Barras invertidas dobles.** Dentro de las comillas se escribe
   `\\rightarrow`, no `\rightarrow`.
2. **La coma final.** Cada bloque `{...}` termina en `},` — menos el último de
   la lista, que va sin coma.

Si el sitio se abre en blanco después de editar, casi siempre es una coma o una
comilla. En el navegador, `F12` → pestaña *Console* te dice la línea exacta.

No hace falta tocar `correcta` pensando en el orden: el sitio baraja las
alternativas en cada intento.

### Agregar un curso o capítulo nuevo

1. Copia `banco/logica.js` a, por ejemplo, `banco/conjuntos.js` y reemplaza las
   preguntas.
2. Abre `index.html` y agrega la línea junto a las que ya están:

```html
<script src="banco/logica.js"></script>
<script src="banco/conjuntos.js"></script>
```

---

## 4. Poner el logo de la UP

El sitio ya tiene el espacio reservado en la cabecera. Solo falta el archivo:

1. Guarda la imagen del logo como **`logo-up.png`** (respetando el nombre
   exacto, en minúsculas).
2. Ponla dentro de la carpeta **`assets/`**.

Aparece sola, a la izquierda del título. Si el archivo no está, esa línea
simplemente no se muestra: el sitio no se rompe ni sale el ícono de imagen
partida.

**Recomendaciones para la imagen:**

- **PNG con fondo transparente**, para que se vea bien sobre la cabecera
  blanca. Si tienes el logo en `.svg`, mejor todavía: guárdalo como
  `logo-up.svg` y cambia la extensión en la línea del `<img>` de `index.html`.
- Al menos **80 px de alto** (se muestra a 38 px, pero el doble se ve nítido en
  pantallas retina).
- Evita los JPG con fondo blanco: se nota el recuadro.

Para subirlo a GitHub: entra a la carpeta `assets` → **Add file → Upload
files** → arrastra el archivo → **Commit changes**.

---

## 5. Recoger datos de los alumnos (opcional)

El sitio puede enviar, **de forma anónima**, qué temas se acertaron y cuáles no,
a una hoja de cálculo tuya. Sirve para ver qué reforzar en clase sin tener que
preguntar.

**Qué se guarda:** fecha, tema, la pregunta, la alternativa correcta, la que
marcó el alumno, y si acertó.
**Qué NO se guarda:** nombre, código, correo, ni nada que identifique a nadie.

Mientras `urlDatos` esté vacío en `assets/config.js`, no se envía nada y el
aviso a los alumnos ni siquiera aparece.

### Paso 1 — Crear la hoja y pegar el script

1. Entra a **https://sheets.new** para crear una hoja de cálculo en blanco.
   Ponle nombre, por ejemplo *Datos práctica nive*.
2. Menú **Extensiones → Apps Script**.
3. Borra todo el código que aparece y pega el contenido completo del archivo
   **`hoja-de-calculo.gs`** (viene en esta carpeta).
4. Guarda con el ícono del disquete.

### Paso 2 — Publicarlo

1. Arriba a la derecha: **Implementar → Nueva implementación**.
2. En el engranaje, elige el tipo **Aplicación web**.
3. Configura así — los dos campos importan:
   - **Ejecutar como:** Yo
   - **Quién tiene acceso:** **Cualquier usuario**
4. **Implementar**.
5. Google te pedirá autorizar y mostrará *«Google no ha verificado esta
   aplicación»*. Es normal: la aplicación es tuya, la acabas de escribir.
   Pulsa **Configuración avanzada → Ir a (nombre) (no seguro)** y **Permitir**.
6. Copia la **URL de la aplicación web**. Termina en `/exec`.

### Paso 3 — Conectarla al sitio

1. Abre `assets/config.js` y pega la URL entre las comillas:

```js
urlDatos: "https://script.google.com/macros/s/AKfycb....../exec",
```

2. Sube el archivo a GitHub (entra a `assets/config.js` → ícono del lápiz →
   pega → **Commit changes**).
3. Espera medio minuto, entra al sitio, haz una práctica completa y revisa la
   hoja: deben aparecer las filas.

> Si no aparece nada, la causa casi siempre es **«Quién tiene acceso»** mal
> configurado. Vuelve a Implementar → Administrar implementaciones → editar
> (el lápiz) y confirma que dice *Cualquier usuario*.

### Paso 4 — Leer los datos

En la hoja, menú **Insertar → Tabla dinámica**:

- **% de acierto por tema:** Filas = `Tema`, Valores = `Acierto` resumido por
  **Promedio**. Un 0.42 significa que ese tema se acierta el 42% de las veces.
- **Qué distractor se traga la gente:** Filas = `Pregunta` y debajo
  `Respuesta del alumno`, Valores = `Acierto` por **Recuento**. Ahí ves cuál
  alternativa incorrecta atrae más — que es la pista más útil de todas, porque
  te dice *qué* están entendiendo mal, no solo que fallaron.
- **Evolución en el tiempo:** Filas = `Fecha y hora` agrupada por día,
  Valores = `Acierto` por Promedio.

### Advertencia honesta

Cualquiera que descubra esa URL podría enviar filas falsas a tu hoja. No hay
datos sensibles de por medio y nadie tiene motivo para hacerlo, pero si algún
día ves basura en la hoja: en Apps Script haz una implementación nueva (te da
una URL distinta), pégala en `config.js` y la anterior queda muerta.

---

## 6. Símbolos de LaTeX más usados

| Escribes | Se ve |
|---|---|
| `$\\neg p$` | ¬p |
| `$p \\wedge q$` | p ∧ q |
| `$p \\vee q$` | p ∨ q |
| `$p \\veebar q$` | p ⊻ q |
| `$p \\rightarrow q$` | p → q |
| `$p \\leftrightarrow q$` | p ↔ q |
| `$P \\equiv Q$` | P ≡ Q |
| `$2^n$` | 2ⁿ |
| `$\\frac{a}{b}$` | a/b en fracción |
| `$\\sum_{i=1}^{n} x_i$` | sumatoria |

También funciona HTML simple en enunciados y soluciones: `<b>negrita</b>`,
`<i>cursiva</i>`, `<br>` para salto de línea.

---

## 7. Qué hay en cada archivo

```
index.html            Estructura de las tres pantallas y lista de bancos
assets/estilos.css    Colores y diseño (verde del tema de las diapositivas)
assets/config.js      URL de la hoja de datos y texto del aviso ← se toca
assets/app.js         Lógica: barajado, cronómetro, puntaje, resultados
assets/katex/         Motor de fórmulas (no tocar)
assets/logo-up.png    El logo (opcional, lo pones tú)
banco/logica.js       Las preguntas ← aquí se trabaja
hoja-de-calculo.gs    Código para pegar en Google Sheets (no va al sitio)
```

---

## 8. Detalles de funcionamiento

- **Aleatorio doble:** se barajan las preguntas y también las alternativas
  dentro de cada pregunta, para que no se memorice «siempre es la B».
- **Cronómetro:** el tiempo elegido es por pregunta y se multiplica por la
  cantidad. Al llegar a cero la práctica se cierra sola y muestra resultados.
- **Sin feedback inmediato:** como en un examen real, las soluciones aparecen
  recién al terminar.
- **Nada se guarda:** no hay cuentas, ni cookies, ni datos de alumnos. Cada
  práctica empieza en limpio.
- **Teclado:** flechas para navegar, letras `A`–`D` o números `1`–`4` para
  responder.
- **Celular:** el diseño se adapta; los alumnos pueden practicar desde el
  teléfono.
