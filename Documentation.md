# Installer l'application

## prérequis

Pour compiler le logiciel, vous avez besoins de:

- Docker
- docker-compose

Vous avez aussi besoin que les ports suivants soient libres:

- 4000
- 5000
- 5001
- 5002
- 5003
- 8081

---

## installation

Vous devez lancer les commandes suivantes.

Récupérer le code source

```
git clone https://github.com/smelezan/g2-eq1_release.git
```

Rentrer dans le dossier:

```
cd g2-eq1_release
```

### Environnement de développement

Exécuter docker

```
docker-compose up --build
```

### Environnement de production

```
docker-compose -f ./docker-compose.build.yml up --build
```

---

## vérification

Une fois le message suivant affiché :

```
App running at:
- Local:   http://localhost:8080/
```

Rendez vous dans votre navigateur favoris et entrer l'adresse suivante:

```
http://localhost:8081
```

Et vous devriez voir la page d'acceuil.
