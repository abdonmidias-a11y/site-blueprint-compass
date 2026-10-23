import { describe, expect, it } from 'vitest';
import { UNITS, COMPANY, whatsappUrl } from '@/lib/site-data';
describe('WhatsApp routing', () => {
  it.each([['São Francisco','5598982990055'],['Vila Palmeira','5598981427514'],['Renascença','5598981384260']])('uses the confirmed number for %s', (name, phone) => {
    const unit = UNITS.find(u => u.name === name);
    if (!unit) throw new Error('Missing unit');
    const url = new URL(whatsappUrl(unit, 'Primeira Habilitação'));
    expect(url.pathname).toBe('/' + phone);
    expect(url.searchParams.get('text')).toBe(`Olá! Vim pelo site da Autoescola Abdon e gostaria de informações sobre Primeira Habilitação na unidade ${name}.`);
  });
  it('keeps the confirmed 29 years of operation', () => { expect(COMPANY.years).toBe(29); });
  it('keeps the confirmed eight instructors', () => { expect(COMPANY.instructors).toBe(8); });
  it('keeps the confirmed ten reception professionals', () => { expect(COMPANY.reception).toBe(10); });
  it('keeps three units in São Luís', () => { expect(UNITS).toHaveLength(3); });
});
