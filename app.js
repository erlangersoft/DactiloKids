// ========== DATOS Y CONFIGURACIÓN ==========
const levelTexts = {
    1: ['asdf asdf asdf asdf', 'fdsa fdsa fdsa fdsa', 'asdf fdsa asdf fdsa', 'asd dsa fds sdf asd', 'dad sad fad asa dad', 
        'asdf asdf fdsa fdsa', 'aaa sss ddd fff', 'fas das sas fas', 'fad sad dad fad', 'asdf fdsa asdf fdsa',
        'dasa fasa safa dafa', 'sadf fasddasf safd', 'afds sfda dfas asfd', 'dsaf asfd fdas sadf',
        'asd fds sad fad', 'ddd aaa sss fff', 'fds sdf asd dsa', 'fas saf das sad', 'asdf asdf asdf',
        'fdsa fdsa fdsa', 'afd sfd daf saf', 'sada fada dada safa', 'asfd fdas sadf dfas',
        'ada fafa dada sasa', 'fsdf asds dfdf sdsd', 'afas dfdf sasas fafaf'],
    2: ['jklñ jklñ jklñ jklñ', 'ñlkj ñlkj ñlkj ñlkj', 'jkl lkj kjl jkl lkj', 'jñj klk lñl ñkj jlñ',
        'jklñ ñlkj jklñ ñlkj', 'jjj kkk lll ñññ', 'ñlj klj lkj ñlj', 'jañ lañ kañ jañ', 'jklñ lkjñ jklñ lkjñ',
        'laja kaña jala ñaka', 'jañl kñlj lñjk ñlkj', 'añjk lñkj jñlk kñlj', 'ñjkl jlkñ klñj lkjñ',
        'jkl klj lkj jkl', 'ñññ jjj kkk lll', 'lkñ jkl ñlk kjl', 'jala kala laja ñaja', 'klñj jlñk ñjkl',
        'jaja kaka lala ñaña', 'jkjk lñlñ klkl ñjñj', 'laja jala kaña ñaka', 'jlkñ klñj ñjkl lkjñ',
        'kjkj lñlñ jñjñ klkl', 'ñaña jaja kaka lala', 'jklñ jklñ ñlkj ñlkj'],
    3: ['asdf jklñ asdf jklñ', 'fdsa ñlkj fdsa ñlkj', 'aj sk dl fñ aj sk dl', 'afjñ sldkfjñ alskdfjñ',
        'asdf jklñ fdsa ñlkj', 'aj fk sl dñ aj fk sl', 'alas faja sala kaj', 'lasa daka faja sañ',
        'asdf jklñ asdf jklñ', 'fdsa ñlkj fdsa ñlkj', 'asjk dflñ sadk fjlñ', 'jfas kñds ljaf ñksd',
        'afjk sldñ dkañ fslj', 'jfad ksañ ldfj añsk', 'alfa safa laja daja', 'kasa faja lasa sañ',
        'añsk jfld ksañ dflj', 'jask fdlñsakj fñld', 'lañ kaj faj saj', 'daf jal sañ fañ',
        'afjs dklñ sajf ñldk', 'jafs ñldk sajf kdñl', 'asdf jklñ fdsa ñlkj', 'ajsk dflñ sajk fñld'],
    4: ['qwert qwert qwert', 'trewq trewq trewq', 'qwe rew ter qwe rew', 'aq sw de fr gt aq sw',
        'qwert trewq qwert trewq', 'qqq www eee rrr ttt', 'qwer rewq terw wqer', 'aqe swe dre frt gtr',
        'qeta reta seta feta', 'qrew trew drew frew', 'trew qrew erew rrew', 'qwer trew qrew ertw',
        'qwe ewq wer rew', 'qqq eee www rrr', 'trew wert retw qwer', 'aqwr swer deqw frte',
        'teta reta qeta weta', 'eqwr rtew qwre wetr', 'qrqr wew tete', 'aqsa dqwe frqw gtew',
        'qwer qwer trewq trewq', 'reqw terw qrew wert', 'eret qwqw trtrt ewew', 'qwert trewq ewrt'],
    5: ['yuiop yuiop yuiop', 'poiuy poiuy poiuy', 'yui uio iop yui uio', 'jy ku li oñ jy ku li',
        'yuiop poiuy yuiop poiuy', 'yyy uuu iii ooo ppp', 'yuio poiu uiop ioyu', 'jyui kuio lipo ñoui',
        'yoyo pupi uiui oyoy', 'yupi pipo uopi ypui', 'poyo yupi uipo oyui', 'iyop uyop pyop oyui',
        'yui iuy oiu pui', 'yyy iii uuu ooo', 'poiu yuio uiop ioyu', 'jyuo kuip liyo ñopu',
        'yoyo pipi uiui opop', 'uyui ioyu poiy yuio', 'pypy uyuy ioio', 'yuop iopu pyui oyui',
        'yuiop yuiop poiuy poiuy', 'iyop pyui uyoi opyu', 'yoyo yuyu pipi pupu', 'yuiop poiuy ioyu'],
    6: ['zxcvb zxcvb zxcvb', 'bvcxz bvcxz bvcxz', 'zxc xcv cvb zxc xcv', 'az sx dc fv gb az sx',
        'zxcvb bvcxz zxcvb bvcxz', 'zzz xxx ccc vvv bbb', 'zxcv vcxz cvbx xzvc', 'azx sxc dcv fvb gbc',
        'zaca vaca baza caza', 'zxvb cxbv bxcz vzxc', 'baza caza vaza xaza', 'zxcv bvcx cxbv vxzc',
        'zxc xcz cvb bvc', 'zzz xxx ccc vvv', 'bvcz zxcv cvbx xzcv', 'azxc sxcv dvcb fvbz',
        'zaza xaxa caca vava', 'vxcz bxcv zvcx czbv', 'zbzb xcxc vcvc', 'azcv sxbz dcxv fvbz',
        'zxcvb zxcvb bvcxz bvcxz', 'cxzv bvxc zbvc vxcz', 'zaza xcxc vcvc baba', 'zxcvb bvcxz cvbx'],
    7: ['nm nm nm nm nm nm', 'mn mn mn mn mn mn', 'jn km lñ jn km lñ', 'nmb bmn jnm nmb bmn',
        'nmnm mnmn nmnm mnmn', 'nnn mmm nnn mmm', 'nman mnan jman kman', 'nmbn mnbm bnmn mbnm',
        'mana nana mona noma', 'nmon mnom ñnom jnom', 'nmnm mnmn nmbn mbnm', 'jnmn kmnm lnmñ ñmnm',
        'nmn mnm bmn nbm', 'nnn mmm nnn mmm', 'mnbm nmbm bmnm nbmn', 'jnmb knmn lnmñ mnmñ',
        'mano noma nana mama', 'nmon mnon bnmn mnbn', 'mnmn nmnm bmbn', 'jnma knmo lnmu mnmñ',
        'nmnm nmnm mnmn mnmn', 'bmnm nbmn mnbn nmbm', 'nana mama mona noma', 'nmnm mnmn bnmb'],
    8: ['sal las ala sol los', 'casa masa pasa rasa', 'luna nube sol cielo', 'el sol sale bonito', 'mi mama me mima',
        'la luna sale hoy', 'el mar esta azul', 'mi perro corre rapido', 'las aves vuelan alto', 'mi familia es grande',
        'la vida es bella', 'el pan esta rico', 'los niños juegan felices', 'el viento sopla fuerte', 'la casa es blanca',
        'la mesa esta limpia', 'los gatos duermen mucho', 'mi hermano es alto', 'el agua esta fria', 'la flor es roja',
        'el libro tiene hojas', 'la silla es comoda', 'mi papa trabaja bien', 'el cielo es hermoso', 'la tierra es redonda',
        'los peces nadan rapido', 'el bosque es verde', 'la luz brilla fuerte', 'mi amigo es bueno']
};

