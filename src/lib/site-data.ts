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

// Neutral draft content. Edit here after Abdon confirms its actual modalities and conditions.
export const SERVICE_DETAILS: Record<string, { description: string; audience: string; benefits: string[] }> = {
  "primeira-habilitacao": {
    description: "A primeira habilitação é o processo para quem ainda não possui CNH. Envolve as etapas exigidas pelo órgão de trânsito para a categoria desejada. Consulte a Abdon para conhecer as opções e receber orientação para começar.",
    audience: "Quem deseja iniciar o processo de habilitação e entender as etapas para obter a primeira CNH.",
    benefits: ["Conhecer o caminho até a primeira CNH", "Esclarecer dúvidas sobre a categoria desejada", "Organizar a documentação antes de iniciar"],
  },
  "alteracao-de-categoria": {
    description: "A alteração de categoria é destinada a quem já tem CNH e deseja dirigir veículos de outra categoria. Os requisitos variam conforme a habilitação atual e a categoria pretendida. Consulte a unidade para verificar sua situação.",
    audience: "Motoristas habilitados que desejam conhecer o processo de mudança de categoria.",
    benefits: ["Entender os requisitos da categoria pretendida", "Verificar as etapas aplicáveis à sua CNH", "Planejar o próximo passo na habilitação"],
  },
  "inclusao-de-categoria": {
    description: "A inclusão de categoria permite acrescentar uma categoria à habilitação existente. A equipe pode orientar sua consulta sobre a inclusão de moto ou carro, conforme a CNH atual e os requisitos aplicáveis.",
    audience: "Quem já é habilitado e deseja consultar a inclusão de outra categoria na CNH.",
    benefits: ["Identificar a categoria a incluir", "Entender o processo de inclusão", "Consultar documentos e etapas necessários"],
  },
  "reciclagem": {
    description: "O curso de reciclagem faz parte da regularização da habilitação nas situações em que é exigido pelo órgão de trânsito. Antes de contratar, confirme a necessidade do curso e as condições aplicáveis ao seu processo.",
    audience: "Condutores que precisam de orientação sobre reciclagem e regularização da habilitação.",
    benefits: ["Esclarecer a necessidade do curso", "Revisitar conhecimentos de trânsito", "Consultar os passos de regularização"],
  },
  "aulas-para-habilitados": {
    description: "As aulas para habilitados são voltadas a quem já tem CNH e deseja retomar a prática ao volante. Converse com a unidade sobre seus objetivos, as dificuldades que deseja trabalhar e a disponibilidade de atendimento.",
    audience: "Pessoas habilitadas que desejam retomar a direção ou trabalhar dificuldades específicas.",
    benefits: ["Definir objetivos para a prática", "Trabalhar a confiança ao dirigir", "Consultar uma proposta conforme suas necessidades"],
  },
  "renovacao-de-cnh": {
    description: "A renovação mantém a habilitação válida conforme os requisitos do órgão de trânsito. Consulte a Abdon para orientação sobre os próximos passos, documentos e procedimentos aplicáveis à sua situação.",
    audience: "Condutores que desejam informações sobre renovação da CNH.",
    benefits: ["Conferir a situação da habilitação", "Organizar os documentos para renovação", "Esclarecer os procedimentos necessários"],
  },
  "cursos-especializados": {
    description: "Cursos especializados são voltados a atividades específicas de condução profissional. A formação necessária depende do tipo de atividade e dos requisitos de trânsito. Consulte a Abdon para confirmar os cursos disponíveis.",
    audience: "Motoristas que desejam consultar formações para atividades profissionais específicas.",
    benefits: ["Identificar a formação necessária à atividade", "Consultar requisitos de participação", "Confirmar cursos e turmas disponíveis"],
  },
};

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
