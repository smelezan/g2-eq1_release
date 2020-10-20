# BackLog


| id | type    | description | priorite | difficulte | 
| ---| ----    |----         |----      |----        |
| 1  | Feature | US1         | 3        | 2          |
| 2  | Feature | US2         | 1        | 1          |
| 3  | Feature | US3         | 2        | 1          |
| 4  | Feature | US4         | 3        | 1          |
| 5  | Feature | US5         | 3        | 1          |
| 6  | Feature | US6         | 1        | 1          |
| 7  | Feature | US7         | 2        | 1          |
| 8  | Feature | US8         | 3        | 1          |
| 9  | Feature | US9         | 3        | 1          |
| 10 | Feature | US10        | 1        | 1          |
| 11 | Feature | US11        | 3        | 1          |
| 12 | Feature | US12        | 2        | 1          |
| 13 | Feature | US13        | 1        | 3          |
| 14 | Feature | US14        | 1        | 2          |
| 15 | Feature | US15        | 2        | 1          |
| 16 | Feature | US16        | 3        | 1          |
| 17 | Feature | US17        | 3        | 1          |
| 18 | Feature | US18        | 3        | 1          |
| 19 | Feature | US19        | 3        | 1          |
| 20 | Feature | US20        | 5        | 2          |
| 21 | Feature | US21        | 5        | 2          |
| 21 | Feature | US21        | 5        | 2          |
| 23 | Feature | US23        | 5        | 2          |

___


US1 : En tant que Développeur

Je souhaite rajouter un Projet composé de:
* Issues
* Tâches
* Releases
* tests
* documentation 

Afin d'en gérer plusieurs à la fois.
---

US2 : En tant que Développeur 

Je souhaite  créer une issue composée de :
* Id Unique: int (généré automatiquement)
* Nom: Text
* Description : Text
* Difficulté : Int ( fibonacci)  
* Priorité : Enum ( basse, moyenne, forte)
* Date réalisée: Date
* Date de test: Date
* Résultat Test: boolean
* IdRelease: int  
* Taches : List<Task>

Afin de collaborer avec les autres devs.
---

US3 : En tant que Développeur 

Je souhaite  avoir une page récapitulative de mes issues:
* Progression total des issues
* Avancement d'une issue
* Quand? ( SprintX )

Afin d'avoir une vue d'ensemble de mes issues


--- 

US4 : En tant que Développeur

Je souhaite modifier les issues:
* Ajouter dans un sprint
* Ajouter une date de Test
* Ajouter un résultat de Test
* Ajouter une tâche
* Modification générales (Description, spécifications PO etc)

Afin de rajouté des informations ou en modifier si nécessaire

--- 

US5 : En tant que Développeur

Je souhaite pouvoir supprimer mes issues

Afin de de ne plus les avoir si elle ne sont pas nécessaire

--- 

US6 : En tant que Développeur

Je souhaite ajouter un sprint composé: 
* date début: Date
* date fin: Date
* liste d'issues: Liste<Issues>

Afin d'y ajouter les issues et les tâches.


--- 

US7 : En tant que Développeur

Je souhaite voir un récapitulatif des sprint

Afin d'avoir une planification

--- 

US8 : En tant que Développeur

Je souhaite modifier un sprint :
* date début: Date
* date fin: Date
* liste d'issues: Liste<Issues> 

Afin d'y rajouter des tâches

--- 

US9 : En tant que Développeur

Je souhaite supprimer  un sprint 

Afin de réagir à un potentiel contre-temps

--- 

US10 : En tant que Développeur 

Je souhaite  créer une Tâche  composée:
* Id: int
* Nom: Text
* Qui : Text
* Temps : Durée
* Dépendance : List<Task>
* DoD (Definition Of Done): Text
* Progression : int ( en pourcentage)

Afin de pouvoir répartir le travail


--- 

US11 : En tant que Développeur
Je souhaite modifier les tâches :
* Utilisateur associé: String 
* Modification de la progression de la tâche : int

Afin de réorganiser le travail si nécessaire

--- 

US12 : En tant que Développeur

Je souhaite avoir accès à un récapitulatif des tâches:
* Avancement total par sprint

Afin de l'avancement des tâches

--- 

US13 : En tant que Développeur

Je souhaite rajouter une Release composée de :
* Version: Text ( "X.Y.Z")
* Liste des Issues réalisées: List< Issues>
* Un Zip 
* Date de la release

Afin de pouvoir les récupérer

---

US14 : En tant que Développeur

Je souhaite rajouter un Test composé de :
* type : Enum (Unitaire / Integration/EndToEnd)
* Taches : List<Task>
* Description : Text 
* Date testées : List<DateTestée> (limite de taille) 

Afin de confirmer la finalisation d'une tâche

---

US15 : En tant que Développeur

Je souhaite avoir accès à une page récapitulative des test :
* Taux total de réussite 
* Cas par cas 

Afin de voir l'avancement de mes tests

---

US16 : En tant que Développeur

Je souhaite supprimer un Test

afin de le retirer de la liste des Tests

---

US17 : En tant que Developpeur

Je souhaite modifier un Test:
* Date testées

afin de mettre à jour le Test

---

US18 : En tant que Développeur

Je souhaite Ajouter des fichiers de documentations

afin de donner des renseignements sur la structure le fonctionnement et l'utilisation du logiciel


---

US19 : En tant que Développeur

Je souhaite pouvoir voir les documentations.

afin d'installer l'application

---

US20 : En tant que Développeur

Je souhaite être signalé à l'aide d'une icône lors d'un retard 

afin de m'alerter

---


US21 : En tant que Développeur

Je souhaite pouvoir créer un planning:
* tache
* dev associé
* date debut
* date fin
afin de répartir mes tâches, sur le temps dans un tableau

---

US22 : En tant que Développeur

Je souhaite pouvoir générer un diagramme de Pert à l'aide d'un planning

afin d'avoir une représentation visuelle de mon organisation avec mon équipe

---

US23 : En tant que Développeur

Je souhaite pouvoir générer un Burndown chart

afin de représenter l'avancement du projet au cours de sa durée de vie.

---