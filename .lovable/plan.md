# Arquitetura revisada — Autoescola Abdon (São Luís/MA)

Referência (cfcpreferencial.com.br) usada apenas para estrutura de serviços e funcionalidades. Nenhum dado, texto, número ou visual da concorrente será usado. Nada sobre a Abdon será inventado: onde faltar conteúdo real, a seção fica preparada e editável pelo painel, oculta até ser preenchida.

Identidade: Autoescola Abdon — "A mais completa do Maranhão". Cores: azul #0750A8, amarelo #FFC400, vermelho #FF2018, branco #FFFFFF, preto #171717. Logomarca oficial (enviar o arquivo — ainda não foi anexado).

## 1. Mapa do site

```text
/                          Início
/sobre                     Sobre a Abdon
/servicos                  Todos os serviços
/servicos/primeira-habilitacao
/servicos/alteracao-de-categoria
/servicos/inclusao-de-categoria
/servicos/reciclagem
/servicos/aulas-para-habilitados
/servicos/renovacao-de-cnh
/servicos/cursos-especializados
/unidades                  Nossas Unidades (3)
/alunos-aprovados          Galeria
/contato                   Formulário + unidades
/obrigado                  Somente após envio confirmado
/politica-de-privacidade
/admin/...                 Painel (login obrigatório)
404                        Página não encontrada personalizada
```

## 2. Seções da Home

1. Barra superior: três unidades com WhatsApp de cada uma
2. Cabeçalho fixo: logo, menu completo, botão "Fale conosco" (abre seletor)
3. Banner principal: headline, slogan, CTA principal + CTA secundário (ver serviços)
4. Diferenciais da Abdon (textos editáveis no painel)
5. Grade dos 7 serviços (cards com imagem e "Saiba mais")
6. Como começar: passos (escolher serviço → falar com a unidade → matrícula → aulas)
7. Apresentação institucional (resumo + link para Sobre)
8. Galeria de alunos aprovados (fotos gerenciadas no painel)
9. Depoimentos reais (oculto enquanto vazio)
10. Formulário rápido de contato
11. Três unidades: cards com endereço, mapa, rota e WhatsApp direto
12. Perguntas frequentes (gerenciadas no painel; oculto enquanto vazio)
13. Chamada final para atendimento
14. Rodapé: unidades, menu, serviços, redes sociais, privacidade

Botão flutuante de WhatsApp (abre seletor) e aviso de cookies em todas as páginas.

## 3. Páginas internas

- **Serviço (modelo único, 7 instâncias):** banner, descrição, para quem é, categorias/modalidades oferecidas, etapas, documentos necessários, unidades que oferecem, FAQ do serviço, formulário com serviço pré-selecionado, CTA com seletor. Conteúdo 100% editável — modalidades da referência não serão assumidas.
- **Sobre:** história, missão/valores, equipe, estrutura (textos e fotos via painel).
- **Unidades:** 3 cards com endereço completo, CEP, mapa embutido, botão "Como chegar" e WhatsApp da unidade.
- **Contato:** formulário completo + atalhos das 3 unidades.
- **Alunos Aprovados:** galeria filtrável por unidade.
- **Obrigado:** confirmação, próximos passos, WhatsApp da unidade escolhida. Bloqueada sem envio confirmado.
- **Privacidade:** texto editável (LGPD, cookies, uso dos dados).
- **404:** mensagem amigável, links para serviços e contato.

## 4. Seletor de unidades

- Botões gerais (cabeçalho, banner, flutuante, CTAs finais) abrem modal **"Em qual unidade deseja ser atendido?"** com São Francisco, Vila Palmeira e Renascença.
- Botões dentro do card de uma unidade abrem direto o WhatsApp dela.
- Mensagem montada automaticamente com o serviço da página: "Olá! Vim pelo site da Autoescola Abdon e gostaria de informações sobre {Serviço} na unidade {Unidade}." Fora de páginas de serviço: "...gostaria de informações na unidade {Unidade}."
- UTMs e gclid/fbclid da primeira visita são guardados na sessão e acompanham eventos e leads.

