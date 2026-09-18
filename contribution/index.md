---
title: 💖 Contribuer à Fiches
order: 1
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/Funasitien.png',
    name: 'Funasitien',
    title: 'Créateur',
    org: 'DEMOCRAFT',
    orgLink: 'https://democraft.fun',
    desc: "Mainteneur principal de fiches.me depuis 2024",
    sponsor: "https://github.com/sponsors/Funasitien",
    actionText: "Aidez Fiches.me!",
    links: [
      { icon: 'github', link: 'https://github.com/Funasitien' }
    ]
  },
  {
  avatar: "https://github.com/Javier-Cruz-Santos.png",
  name:"Javier-Cruz-Santos",
  title: "Mainteneur"
  }
]
</script>

# 💖 Contribuer à Fiches

> Merci beaucoup de penser à contribuer à notre site !
Fiches ne pourrait pas vivre sans ses contributeurs ! C'est grace à vos fiches que fiches peut prendre un s !

Si vous êtes en CPES, ce qui est très probable vu l'orientation de fiches.me, vous découvrez tout juste l'informatique.
Les **contributions open sources**, modifier un site (ou un produit informatique) existant,
est une pratique commune que vous serez ammené à reproduire dans votre futur si vous décidez de faire plus d'informatique !

Sauf que, pour pouvoir contribuer à du code, *il faut savoir en écrire*...
C'est pour cette raison que le(s) site(s) de fiches.me sont codés en [Markdown](https://commonmark.org/)

## ⚡ Résumé 

Fiches.me est fait pour être modifié sur [https://obsidian.md](Obsidian). Si vous utilisez déjà Obsidian ou vous êtes ouvert à testser des applications de notes, passez directement à [[# 🌐 Publier les fiches]]. 

> [!BUG] Nous ne forceons aucune convention d'écriture pour le moment !

## 📄 Écrire des fiches

### ✒️ Écrire en Markdown

Si vous utilisez notion, le format des fichiers `.md` est très similaire à ceux de notion. Il existe aussi des [convertisseurs automatiques](https://github.com/souvikinator/notion-to-md). Si vous utilisez Google Docs, il existe des [sites](https://gdoc2md.com/) et des [extensions](https://workspace.google.com/marketplace/app/docs_to_markdown/700168918607) pour convertir vos fichiers en markdown.

Le markdown n'est qu'une syntaxe appliquée à du texte brut. Vous pourriez copier-coller vos fiches dans un fichier `.md` sans problème et le contenu s'afficherai sur le site. cxx

Le Markdown ressemble beaucoup à un cours de mathématiques. Chaque titre (le titre du chapitre, les grands I, grands A, petits 1 et petits a) correspondent â

### 🌐 Publier les fiches

## ⚙️ Fiches : comment ça marche

Les sites internets classiques sont codés en html.
Cette fiche, en HTML, resemble à ça :

```html
<div>
    <h1 id="💖-contribuer-a-fiches" tabindex="-1">
        💖 Contribuer à Fiches
        <a
            class="header-anchor"
            href="#💖-contribuer-a-fiches"
            aria-label="Permalink to “💖 Contribuer à Fiches”"
            >​</a
        >
    </h1>
    <blockquote>
        <p>
            Merci beaucoup de penser à conntribuer à notre site ! Fiches ne
            pourrait pas vivre sans ses contributeurs ! C'est grace à vos fiches
            peut prendre un s !
        </p>
    </blockquote>
    <p>
        Si vous êtes en CPES, ce qui est très probable vu l'orientation de
        fiches.me, vous découvrez tout juste l'informatique. Les
        <strong>contributions open sources</strong>, modifier un site (ou un
        produit informatique) existant, est une pratique commune que vous serez
        ammené à reproduire dans votre futur si vous décidez de faire plus
        d'informatique !
    </p>
</div>

```


*C'est pas très lisible et facile à écrire...* Sauf que fiches code **lui même** le HTML ! En réalité, les fiches sont de simples fichiers textes (`.txt`) avec quelques astérisques `*` et quelques tags `#` et le tour est joué !

```md
# 💖 Contribuer à Fiches

> Merci beaucoup de penser à conntribuer à notre site !
Fiches ne pourrait pas vivre sans ses contributeurs ! C'est grace à vos fiches peut prendre un s !

Si vous êtes en CPES, ce qui est très probable vu l'orientation de fiches.me, vous découvrez tout juste l'informatique.
Les **contributions open sources**, modifier un site (ou un produit informatique) existant,
est une pratique commune que vous serez ammené à reproduire dans votre futur si vous décidez de faire plus d'informatique !

Sauf que, pour pouvoir contribuer à du code, *il faut savoir en écrire*...
C'est pour cette raison que le(s) site(s) de fiches.me sont codés en [[https://commonmark.org/|Markdown]]
```

Les deux fichiers sont le même site. La nuance est que le premier est une **version compilé** du deuxième. *Oui, ces fous d'informaticiens compilent même du texte.*
