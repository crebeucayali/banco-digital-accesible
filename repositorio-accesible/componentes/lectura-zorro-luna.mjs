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
const cuentoCompleto = {
  tinta: fragmentos.map(item => item.tinta).join('\n\n'),
  braille: fragmentos.map(item => item.braille).join('\n\n')
};
const lecturas = [
  { titulo: 'El zorro enamorado de la Luna', tinta: cuentoCompleto.tinta, braille: cuentoCompleto.braille },
  { titulo: 'Mi Mantita linda', tinta: "Página 10\nMi Mantita linda\n\n- \"Mantita linda, tú que me cargas y que me abrigas, tú que guardas mis alimentos y la cosecha, ¿de qué estás hecha?\"\n\n- \"De lana de alpacas y de vicuñas que caminan libres en las montañas; de copos de algodón blanco, cosechados en valles, hilados en huso, tejidos en telar hecho de caspi y de maguey\".\n\nPágina 11\n- \"Mantita linda de lana pura y de algodón, ¿quién te ha tejido?\"\n\n- \"Me han tejido tu hermana, tu hermano, también tu madre, también tu padre. Son los abuelos los que enseñan cómo se teje\".\n\n- \"Mantita hermosa, ¿cómo robaste tus colores al arco iris?\"\n\n- \"No los he robado. Es en\n\nPágina 12\nlas plantas y animales que mis colores he encontrado\".\n\nLa cochinilla que vive en los cactus para los rojos, rosados, violetas y anaranjados.\n\nLa terca retama, que crece siempre, para los amarillos.\n\nEl airampito, para los azules.\n\nCampo con muchas plantas entre ellas el airampito.\n\nPágina 13\n\"Las hojas verdes, para los verdes\".\n\n- \"Mantita linda y calentita, cuando llegue la noche cobija mi cuerpo, ahuyenta mis pesares y cuéntame al oído sueños de colores\".", braille: "Página 10\n⠨⠍⠊ ⠨⠍⠁⠝⠞⠊⠞⠁ ⠇⠊⠝⠙⠁\n\n⠤ ⠦⠨⠍⠁⠝⠞⠊⠞⠁ ⠇⠊⠝⠙⠁⠂ ⠞⠾ ⠟⠥⠑ ⠍⠑ ⠉⠁⠗⠛⠁⠎ ⠽ ⠟⠥⠑ ⠍⠑ ⠁⠃⠗⠊⠛⠁⠎⠂ ⠞⠾ ⠟⠥⠑ ⠛⠥⠁⠗⠙⠁⠎ ⠍⠊⠎ ⠁⠇⠊⠍⠑⠝⠞⠕⠎ ⠽ ⠇⠁ ⠉⠕⠎⠑⠉⠓⠁⠂ ⠢⠙⠑ ⠟⠥⠮ ⠑⠎⠞⠷⠎ ⠓⠑⠉⠓⠁⠢⠦\n\n⠤ ⠦⠨⠙⠑ ⠇⠁⠝⠁ ⠙⠑ ⠁⠇⠏⠁⠉⠁⠎ ⠽ ⠙⠑ ⠧⠊⠉⠥⠻⠁⠎ ⠟⠥⠑ ⠉⠁⠍⠊⠝⠁⠝ ⠇⠊⠃⠗⠑⠎ ⠑⠝ ⠇⠁⠎ ⠍⠕⠝⠞⠁⠻⠁⠎⠆ ⠙⠑ ⠉⠕⠏⠕⠎ ⠙⠑ ⠁⠇⠛⠕⠙⠬⠝ ⠃⠇⠁⠝⠉⠕⠂ ⠉⠕⠎⠑⠉⠓⠁⠙⠕⠎ ⠑⠝ ⠧⠁⠇⠇⠑⠎⠂ ⠓⠊⠇⠁⠙⠕⠎ ⠑⠝ ⠓⠥⠎⠕⠂ ⠞⠑⠚⠊⠙⠕⠎ ⠑⠝ ⠞⠑⠇⠁⠗ ⠓⠑⠉⠓⠕ ⠙⠑ ⠉⠁⠎⠏⠊ ⠽ ⠙⠑ ⠍⠁⠛⠥⠑⠽⠦⠄\n\nPágina 11\n⠤ ⠦⠨⠍⠁⠝⠞⠊⠞⠁ ⠇⠊⠝⠙⠁ ⠙⠑ ⠇⠁⠝⠁ ⠏⠥⠗⠁ ⠽ ⠙⠑ ⠁⠇⠛⠕⠙⠬⠝⠂ ⠢⠟⠥⠊⠮⠝ ⠞⠑ ⠓⠁ ⠞⠑⠚⠊⠙⠕⠢⠦\n\n⠤ ⠦⠨⠍⠑ ⠓⠁⠝ ⠞⠑⠚⠊⠙⠕ ⠞⠥ ⠓⠑⠗⠍⠁⠝⠁⠂ ⠞⠥ ⠓⠑⠗⠍⠁⠝⠕⠂ ⠞⠁⠍⠃⠊⠮⠝ ⠞⠥ ⠍⠁⠙⠗⠑⠂ ⠞⠁⠍⠃⠊⠮⠝ ⠞⠥ ⠏⠁⠙⠗⠑⠄ ⠨⠎⠕⠝ ⠇⠕⠎ ⠁⠃⠥⠑⠇⠕⠎ ⠇⠕⠎ ⠟⠥⠑ ⠑⠝⠎⠑⠻⠁⠝ ⠉⠬⠍⠕ ⠎⠑ ⠞⠑⠚⠑⠦⠄\n\n⠤ ⠦⠨⠍⠁⠝⠞⠊⠞⠁ ⠓⠑⠗⠍⠕⠎⠁⠂ ⠢⠉⠬⠍⠕ ⠗⠕⠃⠁⠎⠞⠑ ⠞⠥⠎ ⠉⠕⠇⠕⠗⠑⠎ ⠁⠇ ⠁⠗⠉⠕ ⠊⠗⠊⠎⠢⠦\n\n⠤ ⠦⠨⠝⠕ ⠇⠕⠎ ⠓⠑ ⠗⠕⠃⠁⠙⠕⠄ ⠨⠑⠎ ⠑⠝\n\nPágina 12\n⠇⠁⠎ ⠏⠇⠁⠝⠞⠁⠎ ⠽ ⠁⠝⠊⠍⠁⠇⠑⠎ ⠟⠥⠑ ⠍⠊⠎ ⠉⠕⠇⠕⠗⠑⠎ ⠓⠑ ⠑⠝⠉⠕⠝⠞⠗⠁⠙⠕⠦⠄\n\n⠨⠇⠁ ⠉⠕⠉⠓⠊⠝⠊⠇⠇⠁ ⠟⠥⠑ ⠧⠊⠧⠑ ⠑⠝ ⠇⠕⠎ ⠉⠁⠉⠞⠥⠎ ⠏⠁⠗⠁ ⠇⠕⠎ ⠗⠕⠚⠕⠎⠂ ⠗⠕⠎⠁⠙⠕⠎⠂ ⠧⠊⠕⠇⠑⠞⠁⠎ ⠽ ⠁⠝⠁⠗⠁⠝⠚⠁⠙⠕⠎⠄\n\n⠨⠇⠁ ⠞⠑⠗⠉⠁ ⠗⠑⠞⠁⠍⠁⠂ ⠟⠥⠑ ⠉⠗⠑⠉⠑ ⠎⠊⠑⠍⠏⠗⠑⠂ ⠏⠁⠗⠁ ⠇⠕⠎ ⠁⠍⠁⠗⠊⠇⠇⠕⠎⠄\n\n⠨⠑⠇ ⠁⠊⠗⠁⠍⠏⠊⠞⠕⠂ ⠏⠁⠗⠁ ⠇⠕⠎ ⠁⠵⠥⠇⠑⠎⠄\n\n⠨⠉⠁⠍⠏⠕ ⠉⠕⠝ ⠍⠥⠉⠓⠁⠎ ⠏⠇⠁⠝⠞⠁⠎ ⠑⠝⠞⠗⠑ ⠑⠇⠇⠁⠎ ⠑⠇ ⠁⠊⠗⠁⠍⠏⠊⠞⠕⠄\n\nPágina 13\n⠦⠨⠇⠁⠎ ⠓⠕⠚⠁⠎ ⠧⠑⠗⠙⠑⠎⠂ ⠏⠁⠗⠁ ⠇⠕⠎ ⠧⠑⠗⠙⠑⠎⠦⠄\n\n⠤ ⠦⠨⠍⠁⠝⠞⠊⠞⠁ ⠇⠊⠝⠙⠁ ⠽ ⠉⠁⠇⠑⠝⠞⠊⠞⠁⠂ ⠉⠥⠁⠝⠙⠕ ⠇⠇⠑⠛⠥⠑ ⠇⠁ ⠝⠕⠉⠓⠑ ⠉⠕⠃⠊⠚⠁ ⠍⠊ ⠉⠥⠑⠗⠏⠕⠂ ⠁⠓⠥⠽⠑⠝⠞⠁ ⠍⠊⠎ ⠏⠑⠎⠁⠗⠑⠎ ⠽ ⠉⠥⠮⠝⠞⠁⠍⠑ ⠁⠇ ⠕⠌⠙⠕ ⠎⠥⠑⠻⠕⠎ ⠙⠑ ⠉⠕⠇⠕⠗⠑⠎⠦⠄" }
];
export function montarLecturaZorroLuna(contenedor) {
  if (!contenedor || contenedor.querySelector('.ra-lectura-cuento')) return;
  const seccion = document.createElement('section');
  seccion.className = 'ra-lectura-cuento ra-lectura-completa';
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
  const selectorFragmentos = document.createElement('div');
  selectorFragmentos.className = 'ra-lectura-modos ra-lectura-fragmentos';
  selectorFragmentos.setAttribute('role', 'group');
  selectorFragmentos.setAttribute('aria-label', 'Seleccionar fragmento del libro');
  const botonesFragmento = lecturas.map((lectura, indice) => {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.textContent = 'Fragmento ' + (indice + 1) + ': ' + lectura.titulo;
    boton.addEventListener('click', () => {
      fragmentoActual = indice;
      render();
    });
    selectorFragmentos.append(boton);
    return boton;
  });

  const contenido = document.createElement('div');
  contenido.className = 'ra-lectura-texto';
  contenido.setAttribute('role', 'region');
  contenido.setAttribute('aria-label', 'Texto completo del fragmento seleccionado');
  contenido.tabIndex = 0;
  const controles = document.createElement('div');
  controles.className = 'ra-lectura-navegacion';
  const copiar = document.createElement('button');
  copiar.type = 'button';
  copiar.textContent = 'Copiar texto completo';
  const estado = document.createElement('span');
  estado.className = 'ra-lectura-estado';
  estado.setAttribute('role', 'status');
  const aviso = document.createElement('p');
  aviso.className = 'ra-lectura-aviso';
  aviso.textContent = 'Los textos braille proceden de los documentos facilitados y requieren revisión signográfica antes de imprimirse en relieve. Se conservan las referencias de páginas del fragmento 2.';
  controles.append(copiar);
  panel.append(selectorFragmentos, modos, contenido, controles, estado, aviso);
  seccion.append(titulo, panel);
  contenedor.append(seccion);
  let modo = 'tinta';
  let fragmentoActual = 0;
  function render() {
    tinta.setAttribute('aria-pressed', String(modo === 'tinta'));
    braille.setAttribute('aria-pressed', String(modo === 'braille'));
    botonesFragmento.forEach((boton, indice) => boton.setAttribute('aria-pressed', String(fragmentoActual === indice)));
    contenido.textContent = lecturas[fragmentoActual][modo];
    contenido.classList.toggle('ra-lectura-braille', modo === 'braille');
    estado.textContent = '';
  }
  tinta.addEventListener('click', () => { modo = 'tinta'; render(); });
  braille.addEventListener('click', () => { modo = 'braille'; render(); });
  copiar.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(contenido.textContent);
      estado.textContent = 'Texto completo copiado.';
    } catch {
      estado.textContent = 'No fue posible copiar automáticamente. Selecciona el texto para copiarlo.';
    }
  });
  render();
}
