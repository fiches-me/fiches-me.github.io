<template>
  <section class="fiches-hero" aria-label="Fiches.me home header">


      <div class="fiches-branding">
        <p class="fiches-eyebrow">Fiches pour l'enseignement</p>
      </div>

    <div class="fiches-flex">
      <img class="fiches-icon" src="/cpes1.png" alt="Logo CPES1" />
      <img class="fiches-icon" src="/cpes2.png" alt="Logo CPES2" />
      <img class="fiches-icon" src="/cpes3.png" alt="Logo CPES3" />
      <img class="fiches-big-icon" src="https://fiches.funa.dev/logo.png" alt="Logo Fiches.me" />
      <img class="fiches-icon" src="/kerna.png" alt="Logo Kerna" />
      <img class="fiches-icon" src="/m1.png" alt="Logo WIP1" />
      <img class="fiches-icon" src="/m2.png" alt="Logo WIP2" />
    </div>



    <div class="fiches-branding">
      <h1 class="fiches-branding-text">FICHES.ME</h1>

      <span class="fiches-sub cross-red">Les fiches payées à HEC</span>
      <span class="fiches-sub cross-yellow">Volées aux Prépas MP</span>
      <span class="fiches-sub cross-green">Générées par ChatGPT</span>

      <span class="fiches-subsub">communautaires comme l'open source</span>
    </div>
    <div class="fiches-branding">
      <p class="fiches-eyebrow">j'ai plus d'inspi</p>
    </div>

    <div class="fiches-actions">
      <a href="https://fiches.funa.dev/cpes2/" target="_blank" rel="noreferrer">🔢 CPES2</a>
      <a href="https://fiches.funa.dev/cpes1/" target="_blank" rel="noreferrer">🖥️ CPES1</a>
      <a href="https://fiches.funa.dev/kerna/" target="_blank" rel="noreferrer">🧠 Kerna</a>
      <a href="/primary/">🎨 Primary</a>
      <a href="/contribution/">💖 Contribuer</a>
    </div>
  </section>
</template>

<style scoped>
.fiches-branding-text {
  font-size: 3.5rem !important;
}

.fiches-hero {
  width: 100%;
  margin: 0 auto 2rem;
  padding: 1.5rem 0 0;
  text-align: center;
}

.fiches-branding {
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.fiches-sub {
  margin: 0;
  font-size: 1.5rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration-line: line-through;
  text-decoration-thickness: 3px;
  color: var(--vp-c-text-2);
}

.cross-red {
    text-decoration-color: var(--color-l-red-30);
}

.cross-yellow {
    text-decoration-color: var(--color-l-yellow-30);
}

.cross-green {
    text-decoration-color: var(--color-l-green-30);
}

.fiches-subsub {
  margin: 0;
  font-size: 2rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}

.fiches-eyebrow {
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}

.fiches-branding h1 {
  margin: 0.35rem 0 0;
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.fiches-flex {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75rem 1rem;
}

.fiches-icon,
.fiches-big-icon {
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 6px 18px rgba(15, 23, 42, 0.12));
}

.fiches-icon {
  width: clamp(32px, 6vw, 64px);
  height: clamp(32px, 6vw, 64px);
}

.fiches-big-icon {
  width: clamp(64px, 10vw, 110px);
  height: clamp(64px, 10vw, 110px);
  margin: 0 0.5rem;
}

.fiches-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.fiches-actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.fiches-actions a:hover {
  transform: translateY(-1px);
  border-color: var(--vp-c-brand-1);
}

@media (max-width: 640px) {
  .fiches-hero {
    padding-top: 0.5rem;
  }

  .fiches-branding {
        gap: 3px;
  }

  .fiches-actions {
    gap: 0.5rem;
  }

  .fiches-actions a {
    width: 100%;
    max-width: 220px;
  }
}
</style>
