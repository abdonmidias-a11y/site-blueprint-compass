# Plano de construção — Autoescola Preferencial (referência: cfcpreferencial.com.br)

Autoescola em Curitiba/PR, desde 1992, +44.000 alunos formados. Objetivo do site: gerar contatos/matrículas (telefone, WhatsApp, formulário).

## Páginas

1. **Início (/)**
2. **Serviços** — uma página por serviço:
   - 1ª Habilitação: Moto, Carro e Moto/Carro (manual, automático, semi-automática)
   - Alteração de Categoria: Ônibus (D) e Carreta (E)
   - Inclusão de Categoria: Moto e Carro
   - Curso de Reciclagem: Presencial ou Online
   - Aula para Habilitados
   - Renovação de CNH
   - Cursos Especializados Online: MOPP, Escolar, Cargas Indivisíveis, Coletivo, Emergencial
3. **Alunos Aprovados** — galeria de fotos de alunos
4. **Contato** — formulário, telefone, e-mail, endereço e mapa
5. **Política de Privacidade**

## Seções da página inicial

- Barra superior: endereço (Av. Mal. Floriano Peixoto, 10182 – Boqueirão), telefone (41) 3286-1214, e-mail
- Cabeçalho com logo e menu (Início, Serviços, Alunos Aprovados, Contato)
- Destaque principal: "Habilite a sua liberdade!" + lista de diferenciais + botão "Quero começar minha CNH"
- 4 diferenciais: +43.000 alunos formados, Parcelamento em até 12x, Versatilidade (manual/automático, BYD/Yaris, Honda Elite), Veículos de qualidade
- Grade "Nossos Serviços" (7 cartões com imagem e "Saiba mais")
- Formulário rápido de contato com seleção de serviço
- Rodapé: menu, contatos, redes sociais (Facebook, Instagram), direitos

## Funcionalidades

- Formulário de contato (nome, telefone, e-mail, serviço desejado, mensagem) com proteção anti-spam
- Botão flutuante de WhatsApp "Posso ajudar?"
- Aviso de cookies (Aceitar)
- Links de clique-para-ligar e e-mail
- Mapa de localização na página de contato
- Layout adaptado para celular
- Títulos e descrições próprios para cada página (SEO)

## Melhorias sugeridas (opcionais)

- Depoimentos de alunos e perguntas frequentes
- Contador animado de alunos formados
- Mensagens do formulário salvas e visíveis em painel interno (Lovable Cloud) com aviso por e-mail

## Detalhes técnicos

- Rotas: `/`, `/servicos/$slug` (dados de serviços em um arquivo único), `/alunos-aprovados`, `/contato`, `/politica-de-privacidade`
- Formulário: tabela no Lovable Cloud + função de servidor com validação; envio de e-mail opcional
- Design: identidade própria (cores da marca a confirmar), imagens geradas para serviços e destaque
