import fs from 'node:fs';import path from 'node:path';import {execFileSync} from 'node:child_process';
const required=['index.html','styles.css','app.js','models.js','analysis.js','analysis-models.js','readings.js','assets/univalle-logo.jpg'];
for(const file of required){if(!fs.statSync(path.join('dist',file)).size)throw new Error('Archivo vacío: '+file);}
for(const file of ['app.js','models.js','analysis.js','analysis-models.js','readings.js'])execFileSync(process.execPath,['--check',path.join('dist',file)]);
const html=fs.readFileSync('dist/index.html','utf8');for(const [,ref]of html.matchAll(/(?:src|href)="([^"#][^"]*)"/g)){if(!/^(https?:|mailto:)/.test(ref)&&!fs.existsSync(path.join('dist',ref)))throw new Error('Falta recurso: '+ref);}
if(!html.includes('lang="es"'))throw new Error('Falta idioma');console.log('Recursos, entradas y sintaxis verificados. Sitio estático listo.');
