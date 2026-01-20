// ========== DATOS Y CONFIGURACIÓN ==========
const levelTexts = {
    1: [
        // Ejercicios básicos de repetición
        'asdf asdf asdf asdf', 'fdsa fdsa fdsa fdsa', 'asdf fdsa asdf fdsa',
        'aaa sss ddd fff aaa', 'fff ddd sss aaa fff', 'asdf asdf fdsa fdsa',
        'aaaa ssss dddd ffff', 'ffff dddd ssss aaaa', 'asas dfdf asas dfdf',
        'afaf sdsd afaf sdsd', 'dada fafa dada fafa', 'sasa dfdf sasa dfdf',
        // Combinaciones de dos letras
        'as as as as as as', 'sa sa sa sa sa sa', 'df df df df df df',
        'fd fd fd fd fd fd', 'ad ad ad ad ad ad', 'da da da da da da',
        'sf sf sf sf sf sf', 'fs fs fs fs fs fs', 'af af af af af af',
        'fa fa fa fa fa fa', 'sd sd sd sd sd sd', 'ds ds ds ds ds ds',
        // Palabras cortas con ASDF
        'dad dad dad dad dad', 'sad sad sad sad sad', 'fad fad fad fad fad',
        'ads ads ads ads ads', 'das das das das das', 'fas fas fas fas fas',
        'saf saf saf saf saf', 'daf daf daf daf daf', 'afd afd afd afd afd',
        // Secuencias progresivas
        'a s d f a s d f', 'f d s a f d s a', 'as df as df as df',
        'fd sa fd sa fd sa', 'asd fds asd fds asd', 'dsf ads dsf ads dsf',
        // Patrones rítmicos
        'asdf fdsa asdf fdsa', 'afsd dfas afsd dfas', 'sadf fdas sadf fdas',
        'dafs sfad dafs sfad', 'fads sdaf fads sdaf', 'sdfa afds sdfa afds',
        // Ejercicios de velocidad
        'asdfasdf asdfasdf', 'fdsafdsa fdsafdsa', 'asdffdsa asdffdsa',
        'asdfsadf asdfsadf', 'fdsaasdf fdsaasdf', 'sadffdas sadffdas'
    ],
    2: [
        // Ejercicios básicos de repetición
        'jklñ jklñ jklñ jklñ', 'ñlkj ñlkj ñlkj ñlkj', 'jklñ ñlkj jklñ ñlkj',
        'jjj kkk lll ñññ jjj', 'ñññ lll kkk jjj ñññ', 'jklñ jklñ ñlkj ñlkj',
        'jjjj kkkk llll ññññ', 'ññññ llll kkkk jjjj', 'jkjk lñlñ jkjk lñlñ',
        'jñjñ klkl jñjñ klkl', 'ljlj kñkñ ljlj kñkñ', 'klkl jñjñ klkl jñjñ',
        // Combinaciones de dos letras
        'jk jk jk jk jk jk', 'kj kj kj kj kj kj', 'lñ lñ lñ lñ lñ lñ',
        'ñl ñl ñl ñl ñl ñl', 'jl jl jl jl jl jl', 'lj lj lj lj lj lj',
        'kñ kñ kñ kñ kñ kñ', 'ñk ñk ñk ñk ñk ñk', 'jñ jñ jñ jñ jñ jñ',
        'ñj ñj ñj ñj ñj ñj', 'kl kl kl kl kl kl', 'lk lk lk lk lk lk',
        // Palabras cortas con JKLÑ
        'ñ ñ ñ ñ ñ ñ ñ ñ', 'jk lñ jk lñ jk lñ', 'lñ jk lñ jk lñ jk',
        'kjl kjl kjl kjl kjl', 'ljk ljk ljk ljk ljk', 'ñkl ñkl ñkl ñkl ñkl',
        'klñ klñ klñ klñ klñ', 'jñl jñl jñl jñl jñl', 'lñj lñj lñj lñj lñj',
        // Secuencias progresivas
        'j k l ñ j k l ñ', 'ñ l k j ñ l k j', 'jk lñ jk lñ jk lñ',
        'ñl kj ñl kj ñl kj', 'jkl ñlk jkl ñlk jkl', 'lkñ jñk lkñ jñk lkñ',
        // Patrones rítmicos
        'jklñ ñlkj jklñ ñlkj', 'jñlk klñj jñlk klñj', 'kjlñ ñljk kjlñ ñljk',
        'ljkñ ñkjl ljkñ ñkjl', 'ñjkl lkjñ ñjkl lkjñ', 'klñj jñlk klñj jñlk',
        // Ejercicios de velocidad
        'jklñjklñ jklñjklñ', 'ñlkjñlkj ñlkjñlkj', 'jklññlkj jklññlkj',
        'jklñkjlñ jklñkjlñ', 'ñlkjjklñ ñlkjjklñ', 'kjlññljk kjlññljk'
    ],
    3: [
        // Combinación de ambas manos - básico
        'asdf jklñ asdf jklñ', 'fdsa ñlkj fdsa ñlkj', 'aj sk dl fñ aj sk',
        'fñ dl sk aj fñ dl', 'asdf jklñ fdsa ñlkj', 'jklñ asdf ñlkj fdsa',
        'afjñ afjñ afjñ afjñ', 'ñjfa ñjfa ñjfa ñjfa', 'skdl skdl skdl skdl',
        'ldks ldks ldks ldks', 'asjk asjk asjk asjk', 'kjsa kjsa kjsa kjsa',
        // Alternancia de manos
        'aj aj aj aj aj aj', 'sk sk sk sk sk sk', 'dl dl dl dl dl dl',
        'fñ fñ fñ fñ fñ fñ', 'ja ja ja ja ja ja', 'ks ks ks ks ks ks',
        'ld ld ld ld ld ld', 'ñf ñf ñf ñf ñf ñf', 'ak ak ak ak ak ak',
        'sl sl sl sl sl sl', 'dj dj dj dj dj dj', 'fk fk fk fk fk fk',
        // Palabras con fila base completa
        'ala ala ala ala ala', 'sala sala sala sala', 'faja faja faja faja',
        'dada dada dada dada', 'lasa lasa lasa lasa', 'kasa kasa kasa kasa',
        'alfa alfa alfa alfa', 'saja saja saja saja', 'laja laja laja laja',
        'dala dala dala dala', 'jala jala jala jala', 'ñaña ñaña ñaña ñaña',
        // Secuencias largas
        'asdf jklñ asdf jklñ asdf', 'jklñ asdf jklñ asdf jklñ',
        'asdfjklñ asdfjklñ asdfjklñ', 'ñlkjfdsa ñlkjfdsa ñlkjfdsa',
        'aj sk dl fñ fñ dl sk aj', 'fñ dl sk aj aj sk dl fñ',
        // Patrones complejos
        'askjdlfñ askjdlfñ', 'ñfldkjas ñfldkjas', 'ajskdlfñ ajskdlfñ',
        'ñfldksja ñfldksja', 'aksjdflñ aksjdflñ', 'ñlfdksaj ñlfdksaj',
        // Ejercicios de fluidez
        'asdfjklñasdfjklñ', 'ñlkjfdsañlkjfdsa', 'asdfñlkjasdfñlkj',
        'jklñfdsajklñfdsa', 'askjdlfñaskjdlfñ', 'ñfldkjasñfldkjas'
    ],
    4: [
        // Ejercicios básicos QWERT
        'qwert qwert qwert', 'trewq trewq trewq', 'qwert trewq qwert',
        'qqq www eee rrr ttt', 'ttt rrr eee www qqq', 'qwer qwer qwer qwer',
        'rewq rewq rewq rewq', 'qqqq wwww eeee rrrr', 'tttt rrrr eeee wwww',
        'qwqw erer twtw qwqw', 'wqwq rere wtwt wqwq', 'qeqe wrwr tqtq qeqe',
        // Combinaciones de dos letras
        'qw qw qw qw qw qw', 'wq wq wq wq wq wq', 'we we we we we we',
        'ew ew ew ew ew ew', 'er er er er er er', 're re re re re re',
        'rt rt rt rt rt rt', 'tr tr tr tr tr tr', 'qe qe qe qe qe qe',
        'eq eq eq eq eq eq', 'qt qt qt qt qt qt', 'tq tq tq tq tq tq',
        // Combinación con fila base
        'qa qa qa qa qa qa', 'ws ws ws ws ws ws', 'ed ed ed ed ed ed',
        'rf rf rf rf rf rf', 'tg tg tg tg tg tg', 'aq aq aq aq aq aq',
        'sw sw sw sw sw sw', 'de de de de de de', 'fr fr fr fr fr fr',
        'gt gt gt gt gt gt', 'qas qas qas qas qas', 'wed wed wed wed wed',
        // Palabras y secuencias
        'rew rew rew rew rew', 'wet wet wet wet wet', 'ter ter ter ter ter',
        'wer wer wer wer wer', 'qwer qwer qwer qwer', 'wert wert wert wert',
        'tree tree tree tree', 'were were were were', 'rete rete rete rete',
        // Patrones rítmicos
        'qwert trewq qwert', 'qwer rewq qwer rewq', 'qwe ewq qwe ewq qwe',
        'wer rew wer rew wer', 'ert tre ert tre ert', 'qwerttrewq qwerttrewq',
        // Ejercicios de velocidad
        'qwertqwert qwertqwert', 'trewqtrewq trewqtrewq',
        'qwertrewq qwertrewq', 'qwqwerer twtwtqtq', 'wewertrt qwqwerer'
    ],
    5: [
        // Ejercicios básicos YUIOP
        'yuiop yuiop yuiop', 'poiuy poiuy poiuy', 'yuiop poiuy yuiop',
        'yyy uuu iii ooo ppp', 'ppp ooo iii uuu yyy', 'yuio yuio yuio yuio',
        'oiuy oiuy oiuy oiuy', 'yyyy uuuu iiii oooo', 'pppp oooo iiii uuuu',
        'yuyu ioio pupu yuyu', 'uyuy oioi upup uyuy', 'yoyo uiui pipi yoyo',
        // Combinaciones de dos letras
        'yu yu yu yu yu yu', 'uy uy uy uy uy uy', 'ui ui ui ui ui ui',
        'iu iu iu iu iu iu', 'io io io io io io', 'oi oi oi oi oi oi',
        'op op op op op op', 'po po po po po po', 'yi yi yi yi yi yi',
        'iy iy iy iy iy iy', 'yp yp yp yp yp yp', 'py py py py py py',
        // Combinación con fila base
        'yj yj yj yj yj yj', 'uk uk uk uk uk uk', 'il il il il il il',
        'oñ oñ oñ oñ oñ oñ', 'jy jy jy jy jy jy', 'ku ku ku ku ku ku',
        'li li li li li li', 'ño ño ño ño ño ño', 'yuj yuj yuj yuj yuj',
        'iko iko iko iko iko', 'opñ opñ opñ opñ opñ', 'jyu jyu jyu jyu jyu',
        // Palabras y secuencias
        'opio opio opio opio', 'yoyo yoyo yoyo yoyo', 'pipi pipi pipi pipi',
        'yupi yupi yupi yupi', 'pupu pupu pupu pupu', 'uiui uiui uiui uiui',
        'pio pio pio pio pio', 'poi poi poi poi poi', 'ipo ipo ipo ipo ipo',
        // Patrones rítmicos
        'yuiop poiuy yuiop', 'yuio oiuy yuio oiuy', 'yui iuy yui iuy yui',
        'uio oiu uio oiu uio', 'iop poi iop poi iop', 'yuioppoiuy yuioppoiuy',
        // Ejercicios de velocidad
        'yuiopyuiop yuiopyuiop', 'poiuypoiuy poiuypoiuy',
        'yuioppoiuy yuioppoiuy', 'yuyuioio pupuopop', 'uiuiyoyo ipipouou'
    ],
    6: [
        // Ejercicios básicos ZXCVB
        'zxcvb zxcvb zxcvb', 'bvcxz bvcxz bvcxz', 'zxcvb bvcxz zxcvb',
        'zzz xxx ccc vvv bbb', 'bbb vvv ccc xxx zzz', 'zxcv zxcv zxcv zxcv',
        'vcxz vcxz vcxz vcxz', 'zzzz xxxx cccc vvvv', 'bbbb vvvv cccc xxxx',
        'zxzx cvcv bxbx zxzx', 'xzxz vcvc xbxb xzxz', 'zcvc xvxv bzbz zcvc',
        // Combinaciones de dos letras
        'zx zx zx zx zx zx', 'xz xz xz xz xz xz', 'xc xc xc xc xc xc',
        'cx cx cx cx cx cx', 'cv cv cv cv cv cv', 'vc vc vc vc vc vc',
        'vb vb vb vb vb vb', 'bv bv bv bv bv bv', 'zc zc zc zc zc zc',
        'cz cz cz cz cz cz', 'zb zb zb zb zb zb', 'bz bz bz bz bz bz',
        // Combinación con fila base
        'za za za za za za', 'xs xs xs xs xs xs', 'cd cd cd cd cd cd',
        'vf vf vf vf vf vf', 'bg bg bg bg bg bg', 'az az az az az az',
        'sx sx sx sx sx sx', 'dc dc dc dc dc dc', 'fv fv fv fv fv fv',
        'gb gb gb gb gb gb', 'zas zas zas zas zas', 'xcd xcd xcd xcd xcd',
        // Palabras y secuencias
        'vaca vaca vaca vaca', 'baza baza baza baza', 'caza caza caza caza',
        'zxcv zxcv zxcv zxcv', 'cvbx cvbx cvbx cvbx', 'xcvb xcvb xcvb xcvb',
        'vaz vaz vaz vaz vaz', 'bac bac bac bac bac', 'cab cab cab cab cab',
        // Patrones rítmicos
        'zxcvb bvcxz zxcvb', 'zxcv vcxz zxcv vcxz', 'zxc cxz zxc cxz zxc',
        'xcv vcx xcv vcx xcv', 'cvb bvc cvb bvc cvb', 'zxcvbbvcxz zxcvbbvcxz',
        // Ejercicios de velocidad
        'zxcvbzxcvb zxcvbzxcvb', 'bvcxzbvcxz bvcxzbvcxz',
        'zxcvbbvcxz zxcvbbvcxz', 'zxzxcvcv bxbxvzvz', 'xcxcvbvb zxzxcbcb'
    ],
    7: [
        // Ejercicios básicos NM
        'nm nm nm nm nm nm', 'mn mn mn mn mn mn', 'nm mn nm mn nm mn',
        'nnn mmm nnn mmm nnn', 'mmm nnn mmm nnn mmm', 'nmnm nmnm nmnm nmnm',
        'mnmn mnmn mnmn mnmn', 'nnnn mmmm nnnn mmmm', 'mmmm nnnn mmmm nnnn',
        'nmn mnm nmn mnm nmn', 'mnm nmn mnm nmn mnm', 'nnmm nnmm nnmm nnmm',
        // Combinación con fila base
        'nj nj nj nj nj nj', 'mk mk mk mk mk mk', 'jn jn jn jn jn jn',
        'km km km km km km', 'nl nl nl nl nl nl', 'mñ mñ mñ mñ mñ mñ',
        'ln ln ln ln ln ln', 'ñm ñm ñm ñm ñm ñm', 'njm njm njm njm njm',
        'mkn mkn mkn mkn mkn', 'jnm jnm jnm jnm jnm', 'kmn kmn kmn kmn kmn',
        // Combinación con teclas cercanas
        'nb nb nb nb nb nb', 'mb mb mb mb mb mb', 'bn bn bn bn bn bn',
        'bm bm bm bm bm bm', 'nh nh nh nh nh nh', 'mh mh mh mh mh mh',
        'nv nv nv nv nv nv', 'mv mv mv mv mv mv', 'nmb nmb nmb nmb nmb',
        'bmn bmn bmn bmn bmn', 'mnb mnb mnb mnb mnb', 'bnm bnm bnm bnm bnm',
        // Palabras cortas
        'mama mama mama mama', 'nana nana nana nana', 'mano mano mano mano',
        'mono mono mono mono', 'mina mina mina mina', 'noma noma noma noma',
        'man man man man man', 'nam nam nam nam nam', 'nom nom nom nom nom',
        // Patrones rítmicos
        'nm mn nm mn nm mn', 'nmn mnm nmn mnm nmn', 'nmnm mnmn nmnm mnmn',
        'nnmm mmnn nnmm mmnn', 'nmmnmn nmmnmn nmmnmn', 'mnnnmm mnnnmm mnnnmm',
        // Ejercicios de velocidad
        'nmnmnmnm nmnmnmnm', 'mnmnmnmn mnmnmnmn', 'nmmnnmmn nmmnnmmn',
        'mnnmmnnm mnnmmnnm', 'nmbnmb nmbnmb nmbnmb', 'bmnbmn bmnbmn bmnbmn'
    ],
    8: [
        // Palabras simples
        'sol sol sol sol sol', 'sal sal sal sal sal', 'ala ala ala ala ala',
        'las las las las las', 'los los los los los', 'mas mas mas mas mas',
        'mal mal mal mal mal', 'pan pan pan pan pan', 'paz paz paz paz paz',
        'luz luz luz luz luz', 'mar mar mar mar mar', 'dar dar dar dar dar',
        // Frases cortas
        'el sol sale hoy', 'la luna es bella', 'mi casa es grande',
        'el pan esta rico', 'la flor es roja', 'el agua esta fria',
        'mi mama me ama', 'el cielo es azul', 'la mesa es alta',
        'el libro es mio', 'la silla es nueva', 'mi perro es fiel',
        // Frases con más palabras
        'el sol brilla mucho hoy', 'mi familia es muy grande',
        'la luna sale por la noche', 'el viento sopla muy fuerte',
        'los pajaros cantan alegres', 'las flores son muy bonitas',
        'mi hermano juega futbol', 'el gato duerme en el sofa',
        'la escuela es divertida', 'mis amigos son muy buenos',
        // Frases descriptivas
        'el bosque es verde y grande', 'la playa tiene arena dorada',
        'el rio corre entre las piedras', 'las nubes flotan en el cielo',
        'el arbol tiene muchas hojas', 'la casa tiene ventanas grandes',
        'el jardin esta lleno de flores', 'la cocina huele muy bien',
        // Frases con verbos variados
        'yo como frutas frescas', 'tu caminas por el parque',
        'ella canta muy bonito', 'nosotros jugamos juntos',
        'ellos estudian mucho', 'el perro corre rapido',
        'la nina salta la cuerda', 'el nino lee un libro',
        // Frases completas
        'hoy es un dia muy especial', 'me gusta mucho la escuela',
        'mi color favorito es el azul', 'tengo muchos amigos buenos',
        'la vida es muy hermosa', 'siempre hay que ser amable'
    ],
    9: [
        // Secuencias básicas
        '123 123 123 123 123', '456 456 456 456 456', '789 789 789 789 789',
        '012 012 012 012 012', '345 345 345 345 345', '678 678 678 678 678',
        '901 901 901 901 901', '234 234 234 234 234', '567 567 567 567 567',
        '890 890 890 890 890', '111 222 333 444 555', '666 777 888 999 000',
        // Números repetidos
        '1111 2222 3333 4444', '5555 6666 7777 8888', '9999 0000 1111 2222',
        '11 22 33 44 55 66', '77 88 99 00 11 22', '111 111 111 111 111',
        '222 222 222 222 222', '333 333 333 333 333', '444 444 444 444 444',
        '555 555 555 555 555', '666 666 666 666 666', '777 777 777 777 777',
        // Secuencias ascendentes y descendentes
        '1234 5678 9012 3456', '9876 5432 1098 7654', '12345 67890 12345',
        '09876 54321 09876', '13579 24680 13579', '08642 97531 08642',
        '123456 789012 345678', '987654 321098 765432', '1234567890 1234567890',
        // Patrones matemáticos
        '10 20 30 40 50 60', '11 22 33 44 55 66', '12 24 36 48 60 72',
        '15 30 45 60 75 90', '100 200 300 400 500', '101 202 303 404 505',
        '110 220 330 440 550', '111 222 333 444 555', '123 246 369 492 615',
        // Números mezclados
        '147 258 369 147 258', '159 267 348 159 267', '135 246 357 468 579',
        '192 384 576 768 951', '102 204 306 408 510', '321 654 987 321 654',
        // Secuencias largas
        '12345 54321 12345 54321', '67890 09876 67890 09876',
        '13579 97531 13579 97531', '24680 08642 24680 08642',
        '11223 34455 66778 89900', '99887 76655 44332 21100'
    ],
    10: ['uno dos tres cuatro cinco', 'seis siete ocho nueve diez', 'once doce trece catorce quince',
        'dieciséis diecisiete dieciocho diecinueve veinte', 'veintiuno veintidós veintitrés veinticuatro veinticinco',
        'veintiséis veintisiete veintiocho veintinueve treinta', 'treinta y uno treinta y dos treinta y tres',
        'treinta y cuatro treinta y cinco treinta y seis', 'treinta y siete treinta y ocho treinta y nueve',
        'cuarenta cuarenta y uno cuarenta y dos cuarenta y tres cuarenta y cuatro', 'cuarenta y cinco',
        'cuarenta y seis cuarenta y siete cuarenta y ocho cuarenta y nueve', 'cincuenta cincuenta y uno',
        'cincuenta y dos cincuenta y tres cincuenta y cuatro cincuenta y cinco', 'cincuenta y seis',
        'cincuenta y siete cincuenta y ocho cincuenta y nueve sesenta', 'sesenta y uno sesenta y dos',
        'sesenta y tres sesenta y cuatro sesenta y cinco', 'sesenta y seis sesenta y siete sesenta y ocho',
        'sesenta y nueve setenta', 'setenta y uno setenta y dos setenta y tres', 'setenta y cuatro',
        'setenta y cinco setenta y seis setenta y siete setenta y ocho', 'setenta y nueve ochenta',
        'ochenta y uno ochenta y dos ochenta y tres ochenta y cuatro ochenta y cinco', 'ochenta y seis',
        'ochenta y siete ochenta y ocho ochenta y nueve noventa', 'noventa y uno noventa y dos noventa y tres',
        'noventa y cuatro noventa y cinco noventa y seis noventa y siete noventa y ocho noventa y nueve',
        'cien ciento uno ciento dos ciento tres ciento cuatro ciento cinco', 
        'ciento seis ciento siete ciento ocho ciento nueve doscientos',],
    11: ['Había una vez en un bosque muy lejano', 'vivía un pequeño conejo llamado Saltarín',
        'que soñaba con conocer el mundo entero', 'Un día decidió salir de su madriguera',
        'y emprender una gran aventura', 'El sol brillaba con fuerza aquella mañana',
        'cuando Saltarín dio sus primeros pasos', 'por el sendero del bosque encantado',
        'Las flores le saludaban al pasar', 'y los pájaros cantaban melodías alegres',
        'Saltarín estaba muy emocionado', 'por descubrir nuevos lugares y amigos',
        'En su camino encontró una mariposa', 'de colores brillantes y alas hermosas',
        'que le mostró el camino hacia el río', 'donde los peces jugaban felices',
        'El pequeño conejo aprendió que la amistad', 'es el tesoro más valioso del mundo',
        'Y desde ese día Saltarín compartió', 'sus aventuras con todos sus nuevos amigos',
        'Colorín colorado este cuento ha terminado'],
    12: ['Caperucita Roja iba por el bosque', 'llevando una cesta para su abuelita',
        'con pasteles y miel muy dulce', 'Su mamá le dijo no hables con extraños',
        'pero ella era muy curiosa', 'El lobo feroz la vio pasar',
        'y pensó en un plan malvado', 'Caperucita siguió su camino',
        'cantando una canción muy bonita', 'Las flores del bosque eran preciosas',
        'y los árboles muy altos', 'El viento soplaba suavemente',
        'moviendo las hojas con cariño', 'La casa de la abuelita estaba cerca',
        'detrás de la colina verde', 'Caperucita tocó la puerta',
        'y una voz extraña respondió adelante', 'El cazador llegó justo a tiempo',
        'para salvar a Caperucita y su abuelita', 'Y todos vivieron felices para siempre'],
    13: ['Los tres cerditos construyeron sus casas', 'el primero la hizo de paja',
        'el segundo de madera resistente', 'y el tercero de ladrillos fuertes',
        'Un día llegó el lobo malo', 'y sopló la casa de paja',
        'que voló por los aires rápidamente', 'El cerdito corrió a casa de su hermano',
        'pero el lobo también sopló esa casa', 'Los dos corrieron muy asustados',
        'hacia la casa de ladrillos', 'El lobo sopló y sopló',
        'pero no pudo derribarla', 'Los tres cerditos estaban a salvo',
        'y el lobo se fue muy cansado', 'Aprendieron que el trabajo bien hecho',
        'siempre da buenos resultados', 'Desde entonces construyen juntos',
        'casas fuertes y seguras', 'Y viven felices los tres hermanitos'],
    14: ['Pinocho era un muñeco de madera', 'que quería ser un niño de verdad',
        'Su papá Gepetto lo quería mucho', 'y le enseñó a ser bueno y honesto',
        'Un hada azul le dio vida', 'pero tenía una nariz especial',
        'que crecía cuando decía mentiras', 'Pinocho aprendió muchas lecciones',
        'sobre la importancia de decir la verdad', 'y de escuchar a los mayores',
        'Tuvo aventuras en el mar', 'y conoció a un grillo sabio',
        'que le daba buenos consejos', 'Después de demostrar su bondad',
        'el hada lo convirtió en un niño real', 'Gepetto lloró de alegría',
        'al abrazar a su querido hijo', 'Y juntos fueron muy felices',
        'en su pequeño taller de juguetes', 'Fin de esta hermosa historia'],
    15: ['El patito feo era diferente', 'a todos sus hermanos del estanque',
        'Los demás patos se burlaban de él', 'porque no era igual que ellos',
        'El patito se sentía muy triste', 'y decidió buscar un nuevo hogar',
        'Caminó por campos y montañas', 'pasando frío y mucha hambre',
        'Pero nunca perdió la esperanza', 'de encontrar donde pertenecer',
        'Un día llegó a un lago hermoso', 'donde nadaban cisnes elegantes',
        'Para su sorpresa vio su reflejo', 'y descubrió que era un cisne',
        'el más hermoso de todos', 'Los otros cisnes lo recibieron',
        'con mucho cariño y alegría', 'El patito feo había encontrado',
        'su verdadera familia y hogar', 'Y fue feliz para siempre jamás'],
    16: ['Hola, me llamo Juan. Tengo 10 años y vivo en Bolivia.',
        'Mi mascota favorita es un perro llamado Max, que es muy juguetón.',
        'En la escuela, mis materias preferidas son matemáticas y ciencias.',
        'Los fines de semana, me gusta jugar fútbol con mis amigos del barrio.',
        'Mi mamá cocina muy rico, especialmente su sopa de maní y su arroz con pollo.',
        'Mi papá trabaja como ingeniero y siempre me ayuda con las tareas.',
        'Tengo una hermana menor que se llama Sofía, ella tiene 7 años.',
        'En vacaciones, visitamos a mis abuelos que viven en el campo.',
        'Me encanta leer libros de aventuras y ver películas de animación.',
        'Cuando sea grande, quiero ser programador y crear videojuegos.',
        'También me gustaría viajar por todo el mundo y conocer nuevas culturas.',
        'La tecnología me parece fascinante, especialmente las computadoras.',
        'Todos los días practico mecanografía para escribir más rápido.',
        'Mis amigos dicen que soy muy bueno resolviendo problemas difíciles.',
        'El próximo año participaré en la olimpiada de matemáticas de mi colegio.',
        'Estoy muy emocionado porque será mi primera competencia importante.',
        'Mi profesora dice que con esfuerzo y dedicación puedo lograr grandes cosas.',
        'Creo que tiene razón, porque la práctica hace al maestro.',
        'Cada día aprendo algo nuevo y eso me hace muy feliz.',
        'El conocimiento es el tesoro más valioso que podemos tener.',
        'Por eso me esfuerzo mucho en mis estudios y en mejorar cada día.',
        'Sé que el camino es largo, pero estoy dispuesto a recorrerlo.',
        'Con paciencia y perseverancia, alcanzaré todas mis metas.',
        'El futuro está lleno de posibilidades increíbles para quienes se preparan.'],
    17: ['El sistema solar está formado por el Sol y ocho planetas principales.',
        'Mercurio es el planeta más cercano al Sol y también el más pequeño.',
        'Venus es conocido como el lucero del alba por su brillo intenso.',
        'La Tierra es el único planeta donde sabemos que existe vida.',
        'Marte, el planeta rojo, tiene montañas más altas que el Everest.',
        'Júpiter es el planeta más grande y tiene una gran mancha roja.',
        'Saturno destaca por sus hermosos anillos de hielo y roca.',
        'Urano gira de lado, como una pelota rodando por el espacio.',
        'Neptuno es el planeta más lejano y tiene vientos muy fuertes.',
        'La Luna es el satélite natural de la Tierra y controla las mareas.',
        'Los asteroides son rocas espaciales que orbitan principalmente entre Marte y Júpiter.',
        'Los cometas están hechos de hielo y polvo, y tienen colas brillantes.',
        'Las estrellas son enormes bolas de gas que producen luz y calor.',
        'Las galaxias contienen millones de estrellas, planetas y otros cuerpos celestes.',
        'La Vía Láctea es nuestra galaxia y tiene forma de espiral.',
        'Los telescopios nos permiten observar objetos muy lejanos en el universo.',
        'Los astronautas viajan al espacio en cohetes y naves espaciales.',
        'La gravedad es la fuerza que mantiene a los planetas en órbita.',
        'La luz del Sol tarda aproximadamente 8 minutos en llegar a la Tierra.',
        'El espacio exterior es casi completamente vacío y silencioso.',
        'Las constelaciones son grupos de estrellas que forman figuras en el cielo.',
        'Orión, la Osa Mayor y la Cruz del Sur son constelaciones famosas.',
        'Los científicos buscan señales de vida en otros planetas.',
        'Quizás algún día los humanos podrán vivir en Marte o en la Luna.',
        'El universo es infinito y está lleno de misterios por descubrir.'],
    18: ['Bolivia es un país ubicado en el corazón de América del Sur.',
        'La Paz es la sede de gobierno más alta del mundo, a 3640 metros.',
        'El Salar de Uyuni es el desierto de sal más grande del planeta.',
        'El Lago Titicaca está compartido entre Bolivia y Perú.',
        'Simón Bolívar fue el libertador que dio nombre a nuestro país.',
        'Antonio José de Sucre fue el primer presidente de Bolivia.',
        'Potosí fue una de las ciudades más ricas del mundo colonial.',
        'El Carnaval de Oruro es Patrimonio de la Humanidad de la UNESCO.',
        'La Diablada es una danza tradicional muy colorida y espectacular.',
        'El charango y la quena son instrumentos musicales típicos bolivianos.',
        'La quinua es un superalimento que se cultiva en el altiplano.',
        'El Parque Nacional Madidi tiene una biodiversidad increíble.',
        'Los Yungas conectan el altiplano con la selva amazónica.',
        'Santa Cruz de la Sierra es la ciudad más poblada de Bolivia.',
        'Cochabamba es conocida como la ciudad de la eterna primavera.',
        'Tarija produce los mejores vinos de altura del continente.',
        'El Ekeko es una figura de la abundancia en la cultura andina.',
        'La Alasita es una feria donde se compran miniaturas para pedir deseos.',
        'El Tiwanaku fue una civilización preincaica muy avanzada.',
        'La Puerta del Sol es un monumento arqueológico impresionante.',
        'Los pueblos originarios conservan tradiciones milenarias.',
        'El quechua y el aymara son idiomas oficiales junto al castellano.',
        'Bolivia tiene 36 grupos étnicos reconocidos oficialmente.',
        'La diversidad cultural de Bolivia es una de sus mayores riquezas.',
        'Cada región tiene sus propias costumbres, música y gastronomía.'],
    19: ['En un rincón olvidado del viejo continente, existía un pequeño pueblo llamado Esperanza.',
        'Sus habitantes eran personas sencillas que vivían de la agricultura y la artesanía.',
        'Todas las mañanas, el sol pintaba de dorado las montañas que rodeaban el valle.',
        'Los niños corrían por las calles empedradas, jugando y riendo sin preocupaciones.',
        'La plaza central tenía una fuente antigua donde las palomas bebían agua fresca.',
        'El panadero, don Manuel, horneaba el pan más delicioso de toda la región.',
        'Su secreto era usar trigo cultivado con cariño en los campos cercanos.',
        'La bibliotecaria, doña Carmen, guardaba libros de historias maravillosas.',
        'Cada tarde, los niños la visitaban para escuchar cuentos de tierras lejanas.',
        'El herrero, don Pedro, forjaba herramientas con el fuego de su fragua ancestral.',
        'Sus martillazos resonaban como una melodía que marcaba el ritmo del pueblo.',
        'La costurera, doña Rosa, tejía vestidos con hilos de todos los colores del arcoíris.',
        'Sus creaciones eran tan hermosas que la gente venía de lejos a admirarlas.',
        'El médico, don Arturo, curaba a los enfermos con remedios naturales y mucha paciencia.',
        'Conocía cada planta medicinal que crecía en los bosques de los alrededores.',
        'La maestra, doña Lucía, enseñaba a leer y escribir con dedicación infinita.',
        'Creía que la educación era la llave para abrir todas las puertas del mundo.',
        'El alcalde, don Francisco, gobernaba con justicia y escuchaba a todos por igual.',
        'Bajo su liderazgo, el pueblo prosperaba y vivía en armonía constante.',
        'Las fiestas del pueblo reunían a todas las familias alrededor de la música.',
        'Los ancianos contaban historias mientras los jóvenes bailaban hasta el amanecer.',
        'Así transcurrían los días en Esperanza, un lugar donde el tiempo parecía detenerse.',
        'Donde la felicidad no se medía en riquezas, sino en sonrisas compartidas.',
        'Un pueblo que nos recuerda que lo más valioso está en las cosas simples.',
        'Y que la verdadera riqueza se encuentra en el corazón de las personas.'],
    20: ['La tecnología ha transformado completamente nuestra forma de vivir, trabajar y comunicarnos.',
        'Hace apenas 50 años, las computadoras ocupaban habitaciones enteras y eran muy lentas.',
        'Hoy llevamos en el bolsillo teléfonos más potentes que aquellas máquinas gigantes.',
        'Internet conecta a miles de millones de personas en todo el planeta instantáneamente.',
        'Podemos enviar mensajes, fotos y videos a cualquier parte del mundo en segundos.',
        'Las redes sociales nos permiten mantener contacto con amigos y familiares lejanos.',
        'Sin embargo, también debemos aprender a usar la tecnología de manera responsable.',
        'Es importante proteger nuestra privacidad y no compartir información personal.',
        'El ciberacoso es un problema serio que afecta a muchos jóvenes en línea.',
        'Debemos tratar a los demás en internet con el mismo respeto que en persona.',
        'La inteligencia artificial está revolucionando campos como la medicina y la educación.',
        'Los robots realizan cirugías con precisión milimétrica y los algoritmos diagnostican enfermedades.',
        'Las aplicaciones educativas permiten aprender cualquier idioma o habilidad desde casa.',
        'Los videojuegos no solo entretienen, también desarrollan habilidades cognitivas importantes.',
        'La programación se ha convertido en un lenguaje universal que todos deberíamos conocer.',
        'Escribir código es como dar instrucciones precisas a una máquina para resolver problemas.',
        'Los programadores crean aplicaciones, sitios web, videojuegos y sistemas complejos.',
        'La mecanografía es una habilidad fundamental para cualquier profesional del siglo XXI.',
        'Escribir rápido y sin errores aumenta la productividad en cualquier trabajo.',
        'Por eso es tan importante practicar todos los días con ejercicios como estos.',
        'La constancia y la disciplina son las claves para dominar cualquier habilidad.',
        'No importa cuántas veces te equivoques, lo importante es seguir intentando.',
        'Cada error es una oportunidad de aprendizaje que te acerca a la perfección.',
        'Felicidades por llegar hasta aquí, has demostrado gran dedicación y esfuerzo.',
        'Ahora eres un mecanógrafo experto, listo para enfrentar cualquier desafío digital.',
        'Recuerda que el aprendizaje nunca termina, siempre hay algo nuevo por descubrir.',
        'Sigue practicando, sigue aprendiendo y sigue soñando con un futuro brillante.',
        'El mundo necesita personas preparadas, creativas y comprometidas como tú.',
        'Este es solo el comienzo de un viaje increíble lleno de posibilidades infinitas.',
        'Gracias por completar el curso de DactiloKids, esperamos verte pronto de nuevo.']
};

