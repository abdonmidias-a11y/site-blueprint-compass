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

export type Service = { slug: string; title: string; seoTitle: string; tagline: string; short: string; icon: string };

export type ServiceDetailData = { headline: string; subheadline: string; description: string; benefitsTitle?: string; benefits: string[]; closing: string; cta: string; steps: string[] };

// Official service copy supplied by Abdon.
export const SERVICE_DETAILS: Record<string, ServiceDetailData> = {
  "primeira-habilitacao": { headline: "Sua primeira CNH é o começo de novas conquistas.", subheadline: "Mais liberdade, independência e novas possibilidades. Comece sua habilitação nas categorias A, B ou ambas com o apoio da Autoescola Abdon.", description: "Tirar a primeira CNH é um momento importante. É conquistar autonomia para trabalhar, estudar, viajar e viver novas experiências.\n\nNa Abdon, você encontra orientação sobre o processo de habilitação, uma frota diversificada e atendimento para as categorias A e B.", benefits: ["Categoria A — Moto.", "Categoria B — Carro.", "Primeira habilitação A + B.", "Carros manuais e automáticos.", "Veículo adaptado para PCD, conforme disponibilidade.", "Três unidades em São Luís."], closing: "Sua liberdade começa com o primeiro passo. Fale com nossa equipe e conheça as opções disponíveis.", cta: "Quero tirar minha primeira CNH", steps: ["Escolha sua categoria: moto, carro ou ambas.", "Fale com a Abdon e conheça as opções de preparação.", "Confira os requisitos e comece sua jornada."] },
  "alteracao-de-categoria": { headline: "Sua próxima categoria pode abrir novas oportunidades profissionais.", subheadline: "Avance na sua trajetória como condutor e conheça a preparação para as categorias D e E.", description: "Para quem deseja ampliar suas possibilidades no transporte de passageiros ou de cargas, a mudança de categoria representa uma nova etapa profissional.\n\nA Autoescola Abdon conta com ônibus e carretas em sua frota para a preparação nas categorias correspondentes.\n\nNossa equipe pode orientar você sobre os requisitos, documentos e etapas aplicáveis.", benefits: ["Categoria D — Ônibus.", "Categoria E — Carreta.", "Frota com dois ônibus e duas carretas.", "Orientação sobre os requisitos legais.", "Preparação para novas possibilidades profissionais."], closing: "Seu próximo passo profissional pode começar com uma nova categoria.", cta: "Quero mudar minha categoria", steps: ["Informe sua categoria atual.", "Consulte os requisitos para D ou E.", "Conheça as opções de preparação da Abdon."] },
  "inclusao-de-categoria": { headline: "Já tem CNH? Conquiste mais liberdade para dirigir.", subheadline: "Adicione a categoria A ou B e amplie suas possibilidades no dia a dia.", description: "Você já dirige carro e quer pilotar moto? Ou possui habilitação de moto e deseja dirigir carro?\n\nA adição de categoria permite ampliar sua habilitação, observados os requisitos aplicáveis.\n\nNa Autoescola Abdon, você encontra orientação e estrutura para dar esse próximo passo.", benefits: ["Adição da categoria A — Moto.", "Adição da categoria B — Carro.", "Orientação sobre documentação.", "Preparação prática conforme disponibilidade.", "Atendimento em três unidades."], closing: "Uma nova categoria pode transformar sua rotina. Descubra como começar.", cta: "Quero adicionar uma categoria", steps: ["Informe qual categoria já possui.", "Escolha a categoria que deseja adicionar.", "Consulte os requisitos e a preparação disponível."] },
  "reciclagem": { headline: "Precisa fazer reciclagem da CNH? Entenda seu próximo passo.", subheadline: "Receba orientação sobre os procedimentos necessários para cumprir as exigências aplicáveis à sua situação.", description: "Quando a reciclagem é exigida, compreender as etapas do processo é essencial para evitar dúvidas e organizar sua regularização.\n\nNa Autoescola Abdon, você pode consultar informações sobre requisitos, procedimentos e modalidades disponíveis.", benefitsTitle: "O que você pode esclarecer", benefits: ["Quando a reciclagem é exigida.", "Quais documentos podem ser necessários.", "Quais modalidades estão disponíveis.", "Quais etapas precisam ser cumpridas."], closing: "Precisa de orientação sobre reciclagem? Fale com nossa equipe.", cta: "Consultar reciclagem de CNH", steps: ["Informe sua situação atual.", "Consulte os procedimentos aplicáveis.", "Verifique como iniciar as etapas necessárias."] },
  "aulas-para-habilitados": { headline: "Você já tem CNH. Agora é hora de dirigir com mais confiança.", subheadline: "Faz tempo que não dirige? Sente insegurança no trânsito? Retome a prática e desenvolva suas habilidades ao volante.", description: "Muitas pessoas conquistam a habilitação, mas continuam inseguras para dirigir sozinhas.\n\nSeja por falta de prática, medo do trânsito ou muito tempo longe do volante, voltar a dirigir pode parecer um grande desafio.\n\nAs aulas para habilitados ajudam a retomar a prática com orientação adequada às necessidades do condutor.", benefitsTitle: "Para quem é indicado", benefits: ["Quem possui CNH, mas não dirige.", "Quem ficou muito tempo sem praticar.", "Quem sente insegurança ao volante.", "Quem deseja aprimorar suas habilidades."], closing: "Não deixe sua habilitação guardada. Volte a dirigir com mais confiança.", cta: "Quero voltar a dirigir", steps: ["Conte à equipe suas dificuldades ao dirigir.", "Consulte as opções de aulas disponíveis.", "Organize sua retomada da prática."] },
  "renovacao-de-cnh": { headline: "Sua CNH está perto de vencer? Saiba como renovar.", subheadline: "Entenda os procedimentos aplicáveis à renovação da sua habilitação e organize os próximos passos.", description: "Manter a CNH regularizada é importante para continuar dirigindo dentro das exigências legais.\n\nO processo de renovação pode variar conforme a categoria e a situação do condutor.\n\nA equipe da Abdon pode orientar você sobre as informações necessárias para verificar os procedimentos aplicáveis.", benefitsTitle: "O que você pode esclarecer", benefits: ["Situação atual da CNH.", "Documentos necessários.", "Exames eventualmente exigidos.", "Etapas de renovação."], closing: "Sua habilitação merece atenção. Tire suas dúvidas sobre renovação.", cta: "Consultar renovação de CNH", steps: ["Consulte a situação da sua CNH.", "Verifique documentos e exigências.", "Receba orientação sobre os próximos passos."] },
  "cursos-especializados": { headline: "Amplie seus conhecimentos. Prepare-se para novas oportunidades.", subheadline: "Conheça as possibilidades de formação especializada para condutores que desejam atuar profissionalmente no transporte.", description: "Algumas atividades de transporte exigem conhecimentos e qualificações específicas.\n\nA formação especializada pode representar um passo importante para quem deseja ampliar suas possibilidades profissionais.\n\nConverse com a equipe da Autoescola Abdon para conhecer as opções disponíveis e os requisitos de cada modalidade.", benefitsTitle: "Modalidades para consulta", benefits: ["MOPP — Produtos Perigosos.", "Transporte Escolar.", "Transporte Coletivo de Passageiros.", "Transporte de Emergência.", "Transporte de Cargas Indivisíveis."], closing: "Seu próximo passo profissional começa com conhecimento. A disponibilidade de cada modalidade deve ser confirmada no atendimento.", cta: "Consultar cursos especializados", steps: ["Informe a área de formação desejada.", "Consulte requisitos e disponibilidade.", "Conheça as condições para iniciar."] },
};

