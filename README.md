# DactiloKids - Curso de Dactilografía para Niños

## Descripción

DactiloKids es una aplicación web educativa interactiva diseñada para enseñar mecanografía a niños de manera divertida y efectiva. El curso utiliza un enfoque pedagógico progresivo con gamificación para mantener a los estudiantes motivados mientras desarrollan habilidades de escritura táctil profesional.

## Características Principales

### Sistema de Aprendizaje Progresivo
- **9 niveles de práctica** organizados desde lo básico hasta lo avanzado
- **8 slides teóricos** con contenido educativo visual
- **Ejercicios progresivos** diseñados específicamente para el aprendizaje infantil
- **5 ejercicios por nivel** para garantizar la práctica adecuada

### Niveles de Práctica
1. Fila Base - ASDF
2. Fila Base - JKLÑ
3. Fila Base Completa
4. Fila Superior - QWERT
5. Fila Superior - YUIOP
6. Fila Inferior - ZXCVB
7. Fila Inferior - NM
8. Palabras Completas
9. Números (0-9)

### Sistema de Ayuda Visual
- **Resaltado de teclas** en niveles iniciales (1-3) para principiantes
- **Modo independiente** en niveles avanzados (4-9) para desarrollar memoria muscular
- **Teclado visual interactivo** con feedback en tiempo real
- **Scroll automático** del texto para evitar distracciones

### Gamificación
- **Sistema de puntos** acumulativos
- **5 rangos de progresión**: Pollito, Tortuga, Conejo, Águila, Cohete
- **Medición de rendimiento**: PPM (palabras por minuto), precisión, tiempo
- **Estadísticas detalladas**: aciertos, errores, mejor récord personal

### Interfaz Intuitiva
- **Navegación por cards clickeables** para acceso rápido
- **Transiciones suaves** entre secciones
- **Diseño responsive** adaptado a diferentes dispositivos
- **Feedback visual inmediato** en todas las interacciones

### Gestión de Progreso
- **Perfil de usuario** con nombre personalizable
- **Exportación de progreso** en formato JSON para respaldo
- **Importación de datos** desde archivo para continuar en otro dispositivo
- **Guardado automático** en LocalStorage del navegador
- **Sincronización manual** mediante archivos de progreso
- **Validación de datos** al importar archivos
- **Confirmación de sobrescritura** para evitar pérdida accidental de datos

#### Cómo Exportar tu Progreso
1. Haz clic en el botón **⚙️ Mi Cuenta** en el header
2. En la sección "Gestión de Progreso", pulsa **📥 Exportar Progreso**
3. Se descargará un archivo JSON con tu nombre y fecha: `DactiloKids_TuNombre_2025-12-09.json`
4. Guarda este archivo en un lugar seguro (USB, nube, correo, etc.)

#### Cómo Importar tu Progreso
1. Abre DactiloKids en cualquier navegador o dispositivo
2. Haz clic en **⚙️ Mi Cuenta** en el header
3. En la sección "Gestión de Progreso", pulsa **📤 Importar Progreso**
4. Selecciona tu archivo JSON previamente exportado
5. Confirma la importación (esto reemplazará tus datos actuales)
6. Tu progreso se restaurará completamente

#### Datos que se Guardan
- Nombre del estudiante
- Puntos acumulados
- Ejercicios completados
- Mejor registro de PPM (palabras por minuto)
- Precisión promedio
- Fecha de creación de la cuenta
- Fecha de última modificación

## Contenido Educativo

### Sección Teoría
- Introducción a la dactilografía y sus beneficios
- Anatomía del teclado y teclas especiales
- Posición correcta de los dedos por mano
- Postura ergonómica recomendada
- Consejos y mejores prácticas
- Plan estructurado de 10 sesiones

### Sección Práctica
- Ejercicios personalizados por nivel
- Textos variados con más de 200 combinaciones diferentes
- Contador de ejercicios completados
- Sistema de reinicio y continuación
- Medición en tiempo real de velocidad y precisión

### Sección Mi Progreso
- Visualización del rango actual
- Estadísticas acumuladas
- Historial de ejercicios completados
- Sistema de logros y puntos

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con animaciones y gradientes
- **JavaScript (Vanilla)**: Lógica de aplicación sin dependencias
- **LocalStorage**: Persistencia de datos del usuario

## Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de software adicional
- No requiere conexión a internet después de la carga inicial

