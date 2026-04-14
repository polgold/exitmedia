# ExitMedia

Sitio web de ExitMedia — estudio digital de Buenos Aires. Construido con Next.js 16 (App Router), Tailwind 4, TypeScript y MDX.

## Stack

- **Next.js 16** con App Router y React 19
- **Tailwind CSS 4** con tema custom y dark mode por clase
- **TypeScript** estricto
- **Framer Motion** para animaciones de entrada en scroll
- **Lucide** para iconografía
- **Remark + gray-matter** para el blog (Markdown con frontmatter)
- **Resend** para el envío de mails del formulario de contacto
- **Instrument Serif + Space Grotesk + JetBrains Mono** (Google Fonts)

## Empezar

```bash
npm install
cp .env.example .env.local   # completar variables si vas a probar el form
npm run dev
```

El sitio queda disponible en [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Mirá [.env.example](./.env.example). Solo son necesarias si querés que el formulario de contacto envíe mails reales vía Resend; si no están, el endpoint loggea el payload y devuelve `{ ok: true, mocked: true }` para que puedas seguir probando el flujo sin credenciales.

## Estructura

```
app/
  layout.tsx                Layout raíz con fuentes, metadata, schema.org
  page.tsx                  Home (hero + todas las secciones)
  servicios/page.tsx        Servicios (ancla por ID para cada servicio)
  trabajos/
    page.tsx                Listado de trabajos
    [slug]/page.tsx         Detalle de proyecto (estático)
  blog/
    page.tsx                Listado de posts
    [slug]/page.tsx         Detalle de post (estático, MDX/MD)
  contacto/page.tsx         Página de contacto con formulario completo
  sobre-nosotros/page.tsx   Sobre ExitMedia
  api/contact/route.ts      Endpoint del formulario (Resend)
  sitemap.ts                Sitemap automático
  robots.ts                 robots.txt
  opengraph-image.tsx       OG dinámica con next/og
  not-found.tsx             404
components/
  Header.tsx                Nav con scroll-aware backdrop
  Footer.tsx                Footer con links, contacto y redes
  Hero.tsx                  Hero de Home
  ServicesGrid.tsx          Grid de servicios destacados
  Process.tsx               Cómo trabajamos (4 pasos)
  FeaturedWork.tsx          Grid de trabajos
  TechMarquee.tsx           Marquee horizontal de tecnologías
  Testimonials.tsx          Testimonios
  FAQ.tsx                   Accordion de preguntas frecuentes
  HomeContact.tsx           Sección de contacto
  ProjectCard.tsx           Card para cada proyecto
  ContactForm.tsx           Formulario (client, fetch a /api/contact)
  FloatingCTA.tsx           Botón flotante a WhatsApp
  ThemeToggle.tsx           Toggle dark/light
  ThemeScript.tsx           Script inline para evitar flash
  Logo.tsx                  Logo "ExitMedia"
  ui/
    Section.tsx             Contenedor de secciones + títulos
    Button.tsx              Botón con variantes
    MotionIn.tsx            Wrapper de animación de entrada
content/
  blog/*.md                 Posts con frontmatter (title, date, category, ...)
lib/
  services.ts               Catálogo de servicios
  projects.ts               Catálogo de proyectos
  blog.ts                   Lectura y parseo de posts
```

## Agregar un post al blog

Crear un archivo `content/blog/mi-post.md`:

```markdown
---
title: "Título del post"
excerpt: "Resumen breve para listado y OG."
date: "2026-04-20"
category: "AI"
author: "Estudio ExitMedia"
cover: "mi-post"
---

Contenido en Markdown. Soporta GFM (tablas, listas de tareas, etc.).
```

Se genera automáticamente en `/blog/mi-post` y aparece en el listado y el sitemap.

## Agregar un proyecto

Editar [lib/projects.ts](./lib/projects.ts) y añadir un item al array `projects`. La ruta `/trabajos/<slug>` se genera estáticamente en el build.

## Deploy

### Vercel (recomendado)

```bash
npx vercel
```

El archivo [vercel.json](./vercel.json) ya está configurado con región `gru1` (São Paulo — latencia más baja para Argentina) y headers de seguridad.

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --build --prod
```

Config en [netlify.toml](./netlify.toml). Requiere el plugin `@netlify/plugin-nextjs`.

## Scripts

```bash
npm run dev        # dev server
npm run build      # production build
npm run start      # serve production build
npm run lint       # eslint
```

## Accesibilidad y performance

- Todos los controles tienen `aria-label` cuando no tienen texto visible
- Respeta `prefers-reduced-motion` (Framer Motion)
- Fuentes cargadas con `next/font` (sin FOUT, auto-hosted)
- Imágenes placeholder puramente CSS por ahora — para producción, reemplazar por `next/image` con WebP/AVIF

## Notas de diseño

- Modo oscuro por default, con toggle persistente en `localStorage`
- Paleta cálida: naranja/ámbar como accent (`#ff7a2e`) — más humano que un electric blue genérico
- Tipografía: `Instrument Serif` (display editorial) + `Space Grotesk` (UI) + `JetBrains Mono` (código)
- Grano sutil de ruido en el background via `::before` para dar textura sin peso extra
- Tarjetas con grilla de `1px` compartido (`gap-px bg-border`) — truco para hairlines perfectos

## Pendientes visibles

- Screenshots reales de cada proyecto (las fotos actuales son stock temáticas)
- Fotos propias del estudio para reemplazar las de Unsplash en `/sobre-nosotros`
- Testimonios reales con autorización (hoy hay 3 placeholder de ejemplo)

---

© ExitMedia · Una división digital de Sun Factory · Buenos Aires, AR
