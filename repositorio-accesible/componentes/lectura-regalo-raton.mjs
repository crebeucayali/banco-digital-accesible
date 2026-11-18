// Lector del recurso «El regalo de ratón». El cuento es un solo bloque por modalidad.
// Transcripción tomada del archivo adjunto; se excluyen encabezados, paginación y nota editorial.
const relato = {
  tinta: "Cuando Ratón llegó a vivir al bosque Sachakuna, todo era diferente. Cada uno de los animales del bosque vivía muy ocupado en sus quehaceres, sin tiempo para nada más.\n\nVizcacha siempre estaba trabajando en el huerto.\n\nOso se quedaba en su casa todo el día comiendo miel.\n\nMono saltaba de aquí para allá haciendo mil cosas.\n\nOtorongo arreglaba con sus herramientas todo lo que encontraba a su paso, mientras Sajino se pasaba el día entero pensando qué hacer.\n\nRatón no los comprendía. “La vida es tan linda”, se decía.\n\nDespués de armar su casa y ordenarla, decidió salir a dar un paseo para saludar a sus nuevos vecinos. Pasó por la casa de Vizcacha saludándola con una gran sonrisa, pero ella muy temerosa solo le correspondió con una mueca.\n\nLuego pasó por la casa de Oso y lo saludó sonriendo feliz. Oso se sorprendió, nunca nadie lo había saludado con una sonrisa tan amable y respondió el saludo rápidamente con la garra llena de miel. Cuando pasó por la casa de Mono hizo lo mismo, pero él pensó que Ratón estaba un poco loco para saludarlo de esa manera sin conocerlo. Con Otorongo fue más difícil porque él en lugar de sonreír, gruñó, y Sajino ni lo miró. Definitivamente algo extraño pasaba con los animales de aquel bosque.\n\n- ¡Qué raro! - se dijo Ratón.\n\n- Nunca nadie ha dejado de devolverme la sonrisa y el saludo. Ratón se sintió triste por sus nuevos vecinos. Estaban tan ocupados en sus quehaceres diarios, que no tenían tiempo para hacer las cosas que les hacían sentir alegría. En cambio para él, sonreír era como respirar y pensaba que la alegría es el secreto que nos ayuda a mirar el mundo con optimismo.\n\nEs como cuando el cielo está lleno de nubes y sientes tristeza al no ver el sol. Pero luego te das cuenta que ellas están ahí, cargaditas de lluvia, para regar y embellecer los campos. Una mañana, ratón se detuvo frente a un tronco para observar a una ardilla tratando de meter una nuez en un hueco y comenzó a reír justo en el momento en el que Vizcacha pasaba por ahí.\n\nVizcacha miró a Ratón confundida, no entendía de qué se reía, pero eso no importaba. Su risa era tan contagiosa que no pudo evitar reír con él. Hasta que los dos comenzaron a reír a carcajadas. Luego pasó Oso y al ver a los dos amigos riendo, no pudo evitar seguirlos y los tres soltaron fuertes risotadas. Mono, al escuchar las risas, quiso averiguar de dónde provenían y salió de su casa siguiendo el sonido. Al ver a sus amigos, él también terminó riendo alegremente con ellos. De pronto, llegó Otorongo renegando por el escándalo. Al verlo, todos se pusieron serios hasta que no pudieron aguantarse más y soltaron una carcajada. Otorongo ya iba a comenzar a rugir furioso, pero cuando abrió la boca en lugar de un rugido le salió una escandalosa risa. Finalmente, Sajino se acercó a ellos riendo sin parar contagiado por la algarabía que escuchó desde su casa. Los amigos del bosque Sachakuna, sintieron tanta alegría que se olvidaron de sus trabajos y preocupaciones. Sin embargo, cuando regresaron a sus casas, todo volvió a ser como antes. Entonces decidieron observar a Ratón para saber qué era lo que le hacía sonreír, y vieron que luego de ordenar y limpiar su casa, siempre saltaba en su cama elástica, muy divertido. Paseaba por el bosque en su bicicleta anaranjada disfrutando del viento. Leía un libro de chistes soltando fuertes carcajadas, perseguía mariposas entretenido y rodaba por la colina una y otra vez riendo alegremente. Fue así que se dieron cuenta que Ratón tenía el tiempo suficiente para las cosas que alegraban su corazón y decidieron probar. Es así que todos luego de cumplir con sus obligaciones, comenzaron a hacer las cosas que los llenaban de alegría. Vizcacha comenzó a preparar las galletas que tanto le gustaban, Oso empezó a leer los libros de chistes que le prestaba Ratón, Mono recordó lo divertido que era colgarse de los árboles y hacer piruetas. Otorongo volvió a construir barquitos y aviones de papel para jugar con ellos y Sajino empezó a tocar el violín que su abuelo le regaló. Gracias al regalo de Ratón, algo cambió en el bosque Sachakuna. Todos los animales que allí habitaban volvieron a conectarse con la alegría que tenían en su interior. Y es que eso sucede con la alegría, siempre se contagia.",
  braille: "⠨⠉⠥⠁⠝⠙⠕ ⠨⠗⠁⠞⠬⠝ ⠇⠇⠑⠛⠬ ⠁ ⠧⠊⠧⠊⠗ ⠁⠇ ⠃⠕⠎⠟⠥⠑ ⠨⠎⠁⠉⠓⠁⠅⠥⠝⠁⠂ ⠞⠕⠙⠕ ⠑⠗⠁ ⠙⠊⠋⠑⠗⠑⠝⠞⠑⠄ ⠨⠉⠁⠙⠁ ⠥⠝⠕ ⠙⠑ ⠇⠕⠎ ⠁⠝⠊⠍⠁⠇⠑⠎ ⠙⠑⠇ ⠃⠕⠎⠟⠥⠑ ⠧⠊⠧⠌⠁ ⠍⠥⠽ ⠕⠉⠥⠏⠁⠙⠕ ⠑⠝ ⠎⠥⠎ ⠟⠥⠑⠓⠁⠉⠑⠗⠑⠎⠂ ⠎⠊⠝ ⠞⠊⠑⠍⠏⠕ ⠏⠁⠗⠁ ⠝⠁⠙⠁ ⠍⠷⠎⠄\n\n⠨⠧⠊⠵⠉⠁⠉⠓⠁ ⠎⠊⠑⠍⠏⠗⠑ ⠑⠎⠞⠁⠃⠁ ⠞⠗⠁⠃⠁⠚⠁⠝⠙⠕ ⠑⠝ ⠑⠇ ⠓⠥⠑⠗⠞⠕⠄\n\n⠨⠕⠎⠕ ⠎⠑ ⠟⠥⠑⠙⠁⠃⠁ ⠑⠝ ⠎⠥ ⠉⠁⠎⠁ ⠞⠕⠙⠕ ⠑⠇ ⠙⠌⠁ ⠉⠕⠍⠊⠑⠝⠙⠕ ⠍⠊⠑⠇⠄\n\n⠨⠍⠕⠝⠕ ⠎⠁⠇⠞⠁⠃⠁ ⠙⠑ ⠁⠟⠥⠌ ⠏⠁⠗⠁ ⠁⠇⠇⠷ ⠓⠁⠉⠊⠑⠝⠙⠕ ⠍⠊⠇ ⠉⠕⠎⠁⠎⠄\n\n⠨⠕⠞⠕⠗⠕⠝⠛⠕ ⠁⠗⠗⠑⠛⠇⠁⠃⠁ ⠉⠕⠝ ⠎⠥⠎ ⠓⠑⠗⠗⠁⠍⠊⠑⠝⠞⠁⠎ ⠞⠕⠙⠕ ⠇⠕ ⠟⠥⠑ ⠑⠝⠉⠕⠝⠞⠗⠁⠃⠁ ⠁ ⠎⠥ ⠏⠁⠎⠕⠂ ⠍⠊⠑⠝⠞⠗⠁⠎ ⠨⠎⠁⠚⠊⠝⠕ ⠎⠑ ⠏⠁⠎⠁⠃⠁ ⠑⠇ ⠙⠌⠁ ⠑⠝⠞⠑⠗⠕ ⠏⠑⠝⠎⠁⠝⠙⠕ ⠟⠥⠮ ⠓⠁⠉⠑⠗⠄\n\n⠨⠗⠁⠞⠬⠝ ⠝⠕ ⠇⠕⠎ ⠉⠕⠍⠏⠗⠑⠝⠙⠌⠁⠄ ⠦⠨⠇⠁ ⠧⠊⠙⠁ ⠑⠎ ⠞⠁⠝ ⠇⠊⠝⠙⠁⠴⠂ ⠎⠑ ⠙⠑⠉⠌⠁⠄\n\n⠨⠙⠑⠎⠏⠥⠮⠎ ⠙⠑ ⠁⠗⠍⠁⠗ ⠎⠥ ⠉⠁⠎⠁ ⠽ ⠕⠗⠙⠑⠝⠁⠗⠇⠁⠂ ⠙⠑⠉⠊⠙⠊⠬ ⠎⠁⠇⠊⠗ ⠁ ⠙⠁⠗ ⠥⠝ ⠏⠁⠎⠑⠕ ⠏⠁⠗⠁ ⠎⠁⠇⠥⠙⠁⠗ ⠁ ⠎⠥⠎ ⠝⠥⠑⠧⠕⠎ ⠧⠑⠉⠊⠝⠕⠎⠄ ⠨⠏⠁⠎⠬ ⠏⠕⠗ ⠇⠁ ⠉⠁⠎⠁ ⠙⠑ ⠨⠧⠊⠵⠉⠁⠉⠓⠁ ⠎⠁⠇⠥⠙⠷⠝⠙⠕⠇⠁ ⠉⠕⠝ ⠥⠝⠁ ⠛⠗⠁⠝ ⠎⠕⠝⠗⠊⠎⠁⠂ ⠏⠑⠗⠕ ⠑⠇⠇⠁ ⠍⠥⠽ ⠞⠑⠍⠑⠗⠕⠎⠁ ⠎⠕⠇⠕ ⠇⠑ ⠉⠕⠗⠗⠑⠎⠏⠕⠝⠙⠊⠬ ⠉⠕⠝ ⠥⠝⠁ ⠍⠥⠑⠉⠁⠄\n\n⠨⠇⠥⠑⠛⠕ ⠏⠁⠎⠬ ⠏⠕⠗ ⠇⠁ ⠉⠁⠎⠁ ⠙⠑ ⠨⠕⠎⠕ ⠽ ⠇⠕ ⠎⠁⠇⠥⠙⠬ ⠎⠕⠝⠗⠊⠑⠝⠙⠕ ⠋⠑⠇⠊⠵⠄ ⠨⠕⠎⠕ ⠎⠑ ⠎⠕⠗⠏⠗⠑⠝⠙⠊⠬⠂ ⠝⠥⠝⠉⠁ ⠝⠁⠙⠊⠑ ⠇⠕ ⠓⠁⠃⠌⠁ ⠎⠁⠇⠥⠙⠁⠙⠕ ⠉⠕⠝ ⠥⠝⠁ ⠎⠕⠝⠗⠊⠎⠁ ⠞⠁⠝ ⠁⠍⠁⠃⠇⠑ ⠽ ⠗⠑⠎⠏⠕⠝⠙⠊⠬ ⠑⠇ ⠎⠁⠇⠥⠙⠕ ⠗⠷⠏⠊⠙⠁⠍⠑⠝⠞⠑ ⠉⠕⠝ ⠇⠁ ⠛⠁⠗⠗⠁ ⠇⠇⠑⠝⠁ ⠙⠑ ⠍⠊⠑⠇⠄ ⠨⠉⠥⠁⠝⠙⠕ ⠏⠁⠎⠬ ⠏⠕⠗ ⠇⠁ ⠉⠁⠎⠁ ⠙⠑ ⠨⠍⠕⠝⠕ ⠓⠊⠵⠕ ⠇⠕ ⠍⠊⠎⠍⠕⠂ ⠏⠑⠗⠕ ⠮⠇ ⠏⠑⠝⠎⠬ ⠟⠥⠑ ⠨⠗⠁⠞⠬⠝ ⠑⠎⠞⠁⠃⠁ ⠥⠝ ⠏⠕⠉⠕ ⠇⠕⠉⠕ ⠏⠁⠗⠁ ⠎⠁⠇⠥⠙⠁⠗⠇⠕ ⠙⠑ ⠑⠎⠁ ⠍⠁⠝⠑⠗⠁ ⠎⠊⠝ ⠉⠕⠝⠕⠉⠑⠗⠇⠕⠄ ⠨⠉⠕⠝ ⠨⠕⠞⠕⠗⠕⠝⠛⠕ ⠋⠥⠑ ⠍⠷⠎ ⠙⠊⠋⠌⠉⠊⠇ ⠏⠕⠗⠟⠥⠑ ⠮⠇ ⠑⠝ ⠇⠥⠛⠁⠗ ⠙⠑ ⠎⠕⠝⠗⠑⠌⠗⠂ ⠛⠗⠥⠻⠬⠂ ⠽ ⠨⠎⠁⠚⠊⠝⠕ ⠝⠊ ⠇⠕ ⠍⠊⠗⠬⠄ ⠨⠙⠑⠋⠊⠝⠊⠞⠊⠧⠁⠍⠑⠝⠞⠑ ⠁⠇⠛⠕ ⠑⠭⠞⠗⠁⠻⠕ ⠏⠁⠎⠁⠃⠁ ⠉⠕⠝ ⠇⠕⠎ ⠁⠝⠊⠍⠁⠇⠑⠎ ⠙⠑ ⠁⠟⠥⠑⠇ ⠃⠕⠎⠟⠥⠑⠄\n\n⠤ ⠖⠨⠟⠥⠮ ⠗⠁⠗⠕⠖ ⠤ ⠎⠑ ⠙⠊⠚⠕ ⠨⠗⠁⠞⠬⠝⠄\n\n⠤ ⠨⠝⠥⠝⠉⠁ ⠝⠁⠙⠊⠑ ⠓⠁ ⠙⠑⠚⠁⠙⠕ ⠙⠑ ⠙⠑⠧⠕⠇⠧⠑⠗⠍⠑ ⠇⠁ ⠎⠕⠝⠗⠊⠎⠁ ⠽ ⠑⠇ ⠎⠁⠇⠥⠙⠕⠄ ⠨⠗⠁⠞⠬⠝ ⠎⠑ ⠎⠊⠝⠞⠊⠬ ⠞⠗⠊⠎⠞⠑ ⠏⠕⠗ ⠎⠥⠎ ⠝⠥⠑⠧⠕⠎ ⠧⠑⠉⠊⠝⠕⠎⠄ ⠨⠑⠎⠞⠁⠃⠁⠝ ⠞⠁⠝ ⠕⠉⠥⠏⠁⠙⠕⠎ ⠑⠝ ⠎⠥⠎ ⠟⠥⠑⠓⠁⠉⠑⠗⠑⠎ ⠙⠊⠁⠗⠊⠕⠎⠂ ⠟⠥⠑ ⠝⠕ ⠞⠑⠝⠌⠁⠝ ⠞⠊⠑⠍⠏⠕ ⠏⠁⠗⠁ ⠓⠁⠉⠑⠗ ⠇⠁⠎ ⠉⠕⠎⠁⠎ ⠟⠥⠑ ⠇⠑⠎ ⠓⠁⠉⠌⠁⠝ ⠎⠑⠝⠞⠊⠗ ⠁⠇⠑⠛⠗⠌⠁⠄ ⠨⠑⠝ ⠉⠁⠍⠃⠊⠕ ⠏⠁⠗⠁ ⠮⠇⠂ ⠎⠕⠝⠗⠑⠌⠗ ⠑⠗⠁ ⠉⠕⠍⠕ ⠗⠑⠎⠏⠊⠗⠁⠗ ⠽ ⠏⠑⠝⠎⠁⠃⠁ ⠟⠥⠑ ⠇⠁ ⠁⠇⠑⠛⠗⠌⠁ ⠑⠎ ⠑⠇ ⠎⠑⠉⠗⠑⠞⠕ ⠟⠥⠑ ⠝⠕⠎ ⠁⠽⠥⠙⠁ ⠁ ⠍⠊⠗⠁⠗ ⠑⠇ ⠍⠥⠝⠙⠕ ⠉⠕⠝ ⠕⠏⠞⠊⠍⠊⠎⠍⠕⠄\n\n⠨⠑⠎ ⠉⠕⠍⠕ ⠉⠥⠁⠝⠙⠕ ⠑⠇ ⠉⠊⠑⠇⠕ ⠑⠎⠞⠷ ⠇⠇⠑⠝⠕ ⠙⠑ ⠝⠥⠃⠑⠎ ⠽ ⠎⠊⠑⠝⠞⠑⠎ ⠞⠗⠊⠎⠞⠑⠵⠁ ⠁⠇ ⠝⠕ ⠧⠑⠗ ⠑⠇ ⠎⠕⠇⠄ ⠨⠏⠑⠗⠕ ⠇⠥⠑⠛⠕ ⠞⠑ ⠙⠁⠎ ⠉⠥⠑⠝⠞⠁ ⠟⠥⠑ ⠑⠇⠇⠁⠎ ⠑⠎⠞⠷⠝ ⠁⠓⠌⠂ ⠉⠁⠗⠛⠁⠙⠊⠞⠁⠎ ⠙⠑ ⠇⠇⠥⠧⠊⠁⠂ ⠏⠁⠗⠁ ⠗⠑⠛⠁⠗ ⠽ ⠑⠍⠃⠑⠇⠇⠑⠉⠑⠗ ⠇⠕⠎ ⠉⠁⠍⠏⠕⠎⠄ ⠨⠥⠝⠁ ⠍⠁⠻⠁⠝⠁⠂ ⠗⠁⠞⠬⠝ ⠎⠑ ⠙⠑⠞⠥⠧⠕ ⠋⠗⠑⠝⠞⠑ ⠁ ⠥⠝ ⠞⠗⠕⠝⠉⠕ ⠏⠁⠗⠁ ⠕⠃⠎⠑⠗⠧⠁⠗ ⠁ ⠥⠝⠁ ⠁⠗⠙⠊⠇⠇⠁ ⠞⠗⠁⠞⠁⠝⠙⠕ ⠙⠑ ⠍⠑⠞⠑⠗ ⠥⠝⠁ ⠝⠥⠑⠵ ⠑⠝ ⠥⠝ ⠓⠥⠑⠉⠕ ⠽ ⠉⠕⠍⠑⠝⠵⠬ ⠁ ⠗⠑⠌⠗ ⠚⠥⠎⠞⠕ ⠑⠝ ⠑⠇ ⠍⠕⠍⠑⠝⠞⠕ ⠑⠝ ⠑⠇ ⠟⠥⠑ ⠨⠧⠊⠵⠉⠁⠉⠓⠁ ⠏⠁⠎⠁⠃⠁ ⠏⠕⠗ ⠁⠓⠌⠄\n\n⠨⠧⠊⠵⠉⠁⠉⠓⠁ ⠍⠊⠗⠬ ⠁ ⠨⠗⠁⠞⠬⠝ ⠉⠕⠝⠋⠥⠝⠙⠊⠙⠁⠂ ⠝⠕ ⠑⠝⠞⠑⠝⠙⠌⠁ ⠙⠑ ⠟⠥⠮ ⠎⠑ ⠗⠑⠌⠁⠂ ⠏⠑⠗⠕ ⠑⠎⠕ ⠝⠕ ⠊⠍⠏⠕⠗⠞⠁⠃⠁⠄ ⠨⠎⠥ ⠗⠊⠎⠁ ⠑⠗⠁ ⠞⠁⠝ ⠉⠕⠝⠞⠁⠛⠊⠕⠎⠁ ⠟⠥⠑ ⠝⠕ ⠏⠥⠙⠕ ⠑⠧⠊⠞⠁⠗ ⠗⠑⠌⠗ ⠉⠕⠝ ⠮⠇⠄ ⠨⠓⠁⠎⠞⠁ ⠟⠥⠑ ⠇⠕⠎ ⠙⠕⠎ ⠉⠕⠍⠑⠝⠵⠁⠗⠕⠝ ⠁ ⠗⠑⠌⠗ ⠁ ⠉⠁⠗⠉⠁⠚⠁⠙⠁⠎⠄ ⠨⠇⠥⠑⠛⠕ ⠏⠁⠎⠬ ⠨⠕⠎⠕ ⠽ ⠁⠇ ⠧⠑⠗ ⠁ ⠇⠕⠎ ⠙⠕⠎ ⠁⠍⠊⠛⠕⠎ ⠗⠊⠑⠝⠙⠕⠂ ⠝⠕ ⠏⠥⠙⠕ ⠑⠧⠊⠞⠁⠗ ⠎⠑⠛⠥⠊⠗⠇⠕⠎ ⠽ ⠇⠕⠎ ⠞⠗⠑⠎ ⠎⠕⠇⠞⠁⠗⠕⠝ ⠋⠥⠑⠗⠞⠑⠎ ⠗⠊⠎⠕⠞⠁⠙⠁⠎⠄ ⠨⠍⠕⠝⠕⠂ ⠁⠇ ⠑⠎⠉⠥⠉⠓⠁⠗ ⠇⠁⠎ ⠗⠊⠎⠁⠎⠂ ⠟⠥⠊⠎⠕ ⠁⠧⠑⠗⠊⠛⠥⠁⠗ ⠙⠑ ⠙⠬⠝⠙⠑ ⠏⠗⠕⠧⠑⠝⠌⠁⠝ ⠽ ⠎⠁⠇⠊⠬ ⠙⠑ ⠎⠥ ⠉⠁⠎⠁ ⠎⠊⠛⠥⠊⠑⠝⠙⠕ ⠑⠇ ⠎⠕⠝⠊⠙⠕⠄ ⠨⠁⠇ ⠧⠑⠗ ⠁ ⠎⠥⠎ ⠁⠍⠊⠛⠕⠎⠂ ⠮⠇ ⠞⠁⠍⠃⠊⠮⠝ ⠞⠑⠗⠍⠊⠝⠬ ⠗⠊⠑⠝⠙⠕ ⠁⠇⠑⠛⠗⠑⠍⠑⠝⠞⠑ ⠉⠕⠝ ⠑⠇⠇⠕⠎⠄ ⠨⠙⠑ ⠏⠗⠕⠝⠞⠕⠂ ⠇⠇⠑⠛⠬ ⠨⠕⠞⠕⠗⠕⠝⠛⠕ ⠗⠑⠝⠑⠛⠁⠝⠙⠕ ⠏⠕⠗ ⠑⠇ ⠑⠎⠉⠷⠝⠙⠁⠇⠕⠄ ⠨⠁⠇ ⠧⠑⠗⠇⠕⠂ ⠞⠕⠙⠕⠎ ⠎⠑ ⠏⠥⠎⠊⠑⠗⠕⠝ ⠎⠑⠗⠊⠕⠎ ⠓⠁⠎⠞⠁ ⠟⠥⠑ ⠝⠕ ⠏⠥⠙⠊⠑⠗⠕⠝ ⠁⠛⠥⠁⠝⠞⠁⠗⠎⠑ ⠍⠷⠎ ⠽ ⠎⠕⠇⠞⠁⠗⠕⠝ ⠥⠝⠁ ⠉⠁⠗⠉⠁⠚⠁⠙⠁⠄ ⠨⠕⠞⠕⠗⠕⠝⠛⠕ ⠽⠁ ⠊⠃⠁ ⠁ ⠉⠕⠍⠑⠝⠵⠁⠗ ⠁ ⠗⠥⠛⠊⠗ ⠋⠥⠗⠊⠕⠎⠕⠂ ⠏⠑⠗⠕ ⠉⠥⠁⠝⠙⠕ ⠁⠃⠗⠊⠬ ⠇⠁ ⠃⠕⠉⠁ ⠑⠝ ⠇⠥⠛⠁⠗ ⠙⠑ ⠥⠝ ⠗⠥⠛⠊⠙⠕ ⠇⠑ ⠎⠁⠇⠊⠬ ⠥⠝⠁ ⠑⠎⠉⠁⠝⠙⠁⠇⠕⠎⠁ ⠗⠊⠎⠁⠄ ⠨⠋⠊⠝⠁⠇⠍⠑⠝⠞⠑⠂ ⠨⠎⠁⠚⠊⠝⠕ ⠎⠑ ⠁⠉⠑⠗⠉⠬ ⠁ ⠑⠇⠇⠕⠎ ⠗⠊⠑⠝⠙⠕ ⠎⠊⠝ ⠏⠁⠗⠁⠗ ⠉⠕⠝⠞⠁⠛⠊⠁⠙⠕ ⠏⠕⠗ ⠇⠁ ⠁⠇⠛⠁⠗⠁⠃⠌⠁ ⠟⠥⠑ ⠑⠎⠉⠥⠉⠓⠬ ⠙⠑⠎⠙⠑ ⠎⠥ ⠉⠁⠎⠁⠄ ⠨⠇⠕⠎ ⠁⠍⠊⠛⠕⠎ ⠙⠑⠇ ⠃⠕⠎⠟⠥⠑ ⠨⠎⠁⠉⠓⠁⠅⠥⠝⠁⠂ ⠎⠊⠝⠞⠊⠑⠗⠕⠝ ⠞⠁⠝⠞⠁ ⠁⠇⠑⠛⠗⠌⠁ ⠟⠥⠑ ⠎⠑ ⠕⠇⠧⠊⠙⠁⠗⠕⠝ ⠙⠑ ⠎⠥⠎ ⠞⠗⠁⠃⠁⠚⠕⠎ ⠽ ⠏⠗⠑⠕⠉⠥⠏⠁⠉⠊⠕⠝⠑⠎⠄ ⠨⠎⠊⠝ ⠑⠍⠃⠁⠗⠛⠕⠂ ⠉⠥⠁⠝⠙⠕ ⠗⠑⠛⠗⠑⠎⠁⠗⠕⠝ ⠁ ⠎⠥⠎ ⠉⠁⠎⠁⠎⠂ ⠞⠕⠙⠕ ⠧⠕⠇⠧⠊⠬ ⠁ ⠎⠑⠗ ⠉⠕⠍⠕ ⠁⠝⠞⠑⠎⠄ ⠨⠑⠝⠞⠕⠝⠉⠑⠎ ⠙⠑⠉⠊⠙⠊⠑⠗⠕⠝ ⠕⠃⠎⠑⠗⠧⠁⠗ ⠁ ⠨⠗⠁⠞⠬⠝ ⠏⠁⠗⠁ ⠎⠁⠃⠑⠗ ⠟⠥⠮ ⠑⠗⠁ ⠇⠕ ⠟⠥⠑ ⠇⠑ ⠓⠁⠉⠌⠁ ⠎⠕⠝⠗⠑⠌⠗⠂ ⠽ ⠧⠊⠑⠗⠕⠝ ⠟⠥⠑ ⠇⠥⠑⠛⠕ ⠙⠑ ⠕⠗⠙⠑⠝⠁⠗ ⠽ ⠇⠊⠍⠏⠊⠁⠗ ⠎⠥ ⠉⠁⠎⠁⠂ ⠎⠊⠑⠍⠏⠗⠑ ⠎⠁⠇⠞⠁⠃⠁ ⠑⠝ ⠎⠥ ⠉⠁⠍⠁ ⠑⠇⠷⠎⠞⠊⠉⠁⠂ ⠍⠥⠽ ⠙⠊⠧⠑⠗⠞⠊⠙⠕⠄ ⠨⠏⠁⠎⠑⠁⠃⠁ ⠏⠕⠗ ⠑⠇ ⠃⠕⠎⠟⠥⠑ ⠑⠝ ⠎⠥ ⠃⠊⠉⠊⠉⠇⠑⠞⠁ ⠁⠝⠁⠗⠁⠝⠚⠁⠙⠁ ⠙⠊⠎⠋⠗⠥⠞⠁⠝⠙⠕ ⠙⠑⠇ ⠧⠊⠑⠝⠞⠕⠄ ⠨⠇⠑⠌⠁ ⠥⠝ ⠇⠊⠃⠗⠕ ⠙⠑ ⠉⠓⠊⠎⠞⠑⠎ ⠎⠕⠇⠞⠁⠝⠙⠕ ⠋⠥⠑⠗⠞⠑⠎ ⠉⠁⠗⠉⠁⠚⠁⠙⠁⠎⠂ ⠏⠑⠗⠎⠑⠛⠥⠌⠁ ⠍⠁⠗⠊⠏⠕⠎⠁⠎ ⠑⠝⠞⠗⠑⠞⠑⠝⠊⠙⠕ ⠽ ⠗⠕⠙⠁⠃⠁ ⠏⠕⠗ ⠇⠁ ⠉⠕⠇⠊⠝⠁ ⠥⠝⠁ ⠽ ⠕⠞⠗⠁ ⠧⠑⠵ ⠗⠊⠑⠝⠙⠕ ⠁⠇⠑⠛⠗⠑⠍⠑⠝⠞⠑⠄ ⠨⠋⠥⠑ ⠁⠎⠌ ⠟⠥⠑ ⠎⠑ ⠙⠊⠑⠗⠕⠝ ⠉⠥⠑⠝⠞⠁ ⠟⠥⠑ ⠨⠗⠁⠞⠬⠝ ⠞⠑⠝⠌⠁ ⠑⠇ ⠞⠊⠑⠍⠏⠕ ⠎⠥⠋⠊⠉⠊⠑⠝⠞⠑ ⠏⠁⠗⠁ ⠇⠁⠎ ⠉⠕⠎⠁⠎ ⠟⠥⠑ ⠁⠇⠑⠛⠗⠁⠃⠁⠝ ⠎⠥ ⠉⠕⠗⠁⠵⠬⠝ ⠽ ⠙⠑⠉⠊⠙⠊⠑⠗⠕⠝ ⠏⠗⠕⠃⠁⠗⠄ ⠨⠑⠎ ⠁⠎⠌ ⠟⠥⠑ ⠞⠕⠙⠕⠎ ⠇⠥⠑⠛⠕ ⠙⠑ ⠉⠥⠍⠏⠇⠊⠗ ⠉⠕⠝ ⠎⠥⠎ ⠕⠃⠇⠊⠛⠁⠉⠊⠕⠝⠑⠎⠂ ⠉⠕⠍⠑⠝⠵⠁⠗⠕⠝ ⠁ ⠓⠁⠉⠑⠗ ⠇⠁⠎ ⠉⠕⠎⠁⠎ ⠟⠥⠑ ⠇⠕⠎ ⠇⠇⠑⠝⠁⠃⠁⠝ ⠙⠑ ⠁⠇⠑⠛⠗⠌⠁⠄ ⠨⠧⠊⠵⠉⠁⠉⠓⠁ ⠉⠕⠍⠑⠝⠵⠬ ⠁ ⠏⠗⠑⠏⠁⠗⠁⠗ ⠇⠁⠎ ⠛⠁⠇⠇⠑⠞⠁⠎ ⠟⠥⠑ ⠞⠁⠝⠞⠕ ⠇⠑ ⠛⠥⠎⠞⠁⠃⠁⠝⠂ ⠨⠕⠎⠕ ⠑⠍⠏⠑⠵⠬ ⠁ ⠇⠑⠑⠗ ⠇⠕⠎ ⠇⠊⠃⠗⠕⠎ ⠙⠑ ⠉⠓⠊⠎⠞⠑⠎ ⠟⠥⠑ ⠇⠑ ⠏⠗⠑⠎⠞⠁⠃⠁ ⠨⠗⠁⠞⠬⠝⠂ ⠨⠍⠕⠝⠕ ⠗⠑⠉⠕⠗⠙⠬ ⠇⠕ ⠙⠊⠧⠑⠗⠞⠊⠙⠕ ⠟⠥⠑ ⠑⠗⠁ ⠉⠕⠇⠛⠁⠗⠎⠑ ⠙⠑ ⠇⠕⠎ ⠷⠗⠃⠕⠇⠑⠎ ⠽ ⠓⠁⠉⠑⠗ ⠏⠊⠗⠥⠑⠞⠁⠎⠄ ⠨⠕⠞⠕⠗⠕⠝⠛⠕ ⠧⠕⠇⠧⠊⠬ ⠁ ⠉⠕⠝⠎⠞⠗⠥⠊⠗ ⠃⠁⠗⠟⠥⠊⠞⠕⠎ ⠽ ⠁⠧⠊⠕⠝⠑⠎ ⠙⠑ ⠏⠁⠏⠑⠇ ⠏⠁⠗⠁ ⠚⠥⠛⠁⠗ ⠉⠕⠝ ⠑⠇⠇⠕⠎ ⠽ ⠨⠎⠁⠚⠊⠝⠕ ⠑⠍⠏⠑⠵⠬ ⠁ ⠞⠕⠉⠁⠗ ⠑⠇ ⠧⠊⠕⠇⠌⠝ ⠟⠥⠑ ⠎⠥ ⠁⠃⠥⠑⠇⠕ ⠇⠑ ⠗⠑⠛⠁⠇⠬⠄ ⠨⠛⠗⠁⠉⠊⠁⠎ ⠁⠇ ⠗⠑⠛⠁⠇⠕ ⠙⠑ ⠨⠗⠁⠞⠬⠝⠂ ⠁⠇⠛⠕ ⠉⠁⠍⠃⠊⠬ ⠑⠝ ⠑⠇ ⠃⠕⠎⠟⠥⠑ ⠨⠎⠁⠉⠓⠁⠅⠥⠝⠁⠄ ⠨⠞⠕⠙⠕⠎ ⠇⠕⠎ ⠁⠝⠊⠍⠁⠇⠑⠎ ⠟⠥⠑ ⠁⠇⠇⠌ ⠓⠁⠃⠊⠞⠁⠃⠁⠝ ⠧⠕⠇⠧⠊⠑⠗⠕⠝ ⠁ ⠉⠕⠝⠑⠉⠞⠁⠗⠎⠑ ⠉⠕⠝ ⠇⠁ ⠁⠇⠑⠛⠗⠌⠁ ⠟⠥⠑ ⠞⠑⠝⠌⠁⠝ ⠑⠝ ⠎⠥ ⠊⠝⠞⠑⠗⠊⠕⠗⠄ ⠨⠽ ⠑⠎ ⠟⠥⠑ ⠑⠎⠕ ⠎⠥⠉⠑⠙⠑ ⠉⠕⠝ ⠇⠁ ⠁⠇⠑⠛⠗⠌⠁⠂ ⠎⠊⠑⠍⠏⠗⠑ ⠎⠑ ⠉⠕⠝⠞⠁⠛⠊⠁⠄"
};
export function montarLecturaRegaloRaton(contenedor) {
  if (!contenedor || contenedor.querySelector('.ra-lectura-cuento')) return;
  const seccion = document.createElement('section');
  seccion.className = 'ra-lectura-cuento ra-lectura-completa';
  seccion.setAttribute('aria-label', 'Lectura digital de El regalo de ratón');
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
  const contenido = document.createElement('div');
  contenido.className = 'ra-lectura-texto';
  contenido.setAttribute('role', 'region');
  contenido.setAttribute('aria-label', 'Texto completo del cuento');
  contenido.tabIndex = 0;
  const controles = document.createElement('div');
  controles.className = 'ra-lectura-navegacion';
  const copiar = document.createElement('button');
  copiar.type = 'button';
  copiar.textContent = 'Copiar texto completo';
  controles.append(copiar);
  const estado = document.createElement('span');
  estado.className = 'ra-lectura-estado';
  estado.setAttribute('role', 'status');
  const aviso = document.createElement('p');
  aviso.className = 'ra-lectura-aviso';
  aviso.textContent = 'El braille Unicode fue generado a partir del texto y requiere revisión signográfica antes de imprimirse en relieve.';
  panel.append(modos, contenido, controles, estado, aviso);
  seccion.append(titulo, panel);
  contenedor.append(seccion);
  let modo = 'tinta';
  function render() {
    tinta.setAttribute('aria-pressed', String(modo === 'tinta'));
    braille.setAttribute('aria-pressed', String(modo === 'braille'));
    contenido.textContent = relato[modo];
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
