import { beforeEach, describe, expect, it, vi } from 'vitest';
import { leadSchema } from '@/lib/lead-schema';
import { captureAttribution, trackConfirmedLead, trackWhatsApp } from '@/lib/tracking';
const valid = { submission_id:'05efb04d-b1af-440a-98a2-34f4214c7341', started_at:Date.now()-5000, name:'Teste Abdon', whatsapp:'(98) 98299-0055', service:'Primeira Habilitação', unit:'São Francisco', email:'', consent:true, source_page:'/contato', website:'' };
describe('lead validation',()=>{
 it('accepts optional email and normalizes WhatsApp',()=>{expect(leadSchema.parse(valid).whatsapp).toBe('98982990055');});
 it('requires LGPD consent',()=>{expect(leadSchema.safeParse({...valid,consent:false}).success).toBe(false);});
 it('rejects invalid WhatsApp',()=>{expect(leadSchema.safeParse({...valid,whatsapp:'1234'}).success).toBe(false);});
 it('rejects unknown service',()=>{expect(leadSchema.safeParse({...valid,service:'inventado'}).success).toBe(false);});
 it('rejects unknown unit',()=>{expect(leadSchema.safeParse({...valid,unit:'inventada'}).success).toBe(false);});
 it('blocks filled spam trap',()=>{expect(leadSchema.safeParse({...valid,website:'bot'}).success).toBe(false);});
 it('blocks instant submissions',()=>{expect(leadSchema.safeParse({...valid,started_at:Date.now()}).success).toBe(false);});
});
describe('conversion events',()=>{
 beforeEach(()=>{window.dataLayer=[];sessionStorage.clear();});
 it('emits one generate_lead for a confirmed receipt',()=>{const id=crypto.randomUUID();trackConfirmedLead(id,{servico:valid.service,unidade:valid.unit});trackConfirmedLead(id,{});expect(window.dataLayer?.filter(e=>e['event']==='generate_lead')).toHaveLength(1);});
 it('does not classify WhatsApp as a received lead',()=>{trackWhatsApp('São Francisco','Primeira Habilitação','/');expect(window.dataLayer?.map(e=>e['event'])).toEqual(['click_whatsapp']);});
 it('preserves first-touch attribution',()=>{sessionStorage.setItem('abdon_attribution',JSON.stringify({utm_source:'first'}));captureAttribution();expect(JSON.parse(sessionStorage.getItem('abdon_attribution')||'{}').utm_source).toBe('first');});
});
