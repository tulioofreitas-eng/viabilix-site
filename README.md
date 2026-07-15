# Site Viabilix (Astro)

Migrado do HTML estático para Astro, no mesmo padrão do site do Royal Splash.

## ⚠️ Antes de publicar

Este projeto foi montado sem acesso à internet no ambiente onde foi gerado, então
o build **não foi testado** ainda. Rode os passos abaixo no Codespaces (que tem
rede) antes de publicar:

```bash
npm install
npm run dev      # abre em http://localhost:4321 — confere as 4 páginas
npm run build    # gera a pasta dist/ — confere se termina sem erro
```

Se `npm run dev` abrir normal e as 4 páginas (Início, Serviços, Sobre, Contato)
estiverem com a cara certa, pode publicar.

## Estrutura

```
src/
  layouts/Layout.astro     — <head>, Header, Footer, favicon, fontes
  components/Header.astro  — navegação (recebe qual página está ativa)
  components/Footer.astro  — rodapé
  pages/
    index.astro     → /
    servicos.astro  → /servicos
    sobre.astro     → /sobre
    contato.astro   → /contato
public/assets/
  css/style.css     — todo o design system (cores, tipografia, componentes)
  js/main.js        — menu mobile
  img/              — logo, favicons
```

CSS não foi convertido para Tailwind — ficou como estava (variáveis CSS +
classes semânticas), porque já estava completo e testado, e reescrever pra
Tailwind sem poder rodar o build aqui seria arriscado à toa. Se quiser migrar
pra Tailwind depois (pra ficar 100% igual ao Royal Splash por baixo do capô),
é um passo separado — o design não muda, só a forma de escrever o CSS.

## Publicar no Vercel

1. Suba esse projeto pra um repositório no GitHub.
2. No Vercel, "Add New Project" → importa o repo → framework preset "Astro"
   é detectado automaticamente.
3. Configura o domínio depois de decidirem entre `viabilix.com.br` (pendente
   checagem no INPI) ou uma alternativa.

## Pendências de conteúdo (não travam a publicação)

- Central de atendimento: número 0800 genérico até vir o real
- E-mail: `contato@viabilix.com.br` é provisório (depende da decisão de domínio)
- Redes sociais: ainda sem Instagram/LinkedIn — ícones no rodapé apontam pra `#`
- Prova social / cases: deixados genéricos por enquanto

## Sobre pacotes e pagamento por link (planejamento futuro)

Marco mencionou interesse em, no curto prazo, montar pacotes operacionais
com pagamento por link (ex: Mercado Pago, Stripe Payment Links). A estrutura
em componentes já deixa isso simples de adicionar depois: bastaria uma nova
página `src/pages/pacotes.astro` com cards de pacote, cada um com um botão
apontando pro link de pagamento gerado no painel do provedor escolhido — não
precisa de backend nem de conta de desenvolvedor, só do link. Ainda não foi
construído porque não há pacotes/preços definidos.