const levelNames = {
    1: 'Fila Base - ASDF', 2: 'Fila Base - JKLÑ', 3: 'Fila Base Completa',
    4: 'Fila Superior - QWERT', 5: 'Fila Superior - YUIOP',
    6: 'Fila Inferior - ZXCVB', 7: 'Fila Inferior - NM', 8: 'Palabras Completas'
};

const levelKeys = {
    1: ['A', 'S', 'D', 'F'], 2: ['J', 'K', 'L', 'Ñ'], 3: ['A', 'S', 'D', 'F', 'J', 'K', 'L', 'Ñ'],
    4: ['Q', 'W', 'E', 'R', 'T'], 5: ['Y', 'U', 'I', 'O', 'P'],
    6: ['Z', 'X', 'C', 'V', 'B'], 7: ['N', 'M'], 8: ['Palabras']
};

const levelColors = [
    'linear-gradient(135deg, #6C63FF, #8B84FF)', 'linear-gradient(135deg, #FF6B9D, #FF8FAF)',
    'linear-gradient(135deg, #00D4AA, #00E6B8)', 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    'linear-gradient(135deg, #8B5CF6, #A78BFA)', 'linear-gradient(135deg, #EC4899, #F472B6)',
    'linear-gradient(135deg, #14B8A6, #2DD4BF)', 'linear-gradient(135deg, #EF4444, #F87171)'
];

