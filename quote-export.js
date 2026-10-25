/* Client-side quote export: no network calls or tracking. */
(()=>{'use strict';
const form=document.getElementById('calculator-form');if(!form)return;
const fieldIds=['crew','hours','wage','burden','other','margin'];
const note=document.getElementById('calculator-note');
const box=document.createElement('div');box.style.cssText='display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-top:20px;';
const button=document.createElement('button');button.type='button';button.className='btn btn-outline small-btn';button.textContent='Download my quote breakdown ↓';
const status=document.createElement('span');status.style.cssText='font-size:12px;line-height:1.5;color:#52776a;';status.textContent='Private CSV · No signup · Opens in Excel or Sheets';
box.append(button,status);note.insertAdjacentElement('afterend',box);
const get=id=>Number(document.getElementById(id).value);
const valid=id=>{const el=document.getElementById(id);return el.value.trim()!==''&&el.checkValidity()&&Number.isFinite(get(id));};
const money=x=>String(Math.round(x*100)/100);
const cell=x=>'"'+String(x).replace(/"/g,'""')+'"';
button.addEventListener('click',()=>{
 const missing=fieldIds.find(id=>!valid(id));if(missing){document.getElementById(missing).focus();status.textContent='Please enter valid numbers first.';return;}
 const crew=get('crew'),hours=get('hours'),wage=get('wage'),burden=get('burden');
 const other=get('other'),margin=get('margin');
 const labor=crew*hours*wage*(1+burden/100),cost=labor+other,quote=cost/(1-margin/100);
 const rows=[['Cleaning quote cost breakdown','Illustrative planning worksheet'],
 ['Cleaners',crew],['Hours per cleaner',hours],['Hourly pay (USD)',money(wage)],
 ['Payroll and benefits burden (%)',money(burden)],['Supplies, travel and overhead (USD)',money(other)],
 ['Target modeled contribution margin (%)',money(margin)],['Loaded labor cost (USD)',money(labor)],
 ['Total modeled cost (USD)',money(cost)],['Illustrative quote (USD)',money(quote)],
 ['Modeled contribution (USD)',money(quote-cost)],
 ['Important','Estimate only; not an actual client price or profit guarantee. Excludes taxes, payment fees and unmodeled expenses.'],
 ['Privacy','This file is generated locally; calculator numbers are not submitted to a server.']];
 const csv='\ufeff'+rows.map(row=>row.map(cell).join(',')).join('\r\n')+'\r\n';
 const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
 const a=document.createElement('a');a.href=url;a.download='cleaning-quote-cost-breakdown.csv';
 document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);
 status.textContent='Saved. Your inputs remain in your browser.';
});
})();