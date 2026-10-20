import { describe, expect, it } from 'vitest';
import { UNITS, SERVICES, SERVICE_DETAILS, whatsappUrl } from '@/lib/site-data';
describe('WhatsApp routing', () => {
  it.each([['São Francisco','5598982990055'],['Vila Palmeira','5598981427514'],['Renascença','5598981384260']])('uses the confirmed number for %s', (name, phone) => {
    const unit = UNITS.find(u => u.name === name);
    if (!unit) throw new Error('Missing unit');
    const url = new URL(whatsappUrl(unit, 'Primeira Habilitação'));
    expect(url.pathname).toBe('/' + phone);
    expect(url.searchParams.get('text')).toBe(`Olá! Vim pelo site da Autoescola Abdon e gostaria de informações sobre Primeira Habilitação na unidade ${name}.`);
  });
  it('provides individual content for all seven services', () => {
    expect(SERVICES).toHaveLength(7);
    for (const service of SERVICES) expect(SERVICE_DETAILS[service.slug]?.benefits.length).toBe(3);
  });
});
