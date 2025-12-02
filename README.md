# Tennis API – Projet Étudiant (NestJS)

## Contexte
Ce projet a été réalisé dans le cadre d’un TP de développement backend avec **NestJS**.  
L’objectif est de construire une API REST simple permettant de gérer des **terrains de tennis** (`courts`) tout en intégrant une **API publique externe** (TheSportsDB) pour enrichir les données.  

---

## Fonctionnalités

### Gestion locale des courts (CRUD)
- `GET /courts` → liste tous les courts.
- `GET /courts/:id` → récupère un court par son identifiant.
- `POST /courts` → ajoute un nouveau court (selon DTO).
- `PUT /courts/:id` → met à jour le favori d’un court.
- `PATCH /courts/:id/favorite` → met à jour uniquement le champ favori.
- `DELETE /courts/:id` → supprime un court.

Les données locales sont stockées dans un fichier **JSON maison** au lancement.

### Intégration API externe – TheSportsDB
- `GET /tennis/player?name=<nom>` → recherche un joueur de tennis via l’API publique.  
  Exemple : `/tennis/player?name=Federer`
- `GET /tennis/event?name=<event>` → recherche un évènement (tournoi, match, …).  
  Exemple : `/tennis/event?name=Wimbledon`

L’API externe utilisée est **TheSportsDB (free key: 123)**.

## Exemples de requêtes

### Avec navigateur
- [http://localhost:3000/courts](http://localhost:3000/courts)  
- [http://localhost:3000/courts/court-md-1](http://localhost:3000/courts/court-md-1)  
- [http://localhost:3000/tennis/player?name=Nadal](http://localhost:3000/tennis/player?name=Nadal)

---

# Description  
Dépôt de démarrage TypeScript pour le framework **NestJS**.  

## Installation du projet  
$ npm install

## Compilation et exécution du projet  
### Mode développement  
$ npm run start

### Mode watch (redémarrage automatique)  
$ npm run start:dev

### Mode production  
$ npm run start:prod

## Lancer les tests  
### Tests unitaires  
$ npm run test

### Tests end-to-end (e2e)  
$ npm run test:e2e

### Couverture des tests  
$ npm run test:cov

## Déploiement  
Lorsque vous êtes prêt à déployer votre application **NestJS** en production, vous pouvez suivre les étapes officielles pour garantir une exécution optimale.  

Si vous recherchez une plateforme cloud pour déployer votre application, vous pouvez utiliser **Mau**, la plateforme officielle de NestJS pour un déploiement rapide sur AWS.  

Installation et déploiement avec Mau :  
$ npm install -g @nestjs/mau
$ mau deploy

Avec Mau, vous pouvez déployer votre application en quelques clics et vous concentrer sur le développement des fonctionnalités plutôt que sur l’infrastructure.  

## Ressources  
Voici quelques ressources utiles pour travailler avec NestJS :  
- Documentation officielle : https://docs.nestjs.com/  
- Communauté et support via le Discord officiel  
- Cours et tutoriels vidéo officiels  
- Déploiement facile avec NestJS Mau  
- Visualisation et interactions temps réel avec NestJS Devtools  
- Support entreprise officiel  
- Suivez les mises à jour sur X (Twitter) et LinkedIn  
- Jobs board officiel pour offres et recherches d’emplois  

## Support  
NestJS est un projet open-source sous licence MIT.  
Il se développe grâce aux sponsors et à la communauté des contributeurs.  

## Auteur  
- **Kamil Myśliwiec**  
- Site web : https://nestjs.com  
- Twitter : @nestframework  

## Licence  
NestJS est publié sous licence **MIT**.  