const levelNames = {
    1: 'Fila Base - ASDF', 2: 'Fila Base - JKLÑ', 3: 'Fila Base Completa',
    4: 'Fila Superior - QWERT', 5: 'Fila Superior - YUIOP',
    6: 'Fila Inferior - ZXCVB', 7: 'Fila Inferior - NM', 8: 'Palabras Completas', 9: 'Números',
    10: 'Números Escritos', 11: 'Cuento - Saltarín', 12: 'Cuento - Caperucita',
    13: 'Cuento - Los Tres Cerditos', 14: 'Cuento - Pinocho', 15: 'Cuento - El Patito Feo',
    16: 'Mi Vida - Puntuación', 17: 'El Sistema Solar', 18: 'Conociendo Bolivia',
    19: 'El Pueblo Esperanza', 20: 'Desafío Final'
};

const levelKeys = {
    1: ['A', 'S', 'D', 'F'], 2: ['J', 'K', 'L', 'Ñ'], 3: ['A', 'S', 'D', 'F', 'J', 'K', 'L', 'Ñ'],
    4: ['Q', 'W', 'E', 'R', 'T'], 5: ['Y', 'U', 'I', 'O', 'P'],
    6: ['Z', 'X', 'C', 'V', 'B'], 7: ['N', 'M'], 8: ['Palabras'], 9: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    10: ['Números'], 11: ['📖 Cuento'], 12: ['📖 Cuento'],
    13: ['📖 Cuento'], 14: ['📖 Cuento'], 15: ['📖 Cuento'],
    16: ['.', ',', '¿', '?'], 17: ['🔬 Ciencia'], 18: ['🇧🇴 Bolivia'],
    19: ['📚 Literatura'], 20: ['🏆 Final']
};