| Unidade | Endereço | WhatsApp |
|---|---|---|
| São Francisco | Rua Mauro Lima, 219 — São Francisco, CEP 65076-370 | 5598982990055 |
| Vila Palmeira | Av. dos Franceses, 96A — Vila Ivar Saldanha, CEP 65036-283 | 5598981427514 |
| Renascença | Ed. São Luís Multiempresarial, Rua dos Azulões, 231 — Jardim Renascença II, CEP 65075-060 | 5598981384260 |

## 5. Captação e armazenamento de leads

```text
Visitante preenche → validação (navegador + servidor) → grava no banco
  → sucesso confirmado → evento de conversão → /obrigado
  → falha → mensagem de erro, sem redirecionar e sem conversão
```

Campos: nome, WhatsApp (obrigatórios), serviço, unidade, e-mail (opcional), mensagem (opcional), consentimento de privacidade (obrigatório). Registrados automaticamente: página de origem, data/hora, UTMs (source, medium, campaign, term, content), gclid, fbclid, referência. Proteção anti-spam (campo isca + limite de envios).

## 6. Painel administrativo

Acesso por login, somente usuários com papel de administrador.

- **Leads:** lista, filtros por período/unidade/serviço, visualização de origem e UTMs, exportação CSV, status (novo, em contato, matriculado, perdido)
- **Conteúdo:** textos da Home, Sobre e Privacidade
- **Serviços:** criar/editar/ordenar/ativar, imagens, FAQ por serviço
- **Unidades:** endereço, WhatsApp, mapa, horários
- **Alunos aprovados e depoimentos:** upload de fotos, aprovação/publicação
- **FAQ geral**
- **Configurações:** redes sociais, IDs de GTM/GA4/Google Ads/Meta Pixel

## 7. Rastreamento e conversões

- Google Tag Manager como contêiner central; GA4, Google Ads e Meta Pixel configurados via GTM (IDs pelo painel).
- Eventos enviados ao dataLayer, todos com `unidade`, `servico`, `pagina` e UTMs:
  - `view_service` — visualização de serviço
  - `open_unit_selector` / `select_unit` — seletor
  - `click_whatsapp` — clique (não é conversa iniciada nem venda)
  - `form_start` — primeira interação com formulário
  - `generate_lead` — somente após gravação confirmada
  - `click_route` — botão "Como chegar"
  - `click_phone`
- Relatório no painel: leads por unidade e por serviço, por origem de campanha.

## 8. Proposta de design

- Visual moderno e próprio: azul como base institucional, amarelo como cor de ação, vermelho apenas para destaques pontuais, preto/branco para texto e fundos.
- Tipografia moderna e marcante para títulos, legível para textos.
- Cards com cantos arredondados, sombras suaves, espaçamentos generosos, animações discretas ao rolar.
- Imagens profissionais geradas (aulas, carros, motos, alunos) até a Abdon enviar fotos reais.
- Mobile em primeiro lugar, contraste adequado, botões de ação sempre visíveis.

## 9. Etapas de implementação

1. Identidade visual, logomarca, layout geral (cabeçalho, rodapé, flutuante, cookies)
2. Banco de dados, login e papéis de administrador
3. Home completa e seletor de unidades
4. Páginas de serviços, Sobre, Unidades, Alunos Aprovados, Privacidade, 404
5. Formulários, gravação de leads, página de Obrigado
6. Painel administrativo (leads, conteúdo, serviços, unidades, mídia, FAQ, configurações)
7. Rastreamento (GTM, dataLayer, eventos)
8. SEO por página, testes e revisão final

## 10. Checklist de validação

- Nenhuma menção à concorrente, Curitiba ou dados não confirmados
- Seletor abre em todos os botões gerais; cards abrem a unidade certa
- Mensagem do WhatsApp contém serviço e unidade corretos
- Lead gravado com origem, data/hora e UTMs; Obrigado só após sucesso
- `generate_lead` dispara apenas uma vez e só após gravação
- Painel inacessível sem login de administrador; filtros e exportação funcionam
- Seções sem conteúdo real ficam ocultas
- Mapas e rotas corretos para as 3 unidades
- Mobile, contraste e títulos/descrições por página revisados

## Pendências da Abdon

Logomarca oficial, textos institucionais, diferenciais, lista real de modalidades por serviço, fotos, depoimentos, FAQ, redes sociais, telefone fixo (se houver), horários, IDs de GTM/GA4/Ads/Pixel.
