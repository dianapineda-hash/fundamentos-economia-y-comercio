// Escenarios didácticos: no son estimaciones de empresas reales.
export function allocation({hours,a,b,x,y}) {
  const used=a*x+b*y;
  return {used,slack:hours-used,feasible:used<=hours,maxX:hours/a,maxY:hours/b,opportunity:b/a};
}
export function opportunity({income,cost,hours,wage,alternative}) {
  const job=hours*wage,best=Math.max(job,alternative),net=income-cost;
  return {job,best,net,economic:net-best,choice:job===alternative?'Las dos alternativas empatan':job>alternative?'Trabajo remunerado':'Otro proyecto'};
}
export function marginal({price,first,step,fixed,q}) {
  const rows=Array.from({length:21},(_,n)=>{
    const variable=first*n+step*n*(n-1)/2;
    return {q:n,revenue:price*n,cost:fixed+variable,profit:price*n-fixed-variable,mc:n?first+step*(n-1):null};
  });
  const best=Math.max(...rows.map(r=>r.profit));
  return {...rows[q],rows,best,optima:rows.filter(r=>r.profit===best).map(r=>r.q),next:q<20?first+step*q:null};
}