const levelColors = [
    'linear-gradient(135deg, #6C63FF, #8B84FF)', 'linear-gradient(135deg, #FF6B9D, #FF8FAF)',
    'linear-gradient(135deg, #00D4AA, #00E6B8)', 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    'linear-gradient(135deg, #8B5CF6, #A78BFA)', 'linear-gradient(135deg, #EC4899, #F472B6)',
    'linear-gradient(135deg, #14B8A6, #2DD4BF)', 'linear-gradient(135deg, #EF4444, #F87171)',
    'linear-gradient(135deg, #F59E0B, #FBBF24)', 'linear-gradient(135deg, #3B82F6, #60A5FA)',
    'linear-gradient(135deg, #10B981, #34D399)', 'linear-gradient(135deg, #F97316, #FB923C)',
    'linear-gradient(135deg, #6366F1, #818CF8)', 'linear-gradient(135deg, #EC4899, #F472B6)',
    'linear-gradient(135deg, #8B5CF6, #A78BFA)', 'linear-gradient(135deg, #14B8A6, #5EEAD4)',
    'linear-gradient(135deg, #0EA5E9, #38BDF8)', 'linear-gradient(135deg, #7C3AED, #A855F7)',
    'linear-gradient(135deg, #059669, #34D399)', 'linear-gradient(135deg, #DC2626, #F87171)',
    'linear-gradient(135deg, #FFD700, #FFA500)'
];

