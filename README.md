# Aeon Portfolio

Portfólio corporativo de **Thyago Ferreira** — Analista de Suporte e Infraestrutura, Cibersegurança, Ethical Hacker e Cofundador da **Aeon Enterprise Solutions**.

Design system inspirado no software **Valkirie / Aegis** (glassmorphism, cantos chanfrados, roxo neon).

## Stack

- [Astro](https://astro.build) (static)
- CSS puro com design tokens (sem Tailwind)
- [GSAP](https://gsap.com) + ScrollTrigger para animações de scroll

## Desenvolvimento

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera ./dist
npm run preview   # preview do build
```

## Deploy (GitHub Pages)

O repositório usa GitHub Actions para publicar automaticamente na branch `gh-pages`:

1. Suba o projeto para um repositório GitHub com a branch `main`.
2. Em **Settings → Pages**, defina a fonte como **GitHub Actions**.
3. A cada `push` na `main`, o workflow `.github/workflows/deploy.yml` faz build e deploy.

> O `site` e o `base` em `astro.config.mjs` devem refletir o usuário/repositório real antes do deploy.

## Estrutura

```
src/
  data.ts                  # Conteúdo centralizado (fácil de editar)
  styles/global.css        # Design system Valkirie
  layouts/Layout.astro
  components/              # Navbar, Hero, About, Certifications, Services,
                           # Experience, Education, Contact, Footer
  pages/index.astro        # One-page + animações GSAP
public/
  aeon.svg                 # Logo
  Foto.svg                 # Foto de perfil
```