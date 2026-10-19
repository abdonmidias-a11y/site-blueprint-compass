// Confirmed business data for Autoescola Abdon. Do not add unconfirmed info here.

export type Unit = {
  id: "sao-francisco" | "vila-palmeira" | "renascenca";
  name: string;
  building?: string;
  street: string;
  district: string;
  city: string;
  cep: string;
  whatsapp: string;
};

export const UNITS: Unit[] = [
  {
    id: "sao-francisco",
    name: "São Francisco",
    street: "Rua Mauro Lima, 219",
    district: "São Francisco",
    city: "São Luís/MA",
    cep: "65076-370",
    whatsapp: "5598982990055",
  },
  {
    id: "vila-palmeira",
    name: "Vila Palmeira",
    street: "Avenida dos Franceses, 96A",
    district: "Vila Ivar Saldanha",
    city: "São Luís/MA",
    cep: "65036-283",
    whatsapp: "5598981427514",
  },
  {
    id: "renascenca",
    name: "Renascença",
    building: "Edifício São Luís Multiempresarial",
    street: "Rua dos Azulões, 231",
    district: "Jardim Renascença II",
    city: "São Luís/MA",
    cep: "65075-060",
    whatsapp: "5598981384260",
  },
];

export type Service = { slug: string; title: string; short: string; icon: string };

// Descriptions are neutral category summaries; offered modalities still need Abdon's confirmation.
export const SERVICES: Service[] = [
  { slug: "primeira-habilitacao", title: "Primeira Habilitação", short: "Tire sua primeira CNH de moto, carro ou ambos.", icon: "car" },
  { slug: "alteracao-de-categoria", title: "Alteração de Categoria", short: "Mude para as categorias de ônibus ou carreta.", icon: "bus" },
  { slug: "inclusao-de-categoria", title: "Inclusão de Categoria", short: "Inclua moto ou carro na sua habilitação.", icon: "plus" },
  { slug: "reciclagem", title: "Curso de Reciclagem", short: "Regularize sua CNH após suspensão.", icon: "refresh" },
  { slug: "aulas-para-habilitados", title: "Aulas para Habilitados", short: "Ganhe confiança ao volante com aulas práticas.", icon: "wheel" },
  { slug: "renovacao-de-cnh", title: "Renovação de CNH", short: "Orientação para renovar sua habilitação.", icon: "id" },
  { slug: "cursos-especializados", title: "Cursos Especializados", short: "Formações para atuação profissional no trânsito.", icon: "award" },
];

export function unitAddress(u: Unit) {
  return `${u.building ? u.building + ", " : ""}${u.street} — ${u.district}, ${u.city}, CEP ${u.cep}`;
}

export function mapsQuery(u: Unit) {
  return encodeURIComponent(`${u.street}, ${u.district}, ${u.city}, ${u.cep}`);
}

export function formatPhone(n: string) {
  const d = n.replace(/^55/, "");
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function buildWhatsAppMessage(unit: Unit, service?: string) {
  return service
    ? `Olá! Vim pelo site da Autoescola Abdon e gostaria de informações sobre ${service} na unidade ${unit.name}.`
    : `Olá! Vim pelo site da Autoescola Abdon e gostaria de informações na unidade ${unit.name}.`;
}

export function whatsappUrl(unit: Unit, service?: string) {
  return `https://wa.me/${unit.whatsapp}?text=${encodeURIComponent(buildWhatsAppMessage(unit, service))}`;
}