const ranks = [
    { name: 'Pollito', icon: '🐣', min: 0, max: 149, color: '#FFD93D' },
    { name: 'Tortuga', icon: '🐢', min: 150, max: 349, color: '#6BCB77' },
    { name: 'Conejo', icon: '🐇', min: 350, max: 599, color: '#4D96FF' },
    { name: 'Águila', icon: '🦅', min: 600, max: 899, color: '#FF6B9D' },
    { name: 'Cohete', icon: '🚀', min: 900, max: 1299, color: '#A78BFA' },
    { name: 'Leyenda', icon: '👑', min: 1300, max: Infinity, color: '#FFD700' }
];

// ========== SISTEMA DE SONIDO ==========
let audioContext = null;
let soundEnabled = true;

function initAudio() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
        console.log('Web Audio API no disponible');
        soundEnabled = false;
    }
}

function playKeySound(isCorrect) {
    if (!soundEnabled || !audioContext) return;

    // Reanudar el contexto si está suspendido (requerido por algunos navegadores)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (isCorrect) {
        // Sonido agradable para tecla correcta - tono suave
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } else {
        // Sonido de error - tono más grave y corto
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.type = 'square';
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
    }
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    updateSoundButton();
    // Guardar preferencia
    localStorage.setItem('dactiloKidsSoundEnabled', soundEnabled);
}

