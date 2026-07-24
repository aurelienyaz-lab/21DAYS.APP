# 21 DAYS · Application

## 📦 Contenu du zip

```
21days-app/
├── index.html           ← l'application (à ouvrir dans un navigateur)
├── manifest.json        ← config PWA (nom, couleurs, icônes)
├── sw.js                ← service worker (mode hors ligne)
└── icons/               ← icônes de l'app à toutes les tailles
    ├── apple-touch-icon-180.png
    ├── icon-192.png
    ├── icon-512.png
    └── ...
```

## 📱 Installer sur ton écran d'accueil (iPhone / iPad)

### Option A · Méthode simple (locale, sans hébergement)

Cette méthode fonctionne mais l'app **ne s'ouvrira pas en mode standalone** — elle
s'ouvrira dans Safari avec la barre du navigateur visible. C'est le compromis
d'iOS pour les fichiers locaux.

1. **Décompresse le zip** dans l'app **Fichiers** (dans un dossier de ton choix
   — par exemple *Fichiers → iCloud Drive → 21days-app*)
2. Ouvre **Fichiers**, va dans le dossier `21days-app`
3. Appuie longuement sur `index.html` → **Partager** → **Copier dans Safari**
   (ou tape simplement dessus, il s'ouvre dans Safari)
4. Dans Safari, appuie sur l'icône **Partage** (le carré avec la flèche vers le haut)
5. Fais défiler et choisis **Sur l'écran d'accueil**
6. Nomme l'icône (par défaut *21 DAYS*) → **Ajouter**

### Option B · Méthode PWA complète (hébergement en ligne, expérience native)

Pour avoir l'app **en plein écran, sans barre Safari, avec mode hors ligne** —
c'est l'expérience "vraie app". Il faut l'héberger en ligne :

1. **Crée un compte gratuit sur Netlify** (netlify.com) — 30 secondes, pas de CB
2. Va sur *netlify.com/drop* (**Netlify Drop**)
3. **Glisse le dossier `21days-app`** décompressé sur la page
4. Netlify te donne une URL du type `https://xxxx.netlify.app`
5. Ouvre cette URL dans **Safari sur ton iPhone**
6. Icône **Partage** → **Sur l'écran d'accueil**
7. ✅ L'app s'ouvre maintenant en plein écran comme une vraie app, et
   fonctionne même en avion (grâce au service worker)

Alternatives équivalentes à Netlify : Vercel, Cloudflare Pages, GitHub Pages —
toutes gratuites pour ce genre de projet statique.

## 🤖 Installer sur Android

1. Héberge le dossier en ligne (voir option B ci-dessus)
2. Ouvre l'URL dans **Chrome**
3. Chrome propose automatiquement **"Ajouter à l'écran d'accueil"** en haut
4. Sinon : menu ⋮ → **Installer l'application**

## 💾 Sauvegarde des données

L'app stocke tes séances validées, ta progression et tes paramètres dans le
**localStorage** de ton navigateur/de l'app installée. Ces données restent
sur ton téléphone et ne sont pas envoyées en ligne.

**Important :** si tu désinstalles l'app depuis ton écran d'accueil, les
données sont perdues. Fais des captures d'écran de tes stats si elles
comptent pour toi.

## 🔄 Mettre à jour

Quand une nouvelle version arrive :
- **Option A (locale)** : remplace le dossier `21days-app` par le nouveau
- **Option B (hébergée)** : glisse le nouveau dossier sur Netlify Drop
  (même URL, l'app se met à jour automatiquement au prochain lancement)

## ❓ Problèmes fréquents

**L'icône ne s'affiche pas correctement sur l'écran d'accueil**
→ Vérifie que le dossier `icons/` est bien à côté de `index.html`. Sur iOS,
supprime l'icône puis re-ajoute-la depuis Safari.

**Les fonts ne s'affichent pas hors ligne**
→ Normal au premier lancement — les fonts Google chargent puis sont mises
en cache. Ouvre l'app une fois connecté avant de partir en mode avion.

**"L'app n'est pas installable" sur Android**
→ Il faut absolument l'HTTPS (option B). En local, Android ne propose pas
l'installation PWA.

---

Bon protocole. 💪
