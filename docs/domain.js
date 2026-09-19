export const RM = cents => new Intl.NumberFormat('en-MY', {style:'currency',currency:'MYR'}).format((cents||0)/100);
export const today = () => new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kuala_Lumpur',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
export const monthNow = () => today().slice(0,7);
export const fee = discount => Math.round(8000*(100-Number(discount))/100);
export const balance = c => Math.max(0,c.amount-c.paid);
export const money = value => {const n=Number(value);if(!Number.isFinite(n)||n<=0||n>100000||Math.abs(n*100-Math.round(n*100))>0.000001)throw Error('Enter a positive amount, with at most two decimal places (maximum RM100,000).');return Math.round(n*100);};
export const can = (p,scope,now=Date.now()) => p?.status==='active' && (p.role==='owner'||((p.termUntil||0)>now&&p.permissions?.includes(scope)));
export const emptyTotals = () => ({billed:0,received:0,expenses:0,opening:0});
export function applyPayment(charge,amount){if(!Number.isInteger(amount)||amount<=0||amount>balance(charge))throw Error('Payment exceeds the remaining fee, or is invalid.');return {...charge,paid:charge.paid+amount};}
export function series(months){return Object.entries(months).sort(([a],[b])=>a.localeCompare(b)).slice(-6);}
export function csv(rows){return rows.map(row=>row.map(v=>{let s=String(v??'');if(/^[=+@\-\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"';}).join(',')).join('\r\n');}
export function summaryDelta(current,delta){const out={...emptyTotals(),...current};for(const [k,v]of Object.entries(delta))out[k]=(out[k]||0)+v;return out;}