function updateSoundButton() {
    const btn = document.getElementById('soundToggleBtn');
    if (btn) {
        btn.innerHTML = soundEnabled ? '🔊' : '🔇';
        btn.title = soundEnabled ? 'Sonido activado' : 'Sonido desactivado';
    }
}

function loadSoundPreference() {
    const saved = localStorage.getItem('dactiloKidsSoundEnabled');
    if (saved !== null) {
        soundEnabled = saved === 'true';
    }
    updateSoundButton();
}

// Sonido de celebración al completar ejercicio
function playCelebrationSound() {
    if (!soundEnabled || !audioContext) return;
    if (audioContext.state === 'suspended') audioContext.resume();

    const notes = [523.25, 659.25, 783.99, 1046.50]; // Do, Mi, Sol, Do alto
    notes.forEach((freq, i) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.connect(gain);
        gain.connect(audioContext.destination);
        osc.frequency.setValueAtTime(freq, audioContext.currentTime + i * 0.15);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.15, audioContext.currentTime + i * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.15 + 0.3);
        osc.start(audioContext.currentTime + i * 0.15);
        osc.stop(audioContext.currentTime + i * 0.15 + 0.3);
    });
}

// Sonido de fanfarria al subir de rango
function playRankUpSound() {
    if (!soundEnabled || !audioContext) return;
    if (audioContext.state === 'suspended') audioContext.resume();

    const notes = [392, 440, 494, 523, 587, 659, 784, 880]; // Escala ascendente
    notes.forEach((freq, i) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.connect(gain);
        gain.connect(audioContext.destination);
        osc.frequency.setValueAtTime(freq, audioContext.currentTime + i * 0.1);
        osc.type = 'triangle';
        gain.gain.setValueAtTime(0.12, audioContext.currentTime + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.1 + 0.2);
        osc.start(audioContext.currentTime + i * 0.1);
        osc.stop(audioContext.currentTime + i * 0.1 + 0.2);
    });
}

