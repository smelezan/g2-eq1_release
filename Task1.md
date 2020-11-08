<table>
    <tbody>
        <tr>
            <th>ID</th>
            <th>Definition Of Done</th>
            <th>Issues</th>
            <th>Dépendances</th>
            <th>Coût</th>
            <th>Développeur</th>
            <th>Avancement</th>
        </tr>
        <tr>
            <td>1</td>
            <td>
                Initialiser le projet Vue.js nommé "" <br>
                Et installer les dépendances:
                <ul>
                    <li>Axios : pour les appels à l'api</li>
                    <li>Router: pour les routes</li>
                    <li>Bootstrap: pour la vue</li>
                </ul>
            </td>
            <td>Toutes les issues</td>
            <td>Dépendances</td>
            <td>Coût</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
        <tr>
            <td>2</td>
            <td>
                Initialiser le projet nodeJs nommé "issues-back" <br>
                Et installer les dépendances:
                <ul>
                    <li>Express : pour lancer le serveur</li>
                    <li>Nodemon: pour éviter de recharger la page</li>
                </ul>
            </td>
            <td>Toutes les issues</td>
            <td>0</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>3</td>
            <td>
                Ajouter les routes CRUD à issues-back <br>
                <ul>
                    <li><code>GET /issues</code> : Renvoie la liste des issues </li>
                    <li> 
                        <code>POST /issues/:issue</code> : Crée une issue à l'aide des informations suivantes
                        <ul>
                            <li>Titre</li>
                            <li>Description</li>
                            <li>Type ( Feature, documentation) </li>
                        </ul>
                    </li>
                    <li><code>PUT /issues/:issue</code> : Modifie une issue en particulier</li>
                    <li> <code>DELETE /issues/:issue</code> :Supprime une issue</li>
                </ul>
            </td>
            <td>8-20</td>
            <td>2</td>
            <td>1</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>4</td>
            <td>
                Créer la base de donnée mongo qui stockera les issues (Issue-Sprint-db).<br>
                Cette base sera composée d'une collection nommée Issue.<br>
                Chaque issue est composée:
                <ul>
                    <li> D'un id: _id</li>
                    <li> D'un titre: title</li>
                    <li> D'une description: description</li>
                    <li> D'un type: type</li>
                    <li> D'une difficulté: difficulty</li>
                    <li> D'une priorité: priority </li>
                    <li> D'un état d'avancement: state </li>
                </ul>
            </td>
            <td>8-20</td>
            <td>Dépendances</td>
            <td>Coût</td>
            <td>Sébastien</td>
            <td>DONE</td>
        </tr>
        <tr>
            <td>5</td>
            <td>
                Dans la base Issue-Sprint-db, 
                créer une collection nommée Sprint.<br>
                Chaque sprint est composé:
                <ul>
                    <li> D'un id</li>
                    <li> D'une date de début</li>
                    <li> D'une date de fin</li>
                    <li> D'une liste d'Issues</li>
                </ul>
            </td>
            <td>4-6</td>
            <td>Dépendances</td>
            <td>Coût</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
        <tr>
            <td>6</td>
            <td>
                Initialiser le projet nodeJs nommé "tasks-back" à l'aide de la commande <br>
                 node init <br>
                Et installer les dépendances:
                <ul>
                    <li>Express : pour lancer le serveur</li>
                    <li>Nodemon: pour éviter de recharger la page</li>
                </ul>
            </td>
            <td>13-20</td>
            <td>Dépendances</td>
            <td>Coût</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
        <tr>
            <td>7</td>
            <td>
                Ajouter les routes CRUD à tasks-back <br>
                <ul>
                    <li><code>GET /Tasks</code> : Renvoie la liste des Tâches </li>
                    <li> 
                        <code>POST /Tasks/:task</code> : Crée une tâche à l'aide des informations suivantes
                        <ul>
                            <li>Titre</li>
                            <li>Description</li>
                            <li>issues de référence</li>
                            <li>dépendance</li>
                        </ul>
                    </li>
                    <li><code>PUT /Tasks/:task</code> : Modifie une tâche en particulier</li>
                    <li> <code>DELETE /Tasks/:task</code> : Supprime une tâche</li>
                </ul>
            </td>
            <td>13-20</td>
            <td>Dépendances</td>
            <td>Coût</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
        <tr>
            <td>8</td>
            <td>
                Créer la base de donnée mongo qui stockera les tâches (Task-db).<br>
                Cette base sera composée d'une collection nommée Task.<br>
                Chaque Task est composée:
                <ul>
                    <li> D'un id : _id</li>
                    <li> D'une liste d'id qui lie à une issue : IssueIds</li>
                    <li> D'un titre : title</li>
                    <li> D'une description: description</li>
                    <li> D'un coût: cost </li>
                    <li> D'un développeur </li>
                    <li> D'un état d'avancement: state </li>
                    <li> D'une liste de dépendance avec les autres tâches: dependencies </li>
                </ul>
            </td>
            <td>13-20</td>
            <td>Dépendances</td>
            <td>Coût</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
        <tr>
            <td>9</td>
            <td>
            Créer la page des sprints (IndexSprint.vue).<br>
            Sur cette page il y un bouton "Ajouter un sprint"<br>
            Un tableau intitulé 'Non assigné' qui liste les Issues n'appartenant à aucun sprint.
            </td>
            <td>4</td>
            <td>1</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
        <tr>
            <td>10</td>
            <td>
            Sur la page IndexSprint.vue.<br>
            Ajouter l'évènement sur le bouton "Ajouter un sprint"<br>
            Cet évènement crée un popup qui affiche un formulaire.<br>
            Ce formulaire est composé:
            <ul>
                <li>D'un champ date : Date de début</li>
                <li>D'un champ date : Date de fin</li>
            </ul>
            Une fois validé, le front fait un appel au back via la route <code>POST /sprints/:sprint</code>, crée un nouveau sprint dans la base et l'utilisateur est redirigé sur IndexSprint.vue où un nouveau tableau se crée à droite du dernier tableau intitulé Sprint#X avec X le numéro du sprint qui s'incrémente automatiquement.
            </td>
            <td>4</td>
            <td>1</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
        <tr>
            <td>11</td>
            <td>
            Sur la page IndexSprint.vue.<br>
            Ajouter le déplacement d'une issue d'un tableau à un autre avec la fonctionnalité drag and drop<br>
            Ainsi qu'un bouton "Appliquer" en bas à droite de la page ,un bouton "Annuler" aussi en bas à droite, et un bouton "Supprimer" à côté de chaque tableau <br>
            </td>
            <td>5</td>
            <td>1</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
        <tr>
            <td>12</td>
            <td>
            Sur la page IndexSprint.vue.<br>
            Ajouter un évènement au bouton "Appliquer" au clique. <br>
            Cet évènement récupère l'emplacement de chaque issue (dans quel tableau ils apparaissent) et envoie au back par la route: <br>
            <code>POST /sprints/reattribute</code> <br>
            avec le json dans le format suivant:
            Une liste de sprint <br>
            Chaque sprint contient une liste d'issue.
            </td>
            <td>5</td>
            <td>1</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
        <tr>
            <td>13</td>
            <td>
            Sur la page IndexSprint.vue.<br>
            Ajouter un évènement au bouton "Annuler" au clique. <br>
            Cet évènement annule toutes les modifications apportées par les déplacements des issues.<br>
            Pour ce faire le front envoie une requête<br>
            <code>GET /sprints</code> <br>
            Afin de récupérer les précédentes positions.
            </td>
            <td>5</td>
            <td>1</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
        <tr>
            <td>14</td>
            <td>
            Sur la page IndexSprint.vue.<br>
            Ajouter un évènement aux boutons "Supprimer" au clique. <br>
            Cet évènement effectue un appel à notre api par la route: <br>
            <code>DELETE /sprints/:sprint</code> <br>
            qui va supprimer de la base de données le sprint et les issues associées à ce sprint se retrouveront dans le tableau "Non assignées"
            </td>
            <td>6</td>
            <td>1</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
        <tr>
            <td>15</td>
            <td>
            Créer la page IndexIssues.vue<br>
            Sur cette page il y a une liste d'issue<br>
            chaque issue est une carte composée:
            <ul>
                <li>D'un titre</li>
                <li>D'une barre de progression </li>
                <li>D'un icon</li>
            </ul>
            </td>
            <td>7</td>
            <td>1</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
        <tr>
            <td>16</td>
            <td>
            Créer l'évènement onClick sur une Issue<br>
            Cet évènement ouvre une fenêtre à côté dans laquelle 
            Sur cette page il y a une liste d'issue<br>
            chaque issue est une carte composée:
            <ul>
                <li>D'un titre</li>
                <li>D'une barre de progression </li>
                <li>D'un icon</li>
            </ul>
            </td>
            <td>7</td>
            <td>1</td>
            <td>1</td>
            <td>Développeur</td>
            <td>To Do</td>
        </tr>
    </tbody>
</table>