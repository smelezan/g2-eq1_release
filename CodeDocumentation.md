# Documentation du code

#### version: v2.0.0

## Architecture du docker

Notre projet utilise le pattern du web service.

Notre frontend codé en Vuejs a son propre container.

Quant à notre backend nous l'avons divisé en plusieurs container afin de réduire la charge.

chaque webservice est constitué d'un serveur express et d'une base de donnée mongo.

![architecture](/images/docker-compose.png)

---

## Architecture du code

Pour plus de lisibilité notre code reflète notre architecture

### Les dossiers:

Il y a donc un dossier par conteneur:

- front
- issues-back : s'occupe des issues et des sprints
- tasks-back : s'occupe des tâches
- tests-back : s'occupe des tests
- release-doc-back : s'occupe des releases et des documentations
- projects-back : s'occupe des projets

Et chaque dossier est disposé de la manière suivante:

- controllers/
- middlewares/
- models/
- routes/
- tests/
- Dockerfile
- .dockerignore

---

## Notre API

Vous pouvez retrouver notre documentation OpenApi :
[OpenApi](https://app.swaggerhub.com/apis-docs/smelezan/cdp/1.0.0)