// ========== SISTEMA DE CONFETI ==========
function createConfetti() {
    const container = document.createElement('div');
    container.id = 'confettiContainer';
    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;overflow:hidden;';
    document.body.appendChild(container);

    const colors = ['#FFD700', '#FF6B9D', '#00D4AA', '#6C63FF', '#F59E0B', '#EC4899'];
    const confettiCount = 150;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 10 + 5;
        const left = Math.random() * 100;
        const animDuration = Math.random() * 3 + 2;
        const delay = Math.random() * 0.5;

        confetti.style.cssText = `
            position:absolute;
            width:${size}px;
            height:${size}px;
            background:${color};
            left:${left}%;
            top:-20px;
            border-radius:${Math.random() > 0.5 ? '50%' : '0'};
            animation:confettiFall ${animDuration}s ease-out ${delay}s forwards;
            transform:rotate(${Math.random() * 360}deg);
        `;
        container.appendChild(confetti);
    }

    // Añadir estilos de animación si no existen
    if (!document.getElementById('confettiStyles')) {
        const style = document.createElement('style');
        style.id = 'confettiStyles';
        style.textContent = `
            @keyframes confettiFall {
                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    // Limpiar después de la animación
    setTimeout(() => container.remove(), 5000);
}

// ========== SISTEMA DE RACHAS (STREAKS) ==========
function checkAndUpdateStreak() {
    const today = new Date().toDateString();
    const lastPractice = state.userData.lastPracticeDate;

    if (!lastPractice) {
        state.userData.currentStreak = 1;
        state.userData.bestStreak = 1;
    } else if (lastPractice === today) {
        // Ya practicó hoy, no cambiar racha
        return;
    } else {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastPractice === yesterday.toDateString()) {
            // Día consecutivo
            state.userData.currentStreak = (state.userData.currentStreak || 0) + 1;
            if (state.userData.currentStreak > (state.userData.bestStreak || 0)) {
                state.userData.bestStreak = state.userData.currentStreak;
            }
        } else {
            // Racha perdida
            state.userData.currentStreak = 1;
        }
    }
    state.userData.lastPracticeDate = today;
    saveUserData();
}

function getStreakBonus() {
    const streak = state.userData.currentStreak || 0;
    if (streak >= 7) return 5;
    if (streak >= 3) return 2;
    return 0;
}

// ========== ESTADÍSTICAS POR NIVEL ==========
function saveLevelStats(level, wpm, accuracy) {
    if (!state.userData.levelStats) {
        state.userData.levelStats = {};
    }
    if (!state.userData.levelStats[level]) {
        state.userData.levelStats[level] = { bestWpm: 0, bestAccuracy: 0, attempts: 0 };
    }

    const stats = state.userData.levelStats[level];
    stats.attempts++;
    if (wpm > stats.bestWpm) stats.bestWpm = wpm;
    if (accuracy > stats.bestAccuracy) stats.bestAccuracy = accuracy;
    saveUserData();
}

// ========== MODO OSCURO ==========
let darkMode = false;

function initDarkMode() {
    const saved = localStorage.getItem('dactiloKidsDarkMode');
    darkMode = saved === 'true';
    applyDarkMode();
}

function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem('dactiloKidsDarkMode', darkMode);
    applyDarkMode();
}

function applyDarkMode() {
    document.body.classList.toggle('dark-mode', darkMode);
    const btn = document.getElementById('darkModeBtn');
    if (btn) {
        btn.innerHTML = darkMode ? '☀️' : '🌙';
        btn.title = darkMode ? 'Modo claro' : 'Modo oscuro';
    }
}

// ========== MODO PRÁCTICA LIBRE ==========
let freePracticeMode = false;

function startFreePractice() {
    freePracticeMode = true;
    document.getElementById('levelSelection').style.display = 'none';
    document.getElementById('practiceArea').style.display = 'block';
    document.getElementById('practiceTitle').textContent = 'Práctica Libre';
    document.getElementById('currentExercise').textContent = '∞';
    document.getElementById('totalExercises').textContent = '∞';

    // Ocultar badge de ayuda
    document.getElementById('helperBadge').style.display = 'none';

    // Generar texto aleatorio de varios niveles
    const allTexts = [];
    for (let i = 8; i <= 20; i++) {
        if (levelTexts[i]) {
            allTexts.push(...levelTexts[i].slice(0, 5));
        }
    }
    const shuffled = allTexts.sort(() => Math.random() - 0.5);
    state.practiceText = shuffled.slice(0, 10).join(' ');

    state.currentPosition = 0;
    state.errors = 0;
    state.totalChars = 0;
    state.startTime = null;

    renderText();
    generatePracticeKeyboard();

    const input = document.getElementById('inputArea');
    input.value = '';
    input.focus();

    document.getElementById('wpmDisplay').textContent = '0';
    document.getElementById('accuracyDisplay').textContent = '100%';
    document.getElementById('timeDisplay').textContent = '0:00';

    if (state.timerInterval) clearInterval(state.timerInterval);
}

// ========== ESTADO DE LA APLICACIÓN ==========
let state = {
    currentSlide: 1,
    totalSlides: 8,
    selectedLevel: 1,
    practiceText: '',
    currentPosition: 0,
    startTime: null,
    timerInterval: null,
    errors: 0,
    totalChars: 0,
    currentExercise: 1,
    totalExercises: 5,
    userData: loadUserData()
};

function loadUserData() {
    const saved = localStorage.getItem('dactiloKidsData');
    return saved ? JSON.parse(saved) : {
        userName: '',
        points: 0,
        exercisesCompleted: 0,
        bestWpm: 0,
        totalAccuracy: 0,
        accuracyCount: 0,
        createdAt: new Date().toISOString()
    };
}

function saveUserData() {
    state.userData.lastModified = new Date().toISOString();
    localStorage.setItem('dactiloKidsData', JSON.stringify(state.userData));
}

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', () => {
    // Registro del Service Worker para PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/DactiloKids/sw.js')
            .then(registration => {
                console.log('Service Worker registrado correctamente:', registration.scope);
            })
            .catch(error => {
                console.log('Error al registrar Service Worker:', error);
            });
    }
    
    initNavigation();
    initSlides();
    initKeyboard();
    initLevelGrid();
    initPractice();
    initLevelsDisplay();
    initSessionCards();
    initUserProfile();
    initAudio();
    loadSoundPreference();
    initDarkMode();
    updateUI();

    // Botón de práctica libre
    const freePracticeBtn = document.getElementById('freePracticeBtn');
    if (freePracticeBtn) {
        freePracticeBtn.addEventListener('click', startFreePractice);
    }

    // Botón de modo oscuro
    const darkModeBtn = document.getElementById('darkModeBtn');
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', toggleDarkMode);
    }

    // Cerrar modales con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
});

// ========== NAVEGACIÓN ==========
function initNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.dataset.section;
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(section).classList.add('active');
            btn.classList.add('active');
            if (section === 'practica') endPractice();
            
            // Cerrar modal de perfil si está abierto
            closeAllModals();
        });
    });
}

// ========== SLIDES ==========
function initSlides() {
    document.getElementById('totalSlides').textContent = state.totalSlides;
    document.getElementById('prevBtn').addEventListener('click', () => changeSlide(-1));
    document.getElementById('nextBtn').addEventListener('click', () => changeSlide(1));
    updateSlideButtons();
}

function changeSlide(dir) {
    state.currentSlide += dir;
    if (state.currentSlide < 1) state.currentSlide = 1;
    if (state.currentSlide > state.totalSlides) state.currentSlide = state.totalSlides;
    
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    document.querySelector(`.slide[data-slide="${state.currentSlide}"]`).classList.add('active');
    document.getElementById('currentSlide').textContent = state.currentSlide;
    updateSlideButtons();
}

function updateSlideButtons() {
    document.getElementById('prevBtn').disabled = state.currentSlide === 1;
    document.getElementById('nextBtn').disabled = state.currentSlide === state.totalSlides;
}

// ========== SESSION CARDS ==========
function initSessionCards() {
    document.querySelectorAll('.session-card').forEach(card => {
        card.addEventListener('click', () => {
            const action = card.dataset.action;
            const target = parseInt(card.dataset.target);
            
            if (action === 'slide') {
                // Ir a la teoría (slide específico)
                document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                document.getElementById('teoria').classList.add('active');
                document.querySelector('[data-section="teoria"]').classList.add('active');
                
                // Cambiar al slide específico
                state.currentSlide = target;
                document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
                document.querySelector(`.slide[data-slide="${target}"]`).classList.add('active');
                document.getElementById('currentSlide').textContent = target;
                updateSlideButtons();
            } else if (action === 'practice') {
                // Ir directo a la práctica del nivel
                state.selectedLevel = target;
                state.currentExercise = 1;
                
                // Cambiar a sección de práctica
                document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                document.getElementById('practica').classList.add('active');
                document.querySelector('[data-section="practica"]').classList.add('active');
                
                // Iniciar práctica
                startPractice();
            }
        });
    });
}

// ========== TECLADO VISUAL ==========
function initKeyboard() {
    // El teclado de teoría ahora usa el SVG directamente en el HTML
    // Esta función se mantiene para compatibilidad pero ya no genera el teclado HTML
    const keyboardTheory = document.getElementById('keyboardTheory');
    if (keyboardTheory) {
        const keyboardHTML = generateKeyboardHTML();
        keyboardTheory.innerHTML = keyboardHTML;
    }
}

function generateKeyboardHTML() {
    const rows = [
        { keys: ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'], special: true },
        { keys: ['°', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "'", '¿', '⌫'], split: 5 },
        { keys: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '´', '+'], split: 6, tabStart: true },
        { keys: ['Bloq', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', '{', 'Enter'], home: ['A', 'S', 'D', 'F', 'J', 'K', 'L', 'Ñ'], split: 6 },
        { keys: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '-', 'Shift'], split: 6 },
        { keys: ['Ctrl', 'Win', 'Alt', 'Espacio', 'Alt', 'Fn', 'Ctrl'], space: true }
    ];
    
    return rows.map(row => {
        const keysHTML = row.keys.map((key, i) => {
            let cls = 'key ';
            if (row.special || ['Esc', 'Tab', 'Bloq', 'Shift', 'Ctrl', 'Win', 'Alt', 'Fn', 'Enter', '⌫'].includes(key)) {
                cls += 'special';
            } else if (row.home && row.home.includes(key)) {
                cls += 'home';
            } else if (key === 'Espacio') {
                cls += 'space';
            } else if (row.split && i < row.split + (row.tabStart ? 1 : 0)) {
                cls += 'left';
            } else {
                cls += 'right';
            }
            
            let style = '';
            if (['Tab', 'Bloq', 'Enter', '⌫'].includes(key)) style = 'min-width: 60px;';
            if (key === 'Shift') style = 'min-width: 80px;';
            if (key === 'Espacio') style = 'min-width: 280px;';
            
            return `<div class="${cls}" style="${style}" data-key="${key.toLowerCase()}">${key}</div>`;
        }).join('');
        
        return `<div class="keyboard-row">${keysHTML}</div>`;
    }).join('');
}

// ========== GRID DE NIVELES ==========
function initLevelGrid() {
    const grid = document.getElementById('levelGrid');
    grid.innerHTML = Object.keys(levelNames).map(level => {
        const keys = levelKeys[level].map(k => `<span class="level-key">${k}</span>`).join('');
        return `
            <div class="level-card ${level == 1 ? 'selected' : ''}" data-level="${level}">
                <div class="level-header">
                    <div class="level-number" style="background: ${levelColors[level-1]}">${level}</div>
                    <span style="color: #10B981;">✓</span>
                </div>
                <div class="level-name">${levelNames[level]}</div>
                <div class="level-description">Practica estas teclas</div>
                <div class="level-keys">${keys}</div>
            </div>
        `;
    }).join('');
    
    grid.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
            state.selectedLevel = parseInt(card.dataset.level);
            // Resetear contador de ejercicios al cambiar de nivel
            state.currentExercise = 1;
            // Iniciar práctica directamente
            startPractice();
        });
    });
    
    // Mantener el botón por si alguien prefiere usarlo
    document.getElementById('startPracticeBtn').addEventListener('click', startPractice);
}

// ========== PRÁCTICA ==========
function initPractice() {
    const input = document.getElementById('inputArea');
    input.addEventListener('input', handleTyping);
    input.addEventListener('keydown', e => { if (e.key === 'Backspace') e.preventDefault(); });
    
    document.getElementById('resetBtn').addEventListener('click', resetPractice);
    document.getElementById('endBtn').addEventListener('click', endPractice);
    document.getElementById('retryBtn').addEventListener('click', () => { 
        closeModal(); 
        // Incrementar contador de ejercicios
        if (state.currentExercise < state.totalExercises) {
            state.currentExercise++;
        }
        startPractice(); 
    });
    document.getElementById('closeModalBtn').addEventListener('click', () => {
        closeModal();
        // Incrementar contador y continuar practicando
        if (state.currentExercise < state.totalExercises) {
            state.currentExercise++;
            startPractice();
        } else {
            // Solo si ya completó todos los ejercicios, volver a selección
            state.currentExercise = 1;
            endPractice();
        }
    });
}

function startPractice() {
    document.getElementById('levelSelection').style.display = 'none';
    document.getElementById('practiceArea').style.display = 'block';
    
    // Resetear contador de ejercicios al seleccionar un nivel nuevo
    if (!state.currentExercise || state.currentExercise > state.totalExercises) {
        state.currentExercise = 1;
    }
    
    document.getElementById('practiceTitle').textContent = `Nivel ${state.selectedLevel}: ${levelNames[state.selectedLevel]}`;
    
    // Actualizar contador de ejercicios
    document.getElementById('currentExercise').textContent = state.currentExercise;
    document.getElementById('totalExercises').textContent = state.totalExercises;
    
    // Mostrar/ocultar badge de ayuda según el nivel
    const helperBadge = document.getElementById('helperBadge');
    if (state.selectedLevel <= 3) {
        helperBadge.style.display = 'block';
    } else {
        helperBadge.style.display = 'none';
    }
    
    // Generar ejercicio combinando múltiples textos
    const texts = levelTexts[state.selectedLevel];
    let selectedTexts;

    // Para niveles 10-15 (cuentos), mantener orden secuencial
    // Para niveles 1-9 (ejercicios), mezclar aleatoriamente
    if (state.selectedLevel >= 10) {
        // Orden secuencial para cuentos
        selectedTexts = texts.slice(0, Math.min(15, texts.length));
    } else {
        // Orden aleatorio para ejercicios de teclas
        const shuffled = [...texts].sort(() => Math.random() - 0.5);
        selectedTexts = shuffled.slice(0, Math.min(15, texts.length));
    }

    state.practiceText = selectedTexts.join(' '); // Unir con un solo espacio
    
    state.currentPosition = 0;
    state.errors = 0;
    state.totalChars = 0;
    state.startTime = null;
    
    renderText();
    generatePracticeKeyboard();
    
    const input = document.getElementById('inputArea');
    input.value = '';
    input.focus();
    
    document.getElementById('wpmDisplay').textContent = '0';
    document.getElementById('accuracyDisplay').textContent = '100%';
    document.getElementById('timeDisplay').textContent = '0:00';
    
    if (state.timerInterval) clearInterval(state.timerInterval);
}

function renderText() {
    const display = document.getElementById('textDisplay');
    display.innerHTML = state.practiceText.split('').map((char, i) => {
        let cls = 'char';
        if (i < state.currentPosition) cls += ' correct';
        else if (i === state.currentPosition) cls += ' current';
        return `<span class="${cls}">${char === ' ' ? '&nbsp;' : char}</span>`;
    }).join('');
    
    // Scroll automático para seguir al carácter actual
    const currentChar = display.querySelector('.char.current');
    if (currentChar) {
        const displayRect = display.getBoundingClientRect();
        const charRect = currentChar.getBoundingClientRect();
        
        // Calcular la posición relativa del carácter dentro del contenedor
        const relativeTop = charRect.top - displayRect.top + display.scrollTop;
        const relativeBottom = relativeTop + charRect.height;
        
        // Si el carácter está cerca del final del área visible, hacer scroll
        const scrollThreshold = displayRect.height * 0.7; // 70% de la altura visible
        
        if (relativeBottom > display.scrollTop + scrollThreshold) {
            // Scroll suave hacia el carácter actual
            display.scrollTo({
                top: relativeTop - displayRect.height * 0.3, // Mantener el carácter en el 30% superior
                behavior: 'smooth'
            });
        }
    }
    
    // Resaltar la tecla siguiente en el teclado (solo niveles 1-3)
    highlightNextKey();
}

// Mapeo de caracteres a IDs del SVG
const charToSvgId = {
    'a': 'k-A', 'b': 'k-B', 'c': 'k-C', 'd': 'k-D', 'e': 'k-E', 'f': 'k-F', 'g': 'k-G',
    'h': 'k-H', 'i': 'k-I', 'j': 'k-J', 'k': 'k-K', 'l': 'k-L', 'm': 'k-M', 'n': 'k-N',
    'ñ': 'k-Ñ', 'o': 'k-O', 'p': 'k-P', 'q': 'k-Q', 'r': 'k-R', 's': 'k-S', 't': 'k-T',
    'u': 'k-U', 'v': 'k-V', 'w': 'k-W', 'x': 'k-X', 'y': 'k-Y', 'z': 'k-Z',
    '0': 'k-0', '1': 'k-1', '2': 'k-2', '3': 'k-3', '4': 'k-4',
    '5': 'k-5', '6': 'k-6', '7': 'k-7', '8': 'k-8', '9': 'k-9',
    ' ': 'k-Space', ',': 'k-Comma', '.': 'k-Period', '-': 'k-Hyphen',
    '+': 'k-Plus', '´': 'k-Acute', "'": 'k-Apostrophe', '¡': 'k-ExclInv',
    '{': 'k-BraceL', '}': 'k-BraceR', '<': 'k-LTGT', '>': 'k-LTGT',
    'á': 'k-A', 'é': 'k-E', 'í': 'k-I', 'ó': 'k-O', 'ú': 'k-U'
};

// Variable para almacenar referencia al SVG
let svgDoc = null;
let lastHighlightedKey = null;

function getSvgDocument() {
    const svgObject = document.getElementById('keyboardSvg');
    if (svgObject && svgObject.contentDocument) {
        return svgObject.contentDocument;
    }
    return null;
}

function highlightNextKey() {
    // Obtener documento SVG
    const svg = getSvgDocument();
    if (!svg) return;

    // Limpiar resaltado anterior
    if (lastHighlightedKey) {
        lastHighlightedKey.classList.remove('key-highlight');
        lastHighlightedKey = null;
    }

    // Solo resaltar en niveles 1-3 (modo ayuda para principiantes)
    if (state.selectedLevel <= 3 && state.currentPosition < state.practiceText.length) {
        const nextChar = state.practiceText[state.currentPosition].toLowerCase();
        const keyId = charToSvgId[nextChar];

        if (keyId) {
            const keyElement = svg.getElementById(keyId);
            if (keyElement) {
                keyElement.classList.add('key-highlight');
                lastHighlightedKey = keyElement;
            }
        }
    }
}

function highlightKeyFeedback(char, isCorrect) {
    const svg = getSvgDocument();
    if (!svg) return;

    const keyId = charToSvgId[char.toLowerCase()];
    if (keyId) {
        const keyElement = svg.getElementById(keyId);
        if (keyElement) {
            const feedbackClass = isCorrect ? 'key-correct' : 'key-wrong';
            keyElement.classList.add(feedbackClass);
            setTimeout(() => keyElement.classList.remove(feedbackClass), 200);
        }
    }
}

function generatePracticeKeyboard() {
    // El SVG ya está cargado en el HTML, solo necesitamos esperar a que cargue
    const svgObject = document.getElementById('keyboardSvg');

    svgObject.onload = function() {
        // Inyectar estilos de resaltado en el SVG
        const svg = svgObject.contentDocument;
        if (svg) {
            const style = svg.createElementNS('http://www.w3.org/2000/svg', 'style');
            style.textContent = `
                .key-highlight {
                    fill: #FFD93D !important;
                    stroke: #F59E0B !important;
                    stroke-width: 4 !important;
                    filter: drop-shadow(0 0 10px rgba(255, 217, 61, 0.8));
                    animation: svgPulse 1s ease-in-out infinite;
                }
                .key-correct {
                    fill: #10B981 !important;
                    transition: fill 0.1s ease;
                }
                .key-wrong {
                    fill: #EF4444 !important;
                    transition: fill 0.1s ease;
                }
                @keyframes svgPulse {
                    0%, 100% { filter: drop-shadow(0 0 10px rgba(255, 217, 61, 0.8)); }
                    50% { filter: drop-shadow(0 0 20px rgba(255, 217, 61, 1)); }
                }
            `;
            svg.querySelector('svg').appendChild(style);
            highlightNextKey();
        }
    };

    // Si ya está cargado, ejecutar directamente
    if (svgObject.contentDocument && svgObject.contentDocument.querySelector('svg')) {
        const svg = svgObject.contentDocument;
        if (!svg.querySelector('style[data-custom]')) {
            const style = svg.createElementNS('http://www.w3.org/2000/svg', 'style');
            style.setAttribute('data-custom', 'true');
            style.textContent = `
                .key-highlight {
                    fill: #FFD93D !important;
                    stroke: #F59E0B !important;
                    stroke-width: 4 !important;
                    filter: drop-shadow(0 0 10px rgba(255, 217, 61, 0.8));
                    animation: svgPulse 1s ease-in-out infinite;
                }
                .key-correct {
                    fill: #10B981 !important;
                    transition: fill 0.1s ease;
                }
                .key-wrong {
                    fill: #EF4444 !important;
                    transition: fill 0.1s ease;
                }
                @keyframes svgPulse {
                    0%, 100% { filter: drop-shadow(0 0 10px rgba(255, 217, 61, 0.8)); }
                    50% { filter: drop-shadow(0 0 20px rgba(255, 217, 61, 1)); }
                }
            `;
            svg.querySelector('svg').appendChild(style);
        }
        highlightNextKey();
    }
}

function handleTyping(e) {
    const input = e.target;
    const typed = input.value;

    if (!state.startTime) {
        state.startTime = Date.now();
        state.timerInterval = setInterval(updateTimer, 1000);
    }

    if (typed.length > state.currentPosition) {
        const expectedChar = state.practiceText[state.currentPosition];
        const typedChar = typed[typed.length - 1];

        state.totalChars++;

        if (typedChar === expectedChar) {
            state.currentPosition++;
            highlightKeyFeedback(expectedChar, true);
            playKeySound(true);
        } else {
            state.errors++;
            highlightKeyFeedback(expectedChar, false);
            playKeySound(false);
        }

        renderText();
        updateStats();

        if (state.currentPosition >= state.practiceText.length) {
            finishPractice();
        }
    }
}

function updateTimer() {
    if (!state.startTime) return;
    const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    document.getElementById('timeDisplay').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
}

function updateStats() {
    const accuracy = state.totalChars > 0 ? Math.round(((state.totalChars - state.errors) / state.totalChars) * 100) : 100;
    document.getElementById('accuracyDisplay').textContent = `${accuracy}%`;
    
    if (state.startTime) {
        const minutes = (Date.now() - state.startTime) / 60000;
        const words = state.currentPosition / 5;
        const wpm = minutes > 0 ? Math.round(words / minutes) : 0;
        document.getElementById('wpmDisplay').textContent = wpm;
    }
}

function finishPractice() {
    clearInterval(state.timerInterval);

    const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    const accuracy = state.totalChars > 0 ? Math.round(((state.totalChars - state.errors) / state.totalChars) * 100) : 100;
    const words = state.practiceText.length / 5;
    const minutes = elapsed / 60;
    const wpm = minutes > 0 ? Math.round(words / minutes) : 0;

    // Guardar rango anterior para detectar subida de nivel
    const previousRank = ranks.find(r => state.userData.points >= r.min && state.userData.points <= r.max) || ranks[0];

    // Calcular puntos base
    let points = 10;
    if (accuracy === 100) points += 5;
    if (wpm > state.userData.bestWpm) { points += 15; state.userData.bestWpm = wpm; }

    // Bonus por racha
    const streakBonus = getStreakBonus();
    points += streakBonus;

    // Actualizar racha
    checkAndUpdateStreak();

    // Actualizar datos
    state.userData.points += points;
    state.userData.exercisesCompleted++;
    state.userData.totalAccuracy += accuracy;
    state.userData.accuracyCount++;

    // Guardar estadísticas del nivel (si no es práctica libre)
    if (!freePracticeMode) {
        saveLevelStats(state.selectedLevel, wpm, accuracy);
    }

    saveUserData();

    // Detectar subida de rango
    const newRank = ranks.find(r => state.userData.points >= r.min && state.userData.points <= r.max) || ranks[0];
    const rankUp = newRank.name !== previousRank.name;

    // Calcular aciertos y errores
    const correct = state.totalChars - state.errors;
    const errors = state.errors;

    // Reproducir sonido de celebración
    playCelebrationSound();

    // Si subió de rango, mostrar confeti y sonido especial
    if (rankUp) {
        setTimeout(() => {
            createConfetti();
            playRankUpSound();
        }, 500);
    }

    // Mostrar modal
    document.getElementById('resultWpm').textContent = wpm;
    document.getElementById('resultAccuracy').textContent = `${accuracy}%`;
    document.getElementById('resultTime').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    document.getElementById('resultCorrect').textContent = correct;
    document.getElementById('resultErrors').textContent = errors;

    // Mostrar puntos con desglose
    let pointsText = `+${points} puntos`;
    if (streakBonus > 0) {
        pointsText += ` (🔥 +${streakBonus} racha)`;
    }
    document.getElementById('pointsEarned').textContent = pointsText;

    document.getElementById('resultIcon').textContent = accuracy >= 90 ? '🎉' : accuracy >= 70 ? '👍' : '💪';

    // Título especial si subió de rango
    if (rankUp) {
        document.getElementById('resultTitle').textContent = `¡Subiste a ${newRank.name}! ${newRank.icon}`;
    } else {
        document.getElementById('resultTitle').textContent = accuracy >= 90 ? '¡Excelente!' : accuracy >= 70 ? '¡Buen trabajo!' : '¡Sigue practicando!';
    }

    // Actualizar subtítulo con progreso de ejercicios
    const subtitle = document.getElementById('resultSubtitle');
    if (freePracticeMode) {
        subtitle.textContent = 'Modo práctica libre completado';
        freePracticeMode = false;
    } else if (state.currentExercise < state.totalExercises) {
        subtitle.textContent = `Ejercicio ${state.currentExercise} de ${state.totalExercises} completado`;
    } else {
        subtitle.textContent = `🎊 ¡Has completado todos los ejercicios del nivel! 🎊`;
    }

    document.getElementById('resultsModal').classList.add('active');
    updateUI();
}

function resetPractice() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    startPractice();
}

function endPractice() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    document.getElementById('levelSelection').style.display = 'block';
    document.getElementById('practiceArea').style.display = 'none';
}

function closeModal() {
    document.getElementById('resultsModal').classList.remove('active');
}

// ========== NIVELES/PROGRESO ==========
function initLevelsDisplay() {
    const display = document.getElementById('levelsDisplay');
    display.innerHTML = ranks.map((rank, i) => {
        const isCurrent = state.userData.points >= rank.min && state.userData.points <= rank.max;
        return `
            <div class="rank-item ${isCurrent ? 'current' : ''}">
                <div class="rank-icon" style="background: linear-gradient(135deg, ${rank.color}, ${rank.color}88)">${rank.icon}</div>
                <div class="rank-info">
                    <div class="rank-name" style="color: ${rank.color}">Nivel ${i + 1}: ${rank.name}</div>
                    <div class="rank-points">${rank.min} - ${rank.max === Infinity ? '∞' : rank.max} puntos</div>
                </div>
            </div>
        `;
    }).join('');
}

// ========== ACTUALIZAR UI ==========
function updateUI() {
    // Actualizar header
    const currentRank = ranks.find(r => state.userData.points >= r.min && state.userData.points <= r.max) || ranks[0];
    document.getElementById('currentLevel').textContent = currentRank.icon;
    document.getElementById('levelName').textContent = currentRank.name;
    document.getElementById('totalPoints').textContent = state.userData.points;

    // Actualizar barra de progreso del rango
    updateRankProgress(currentRank);

    // Actualizar estadísticas
    document.getElementById('statPoints').textContent = state.userData.points;
    document.getElementById('statExercises').textContent = state.userData.exercisesCompleted;
    document.getElementById('statBestWpm').textContent = state.userData.bestWpm;
    const avgAccuracy = state.userData.accuracyCount > 0
        ? Math.round(state.userData.totalAccuracy / state.userData.accuracyCount)
        : 0;
    document.getElementById('statAccuracy').textContent = `${avgAccuracy}%`;

    // Actualizar racha
    updateStreakDisplay();

    // Actualizar niveles
    initLevelsDisplay();

    // Actualizar nombre de usuario en header
    updateUserNameDisplay();
}

function updateRankProgress(currentRank) {
    const progressBar = document.getElementById('rankProgressBar');
    const progressText = document.getElementById('rankProgressText');
    if (!progressBar) return;

    const currentIndex = ranks.indexOf(currentRank);
    const nextRank = ranks[currentIndex + 1];

    if (!nextRank || currentRank.max === Infinity) {
        // Ya está en el rango máximo
        progressBar.style.width = '100%';
        progressBar.style.background = currentRank.color;
        if (progressText) progressText.textContent = '¡Nivel máximo alcanzado!';
    } else {
        const pointsInRank = state.userData.points - currentRank.min;
        const rankRange = nextRank.min - currentRank.min;
        const progress = Math.min(100, Math.round((pointsInRank / rankRange) * 100));
        progressBar.style.width = `${progress}%`;
        progressBar.style.background = currentRank.color;
        if (progressText) {
            const pointsNeeded = nextRank.min - state.userData.points;
            progressText.textContent = `${pointsNeeded} pts para ${nextRank.name} ${nextRank.icon}`;
        }
    }
}

function updateStreakDisplay() {
    const streakElement = document.getElementById('streakDisplay');
    if (!streakElement) return;

    const streak = state.userData.currentStreak || 0;
    if (streak > 0) {
        streakElement.innerHTML = `🔥 ${streak} día${streak > 1 ? 's' : ''}`;
        streakElement.style.display = 'flex';
    } else {
        streakElement.style.display = 'none';
    }
}

// ========== GESTIÓN DE PERFIL Y PROGRESO ==========
function closeAllModals() {
    const userProfileModal = document.getElementById('userProfileModal');
    const confirmModal = document.getElementById('confirmModal');
    const messageModal = document.getElementById('messageModal');
    
    if (userProfileModal) userProfileModal.style.display = 'none';
    if (confirmModal) confirmModal.style.display = 'none';
    if (messageModal) messageModal.style.display = 'none';
}

function initUserProfile() {
    const accountBtn = document.getElementById('accountBtn');
    const userProfileModal = document.getElementById('userProfileModal');
    const closeProfileModal = document.getElementById('closeProfileModal');
    const saveUserNameBtn = document.getElementById('saveUserNameBtn');
    const userNameInput = document.getElementById('userNameInput');
    const exportBtn = document.getElementById('exportBtn');
    const importBtn = document.getElementById('importBtn');
    const fileInput = document.getElementById('fileInput');
    
    // Validar que todos los elementos existen
    if (!accountBtn || !userProfileModal || !closeProfileModal || !saveUserNameBtn || 
        !userNameInput || !exportBtn || !importBtn || !fileInput) {
        console.error('Error: No se encontraron todos los elementos del perfil');
        return;
    }
    
    // Abrir modal de perfil
    accountBtn.addEventListener('click', () => {
        console.log('Click en botón de cuenta');
        userNameInput.value = state.userData.userName || '';
        updateProfileData();
        userProfileModal.style.display = 'flex';
    });
    
    // Cerrar modal de perfil
    closeProfileModal.addEventListener('click', () => {
        userProfileModal.style.display = 'none';
    });
    
    // Guardar nombre de usuario
    saveUserNameBtn.addEventListener('click', () => {
        const name = userNameInput.value.trim();
        if (name) {
            state.userData.userName = name;
            saveUserData();
            updateUserNameDisplay();
            showMessage('✅ Éxito', `Nombre guardado: ${name}`, 'success');
        } else {
            showMessage('⚠️ Error', 'Por favor ingresa un nombre válido', 'error');
        }
    });
    
    // Exportar progreso
    exportBtn.addEventListener('click', exportarProgreso);
    
    // Importar progreso
    importBtn.addEventListener('click', () => {
        fileInput.click();
    });
    
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            importarProgreso(file);
        }
        fileInput.value = ''; // Reset input
    });
    
    // Cerrar modal al hacer clic en el fondo oscuro (fuera del contenido)
    userProfileModal.addEventListener('click', (e) => {
        // currentTarget es siempre el modal, target es donde hiciste clic
        // Si son el mismo, significa que hiciste clic en el fondo, no en el contenido
        if (e.target === e.currentTarget) {
            userProfileModal.style.display = 'none';
        }
    });
    
    // Listener global para cerrar modal al hacer clic en cualquier lugar fuera del modal
    document.addEventListener('click', (e) => {
        // Si el modal está visible
        if (userProfileModal.style.display === 'flex') {
            // Si el clic no fue dentro del modal-content ni en el botón de cuenta
            const modalContent = userProfileModal.querySelector('.modal-content');
            const isClickInsideModal = modalContent && modalContent.contains(e.target);
            const isClickOnAccountBtn = accountBtn.contains(e.target);
            
            if (!isClickInsideModal && !isClickOnAccountBtn) {
                userProfileModal.style.display = 'none';
            }
        }
    });
    
    // Solicitar nombre en primera carga
    if (!state.userData.userName) {
        setTimeout(() => {
            userProfileModal.style.display = 'flex';
            showMessage('👋 ¡Bienvenido!', 'Por favor ingresa tu nombre para comenzar', 'info');
        }, 500);
    }
}

function updateUserNameDisplay() {
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userName = document.getElementById('userName');
    
    if (state.userData.userName) {
        userName.textContent = state.userData.userName;
        userNameDisplay.style.display = 'flex';
    } else {
        userNameDisplay.style.display = 'none';
    }
}

function updateProfileData() {
    document.getElementById('profilePoints').textContent = state.userData.points;
    document.getElementById('profileExercises').textContent = state.userData.exercisesCompleted;
    document.getElementById('profileWPM').textContent = state.userData.bestWpm;
    const avgAccuracy = state.userData.accuracyCount > 0 
        ? Math.round(state.userData.totalAccuracy / state.userData.accuracyCount) 
        : 0;
    document.getElementById('profileAccuracy').textContent = `${avgAccuracy}%`;
}

function exportarProgreso() {
    const exportData = {
        version: '1.0',
        appName: 'DactiloKids',
        exportDate: new Date().toISOString(),
        userData: state.userData
    };
    
    const jsonString = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const userName = state.userData.userName || 'Usuario';
    const date = new Date().toISOString().split('T')[0];
    const fileName = `DactiloKids_${userName.replace(/\s+/g, '_')}_${date}.json`;
    
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showMessage('✅ Exportación Exitosa', `Archivo descargado: ${fileName}`, 'success');
}

function importarProgreso(file) {
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            
            // Validar formato
            if (!validateImportData(data)) {
                showMessage('❌ Error', 'El archivo no tiene el formato correcto', 'error');
                return;
            }
            
            // Confirmar sobrescritura
            showConfirmation(
                '¿Deseas importar este progreso? Se reemplazarán tus datos actuales.',
                () => {
                    state.userData = data.userData;
                    saveUserData();
                    updateUI();
                    updateUserNameDisplay();
                    updateProfileData();
                    document.getElementById('userProfileModal').style.display = 'none';
                    showMessage('✅ Importación Exitosa', 'Progreso cargado correctamente', 'success');
                }
            );
        } catch (error) {
            showMessage('❌ Error', 'No se pudo leer el archivo. Verifica que sea un archivo JSON válido.', 'error');
        }
    };
    
    reader.readAsText(file);
}

function validateImportData(data) {
    return data && 
           data.appName === 'DactiloKids' && 
           data.userData && 
           typeof data.userData.points === 'number' &&
           typeof data.userData.exercisesCompleted === 'number';
}

function showMessage(title, message, type) {
    const messageModal = document.getElementById('messageModal');
    const messageContent = document.getElementById('messageContent');
    const closeMessageModal = document.getElementById('closeMessageModal');
    
    if (!messageModal || !messageContent) return;
    
    const typeColors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6'
    };
    
    messageContent.innerHTML = `
        <h3 style="color: ${typeColors[type] || '#6366f1'};">${title}</h3>
        <p>${message}</p>
    `;
    
    messageModal.style.display = 'flex';
    
    // Cerrar manualmente
    if (closeMessageModal) {
        closeMessageModal.onclick = () => {
            messageModal.style.display = 'none';
        };
    }
    
    // Cerrar automáticamente después de 3 segundos
    setTimeout(() => {
        messageModal.style.display = 'none';
    }, 3000);
    
    // Cerrar al hacer clic en el fondo oscuro
    messageModal.onclick = (e) => {
        if (e.target === e.currentTarget) {
            messageModal.style.display = 'none';
        }
    };
}

function showConfirmation(message, onConfirm) {
    const confirmModal = document.getElementById('confirmModal');
    const confirmMessage = document.getElementById('confirmMessage');
    const confirmBtn = document.getElementById('confirmBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    
    if (!confirmModal || !confirmMessage || !confirmBtn || !cancelBtn) return;
    
    confirmMessage.textContent = message;
    confirmModal.style.display = 'flex';
    
    const handleConfirm = () => {
        onConfirm();
        confirmModal.style.display = 'none';
        cleanup();
    };
    
    const handleCancel = () => {
        confirmModal.style.display = 'none';
        cleanup();
    };
    
    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            confirmModal.style.display = 'none';
            cleanup();
        }
    };
    
    const cleanup = () => {
        confirmBtn.removeEventListener('click', handleConfirm);
        cancelBtn.removeEventListener('click', handleCancel);
        confirmModal.removeEventListener('click', handleOutsideClick);
    };
    
    confirmBtn.addEventListener('click', handleConfirm);
    cancelBtn.addEventListener('click', handleCancel);
    confirmModal.addEventListener('click', handleOutsideClick);
}

