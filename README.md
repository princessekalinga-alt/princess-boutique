# Princess Boutique

Site vitrine marchand statique, en français, construit avec [Cecil](https://cecil.app). Les commandes et demandes de prix sont orientées vers WhatsApp ; le formulaire de contact prépare un e-mail dans l'application de la visiteuse. Aucun paiement ni panier n'est traité sur le site.

## Prévisualiser et générer

```powershell
php cecil.phar serve
php cecil.phar build
```

Le site généré se trouve dans `_site/`.

## Avant la mise en ligne

1. Renseignez l'URL de production dans `baseurl` de `cecil.yml`.
2. Complétez `data/shop.yaml` avec le numéro WhatsApp international (chiffres seuls), l'adresse e-mail et les URL des comptes Instagram et Facebook officiels. Les boutons sociaux pointent provisoirement vers les pages d'accueil des plateformes et WhatsApp utilise un lien générique tant que les coordonnées officielles ne sont pas renseignées.
3. Remplacez les produits d'exemple dans `data/products.yaml` par le vrai catalogue, les prix et les photos des articles en vente. Les tarifs ne sont pas inventés et ne sont donc pas affichés.
4. Remplacez les images d'illustration et l'image de partage social par les visuels de la boutique.
5. Vérifiez le formulaire de contact sur un appareil disposant d'une application e-mail configurée. Pour un formulaire avec envoi direct sans application e-mail, ajoutez un service de formulaire et son endpoint.

Les textes et images actuels sont des exemples de présentation, pas des avis clients ni un catalogue réel. Les images du dossier `assets/images/` sont optimisées en WebP et proviennent d'Unsplash ; consultez la [licence Unsplash](https://unsplash.com/license) et les pages source avant la publication.

## Organisation

- `pages/` : pages du site
- `layouts/` : templates Twig, dont la page d'accueil
- `assets/css/style.scss` : styles responsive
- `assets/images/` : images WebP
- `data/products.yaml` : catalogue éditable
- `data/shop.yaml` : coordonnées et liens de la boutique