### Instrucciones
1. Abrir el archivo `index.html` en un navegador web
2. La aplicación cargará automáticamente
3. Seleccionar una sección (Teoría, Práctica, Mi Progreso)
4. Comenzar a aprender

### Uso del Sistema de Práctica
1. En la sección "Práctica", hacer clic en cualquier nivel
2. El sistema iniciará automáticamente el ejercicio
3. Escribir el texto mostrado en el área de entrada
4. Al completar, revisar las estadísticas en el modal de resultados
5. Continuar con el siguiente ejercicio o cambiar de nivel

## Estructura del Proyecto

```
DactiloKids/
│
├── index.html          # Estructura principal de la aplicación
├── styles.css          # Estilos y diseño visual
├── app.js             # Lógica de la aplicación
└── README.md          # Documentación del proyecto
```

## Arquitectura del Código

### HTML
- Organizado en tres secciones principales
- Estructura semántica con navegación clara
- Modales para feedback de resultados

### CSS
- Variables CSS para mantenibilidad
- Diseño responsive con CSS Grid y Flexbox
- Animaciones y transiciones suaves
- Temas de color consistentes

### JavaScript
- Arquitectura modular con funciones específicas
- Sistema de estado centralizado
- Gestión de eventos eficiente
- Persistencia de datos con LocalStorage

## Enfoque Pedagógico

### Progresión Gradual
El curso está diseñado con una progresión pedagógica cuidadosa:
- **Niveles 1-3**: Introducción a la fila base con ayuda visual completa
- **Niveles 4-7**: Expansión a filas superiores e inferiores con práctica independiente
- **Nivel 8**: Integración con palabras completas
- **Nivel 9**: Práctica de números para completar las habilidades

### Sistema de Ayuda Adaptativo
- **Principiantes (Niveles 1-3)**: Resaltado de teclas para guiar el aprendizaje
- **Intermedios (Niveles 4-9)**: Práctica independiente para desarrollar memoria muscular

### Feedback Constructivo
- Retroalimentación inmediata con colores (verde para aciertos, rojo para errores)
- Estadísticas detalladas al finalizar cada ejercicio
- Mensajes de motivación según el rendimiento

## Características Técnicas

### Rendimiento
- Sin dependencias externas para carga rápida
- Optimización de renderizado con delegación de eventos
- Scroll automático eficiente sin bloqueo de UI

### Accesibilidad
- Navegación por teclado completa
- Indicadores visuales claros
- Feedback de estado en todas las acciones

### Persistencia
- **Guardado automático** del progreso en LocalStorage
- **Exportación/Importación** de datos en formato JSON
- **Portabilidad** entre dispositivos mediante archivos
- **Respaldo manual** para seguridad de datos
- Conservación de estadísticas entre sesiones
- Sistema de usuario con nombre personalizable

## Métricas de Rendimiento

El sistema mide y calcula:
- **PPM (Palabras Por Minuto)**: Velocidad de escritura estándar
- **Precisión**: Porcentaje de aciertos sobre total de caracteres
- **Aciertos y Errores**: Conteo detallado para análisis
- **Tiempo**: Duración de cada ejercicio

## Futuras Mejoras Sugeridas

- Modo oscuro para reducir fatiga visual
- Certificado de finalización del curso en PDF
- Ejercicios con mayúsculas y signos de puntuación
- Modo multijugador para competencias
- Soporte para diferentes idiomas y layouts de teclado
- Integración con Google Drive o Dropbox para sincronización automática
- Gráficos de progreso histórico

## Compatibilidad

### Navegadores Soportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Dispositivos
- Computadoras de escritorio
- Laptops
- Tablets con teclado físico

## Licencia

Este proyecto es de uso educativo desarrollado para el curso vacacional 2025 de UCATEC.

## Autor

**El Profe Erlanger**

Desarrollado como material educativo para el curso de dactilografía infantil.

## Contacto y Soporte

Para preguntas, sugerencias o reportar problemas, contactar al autor erlanger.soft.07@gmail.com.

## Agradecimientos

Agradecimientos especiales a todos los estudiantes del curso vacacional 2025 por su participación y feedback durante el desarrollo de esta herramienta educativa.

---

**Versión**: 1.0.0  
**Última actualización**: Diciembre 2025  
**Institución**: UCATEC - Curso Vacacional 2025
