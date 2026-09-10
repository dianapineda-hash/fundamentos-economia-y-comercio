export const nf = new Intl.NumberFormat('es-CO', {maximumFractionDigits:2});
export function frontier(hours,chocolate){const maxChocolate=hours/4;const h=Math.min(maxChocolate,Math.max(0,chocolate));return {chocolate:h,cacao:(hours-4*h)/2,maxChocolate,maxCacao:hours/2,opportunity:2};}
export function freight(daily){return {a:1200+20*daily,b:1650+12*daily,threshold:56.25};}
export function gdp(c,i,g,x,m){return c+i+g+x-m;}
export function trade(price,machines=10){const cacao=price*machines;return {aCacao:60-cacao,aMachines:machines,bCacao:cacao,bMachines:15-machines,aGain:30-cacao,bGain:cacao-20,bothGain:price>2&&price<3};}
export const exportsData=[{name:'Combustibles y extractivas',share:40,value:1874.2,growth:8.3},{name:'Agropecuarios, alimentos y bebidas',share:26.4,value:1239.6,growth:-.8},{name:'Manufacturas',share:20.9,value:978.6,growth:-7.1},{name:'Otros sectores',share:12.8,value:598.4,growth:51.6}];