// Official service card copy. Slugs are stable URLs; titles are the visible names.
export const SERVICES: Service[] = [
  { slug: "primeira-habilitacao", title: "Primeira Habilitação", seoTitle: "Primeira Habilitação A e B em São Luís", tagline: "Sua liberdade começa com a primeira CNH.", short: "Conquiste sua habilitação de moto, carro ou ambas as categorias com o apoio de quem tem 29 anos de experiência.", icon: "car" },
  { slug: "inclusao-de-categoria", title: "Adição de Categoria", seoTitle: "Adição de Categoria A ou B em São Luís", tagline: "Já dirige moto? Conquiste também o volante.", short: "Ou faça o caminho inverso: adicione a categoria A ou B e amplie sua liberdade para dirigir.", icon: "plus" },
  { slug: "alteracao-de-categoria", title: "Mudança de Categoria", seoTitle: "Mudança de Categoria D ou E em São Luís", tagline: "Novas categorias. Novas oportunidades profissionais.", short: "Prepare-se para avançar às categorias D ou E com a estrutura da Autoescola Abdon.", icon: "bus" },
  { slug: "aulas-para-habilitados", title: "Aulas para Habilitados", seoTitle: "Aulas para Habilitados em São Luís", tagline: "Sua CNH não precisa ficar guardada.", short: "Volte a dirigir, desenvolva suas habilidades e recupere a confiança ao volante.", icon: "wheel" },
  { slug: "reciclagem", title: "Reciclagem de CNH", seoTitle: "Reciclagem de CNH em São Luís", tagline: "Precisa realizar reciclagem? Saiba por onde começar.", short: "Receba orientação sobre as etapas necessárias para regularizar sua situação.", icon: "refresh" },
  { slug: "renovacao-de-cnh", title: "Renovação de CNH", seoTitle: "Renovação de CNH em São Luís", tagline: "Sua CNH precisa de renovação?", short: "Entenda os procedimentos aplicáveis e saiba como dar o próximo passo.", icon: "id" },
  { slug: "cursos-especializados", title: "Cursos Especializados", seoTitle: "Cursos Especializados em São Luís", tagline: "Sua experiência pode abrir novos caminhos.", short: "Conheça as possibilidades de qualificação para diferentes atividades profissionais de transporte.", icon: "award" },
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

export const FAQ = [{"question": "Se eu tirar minha CNH no carro automático, só poderei dirigir automático?", "answer": "A realização do exame em carro automático não significa, por si só, que a CNH ficará limitada a veículos automáticos. As condições e eventuais restrições dependem das regras aplicáveis ao seu processo. Consulte nossa equipe para receber orientação."}, {"question": "O primeiro reteste não é gratuito?", "answer": "As regras atuais podem prever uma segunda tentativa sem nova cobrança da taxa de exame, conforme as condições aplicáveis. Serviços adicionais, como aulas extras ou disponibilização de veículo, podem ter cobrança própria. Consulte nossa equipe para verificar seu caso."}, {"question": "Agora é só fazer as aulas? Não preciso mais pagar taxas?", "answer": "Mesmo com as mudanças no processo de habilitação, ainda podem existir etapas obrigatórias, exames e taxas. Nossa equipe pode ajudar você a identificar o que já foi concluído e o que ainda falta."}, {"question": "Já paguei a prova teórica na taxa do Detran. Preciso pagar novamente?", "answer": "Isso depende do registro do pagamento e da situação atual do seu processo. Antes de realizar um novo pagamento, procure confirmar quais taxas já foram quitadas e quais etapas ainda estão pendentes."}, {"question": "Quero fazer tudo pelo aplicativo CNH do Brasil. Preciso de autoescola?", "answer": "O aplicativo CNH do Brasil permite realizar etapas do processo, incluindo o curso teórico gratuito. As aulas práticas continuam sendo necessárias para a primeira habilitação, conforme as regras vigentes. Você pode procurar a Abdon para conhecer as opções de preparação prática."}, {"question": "Já fiz minha prova teórica pela CNH do Brasil. Posso fazer minhas aulas práticas na Abdon?", "answer": "Sim. Se você já concluiu a etapa teórica e está apto a iniciar a formação prática, pode procurar a Autoescola Abdon para conhecer as opções de aulas e os próximos procedimentos."}, {"question": "Já tenho habilitação de moto. Posso adicionar a categoria de carro?", "answer": "Sim. Quem possui a categoria A pode solicitar a adição da categoria B, observados os requisitos aplicáveis. Nossa equipe pode orientar sobre as etapas."}, {"question": "Quero mudar minha categoria para D ou E. Como funciona?", "answer": "A mudança depende de requisitos legais relacionados à categoria atual, idade, tempo de habilitação e outras condições. Converse com nossa equipe para verificar seu caso."}];

export const COMPANY = {"years": 29, "instructors": 8, "reception": 10, "mission": "Nossa missão vai além de aprovar.", "reviewsUrl": "https://www.google.com/search?q=Autoescola+Abdon+-+S%C3%A3o+Francisco,+S%C3%A3o+Lu%C3%ADs+-+MA", "automatic": ["Volkswagen Polo", "Hyundai HB20 adaptado para PCD", "Kia Picanto", "Jeep Renegade", "BYD elétrico"], "manual": ["Hyundai HB20", "Volkswagen Polo", "2 Fiat Pulse"], "otherVehicles": ["3 motos", "2 ônibus", "2 carretas"]};

export function unitLabel(unit: Unit) { return unit.id === "sao-francisco" ? `${unit.name} — Matriz` : unit.name; }
