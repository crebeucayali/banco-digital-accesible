// Lectura piloto exclusiva del cuento «¡Qué bonito!». No modifica el catálogo ni Supabase.
const paginas = [
`Antes, muy antes,
no existían las ciudades,
no existían los pueblos,
no existían las chacras.

Antes, muy antes,
no existían casas,
ni de cemento,
ni de madera,
ni de barro.

En esos tiempos existió un niño. Éste y otros niños vivían en cuevas con sus padres, con sus hermanos y sus abuelos. No usaban telas,`,
`limpiaban las pieles de los animales para abrigarse y para vestirse. El padre cazaba.

La madre recogía frutos, flores y raíces para alimentarlos. Los niños y los ancianos cuidaban la cueva.

En las noches, protegidos por las rocas, al calor del fuego hecho de troncos y hojas secas se dormían.

En las paredes de las cuevas escondidas en las alturas de los cerros, pintaban sus días.`,
`Pintaban los animales que cazaban. Mastodontes, tigres "dientes de sable", vizcachas, venados, paleocaballos.

Pintaban cómo cazaban. Entre varios cazadores emboscaban a un animal, lo asustaban con fuego o lo empujaban a un barranco. Pintaban las armas que usaban: lanzas y flechas.

Mucho tiempo después, también grabaron en piedras: animales, plantas y árboles, serpientes, aves.`,
`Hasta hoy, algunos cerros tienen cuevas pintadas con lo sucedido antes, muy antes:

Cueva de Lauricocha (Huánuco)
Cueva de Piquimachay (Ayacucho)
Cueva de Toquepala (Tacna)
Cueva Pachamamay Telarmachay (Junín)
Cueva de Macusani (Puno)

A veces las cuevas se quedan en silencio y olvidadas.`,
`Otras veces, sus paredes nos cuentan historias como ésta.`
];
const celdas = Object.fromEntries([...('abcdefghijklmnopqrstuvwxyz')].map((letra, i) => [letra, ['⠁','⠃','⠉','⠙','⠑','⠋','⠛','⠓','⠊','⠚','⠅','⠇','⠍','⠝','⠕','⠏','⠟','⠗','⠎','⠞','⠥','⠧','⠺','⠭','⠽','⠵'][i]]));
Object.assign(celdas, {'ñ':'⠻','á':'⠷','é':'⠮','í':'⠌','ó':'⠬','ú':'⠾','ü':'⠳',',':'⠂','.':'⠲',':':'⠒',';':'⠆','(':'⠣',')':'⠜','"':'⠦'});
function aBraille(texto) {
  return [...texto].map(c => {
    if (/^[A-ZÁÉÍÓÚÑÜ]$/.test(c)) return '⠨' + celdas[c.toLowerCase()];
    return celdas[c] ?? c;
  }).join('');
}
export function montarLecturaQueBonito(contenedor) {
  if (!contenedor || contenedor.querySelector('.ra-lectura-cuento')) return;
  const seccion = document.createElement('section');
  seccion.className = 'ra-lectura-cuento';
  seccion.setAttribute('aria-label', 'Lectura digital de ¡Qué bonito!');
  const titulo = document.createElement('h3');
  titulo.textContent = 'Lectura digital accesible';
  const botonAbrir = document.createElement('button');
  botonAbrir.type = 'button';
  botonAbrir.className = 'ra-lectura-boton';
  botonAbrir.textContent = 'Leer cuento';
  botonAbrir.setAttribute('aria-expanded', 'false');
  const panel = document.createElement('div');
  panel.className = 'ra-lectura-panel';
  panel.hidden = true;
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
  const paginaActual = document.createElement('p');
  paginaActual.className = 'ra-lectura-indicador';
  const contenido = document.createElement('div');
  contenido.className = 'ra-lectura-texto';
  contenido.setAttribute('role', 'region');
  contenido.setAttribute('aria-label', 'Contenido de la página seleccionada');
  contenido.setAttribute('tabindex', '0');
  const aviso = document.createElement('p');
  aviso.className = 'ra-lectura-aviso';
  aviso.textContent = 'El braille Unicode es una representación digital preliminar. Debe revisarse su signografía y paginación antes de utilizarlo para impresión en relieve.';
  const navegacion = document.createElement('nav');
  navegacion.className = 'ra-lectura-navegacion';
  navegacion.setAttribute('aria-label', 'Páginas del cuento');
  const anterior = document.createElement('button');
  anterior.type = 'button';
  anterior.textContent = 'Anterior';
  const siguiente = document.createElement('button');
  siguiente.type = 'button';
  siguiente.textContent = 'Siguiente';
  const copiar = document.createElement('button');
  copiar.type = 'button';
  copiar.textContent = 'Copiar página';
  const estado = document.createElement('span');
  estado.setAttribute('role', 'status');
  estado.className = 'ra-lectura-estado';
  navegacion.append(anterior, siguiente, copiar);
  panel.append(modos, paginaActual, contenido, navegacion, estado, aviso);
  seccion.append(titulo, botonAbrir, panel);
  contenedor.append(seccion);
  let pagina = 0;
  let modo = 'tinta';
  function render() {
    tinta.setAttribute('aria-pressed', String(modo === 'tinta'));
    braille.setAttribute('aria-pressed', String(modo === 'braille'));
    paginaActual.textContent = 'Página ' + (pagina + 1) + ' de ' + paginas.length;
    contenido.textContent = modo === 'tinta' ? paginas[pagina] : aBraille(paginas[pagina]);
    contenido.lang = 'es';
    contenido.classList.toggle('ra-lectura-braille', modo === 'braille');
    anterior.disabled = pagina === 0;
    siguiente.disabled = pagina === paginas.length - 1;
    estado.textContent = '';
  }
  botonAbrir.addEventListener('click', () => {
    panel.hidden = !panel.hidden;
    botonAbrir.setAttribute('aria-expanded', String(!panel.hidden));
    if (!panel.hidden) { render(); tinta.focus(); }
    else botonAbrir.focus();
  });
  tinta.addEventListener('click', () => { modo = 'tinta'; render(); });
  braille.addEventListener('click', () => { modo = 'braille'; render(); });
  anterior.addEventListener('click', () => { pagina = Math.max(0, pagina - 1); render(); contenido.focus(); });
  siguiente.addEventListener('click', () => { pagina = Math.min(paginas.length - 1, pagina + 1); render(); contenido.focus(); });
  copiar.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(contenido.textContent);
      estado.textContent = 'Página copiada.';
    } catch { estado.textContent = 'No fue posible copiar automáticamente. Selecciona el texto para copiarlo.'; }
  });
}
