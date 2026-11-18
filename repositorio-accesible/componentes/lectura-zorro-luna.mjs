// Lectura digital de «El zorro enamorado de la Luna».
// Transcripción fiel al documento facilitado; fragmentos de lectura digital, no paginación del impreso.
const fragmentos = [
  {
    "tinta": "Cuando el zorro vio el reflejo de la Luna en las aguas limpias del lago, se enamoró de ella.\n\nLevantó la cabeza al cielo y la vio: era hermosa, redonda y luminosa y quiso hablarle.\n\nPero la Luna estaba lejos, muy lejos. Entonces se consoló hablándole cada día a su reflejo.\n\nLa Luna en el cielo no lo oía, la Luna era lejana y además era esquiva.\n\nA veces venía, a veces se iba, a veces mostraba un poco su rostro, a veces se escondía detrás de nubes oscuras.",
    "braille": "⠨⠉⠥⠁⠝⠙⠕ ⠑⠇ ⠵⠕⠗⠗⠕ ⠧⠊⠕ ⠑⠇ ⠗⠑⠋⠇⠑⠚⠕ ⠙⠑ ⠇⠁ ⠨⠇⠥⠝⠁ ⠑⠝ ⠇⠁⠎ ⠁⠛⠥⠁⠎ ⠇⠊⠍⠏⠊⠁⠎ ⠙⠑⠇ ⠇⠁⠛⠕⠂ ⠎⠑ ⠑⠝⠁⠍⠕⠗⠬ ⠙⠑ ⠑⠇⠇⠁⠄\n\n⠨⠇⠑⠧⠁⠝⠞⠬ ⠇⠁ ⠉⠁⠃⠑⠵⠁ ⠁⠇ ⠉⠊⠑⠇⠕ ⠽ ⠇⠁ ⠧⠊⠕⠒ ⠑⠗⠁ ⠓⠑⠗⠍⠕⠎⠁⠂ ⠗⠑⠙⠕⠝⠙⠁ ⠽ ⠇⠥⠍⠊⠝⠕⠎⠁ ⠽ ⠟⠥⠊⠎⠕ ⠓⠁⠃⠇⠁⠗⠇⠑⠄\n\n⠨⠏⠑⠗⠕ ⠇⠁ ⠨⠇⠥⠝⠁ ⠑⠎⠞⠁⠃⠁ ⠇⠑⠚⠕⠎⠂ ⠍⠥⠽ ⠇⠑⠚⠕⠎⠄ ⠨⠑⠝⠞⠕⠝⠉⠑⠎ ⠎⠑ ⠉⠕⠝⠎⠕⠇⠬ ⠓⠁⠃⠇⠷⠝⠙⠕⠇⠑ ⠉⠁⠙⠁ ⠙⠌⠁ ⠁ ⠎⠥ ⠗⠑⠋⠇⠑⠚⠕⠄\n\n⠨⠇⠁ ⠨⠇⠥⠝⠁ ⠑⠝ ⠑⠇ ⠉⠊⠑⠇⠕ ⠝⠕ ⠇⠕ ⠕⠌⠁⠂ ⠇⠁ ⠨⠇⠥⠝⠁ ⠑⠗⠁ ⠇⠑⠚⠁⠝⠁ ⠽ ⠁⠙⠑⠍⠷⠎ ⠑⠗⠁ ⠑⠎⠟⠥⠊⠧⠁⠄\n\n⠨⠁ ⠧⠑⠉⠑⠎ ⠧⠑⠝⠌⠁⠂ ⠁ ⠧⠑⠉⠑⠎ ⠎⠑ ⠊⠃⠁⠂ ⠁ ⠧⠑⠉⠑⠎ ⠍⠕⠎⠞⠗⠁⠃⠁ ⠥⠝ ⠏⠕⠉⠕ ⠎⠥ ⠗⠕⠎⠞⠗⠕⠂ ⠁ ⠧⠑⠉⠑⠎ ⠎⠑ ⠑⠎⠉⠕⠝⠙⠌⠁ ⠙⠑⠞⠗⠷⠎ ⠙⠑ ⠝⠥⠃⠑⠎ ⠕⠎⠉⠥⠗⠁⠎⠄"
  },
  {
    "tinta": "Y cuando volvía, se sorprendía de ver siempre al zorro a las orillas del lago hablando bajito, susurrando algo.\n\nTantas veces la Luna vio al zorro, que curiosa quiso saber lo que él decía. En sueños le habló:\n\n\"Zorro, zorrito, quiero hablarte un ratito. Sube al cerro más alto yo te daré el encuentro, me posaré en su cima\"\n\nEl zorro desde muy temprano comenzó a subir.\n\nSubía y subía.",
    "braille": "⠨⠽ ⠉⠥⠁⠝⠙⠕ ⠧⠕⠇⠧⠌⠁⠂ ⠎⠑ ⠎⠕⠗⠏⠗⠑⠝⠙⠌⠁ ⠙⠑ ⠧⠑⠗ ⠎⠊⠑⠍⠏⠗⠑ ⠁⠇ ⠵⠕⠗⠗⠕ ⠁ ⠇⠁⠎ ⠕⠗⠊⠇⠇⠁⠎ ⠙⠑⠇ ⠇⠁⠛⠕ ⠓⠁⠃⠇⠁⠝⠙⠕ ⠃⠁⠚⠊⠞⠕⠂ ⠎⠥⠎⠥⠗⠗⠁⠝⠙⠕ ⠁⠇⠛⠕⠄\n\n⠨⠞⠁⠝⠞⠁⠎ ⠧⠑⠉⠑⠎ ⠇⠁ ⠨⠇⠥⠝⠁ ⠧⠊⠕ ⠁⠇ ⠵⠕⠗⠗⠕⠂ ⠟⠥⠑ ⠉⠥⠗⠊⠕⠎⠁ ⠟⠥⠊⠎⠕ ⠎⠁⠃⠑⠗ ⠇⠕ ⠟⠥⠑ ⠮⠇ ⠙⠑⠉⠌⠁⠄ ⠨⠑⠝ ⠎⠥⠑⠻⠕⠎ ⠇⠑ ⠓⠁⠃⠇⠬⠒\n\n⠦⠨⠵⠕⠗⠗⠕⠂ ⠵⠕⠗⠗⠊⠞⠕⠂ ⠟⠥⠊⠑⠗⠕ ⠓⠁⠃⠇⠁⠗⠞⠑ ⠥⠝ ⠗⠁⠞⠊⠞⠕⠄ ⠨⠎⠥⠃⠑ ⠁⠇ ⠉⠑⠗⠗⠕ ⠍⠷⠎ ⠁⠇⠞⠕ ⠽⠕ ⠞⠑ ⠙⠁⠗⠮ ⠑⠇ ⠑⠝⠉⠥⠑⠝⠞⠗⠕⠂ ⠍⠑ ⠏⠕⠎⠁⠗⠮ ⠑⠝ ⠎⠥ ⠉⠊⠍⠁⠦\n\n⠨⠑⠇ ⠵⠕⠗⠗⠕ ⠙⠑⠎⠙⠑ ⠍⠥⠽ ⠞⠑⠍⠏⠗⠁⠝⠕ ⠉⠕⠍⠑⠝⠵⠬ ⠁ ⠎⠥⠃⠊⠗⠄\n\n⠨⠎⠥⠃⠌⠁ ⠽ ⠎⠥⠃⠌⠁⠄"
  },
  {
    "tinta": "No tenía hambre, no tenía frío.\n\nSubía y subía.\n\nNo pensaba más en los cuyes, en las wallatas, en las llamitas tiernas.\n\nSubía y subía, contento subía.\n\nCuando llegó a la cima era de noche y la Luna ahí estaba, luminosa, redonda y hermosa.",
    "braille": "⠨⠝⠕ ⠞⠑⠝⠌⠁ ⠓⠁⠍⠃⠗⠑⠂ ⠝⠕ ⠞⠑⠝⠌⠁ ⠋⠗⠌⠕⠄\n\n⠨⠎⠥⠃⠌⠁ ⠽ ⠎⠥⠃⠌⠁⠄\n\n⠨⠝⠕ ⠏⠑⠝⠎⠁⠃⠁ ⠍⠷⠎ ⠑⠝ ⠇⠕⠎ ⠉⠥⠽⠑⠎⠂ ⠑⠝ ⠇⠁⠎ ⠺⠁⠇⠇⠁⠞⠁⠎⠂ ⠑⠝ ⠇⠁⠎ ⠇⠇⠁⠍⠊⠞⠁⠎ ⠞⠊⠑⠗⠝⠁⠎⠄\n\n⠨⠎⠥⠃⠌⠁ ⠽ ⠎⠥⠃⠌⠁⠂ ⠉⠕⠝⠞⠑⠝⠞⠕ ⠎⠥⠃⠌⠁⠄\n\n⠨⠉⠥⠁⠝⠙⠕ ⠇⠇⠑⠛⠬ ⠁ ⠇⠁ ⠉⠊⠍⠁ ⠑⠗⠁ ⠙⠑ ⠝⠕⠉⠓⠑ ⠽ ⠇⠁ ⠨⠇⠥⠝⠁ ⠁⠓⠌ ⠑⠎⠞⠁⠃⠁⠂ ⠇⠥⠍⠊⠝⠕⠎⠁⠂ ⠗⠑⠙⠕⠝⠙⠁ ⠽ ⠓⠑⠗⠍⠕⠎⠁⠄"
  },
  {
    "tinta": "Ella se acercó poquito a poco al zorro y le preguntó con su voz de Luna:\n\nZorro ¿qué susurras en el lago tan bajito?\n\nTe canto. Respondió el zorro. Escucha:\n\n\"Luna lunita, esquiva y viajera, amarte quisiera y contemplar tu hermosura.",
    "braille": "⠨⠑⠇⠇⠁ ⠎⠑ ⠁⠉⠑⠗⠉⠬ ⠏⠕⠟⠥⠊⠞⠕ ⠁ ⠏⠕⠉⠕ ⠁⠇ ⠵⠕⠗⠗⠕ ⠽ ⠇⠑ ⠏⠗⠑⠛⠥⠝⠞⠬ ⠉⠕⠝ ⠎⠥ ⠧⠕⠵ ⠙⠑ ⠨⠇⠥⠝⠁⠒\n\n⠨⠵⠕⠗⠗⠕ ⠢⠟⠥⠮ ⠎⠥⠎⠥⠗⠗⠁⠎ ⠑⠝ ⠑⠇ ⠇⠁⠛⠕ ⠞⠁⠝ ⠃⠁⠚⠊⠞⠕⠢\n\n⠨⠞⠑ ⠉⠁⠝⠞⠕⠄ ⠨⠗⠑⠎⠏⠕⠝⠙⠊⠬ ⠑⠇ ⠵⠕⠗⠗⠕⠄ ⠨⠑⠎⠉⠥⠉⠓⠁⠒\n\n⠦⠨⠇⠥⠝⠁ ⠇⠥⠝⠊⠞⠁⠂ ⠑⠎⠟⠥⠊⠧⠁ ⠽ ⠧⠊⠁⠚⠑⠗⠁⠂ ⠁⠍⠁⠗⠞⠑ ⠟⠥⠊⠎⠊⠑⠗⠁ ⠽ ⠉⠕⠝⠞⠑⠍⠏⠇⠁⠗ ⠞⠥ ⠓⠑⠗⠍⠕⠎⠥⠗⠁⠄"
  },
  {
    "tinta": "Si vivir conmigo tú quisieras, por ti dejaría la tierra entera. Y si no me quisieras, cuidaré tu reflejo la vida entera\".\n\nLa Luna, al escuchar esas palabras sonrió y tanto se conmovió que invitó al zorro a vivir para siempre con ella.\n\nAhí está el zorro enamorado hasta hoy día, acompañando a la Luna en sus viajes, cantándole, queriéndola.\n\nNosotros desde la Tierra los vemos a veces.",
    "braille": "⠨⠎⠊ ⠧⠊⠧⠊⠗ ⠉⠕⠝⠍⠊⠛⠕ ⠞⠾ ⠟⠥⠊⠎⠊⠑⠗⠁⠎⠂ ⠏⠕⠗ ⠞⠊ ⠙⠑⠚⠁⠗⠌⠁ ⠇⠁ ⠞⠊⠑⠗⠗⠁ ⠑⠝⠞⠑⠗⠁⠄ ⠨⠽ ⠎⠊ ⠝⠕ ⠍⠑ ⠟⠥⠊⠎⠊⠑⠗⠁⠎⠂ ⠉⠥⠊⠙⠁⠗⠮ ⠞⠥ ⠗⠑⠋⠇⠑⠚⠕ ⠇⠁ ⠧⠊⠙⠁ ⠑⠝⠞⠑⠗⠁⠦⠄\n\n⠨⠇⠁ ⠨⠇⠥⠝⠁⠂ ⠁⠇ ⠑⠎⠉⠥⠉⠓⠁⠗ ⠑⠎⠁⠎ ⠏⠁⠇⠁⠃⠗⠁⠎ ⠎⠕⠝⠗⠊⠬ ⠽ ⠞⠁⠝⠞⠕ ⠎⠑ ⠉⠕⠝⠍⠕⠧⠊⠬ ⠟⠥⠑ ⠊⠝⠧⠊⠞⠬ ⠁⠇ ⠵⠕⠗⠗⠕ ⠁ ⠧⠊⠧⠊⠗ ⠏⠁⠗⠁ ⠎⠊⠑⠍⠏⠗⠑ ⠉⠕⠝ ⠑⠇⠇⠁⠄\n\n⠨⠁⠓⠌ ⠑⠎⠞⠷ ⠑⠇ ⠵⠕⠗⠗⠕ ⠑⠝⠁⠍⠕⠗⠁⠙⠕ ⠓⠁⠎⠞⠁ ⠓⠕⠽ ⠙⠌⠁⠂ ⠁⠉⠕⠍⠏⠁⠻⠁⠝⠙⠕ ⠁ ⠇⠁ ⠨⠇⠥⠝⠁ ⠑⠝ ⠎⠥⠎ ⠧⠊⠁⠚⠑⠎⠂ ⠉⠁⠝⠞⠷⠝⠙⠕⠇⠑⠂ ⠟⠥⠑⠗⠊⠮⠝⠙⠕⠇⠁⠄\n\n⠨⠝⠕⠎⠕⠞⠗⠕⠎ ⠙⠑⠎⠙⠑ ⠇⠁ ⠨⠞⠊⠑⠗⠗⠁ ⠇⠕⠎ ⠧⠑⠍⠕⠎ ⠁ ⠧⠑⠉⠑⠎⠄"
  }
];
export function montarLecturaZorroLuna(contenedor) {
  if (!contenedor || contenedor.querySelector('.ra-lectura-cuento')) return;
  const seccion = document.createElement('section');
  seccion.className = 'ra-lectura-cuento';
  seccion.setAttribute('aria-label', 'Lectura digital de El zorro enamorado de la Luna');
  const titulo = document.createElement('h3');
  titulo.textContent = 'Lectura digital accesible';
  const panel = document.createElement('div');
  panel.className = 'ra-lectura-panel';
  const modos = document.createElement('div');
  modos.className = 'ra-lectura-modos';
  modos.setAttribute('role', 'group');
  modos.setAttribute('aria-label', 'Modalidad de lectura');
  const tinta = document.createElement('button');
  tinta.type = 'button';
  tinta.textContent = 'Texto convencional';
  const braille = document.createElement('button');
  braille.type = 'button';
  braille.textContent = 'Braille digital';
  modos.append(tinta, braille);
  const indicador = document.createElement('p');
  indicador.className = 'ra-lectura-indicador';
  const contenido = document.createElement('div');
  contenido.className = 'ra-lectura-texto';
  contenido.setAttribute('role', 'region');
  contenido.setAttribute('aria-label', 'Fragmento actual del cuento');
  contenido.tabIndex = 0;
  const navegacion = document.createElement('nav');
  navegacion.className = 'ra-lectura-navegacion';
  navegacion.setAttribute('aria-label', 'Fragmentos del cuento');
  const anterior = document.createElement('button');
  anterior.type = 'button';
  anterior.textContent = 'Anterior';
  const siguiente = document.createElement('button');
  siguiente.type = 'button';
  siguiente.textContent = 'Siguiente';
  const copiar = document.createElement('button');
  copiar.type = 'button';
  copiar.textContent = 'Copiar fragmento';
  const estado = document.createElement('span');
  estado.className = 'ra-lectura-estado';
  estado.setAttribute('role', 'status');
  const aviso = document.createElement('p');
  aviso.className = 'ra-lectura-aviso';
  aviso.textContent = 'La división en cinco fragmentos es para lectura digital, no corresponde necesariamente a las páginas impresas. El braille fue proporcionado en el documento y requiere revisión signográfica antes de imprimirse en relieve.';
  navegacion.append(anterior, siguiente, copiar);
  panel.append(modos, indicador, contenido, navegacion, estado, aviso);
  seccion.append(titulo, panel);
  contenedor.append(seccion);
  let fragmento = 0;
  let modo = 'tinta';
  function render() {
    tinta.setAttribute('aria-pressed', String(modo === 'tinta'));
    braille.setAttribute('aria-pressed', String(modo === 'braille'));
    indicador.textContent = 'Fragmento ' + (fragmento + 1) + ' de ' + fragmentos.length;
    contenido.textContent = fragmentos[fragmento][modo];
    contenido.classList.toggle('ra-lectura-braille', modo === 'braille');
    anterior.disabled = fragmento === 0;
    siguiente.disabled = fragmento === fragmentos.length - 1;
    estado.textContent = '';
  }
  tinta.addEventListener('click', () => { modo = 'tinta'; render(); });
  braille.addEventListener('click', () => { modo = 'braille'; render(); });
  anterior.addEventListener('click', () => { fragmento = Math.max(0,fragmento - 1); render(); contenido.focus(); });
  siguiente.addEventListener('click', () => { fragmento = Math.min(fragmentos.length - 1,fragmento + 1); render(); contenido.focus(); });
  copiar.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(contenido.textContent);
      estado.textContent = 'Fragmento copiado.';
    } catch {
      estado.textContent = 'No fue posible copiar automáticamente. Selecciona el texto para copiarlo.';
    }
  });
  render();
}
