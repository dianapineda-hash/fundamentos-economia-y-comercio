# Laboratorio de economía y comercio

Repositorio: https://github.com/dianapineda-hash/fundamentos-economia-y-comercio

Recurso educativo de consulta y experimentación para las sesiones 2, 3 y 4 de Fundamentos de Economía y Comercio, Programa de Comercio Exterior, Universidad del Valle. Docente: Diana Lorena Pineda Ospina.

## Contenido

- Sesión 2: escasez, elección, costo de oportunidad, pensamiento marginal y sesgos. Simuladores de frontera de producción y elección logística.
- Sesión 3: factores productivos, remuneraciones, sectores y flujos. Mapa interactivo de actores y simulador de importaciones en la identidad del PIB.
- Sesión 4: ventaja comparativa e intercambio. Simulador de distribución de ganancias.
- Observatorio: PIB de Colombia, exportaciones y noticias comentadas de OMC y UNCTAD.
- Biblioteca: seis libros con preguntas de lectura y acceso a las fuentes.
- Caja de herramientas: glosario, reto integrador y ficha de evidencia descargable.

Los escenarios de empresas y economías son ficticios y están identificados. Los datos estadísticos tienen fuente, período y comparación. Corte de consulta: 10 de septiembre de 2026. No hay noticias en tiempo real ni captura de respuestas de estudiantes. Las notas se conservan en memoria durante la navegación de la pestaña y se pueden descargar como texto.

## Ejecutar localmente

Requiere Node.js 20 o superior. No necesita instalar dependencias.

```sh
npm run build
npm test
npm start
```

Abrir http://127.0.0.1:4173. Los enlaces internos usan fragmentos (`#sesion-2`, etc.) para permitir enlaces directos sin reglas especiales del servidor.

## Publicar en Render

El archivo `render.yaml` define un Static Site. En Render, crear un Blueprint desde este repositorio y revisar la configuración antes de confirmar. También se puede crear el sitio estático manualmente:

- Branch: `main`
- Build command: `npm run build`
- Publish directory: `dist`

El repositorio no contiene claves ni requiere variables de entorno. La conexión de GitHub se realiza desde la cuenta del propietario. Render sirve únicamente `dist`, excluyendo las pruebas y documentación.

## Actualizar el recurso

El contenido y las fichas están en `dist/app.js`; los cálculos y la tabla de exportaciones están en `dist/models.js`; los estilos en `dist/styles.css`. Al actualizar indicadores, revisar texto, datos, fechas, unidades, comparaciones, fuentes y actividades relacionadas. Ejecutar `npm run build` y `npm test` antes de publicar.

## Imagen institucional

Se utiliza la firma horizontal descargada sin modificar desde el portal de la Universidad. La documentación de fuentes, colores y pautas aplicadas está en `docs/identidad.md`. La marca pertenece a la Universidad del Valle y no se concede licencia sobre ella. El recurso es material de apoyo docente y no sustituye el portal institucional.

## Validación

Las pruebas verifican conservación de recursos, comparación logística, cancelación contable de una compra importada y distribución de bienes tras el intercambio. La revisión estática valida archivos, recursos locales y sintaxis JavaScript. Los gráficos tienen descripciones y sus resultados numéricos se muestran como texto. Hay navegación por teclado, etiquetas de controles, estilos de foco y adaptación a pantallas pequeñas.