const ranks = [
    { name: 'Pollito', icon: '🐣', min: 0, max: 99, color: '#FFD93D' },
    { name: 'Tortuga', icon: '🐢', min: 100, max: 299, color: '#6BCB77' },
    { name: 'Conejo', icon: '🐇', min: 300, max: 499, color: '#4D96FF' },
    { name: 'Águila', icon: '🦅', min: 500, max: 799, color: '#FF6B9D' },
    { name: 'Cohete', icon: '🚀', min: 800, max: Infinity, color: '#A78BFA' }
];

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
        points: 0, exercisesCompleted: 0, bestWpm: 0,
        totalAccuracy: 0, accuracyCount: 0
    };
}

function saveUserData() {
    localStorage.setItem('dactiloKidsData', JSON.stringify(state.userData));
}

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSlides();
    initKeyboard();
    initLevelGrid();
    initPractice();
    initLevelsDisplay();
    updateUI();
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

// ========== TECLADO VISUAL ==========
function initKeyboard() {
    const keyboardHTML = generateKeyboardHTML();
    document.getElementById('keyboardTheory').innerHTML = keyboardHTML;
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
    
    // Generar ejercicio más largo combinando múltiples textos
    const texts = levelTexts[state.selectedLevel];
    const shuffled = [...texts].sort(() => Math.random() - 0.5); // Mezclar el array
    const selectedTexts = shuffled.slice(0, Math.min(15, texts.length)); // Tomar hasta 15 textos
    state.practiceText = selectedTexts.join('  '); // Unir con doble espacio para separación
    
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

function highlightNextKey() {
    // Limpiar cualquier resaltado anterior
    document.querySelectorAll('.key.next-key').forEach(k => k.classList.remove('next-key'));
    
    // Solo resaltar en niveles 1-3 (modo ayuda para principiantes)
    if (state.selectedLevel <= 3 && state.currentPosition < state.practiceText.length) {
        const nextChar = state.practiceText[state.currentPosition];
        const nextKey = document.querySelector(`[data-key="${nextChar.toLowerCase()}"]`);
        if (nextKey) {
            nextKey.classList.add('next-key');
        }
    }
}

function generatePracticeKeyboard() {
    document.getElementById('practiceKeyboard').innerHTML = generateKeyboardHTML();
    highlightNextKey(); // Resaltar la primera tecla al iniciar
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
        
        const key = document.querySelector(`[data-key="${expectedChar.toLowerCase()}"]`);
        
        if (typedChar === expectedChar) {
            state.currentPosition++;
            if (key) { key.classList.add('correct'); setTimeout(() => key.classList.remove('correct'), 200); }
        } else {
            state.errors++;
            if (key) { key.classList.add('wrong'); setTimeout(() => key.classList.remove('wrong'), 200); }
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
    
    // Calcular puntos
    let points = 10;
    if (accuracy === 100) points += 5;
    if (wpm > state.userData.bestWpm) { points += 15; state.userData.bestWpm = wpm; }
    
    // Actualizar datos
    state.userData.points += points;
    state.userData.exercisesCompleted++;
    state.userData.totalAccuracy += accuracy;
    state.userData.accuracyCount++;
    saveUserData();
    
    // Calcular aciertos y errores
    const correct = state.totalChars - state.errors;
    const errors = state.errors;
    
    // Mostrar modal
    document.getElementById('resultWpm').textContent = wpm;
    document.getElementById('resultAccuracy').textContent = `${accuracy}%`;
    document.getElementById('resultTime').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    document.getElementById('resultCorrect').textContent = correct;
    document.getElementById('resultErrors').textContent = errors;
    document.getElementById('pointsEarned').textContent = `+${points} puntos`;
    
    document.getElementById('resultIcon').textContent = accuracy >= 90 ? '🎉' : accuracy >= 70 ? '👍' : '💪';
    document.getElementById('resultTitle').textContent = accuracy >= 90 ? '¡Excelente!' : accuracy >= 70 ? '¡Buen trabajo!' : '¡Sigue practicando!';
    
    // Actualizar subtítulo con progreso de ejercicios
    const subtitle = document.getElementById('resultSubtitle');
    if (state.currentExercise < state.totalExercises) {
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
    
    // Actualizar estadísticas
    document.getElementById('statPoints').textContent = state.userData.points;
    document.getElementById('statExercises').textContent = state.userData.exercisesCompleted;
    document.getElementById('statBestWpm').textContent = state.userData.bestWpm;
    const avgAccuracy = state.userData.accuracyCount > 0 
        ? Math.round(state.userData.totalAccuracy / state.userData.accuracyCount) 
        : 0;
    document.getElementById('statAccuracy').textContent = `${avgAccuracy}%`;
    
    // Actualizar niveles
    initLevelsDisplay();
}
