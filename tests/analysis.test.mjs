import test from 'node:test';
import assert from 'node:assert/strict';
import {allocation,opportunity,marginal} from '../dist/analysis-models.js';
test('La escasez permite comparar un pedido imposible y un cambio de productividad',()=>{
  const s={hours:120,a:2,b:4,x:30,y:20};
  assert.equal(allocation(s).slack,-20);assert.equal(allocation(s).feasible,false);
  assert.equal(allocation({...s,hours:240}).opportunity,2);
  assert.equal(allocation({...s,b:2}).opportunity,1);
  assert.equal(allocation({...s,y:15}).slack,0);
});
test('La oportunidad usa la mejor alternativa y cambia en el umbral',()=>{
  const s={income:900,cost:300,hours:20,wage:20,alternative:500};
  assert.equal(opportunity(s).best,500);assert.equal(opportunity(s).economic,100);
  assert.equal(opportunity({...s,wage:30}).economic,0);
  assert.equal(opportunity({...s,wage:35}).economic,-100);
});
test('El cambio marginal equivale a la diferencia de beneficios y respeta empates',()=>{
  for(const price of [20,100,200])for(const step of [0,5,20]){
    const s={price,first:40,step,fixed:200,q:0};const r=marginal(s);
    for(let q=0;q<20;q++)assert.equal(r.rows[q+1].profit-r.rows[q].profit,price-r.rows[q+1].mc);
    const paid=marginal({...s,fixed:1000});assert.deepEqual(paid.optima,r.optima);assert.equal(paid.best,r.best-800);
  }
  const r=marginal({price:100,first:40,step:10,fixed:200,q:7});assert.deepEqual(r.optima,[6,7]);assert.equal(r.next,110);assert.equal(r.profit,10);
  assert.equal(marginal({price:20,first:40,step:10,fixed:200,q:0}).optima[0],0);
  assert.equal(marginal({price:100,first:40,step:0,fixed:200,q:20}).next,null);
  assert.equal(marginal({price:40,first:40,step:0,fixed:200,q:0}).optima.length,21);
});
