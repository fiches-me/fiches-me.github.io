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
> Fiches ne pourrait pas vivre sans ses contributeurs ! C'est grâce à vos fiches que Fiches peut prendre un « s » !

Si vous êtes en CPES, ce qui est très probable vu l'orientation de fiches.me, vous découvrez tout juste l'informatique.
Les **contributions open source**, c'est-à-dire modifier un site (ou un produit informatique) existant,
sont une pratique commune que vous serez amenés à reproduire dans votre futur si vous décidez de faire plus d'informatique !

Sauf que, pour pouvoir contribuer à du code, *il faut savoir en écrire*...
C'est pour cette raison que les sites de fiches.me sont rédigés en [Markdown](https://commonmark.org/).

## ⚡ Résumé 

Fiches.me est fait pour être modifié sur [Obsidian](https://obsidian.md). Si vous utilisez déjà Obsidian, que vous écrivez vos fiches dans un format Markdown ou que vous êtes ouverts à tester des applications de notes, passez directement à [[# 🌐 Publier les fiches]]. 

> [!BUG] Nous ne forçons aucune convention d'écriture pour le moment !

## 📄 Écrire des fiches

### ✒️ Écrire en Markdown

Si vous utilisez Notion, le format des fichiers `.md` est très similaire à celui de vos pages. Il existe aussi des [convertisseurs automatiques](https://github.com/souvikinator/notion-to-md). Si vous utilisez Google Docs, il existe des [sites](https://gdoc2md.com/) et des [extensions](https://workspace.google.com/marketplace/app/docs_to_markdown/700168918607) pour convertir vos fichiers en Markdown.

Le Markdown n'est qu'une syntaxe appliquée à du texte brut. Vous pourriez copier-coller vos fiches dans un fichier `.md` sans problème et le contenu s'afficherait sur le site. **Mais c'est plus joli avec du gras et de la couleur !**

Le Markdown ressemble beaucoup à un plan de cours. Chaque titre (le titre du chapitre, les grands I, grands A, petits 1 et petits a) correspond à une suite de symboles `#`. Vous pouvez également utiliser des astérisques `*` pour faire **du texte en gras** ou *en italique*.

L'ensemble de la syntaxe Markdown supportée par Fiches est disponible [[101.md|sur cette page]]. *Si vous utilisez Obsidian, la syntaxe s'applique automatiquement !*

### 🌐 Publier les fiches

Fiches est hébergé sur [GitHub](https://github.com/fiches-me). Pour y ajouter vos fichiers ou proposer vos modifications, deux méthodes principales s'offrent à vous selon votre niveau :

#### ✅️ Méthode simple : directement sur github.com
   - Rendez-vous sur le [dépôt GitHub du projet](https://github.com/fiches-me).
   - Ouvrez le repo qui correspond à cotre formation (CPES1, CPES2...)
   - Naviguez dans les dossiers pour trouver l'endroit où ajouter votre fiche.
   - Cliquez sur le bouton **Add file** (ou sur l'icône de crayon pour modifier une page existante).
   - Glissez-déposez votre fichier `.md` ou écrivez votre texte directement, puis cliquez sur **Commit changes**. Une validation sera effectuée par un mainteneur avant la mise en ligne !

#### 💣 Méthode Pro : GIT
Si vous commencez à maîtriser les outils de développeur, vous pouvez cloner le dépôt sur votre machine :
  
  ```bash
     git clone https://github.com/fiches-me/<nom>.git
     ```
Créez une branche pour vos modifications, rédigez vos fiches depuis votre éditeur favori, puis proposez une *Pull Request* (PR).


> [!Question] N'oubliez pas de remplacer `<nom>` par le nom de la formation, eg. `cpes1` ou `cpes2`.


## ⚙️ Fiches : comment ça marche ?

Les sites internet classiques sont codés en HTML.
Cette fiche, en HTML, ressemble à ça :

```html
<div>
    <h1 id="💖-contribuer-a-fiches" tabindex="-1">
        💖 Contribuer à Fiches
        <a
            class="header-anchor"
            href="#💖-contribuer-a-fiches"
            aria-label="Permalink to “💖 Contribuer à Fiches”"
            >​</a>
    </h1>
    <blockquote>
        <p>
            Merci beaucoup de penser à contribuer à notre site ! Fiches ne
            pourrait pas vivre sans ses contributeurs ! C'est grâce à vos fiches
            que Fiches peut prendre un s !
        </p>
    </blockquote>
    <p>
        Si vous êtes en CPES, ce qui est très probable vu l'orientation de
        fiches.me, vous découvrez tout juste l'informatique. Les
        <strong>contributions open source</strong>, modifier un site (ou un
        produit informatique) existant, est une pratique commune que vous serez
        amenés à reproduire dans votre futur si vous décidez de faire plus
        d'informatique !
    </p>
</div>
```

```md
# 💖 Contribuer à Fiches

> Merci beaucoup de penser à contribuer à notre site !
> Fiches ne pourrait pas vivre sans ses contributeurs ! C'est grâce à vos fiches que Fiches peut prendre un s !

Si vous êtes en CPES, ce qui est très probable vu l'orientation de fiches.me, vous découvrez tout juste l'informatique.
Les **contributions open source**, modifier un site (ou un produit informatique) existant,
sont une pratique commune que vous serez amenés à reproduire dans votre futur si vous décidez de faire plus d'informatique !

Sauf que, pour pouvoir contribuer à du code, *il faut savoir en écrire*...
C'est pour cette raison que les sites de fiches.me sont codés en [Markdown](https://commonmark.org/).
```

Ces deux fichiers affichent exactement le même site. La nuance est que le premier est **la version compilée du deuxième**. *Oui, ces fous d'informaticiens compilent même du texte.*
