(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.QuestCore=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  const volumes=[10,12,14,16,18,20];
  const fields=['team','predict','note','claim','evidence','reason','exit',...volumes.map(v=>'p'+v)];
  const checks=['safety','check-data','check-model','check-conditions'];
  function pressure(raw){if(raw===undefined||raw===null||String(raw).trim()==='')return {state:'empty'};const n=Number(raw);if(!Number.isFinite(n)||n<=0)return {state:'invalid',message:'0보다 큰 압력을 입력하세요.'};if(n>400)return {state:'invalid',message:'센서 범위(400 kPa)를 넘었습니다. 단위·입력을 확인하세요.'};return {state:'valid',value:n};}
  function clean(data){const out={};if(!data||typeof data!=='object')return out;for(const k of fields)out[k]=typeof data[k]==='string'?data[k]:'';for(const k of checks)out[k]=data[k]===true;return out;}
  function points(data){return volumes.flatMap(v=>{const p=pressure(data['p'+v]);return p.state==='valid'?[[v,p.value]]:[];});}
  function graph(data){const ps=points(data),max=Math.max(120,...ps.map(p=>p[1]))*1.1;return {points:ps,max};}
  function svg(data){const g=graph(data);let s='<title>주사기 부피와 압력 산점도</title><rect width="500" height="350" fill="#f3f5f7"/>';for(let i=0;i<=4;i++){const y=285-i*57.5;s+=`<path d="M65 ${y}H470" stroke="#d8e0e5"/><text x="54" y="${y+4}" text-anchor="end" fill="#41596a" font-size="12">${(g.max*i/4).toFixed(0)}</text>`;}s+='<path d="M65 42V285H470" stroke="#526c7f" fill="none"/><text x="65" y="23" fill="#41596a" font-size="12">압력 (kPa)</text><text x="270" y="337" text-anchor="middle" fill="#41596a" font-size="12">주사기 부피 (mL)</text>';for(const v of volumes)s+=`<text x="${80+(v-10)*37}" y="310" text-anchor="middle" fill="#41596a" font-size="12">${v}</text>`;for(const [v,p]of g.points)s+=`<circle cx="${80+(v-10)*37}" cy="${285-p/g.max*230}" r="5.5" fill="#247567"><title>${v} mL, ${p} kPa</title></circle>`;if(!g.points.length)s+='<text x="270" y="160" text-anchor="middle" fill="#6a7d8b" font-size="14">측정값을 입력하면 점이 나타나요</text>';return s;}
  return {volumes,fields,checks,pressure,clean,points,graph,svg};
});
