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

// Official service copy supplied by Abdon.
export const SERVICE_DETAILS: Record<string, { headline: string; subheadline: string; description: string; benefits: string[]; cta: string }> = {
  "primeira-habilitacao": {"headline": "Sua primeira CNH merece uma grande escolha.", "subheadline": "Comece sua jornada com a experiência de quem há 29 anos participa da formação de condutores no Maranhão.", "description": "Conquistar a primeira habilitação é um passo importante para sua liberdade e independência.

Na Autoescola Abdon, você encontra atendimento para as categorias A (moto) e B (carro), com uma equipe preparada para orientar cada etapa do processo.

Nossa estrutura conta com motos, carros manuais e automáticos, incluindo opções diferenciadas para as necessidades dos alunos.", "benefits": ["Categoria A — Moto", "Categoria B — Carro", "Atendimento em três unidades", "Frota diversificada", "Orientação sobre as etapas do processo"], "cta": "Quero começar minha primeira CNH"},
  "alteracao-de-categoria": {"headline": "Novas categorias. Novas possibilidades para sua trajetória.", "subheadline": "Amplie suas oportunidades com a preparação para as categorias D e E.", "description": "Para quem deseja avançar na habilitação e conduzir veículos de outras categorias, a Autoescola Abdon oferece estrutura com ônibus e carretas.

Nossa equipe orienta sobre os requisitos, a documentação e as etapas necessárias para solicitar a alteração de categoria.

A elegibilidade depende das exigências legais aplicáveis ao condutor.", "benefits": ["Categoria D — Ônibus", "Categoria E — Carreta", "Frota com dois ônibus e duas carretas", "Orientação sobre requisitos e procedimentos"], "cta": "Quero mudar minha categoria"},
  "inclusao-de-categoria": {"headline": "Sua habilitação pode levar você ainda mais longe.", "subheadline": "Já dirige carro e quer pilotar moto? Ou já pilota moto e deseja dirigir carro?", "description": "A inclusão de categoria permite ampliar as possibilidades da sua habilitação, conforme as regras aplicáveis.

Na Autoescola Abdon, você recebe orientação para incluir a categoria A ou B, com atendimento e estrutura para sua preparação.", "benefits": ["Inclusão da categoria A — Moto", "Inclusão da categoria B — Carro", "Orientação sobre o processo", "Equipe e veículos para preparação prática"], "cta": "Quero incluir uma categoria"},
  "reciclagem": {"headline": "Recomece com conhecimento e responsabilidade.", "subheadline": "Receba orientação para cumprir as etapas do processo de reciclagem da CNH.", "description": "Se você precisa realizar um curso de reciclagem, entender as exigências do seu caso é o primeiro passo.

A equipe da Autoescola Abdon pode orientar você sobre os procedimentos e as modalidades disponíveis, conforme as regras vigentes.", "benefits": [], "cta": "Quero informações sobre reciclagem"},
  "aulas-para-habilitados": {"headline": "Você já tem CNH. Agora é hora de conquistar confiança.", "subheadline": "Volte ao volante e desenvolva mais segurança na direção.", "description": "Ter a habilitação nem sempre significa sentir tranquilidade para dirigir no dia a dia.

Se você está há muito tempo sem dirigir, sente insegurança no trânsito ou deseja aprimorar suas habilidades, as aulas para habilitados podem ajudar.

Na Autoescola Abdon, você pode buscar orientação sobre aulas práticas adequadas às suas necessidades.", "benefits": ["Retomada da prática ao volante", "Desenvolvimento de confiança", "Orientação individualizada conforme disponibilidade", "Opções de veículos a confirmar no atendimento"], "cta": "Quero voltar a dirigir"},
  "renovacao-de-cnh": {"headline": "Sua CNH precisa de atenção? Estamos aqui para orientar.", "subheadline": "Entenda os procedimentos necessários para renovar sua habilitação.", "description": "Manter sua CNH regularizada é importante para continuar dirigindo dentro das exigências legais.

A Autoescola Abdon oferece atendimento para orientar você sobre o processo de renovação, a documentação e as etapas aplicáveis ao seu caso.", "benefits": [], "cta": "Quero informações sobre renovação"},
  "cursos-especializados": {"headline": "Mais qualificação para novos caminhos profissionais.", "subheadline": "Conheça os cursos especializados relacionados às atividades de transporte.", "description": "Determinadas atividades profissionais exigem conhecimentos e qualificações específicas.

A Autoescola Abdon pode orientar você sobre as opções de cursos especializados disponíveis e os requisitos para cada atividade.", "benefits": [], "cta": "Consultar cursos disponíveis"},
};

// Official service card copy; stable titles preserve stored lead values.
export const SERVICES: Service[] = [
  { slug: "primeira-habilitacao", title: "Primeira Habilitação", short: "Sua primeira CNH começa com orientação, preparação e uma estrutura pensada para acompanhar cada etapa da sua conquista.", icon: "car" },
  { slug: "alteracao-de-categoria", title: "Alteração de Categoria", short: "Quer ampliar suas possibilidades ao volante? Conheça o processo para avançar às categorias D e E.", icon: "bus" },
  { slug: "inclusao-de-categoria", title: "Inclusão de Categoria", short: "Já possui habilitação e deseja incluir moto ou carro? Conte com nossa equipe para orientar os próximos passos.", icon: "plus" },
  { slug: "reciclagem", title: "Curso de Reciclagem", short: "Receba orientação para realizar o processo de reciclagem exigido na sua situação.", icon: "refresh" },
  { slug: "aulas-para-habilitados", title: "Aulas para Habilitados", short: "Já tem CNH, mas ainda sente insegurança para dirigir? Desenvolva sua confiança com acompanhamento prático.", icon: "wheel" },
  { slug: "renovacao-de-cnh", title: "Renovação de CNH", short: "Entenda as etapas necessárias para manter sua habilitação regularizada.", icon: "id" },
  { slug: "cursos-especializados", title: "Cursos Especializados", short: "Conheça as possibilidades de capacitação para diferentes atividades de transporte, conforme a oferta disponível.", icon: "award" },
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

export const FAQ = [{"question": "Se eu tirar minha CNH no carro automático, só poderei dirigir automático?", "answer": "A realização do exame em carro automático não significa, por si só, que a CNH ficará limitada a veículos automáticos. As condições e eventuais restrições dependem das regras aplicáveis ao seu processo. Consulte nossa equipe para receber orientação."}, {"question": "O primeiro reteste não é gratuito?", "answer": "As regras atuais podem prever uma segunda tentativa sem nova cobrança da taxa de exame, conforme as condições aplicáveis. Serviços adicionais, como aulas extras ou disponibilização de veículo, podem ter cobrança própria. Consulte nossa equipe para verificar seu caso."}, {"question": "Agora é só fazer as aulas? Não preciso mais pagar taxas?", "answer": "Mesmo com as mudanças no processo de habilitação, ainda podem existir etapas obrigatórias, exames e taxas. Nossa equipe pode ajudar você a identificar o que já foi concluído e o que ainda falta."}, {"question": "Já paguei a prova teórica na taxa do Detran. Preciso pagar novamente?", "answer": "Isso depende do registro do pagamento e da situação atual do seu processo. Antes de realizar um novo pagamento, procure confirmar quais taxas já foram quitadas e quais etapas ainda estão pendentes."}, {"question": "Quero fazer tudo pelo aplicativo CNH do Brasil. Preciso de autoescola?", "answer": "O aplicativo CNH do Brasil permite realizar etapas do processo, incluindo o curso teórico gratuito. As aulas práticas continuam sendo necessárias para a primeira habilitação, conforme as regras vigentes. Você pode procurar a Abdon para conhecer as opções de preparação prática."}, {"question": "Já fiz minha prova teórica pela CNH do Brasil. Posso fazer minhas aulas práticas na Abdon?", "answer": "Sim. Se você já concluiu a etapa teórica e está apto a iniciar a formação prática, pode procurar a Autoescola Abdon para conhecer as opções de aulas e os próximos procedimentos."}];

export const COMPANY = {"years": 29, "instructors": 8, "reception": 10, "mission": "Nossa missão vai além de aprovar.", "reviewsUrl": "https://www.google.com/search?q=Autoescola+Abdon+-+S%C3%A3o+Francisco,+S%C3%A3o+Lu%C3%ADs+-+MA", "automatic": ["Volkswagen Polo", "Hyundai HB20 adaptado para PCD", "Kia Picanto", "Jeep Renegade", "BYD elétrico"], "manual": ["Hyundai HB20", "Volkswagen Polo", "2 Fiat Pulse"], "otherVehicles": ["3 motos", "2 ônibus", "2 carretas"]};

export function unitLabel(unit: Unit) { return unit.id === "sao-francisco" ? `${unit.name} — Matriz` : unit.name; }
