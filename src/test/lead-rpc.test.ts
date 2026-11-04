// Opt-in live checks: no new rows are created by these invalid submissions.
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
const live = process.env['ABDON_LIVE_AUDIT'] === '1';
const env = live ? Object.fromEntries(readFileSync('.env', 'utf8').split('\n').filter(l=>l.includes('=')).map(l=>{const i=l.indexOf('=');return [l.slice(0,i),l.slice(i+1).replace(/^['"]|['"]$/g,'')];})) : {};
const valid = { submission_id:'aba3d859-7d43-4b39-aeaa-e95f8d2d1a87', started_at:Date.now()-5000, name:'TESTE CONTROLADO AUDITORIA ABDON', whatsapp:'98900000000', service:'Mudança de Categoria', unit:'Renascença', email:'', consent:true, source_page:'/contato', website:'' };
async function rpc(payload: unknown) {
 return fetch(`${env['VITE_SUPABASE_URL']}/rest/v1/rpc/submit_abdon_lead`, {method:'POST',headers:{apikey:env['VITE_SUPABASE_PUBLISHABLE_KEY'] ?? '', 'Content-Type':'application/json'},body:JSON.stringify({payload})});
}
describe.skipIf(!live)('live insert-only lead protection',()=>{
 it.each([
  ['missing name',{name:undefined}],['missing phone',{whatsapp:undefined}],['missing interaction time',{started_at:undefined}],
  ['missing consent',{consent:undefined}],['unknown service',{service:'inventado'}],['unknown unit',{unit:'inventada'}],
  ['instant submission',{started_at:Date.now()+60000}],['honeypot',{website:'bot'}],['invalid email',{email:'invalid'}],['external source',{source_page:'https://example.com'}],
 ])('rejects %s directly at the public entry point',async(_,changes)=>{const result=await rpc({...valid,...changes});expect(result.ok).toBe(false);});
 it('returns the same receipt when retrying a confirmed submission',async()=>{const a=await rpc(valid);const b=await rpc(valid);expect(a.ok).toBe(true);expect(b.ok).toBe(true);expect(await a.json()).toBe(valid.submission_id);expect(await b.json()).toBe(valid.submission_id);});
 it('denies anonymous access to stored leads',async()=>{const result=await fetch(`${env['VITE_SUPABASE_URL']}/rest/v1/leads?select=submission_id&limit=1`,{headers:{apikey:env['VITE_SUPABASE_PUBLISHABLE_KEY'] ?? ''}});expect([401,403]).toContain(result.status);});
});