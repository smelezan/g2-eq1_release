Backlog : Liste des besoins que couvrent le logiciel
<br/>
=======
<table>
  <tbody>
    <tr>
      <th>ID</th>
      <th>Description</th>
      <th>Difficulté</th>
      <th>Priorité</th>
    </tr>
    <tr>
      <td>1</td>
      <td>
        US1 : En tant qu'Utilisateur<br>
        Je souhaite à partir de l'écran d'accueil cliquer sur "Ajouter un Projet"
        <br>
        qui me redirigera vers la page de création d'un projet
        <br>
        Afin de remplir un formulaire composé:
         <ul>
          <li> d'un champ nom de type Text avec une limite de 20 caractères</li>
          <li> d'un champ description de type Text sans limite.</li>
          <li> d'un bouton submit qui me reverra sur la page du projet</li>
        </ul>
      </td>
      <td>1</td>
      <td>faible</td>
    </tr>
    <tr>
     <td>2</td>
      <td>
        US2 : En tant qu'Utilisateur<br>
        Je souhaite à partir de la page d'un projet avoir accès:
        <ul>
          <li>au nom du projet</li>
          <li>à la liste des collaborateurs</li>
          <li>à l'onglet des sprints</li>
          <li>à l'onglet des issues</li>
          <li>à l'onglet des Tâches</li>
          <li>à l'onglet des Releases</li>
          <li>à l'onglet des Tests</li>
          <li>à l'onglet de documentation</li>
        </ul>
        afin de pouvoir me déplacer entre les différentes pages de l'application.
      </td>
      <td>1</td>
      <td>faible</td>
    </tr>
    <tr>
     <td>3</td>
      <td>
        US3 : En tant qu'Utilisateur<br>
        Je souhaite à partir de la page d'un projet cliquer sur le bouton "supprimer"<br>
        qui affichera un Popup pour confirmer la suppression du projet.<br>
        qui nous renverra à l'écran d'accueil si confirmation<br>
        afin de supprimer un projet.
      </td>
      <td>1</td>
      <td>faible</td>
    </tr>
    <tr>
     <td>4</td>
      <td>
        US4 : En tant qu'Utilisateur<br>
        Je souhaite à partir de la page des sprints<br>
        pouvoir cliquer sur "ajouter un sprint" qui m'affichera un formulaire sous forme de popup composé des champs:
        <ul> 
          <li>Date de début</li>
          <li>Date de fin</li>
        </ul>
        une fois confirmé, un tableau vide est créé.<br>
        afin d'y ajouter des Issues.
      </td>
      <td>1</td>
      <td>élevée</td>
    </tr>
    <tr>
     <td>5</td>
      <td>
        US5 : En tant qu'Utilisateur<br>
        Je souhaite à partir de la page des sprints<br>
        avoir accès à un tableau listant toutes les Issues qui n'appartiennent à aucun sprint. Et les autres sprints déjà ajoutés sous forme de tableaux listant les Issues qui leurs sont associés.<br>
        Afin de déplacer ( drag and drop ) les Issues de tableau en tableau en fonction de nos intentions.
      </td>
      <td>2</td>
      <td>élevée</td>
    </tr>
    <tr>
     <td>6</td>
      <td>
        US6 : En tant qu'Utilisateur<br>
        Je souhaite à partir de la page des sprints<br>
        avoir accès à un bouton "supprimer" à côté de chaque sprint <br>
        afin de supprimer un sprint, les issues contenus dans un sprint seront renvoyées dans le premier tableau qui liste les Issues sans sprint.
      </td>
      <td>2</td>
      <td>élevée</td>
    </tr>
    <tr>
     <td>7</td>
      <td>
        US7: En tant que Utilisateur<br>
        Je souhaite à partir de la page des Issues<br>
        avoir accès à la liste des Issues déjà créées.<br>
        Dans cette liste, une Issue sera représentée par une carte composée de:
        <ul>
          <li>Son nom</li>
          <li>Une barre de progression ( calculé en fonction des Tâches réalisées liées à cette Issue )</li>
          <li>Un potentiel Icone Warning m'informant
            <ul>
              <li>D'un retard d'une des Tâches liées
              <li>D'un manque d'information ( priorité, difficulté ) 
              <li>Aucune Tâches associée à cette Issue.
            </ul>
          <li>Un code couleur représentant sa difficulté
            <ul> 
              <li>Un dégradé de jaune à rouge, jaune étant le plus facile.</li>
            <ul>
        </ul>
      </td>
      <td>2</td>
      <td>élevée</td>
    </tr>
    <tr>
    <td>8</td>
      <td>
        US8 : En tant qu'utilisateur.<br>
        Je souhaite à partir de la page des "Issues".<br>
        pouvoir cliquer sur le bouton "Ajouter une issue".<br>
        qui me redirigera vers la page de création d'une issue.<br>
        Afin d'accéder à un formulaire composé des champs:
        <ul>
          <li>Nom: Text ( < 20 char )</li>
          <li>Description: Text</li>
          <li>De son type : Menu déroulant  ( Feature , etc... )</li>
          <li>et d'un bouton "ajouter" qui nous renverra sur la page qui liste les issues.</li>
        </ul>
      </td>
      <td>1</td>
      <td>élevée</td>
    </tr>
    <tr>
    <td>9</td>
      <td>
       US9 : En tant qu'utilisateur<br>
      Je souhaite à partir de la page qui liste les Issues<br>  
      pouvoir cliquer sur une issue<br> 
      Afin d'accéder à un récapitulatif avec certains champs modifiables:
      <ul>
      <li>Champ nom (modifiable)</li>
      <li>Champ description (modifiable)</li>
      <li>Difficulté (non modifiable)</li>
      <li>Priorité ( non modifiable)</li>
      <li>Sprint dans lequel il apparait ( non modifiable)</li>
      <li>Ainsi qu'à un bouton "sauvegarder les changements" qui à partir des champs modifiables va mettre à jour l'issue.</li>
      </ul>
      Pour enfin nous ramener à la nouvelle liste des issues. 
      </td>
      <td>1</td>
      <td>élevée</td>
    </tr>
    <tr>
    <td>10</td>
      <td>
        US10 : En tant qu'utilisateur<br> 
        Je souhaite à partir de la page de liste des Issues<br> 
        pouvoir cliquer sur "Gérer la difficulté des Issues"<br> 
        Afin d'accéder à la page de gestion des Issues <br> 
        qui sera composée de plusieurs colonnes:<br>
        La première contenant toutes les issues dont la difficulté n'est pas attribuée.<br>
        Pour le reste des colonnes:
        <ul>
          <li>Toutes les issues de la même colonne auront la même difficulté.</li>
          <li>Les issues dans une colonnes seront toujours plus difficiles que celles de la colonne qui se trouve à leur gauche.</li>
        </ul>
        et pouvoir Drag and  Drop  les issues:
        <ul>
        <li>Soit pour leur associer une difficulté ( en prenant une issue de la première colonne vers celle des colonnes )</li> 
        <li>Soit enlever une difficulté</li>
        <li>Soit réajuster une difficulté.</li>
        </ul>
        Pour enfin valider en appuyant sur le bouton "valider" qui nous enverra sur la liste des Issues.<br>
        afin de leur associer une difficulté en utilisant la suite de fibonacci. <br>
      </td>
      <td>3</td> 
      <td>élevée</td>
    </tr>
    <tr>
    <td>11</td>
      <td>
        US11 : En tant qu'utilisateur<br>
        Je souhaite à partir de la page qui liste les Issues<br>
        pouvoir cliquer sur "Gérer la priorité des Issues"<br>
        Afin d'accéder à la page de gestion des priorités<br>
        pour pouvoir trier les issues en fonction de leur priorité à l'aide du Drag and Drop dans l'une des trois colonnes:
        <ul>
          <li>Faible</li>
          <li>Moyenne</li>
          <li>Forte</li>
        </ul>
        Pour enfin valider en appuyant sur le bouton "valider" qui nous enverra sur la liste des Issues.<br>
        afin de leur associer une priorité.
      </td>
      <td>3</td>
      <td>élevée</td>
    </tr>
    <tr>
    <td>12</td>
      <td>
        US12 : En tant qu'utilisateur <br>
        Je souhaite à partir de l'onglet Issues<br>
        Pouvoir cliquer sur le bouton "supprimer" à côté de l'Issue sélectionné<br>
        afin de l'enlever de ma liste des Issues.
      </td>
      <td>1</td>
      <td>élevée</td>
    </tr>
    <tr>
    <td>13</td>
      <td>
      US13 : En tant qu'utilisateur<br>
      Je souhaite avoir accès à une page depuis laquelle je peux voir l'ensemble de mes Tâches contenant un bouton "Ajouter" qui me redirige vers un formulaire avec les champs : 
      <ul>
      <li>Titre : Text</li>
      <li>Description : Text</li>
      </ul>
      Et une liste des Issues avec chacune une checkbox pour indiquer auxquelles correspond la Tâche et deux boutons, "Confirmer" qui crée la Tâche en générant un identifiant unique et "Annuler" qui me ramène à la page précédente<br>
      afin de créer une Tâches.
            </td>
      <td>2</td>
      <td>élevée</td>
    </tr>
    <tr>
    <td>14</td>
      <td>
        US14: En tant qu'utilisateur<br>
        Je souhaite à partir de la page des Tâches<br>
        avoir accès à la liste des Tâches déjà créées.<br>
        Dans cette liste, une Tâche sera représentée par carte composée de:
        <ul>
        <li>Son nom</li>
        <li>Une couleur, verte si la tâche est fini et grise sinon</li>
        <li>Un potentiel Icone Warning m'informant
            <ul>
            <li>D'un retard d'une de la Tâche ( par rapport à la date du sprint )
            <li>D'un manque d'information ( dévelopeur, durée )
            </ul>
        <li> un bouton pour supprimer la tâche
        </ul>
        et sur laquelle serait visible un barre de progression indiquant l'avancement total des Tâches<br>
        afin de voir la progression total des Tâches sur le projet.
      </td>
      <td>2</td>
      <td>élevée</td>
    </tr>
    <tr>
      <td>15</td>
      <td>
        US15 : En tant qu'utilisateur<br>
        Je souhaite avoir accès à une page par Tâche sur laquelle j'aurais un bouton "Modifier" qui me fait apparaitre une valeur incrémentable et décrémentable de 0.5 correspondant au temps de travail en jour<br>
        afin de choisir et modifier le temps de travail d'une Tâche.
      </td>
      <td>1</td>
      <td>élevée</td>
    </tr>
    <tr>
      <td>16</td>
      <td>
        US16 : En tant qu'utilisateur<br>
        Je souhaite avoir accès à une page par Tâche sur laquelle j'aurais un bouton "Modifier" qui m'ouvre une fenêtre avec la liste de mes collaborateurs suivi d'une checkbox que je peux cocher pour choisir à qui attribuer la Tâche <br>
        afin de répartir les Tâches à faire entre les différent membre de l'équipe de développement.
      </td>
      <td>2</td>
      <td>élevée</td>
    </tr>
    <tr>
      <td>17</td>
      <td>
         US17 : En tant qu'utilisateur<br>
          Je souhaite avoir accès à une page par Tâche sur laquelle j'aurais un bouton "Modifier" qui me fasse apparaître un liste déroulante avec la liste des états possible, de plus si la tâche est terminer alors cela met à jour la complétion total des Tâches de la page récapitulative<br>
          afin d'informer à mes collaborateurs de l'avancement d'une Tâche.
      </td>
      <td>1</td>
      <td>élevée</td>
    </tr>
    <tr>
      <td>18</td>
      <td>
        US18 : En tant qu'utilisateur<br>
        Je souhaite avoir accès à une page par Tâche sur laquelle serait présent un bouton "Modifier" qui ferait apparaitre la liste des Issues avec des checkbox que je peux cocher pour indiquer que la Tâche réalise l'Issues<br>
        afin de pouvoir rajouter et supprimer des Issues à mes Tâches.
      </td>
      <td>1</td>
      <td>élevée</td>
    </tr>
    <tr>
      <td>19</td>
      <td>
        US19 : En tant qu'utilisateur<br>
        Je souhaite avoir accès à une page par Tâche sur laquelle serais présent un bouton "Modifier" qui ferais apparaitre la liste des Tâches avec des checkbox que je peux cocher pour indiquer que la Tâche dépend d'une autre<br>
        afin de pouvoir modifier les dépendances entre tâche et facilité la génération d'une planification.
      </td>
      <td>1</td>
      <td>élevée</td>
    </tr>
    <tr>
      <td>20</td>
      <td>
        UUS20 : En tant qu'utilisateur<br>
        Je souhaite que le bouton présent sur la carte représentant une tâche depuis la vue global me fasse apparaître un popup me servant a confirmer que je souhaite supprimer la tâche<br>
        afin de pouvoir enlever les Tâches ajoutée par erreur.
      </td>
      <td>1</td>
      <td>élevée</td>
    </tr>
    <tr>
      <td>21</td>
      <td>
        US21 : En tant qu'utilisateur<br>
        Je souhaite avoir accès depuis la page des Tâches, à un onglet plannification dans lequel il y aurait un tableau modifiable de la forme suivante:
        <ul>
         <li> En x: Les jours </li>   
         <li> En y: Les développeurs </li>   
         <li> Dans les cases internes: l'id d'une tâche </li>   
        </ul>
        En cliquant sur l'une des cases internes: 
        <ul> 
          <li> Si la case est vide: une liste des tâches attribuables apparaît </li>
          <li> Si la case est pleine: une description de la tâche associée à la case est affichée, donnant le titre et la description de cette tâche, ainsi que d'un bouton modifier la tâche qui affichera un menu déroulant listant les tâches attribuableso </li>
        </ul>
        afin d'organiser la charge de travail entre les développeurs.
      </td>
      <td>2</td>
      <td>moyenne</td>
    </tr>
    <tr>
      <td>22</td>
      <td>
        US22 : En tant qu'utilisateur<br>
        Je souhaite avoir accès depuis la page des Tâches, à un onglet Diagramme de Pert dans lequel il y aurait un diagramme se mettant à jour automatiquement en fonction des dépendances entre les tâches <br>
        afin d'aider le développeur à plannifier.
      </td>
      <td>3</td>
      <td>faible</td>
    </tr>
    <tr>
      <td>23</td>
      <td>
        US23: En tant qu'utilisateur <br> 
        Je souhaite avoir accès depuis l'onglet du projet à un onglet "burndown chart" <br>
        Dans lequel nous verrons un graphique de type "burndown chart" se mettant à jour automatiquement, en fonction du nombre d'issues terminées. <br>
        Afin de garder une trace de l'avancement du projet.
      </td>
      <td>3</td>
      <td>faible</td>
    </tr>
    <tr>
      <td>24</td>
        <td>
          US24 : En tant qu'utilisateur<br> 
          Je souhaite pouvoir ajouter une suite de test en glissant un fichier spécifique. <br>
          Une fois ce fichier confirmé, la liste des tests s'affichera sur la page, avec une pastille verte ou rouge à côté de chaque test <br>
          Chaque test est cliquable pour nous afficher l'issue ou la tâche liée,description,son résultat.
          Je pourrai alors enregistrer la saisie en cliquant sur le bouton "ok" ou annuler la saisie en cliquant sur le bouton "cancel"<br>
          Afin d'enregistrer mes tests dans l'application.
        </td>
      <td>2</td>
      <td>moyenne</td>
    </tr>
    <tr>
      <td>25</td>
        <td>
          US25 : En tant qu'utilisateur<br> 
          Je souhaite avoir un résumé des tests en cliquant sur le bouton "Gestion des tests" puis "dashboard" à partir de la page d'acceuil. Ce bouton me redirigera vers une page me résumant l'état des tests: 
          <ul>  
            <li>passés (Valid) ou pas (Reject)
            <li>restant à éxécuter
            <li>en cours d'écécution
            <li>annulés
            <li>suspendus
          </ul>
          Afin d'avoir un suivi des tests.
        </td>
      <td>2</td>
      <td>moyenne</td>
    </tr>
    <tr>
      <td>26</td>
        <td>
          US26 : En tant qu'utilisateur<br> 
          Je souhaite identifier les tests en cliquant sur le bouton "Gestion des tests", "dashboard", puis "<état>" à partir de la page d'acceuil. Ce bouton me permettra de voir la liste des tests "<état>" avec leur description, leur id et les cas d'utilisations liés à l'aide d'un tableau de caractèes (500 caractères max).<br>
          Afin de savoir quels sont les cas d'utilisation associées à un test.
        </td>
      <td>2</td>
      <td>moyenne</td>
    </tr>
    <tr>
      <td>27</td>
        <td>
          US27 : En tant qu'utilisateur<br> 
          Je souhaite avoir la date d'éxécution des tests en cliquant sur le bouton "Gestion des tests" puis "dashboard" à partir de la page d'acceuil. Ce bouton me redirigera vers une page contenant un tableau représentant les dates d'exécution des tests en fonction des différents états possibles.<br>
          Afin de savoir si les tests sont à jours.
        </td>
      <td>2</td>
      <td>moyenne</td>
    </tr>
    <tr>
      <td>28</td>
        <td>
          US28 : En tant qu'utilisateur<br> 
          Je souhaite pouvoir modifier un test en cliquant sur sa description depuis la page Dashboard accessible en cliquant sur le bouton "Gestion des tests" puis "dashboard". Ce boutton me redirigera vers une page contenant l'option de modification une suite de test. En sélectionnant "modifier", je pourrai redéposer mon fichier de test modifié
          Afin de permettre l'évolution des tests.
        </td>
      <td>2</td>
      <td>moyenne</td>
    </tr>
    <tr>
      <td>29</td>
        <td>
          US29 : En tant qu'utilisateur<br>
          Je souhaite pouvoir supprimer un test en cliquant sur sa description depuis la page Dashboard accessible en cliquant sur le bouton "Gestion des tests" puis "dashboard".  Ce boutton me redirigera vers une page contenant l'option de suppression d'un test. En sélectionnant "supprimer", je pourrai confirmer ou non la suppression du test sélectionné en cliquant respectivement sur "confirmer" ou "annuler"<br>
          Afin de supprimer un test de ma liste de tests.
        </td>
      <td>2</td>
      <td>moyenne</td>
    </tr>
    <tr>
    <td>30</td>
       <td>
        US30 : En tant qu'utilisateur<br> 
        Je souhaite pouvoir être informé des warnings sur une issue ou sur une tâche. <br>
        Ces warnings sont:
        <ul>
          <li> Une information manquante
          <li> ....
        </ul>
        Afin de me tenir informer de l'avancement du projet.
      </td>
      <td>2</td>
      <td>faible</td>
    </tr>
    <tr>
      <td>31</td>
      <td>
        US31 : En tant qu'utilisateur<br>
        Je souhaite avoir depuis la page des release un bouton "Ajouter une release" qui m'afficher une liste défilante avec :
        <ul>
          <li> Majeur
          <li> Mineur
          <li> Patch
        </ul>
        et va me demander mon archive, le README.md correspondant, un nom de Release et qui une fois les éléments déposer va générer la liste des différences avec la dernière release et l'identifiant de la release ( par incrémentation ) avant d'ensuite l'ajouté au récapitulatif<br>
        Afin d'ajouter une release.
      </td>
      <td>1</td>
      <td>moyenne</td>
    </tr>
    <tr>
      <td>32</td>
      <td>
        US32 : En tant qu'utilisateur<br>
        Je souhaite avoir une page avec des hyper-liens pour télécharger les releases avec à côté un bouton qui peut rendre visible ou masquer le README.md, la note de release correspondante et la documentation d'installation<br>
        Afin d'avoir un suivis des releases.
      </td>
      <td>1</td>
      <td>moyenne</td>
    </tr>
    <tr>
      <td>33</td>
      <td>
        US33 : En tant qu'utilisateur<br>
        Je souhaite à partir de l'onglet des documentations<br>
        avoir accès aux deux types de documentations:
        <ul>  
          <li>Documentation administrateur </li>
          <li>Documentation utilisateur</li>
        </ul>  
        sous forme de deux petits onglets cliquables.
      </td>
      <td>1</td>
      <td>moyenne</td>
    </tr>
    <tr>
      <td>34</td>
      <td>
        US34 : En tant qu'utilisateur<br>
        Je souhaite à partir de l'onglet de la documentation administrateur<br> 
        avoir accès à la documentation de la dernière release <br>
        Ainsi qu'un menu déroulant permettant d'accéder à la documentation administrateur des différentes release<br>
        afin d'afficher la documentation en fonction des releases.
      </td>
      <td>1</td>
      <td>moyenne</td>
    </tr>
    <tr>
      <td>35</td>
      <td>
        US35 : En tant qu'utilisateur<br>
        Je souhaite à partir de l'onglet de la documentation utilisateur<br> 
        avoir accès à la documentation de la dernière release <br>
        Ainsi qu'un menu déroulant permettant d'accéder à la documentation utilisateur des différentes release<br>
        afin d'afficher la documentation en fonction des releases.
      </td>
      <td>1</td>
      <td>moyenne</td>
    </tr>
    <tr>
      <td>36</td>
      <td>
        US36 : En tant qu'utilisateur<br>
        Je souhaite à partir de l'onglet de la documentation administrateur<br> 
        après avoir sélectionné une release depuis le menu déroulant <br>
        pouvoir déposer un document pdf qui respecte le modèle.<br>
        Une partie installation:
        <ul>  
          <li>prérequis nécessaires à l'installation</li>
          <li>le processus d'installation</li>
          <li>Vérification de l'installation</li>
        </ul>  
        Une partie bon fonctionnement:
        <ul>  
          <li>Expliquer les fonctions de l'administrateur</li>
          <li>Les actions à réaliser en cas de panne</li>
        </ul> 
        ce document remplacera l'ancienne documentation administrateur si elle existait, et en créera une autre si non. <br>
        afin de l'associer à une release.
      </td>
      <td>1</td>
      <td>moyenne</td>
    </tr>
    <tr>
      <td>37</td>
      <td>
        US37 : En tant qu'utilisateur<br>
        Je souhaite à partir de l'onglet de la documentation utilisateur<br> 
        après avoir sélectionné une release depuis le menu déroulant <br>
        pouvoir déposer un document pdf qui respecte le modèle.<br>
        Une partie pour expliquer les informations nécessaires pour utliser le logiciel
        et une partie pour donner tous les détails des fonctionnalités avancées du logicel 
        ce document remplacera l'ancienne documentation administrateur si elle existait, et en créera une autre si non. <br>
        afin de l'associer à une release.
      </td>
      <td>1</td>
      <td>moyenne</td>
    </tr>
  </tbody>
</table>
<br/>

Sprints : Regroupent les issues réalisées
======
Ici vous trouverez les différents Sprints : [Sprint1](https://github.com/Demalios/g2-eq1_dev/blob/main/Sprint1.md), [Sprint2](https://github.com/Demalios/g2-eq1_dev/blob/main/Sprint2.md).

Releases : Regroupent les fichiers nécessaires à l'installation et l'exécution du logiciel
=======
Ici vous trouverez les différentes [releases](https://github.com/smelezan/g2-eq1_release).