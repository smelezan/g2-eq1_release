<table>
    <tbody>
        <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Difficulté</th>
            <th>Avancement</th>
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
            <td>TO DO</td>
        </tr>
        <tr>
            <td>2</td>
            <td>
                US2 : En tant qu'Utilisateur<br>
                Je souhaite à partir de la page d'un projet avoir accès:
                <ul>
                <li>au nom du projet</li>
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
            <td>TO DO</td>
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
            <td>TO DO</td>
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
            <td>DONE</td>
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
            <td>DONE</td>
        </tr>
        <tr>
            <td>28</td>
                <td>
                    US28 : En tant qu'utilisateur<br> 
                    Je souhaite pouvoir modifier un test en cliquant sur sa description depuis la page Dashboard accessible en cliquant sur le bouton "Gestion des tests" puis "dashboard". Ce boutton me redirigera vers une page contenant l'option de modification une suite de test. En sélectionnant "modifier", je pourrai redéposer mon fichier de test modifié
                    Afin de permettre l'évolution des tests.
                </td>
            <td>2</td>
            <td>DONE</td>
        </tr>
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
            <td>DONE</td>
        </tr>
        <tr>
          <td>32</td>
          <td>
            US32 : En tant qu'utilisateur<br>
            Je souhaite avoir une page avec des hyper-liens pour télécharger les releases avec à côté un bouton qui peut rendre visible ou masquer le README.md, la note de release correspondante et la documentation d'installation<br>
            Afin d'avoir un suivis des releases.
          </td>
          <td>1</td>
          <td>DONE</td>
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
          <td>TO DO</td>
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
      <td>TO DO</td>
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
      <td>TO DO</td>
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
      <td>TO DO</td>
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
      <td>TO DO</td>
    </tr>
    </tbody>
</table>

Total: 16
