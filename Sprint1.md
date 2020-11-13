<table>
    <tbody>
        <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Difficulté</th>
            <th>Avancement</th>
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
            <td>Done</td>
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
            <td>TO DO</td>
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
            <td>TO DO</td>
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
            <td>Done</td>
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
            <td>Done</td>
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
            <td>Done</td>
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
            <td>Done</td>
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
            <td>Done</td>
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
                Et une liste des UserStory avec chacune une checkbox pour indiquer auxquelles correspond la Tâche et deux boutons, "Confirmer" qui crée la Tâche en générant un identifiant unique et "Annuler" qui me ramène à la page précédente<br>
                afin de créer une Tâches.
            </td>
            <td>2</td>
            <td>TO DO</td>
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
                </ul>
                et sur laquelle serait visible un barre de progression indiquant l'avancement total des Tâches<br>
                afin de voir la progression total des Tâches sur le projet.
            </td>
            <td>2</td>
            <td>TO DO</td>
        </tr>
        <tr>
            <td>15</td>
            <td>
                US15 : En tant qu'utilisateur<br>
                Je souhaite avoir accès à une page par Tâche sur laquelle j'aurais un bouton "Choisir/Modifier le temps de travail" qui me fait apparaitre une valeur incrémentable et décrémentable de 0.5 correspondant au temps de travail en jour<br>
                afin de choisir et modifier le temps de travail d'une Tâche.
            </td>
            <td>1</td>
            <td>TO DO</td>
        </tr>
        <tr>
            <td>16</td>
            <td>
                US16 : En tant qu'utilisateur<br>
                Je souhaite avoir accès à une page par Tâche sur laquelle j'aurais un bouton "Ajouter/Modifier le développeur" qui m'ouvre une fenêtre avec la liste de mes collaborateurs suivi d'une checkbox que je peux cocher pour choisir à qui attribuer la Tâche <br>
                afin de répartir les Tâches à faire entre les différent membre de l'équipe de développement.
            </td>
            <td>2</td>
            <td>TO DO</td>
        </tr>
        <tr>
            <td>20</td>
            <td>
                US20 : En tant qu'utilisateur<br>
                Je souhaite avoir accès à une page par Tâche sur laquelle serais présent un bouton "Supprimer" qui me ferais apparaitre une fenêtre de confirmation, une fois mon envie de supprimer la Tâche confirmé, la Tâche sera supprimée et je serais redirigé sur une page avec l'ensemble des Tâches<br>
                afin de pouvoir enlever les Tâches ajoutée par erreur.
            </td>
            <td>1</td>
            <td>TO DO</td>
            </tr>
    </tbody>
</table>
